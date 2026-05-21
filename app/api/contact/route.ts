import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  seo: 'Search Engine Optimisation',
  'google-ads': 'Google Ads (PPC)',
  'social-media': 'Social Media Marketing',
  'web-design': 'Web Design & Development',
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
  analytics: 'Analytics & Reporting',
  'app-marketing': 'App Marketing',
  other: 'Other / Not Sure',
};

const BUDGET_LABELS: Record<string, string> = {
  'under-2k': 'Under $2,000',
  '2k-5k': '$2,000 - $5,000',
  '5k-10k': '$5,000 - $10,000',
  '10k-25k': '$10,000 - $25,000',
  '25k-plus': '$25,000+',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, budget, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin.from('contact_submissions').insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      service: service || null,
      budget: budget || null,
      message: message || null,
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return NextResponse.json({ error: 'Failed to save submission.' }, { status: 500 });
    }

    const serviceLabel = SERVICE_LABELS[service] || service || 'Not specified';
    const budgetLabel = BUDGET_LABELS[budget] || budget || 'Not specified';
    const adminEmail = process.env.ADMIN_GMAIL?.trim() || 'oneclicksoultions@gmail.com';

    // Email to admin
    await resend.emails.send({
      from: 'OneClick Solutions <noreply@oneclicksoultions.com.au>',
      to: adminEmail,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#4285F4;margin-top:0;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#4285F4;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:8px 0;font-size:14px;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:8px 0;font-size:14px;">${serviceLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Budget</td><td style="padding:8px 0;font-size:14px;">${budgetLabel}</td></tr>
          </table>
          ${message ? `<div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;"><p style="margin:0 0 6px;color:#6b7280;font-size:14px;">Message</p><p style="margin:0;font-size:14px;line-height:1.6;">${message}</p></div>` : ''}
          <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Submitted via oneclicksoultions.com.au</p>
        </div>
      `,
    });

    // Confirmation email to user
    await resend.emails.send({
      from: 'OneClick Solutions <noreply@oneclicksoultions.com.au>',
      to: email,
      subject: 'We received your enquiry — OneClick Solutions',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#4285F4;margin-top:0;">Thanks, ${firstName}!</h2>
          <p style="color:#374151;line-height:1.6;">We've received your enquiry and will get back to you within <strong>24 hours</strong>.</p>
          <p style="color:#374151;line-height:1.6;">Here's a summary of what you submitted:</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#6b7280;width:140px;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;">${serviceLabel}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Budget</td><td style="padding:6px 0;font-size:14px;">${budgetLabel}</td></tr>
          </table>
          <p style="color:#374151;line-height:1.6;margin-top:16px;">In the meantime, feel free to reply to this email if you have any questions.</p>
          <p style="color:#374151;line-height:1.6;">— The OneClick Solutions Team</p>
          <p style="margin-top:20px;font-size:12px;color:#9ca3af;"><a href="https://oneclicksoultions.com.au" style="color:#9ca3af;">oneclicksoultions.com.au</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
