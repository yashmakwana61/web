import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';

const privatePrefix = 'privateLeads.';

export function getLeadClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) return null;

  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e0ws8top',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    perspective: 'raw',
    token,
  });
}

export function saveLead(client, fields) {
  // Sanity requires authentication to read documents whose IDs contain a dot.
  return client.create({
    _id: privatePrefix + randomUUID(),
    _type: 'lead',
    ...fields,
    status: 'new',
    submittedAt: new Date().toISOString(),
  });
}

export async function privatizePublishedLeads(client) {
  const query = '*[_type == "lead" && _id in path("*")] | order(_id asc)[0...100]';
  let moved = 0;
  let conflicts = 0;
  for (;;) {
    const leads = await client.fetch(query);
    if (leads.length === 0) return moved;

    const transaction = client.transaction();
    for (const { _id, _rev, _createdAt, _updatedAt, ...fields } of leads) {
      // Guard against concurrent edits and preserve the fields before removing
      // the publicly readable copy. The complete batch commits or rolls back.
      transaction
        .patch(_id, (patch) => patch.ifRevisionId(_rev).setIfMissing({ status: 'new' }))
        .create({ ...fields, _id: privatePrefix + _id })
        .delete(_id);
    }

    try {
      await transaction.commit({ visibility: 'sync', returnDocuments: false });
      moved += leads.length;
      conflicts = 0;
    } catch (error) {
      if (error.statusCode !== 409 || ++conflicts > 3) throw error;
    }
  }
}
