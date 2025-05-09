import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, type } = body;

    let subject, content;

    if (type === 'waitlist') {
      subject = 'Welcome to the Largence Waitlist!';
      content = `
        <h1>Thank you for joining our waitlist!</h1>
        <p>We're excited to have you on board. You're now on the waitlist for Largence - where we're making legal documents simple for creatives and freelancers.</p>
        <p>We'll keep you updated on our progress and let you know as soon as we launch.</p>
        <p>In the meantime, if you have any questions, feel free to reach out to us at hello@largence.com</p>
        <br/>
        <p>Best regards,</p>
        <p>The Largence Team</p>
      `;
    } else if (type === 'contact') {
      subject = 'Thanks for Contacting Largence';
      content = `
        <h1>Thank you for reaching out!</h1>
        <p>We've received your message and will get back to you as soon as possible, usually within 24-48 hours.</p>
        <p>If you have any immediate questions, you can reply directly to this email.</p>
        <br/>
        <p>Best regards,</p>
        <p>The Largence Team</p>
      `;
    }

    const data = await resend.emails.send({
      from: 'Largence <hello@largence.com>',
      to: [email],
      subject: subject,
      html: content,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message });
  }
} 