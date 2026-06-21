import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@sanity/client';
import { Resend } from 'resend';

// Initialize Sanity Client with Write Token
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e0ws8top',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disabling CDN for writing
  token: process.env.SANITY_API_WRITE_TOKEN, // Needed for writing
});

// Define Schema for Validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().min(1, 'Company is required'),
  industry: z.string().min(1, 'Industry is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, company, industry, message } = result.data;

    // Save to Sanity
    try {
      if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.warn("SANITY_API_WRITE_TOKEN is missing. Lead won't be saved to CMS.");
      } else {
        await sanityClient.create({
          _type: 'lead',
          name,
          email,
          phone,
          company,
          industry,
          message,
          status: 'new',
          submittedAt: new Date().toISOString(),
        });
      }
    } catch (sanityError) {
      console.error('Sanity creation failed:', sanityError);
      // We can choose to fail the request or continue and just send the email
      // Let's fail if it's a critical error
      return NextResponse.json({ message: 'Failed to save lead data' }, { status: 500 });
    }

    // Send Email via Resend
    try {
      if (!process.env.RESEND_API_KEY) {
         console.warn("RESEND_API_KEY is missing. Email notification won't be sent.");
      } else {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
          from: 'PreciseFect Leads <onboarding@resend.dev>', // Resend free tier restriction
          to: [process.env.RESEND_TO_EMAIL || 'info@precisefect.com'], // Must be the verified email on Resend account
          subject: `New Lead from ${name} at ${company}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });

        if (error) {
           console.error('Resend API Error:', error);
        } else {
           console.log('Email sent successfully:', data);
        }
      }
    } catch (emailError) {
      console.error('Email sending exception:', emailError);
    }

    return NextResponse.json({ message: 'Lead captured successfully' }, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
