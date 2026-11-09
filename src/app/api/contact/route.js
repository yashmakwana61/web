import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { getLeadClient, saveLead } from '@/lib/sanity/leads';

const maxBodyBytes = 32 * 1024;
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email address').max(254),
  phone: z.string().min(1, 'Phone number is required').max(50),
  company: z.string().min(1, 'Company is required').max(200),
  industry: z.string().min(1, 'Industry is required').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

async function readContactBody(request) {
  const reader = request.body?.getReader();
  if (!reader) return { status: 400, message: 'Expected a JSON request body' };

  const decoder = new TextDecoder();
  let bytes = 0;
  let text = '';
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) return { body: JSON.parse(text + decoder.decode()) };
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return { status: 413, message: 'Request body is too large' };
      }
      text += decoder.decode(value, { stream: true });
    }
  } catch {
    return { status: 400, message: 'Invalid JSON request body' };
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request) {
  const contentType = request.headers.get('content-type')?.split(';')[0].trim().toLowerCase();
  if (contentType !== 'application/json') {
    return NextResponse.json({ message: 'Expected application/json' }, { status: 415 });
  }

  const { body, status, message } = await readContactBody(request);
  if (status) return NextResponse.json({ message }, { status });

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { message: 'Validation failed', errors: z.flattenError(result.error).fieldErrors },
      { status: 400 },
    );
  }

  const client = getLeadClient();
  if (client) {
    try {
      await saveLead(client, result.data);
    } catch (error) {
      console.error('Sanity lead creation failed:', error.statusCode || error.name);
      return NextResponse.json({ message: 'Failed to save lead data' }, { status: 500 });
    }
  }

  if (process.env.RESEND_API_KEY) {
    const { name, email, phone, company, industry, message } = result.data;
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: 'PreciseFect Leads <onboarding@resend.dev>',
        to: [process.env.RESEND_TO_EMAIL || 'info@precisefect.com'],
        subject: 'New PreciseFect contact form submission',
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Company: ${company}`,
          `Industry: ${industry}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      });
      if (error) console.error('Contact email failed:', error.name);
    } catch (error) {
      console.error('Contact email exception:', error.name);
    }
  }

  return NextResponse.json({ message: 'Lead captured successfully' }, { status: 201 });
}
