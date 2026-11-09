export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs' || process.env.NEXT_PHASE === 'phase-production-build') return;

  const { getLeadClient, privatizePublishedLeads } = await import('./lib/sanity/leads');
  const client = getLeadClient();
  if (!client) return;

  try {
    const count = await privatizePublishedLeads(client);
    if (count > 0) console.info('Moved public contact records to authenticated-only storage:', count);
  } catch (error) {
    // The migration can retry on restart. Never log record content or tokens.
    console.error('Could not complete contact record privacy migration:', error.statusCode || error.name);
  }
}
