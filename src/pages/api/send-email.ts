// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const formData: FormData = req.body;

  // Validate required fields
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.services.length) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVING_EMAIL || 'contact@wealthguard.biz',
    subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Services Interested In:</strong></p>
      <ul>
        ${formData.services.map(service => `<li>${service}</li>`).join('')}
      </ul>
      <p><strong>Message:</strong></p>
      <p>${formData.message || 'No message provided'}</p>
      <hr>
      <p>This message was sent from the contact form on your website.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}