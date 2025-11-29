import { Resend } from 'resend';

// HTML escape function to prevent XSS in email content
function escapeHtml(text) {
  if (!text) return '';
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, practitioner, date, time, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !practitioner || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Sanitize user input before inserting into HTML
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safePractitioner = escapeHtml(practitioner);
  const safeDate = escapeHtml(date);
  const safeTime = escapeHtml(time);
  const safeMessage = escapeHtml(message);

  // Format the email content with sanitized inputs
  const emailContent = `
    <h2>New Booking Submission</h2>
    <hr />
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone}</p>
    <p><strong>Practitioner:</strong> ${safePractitioner}</p>
    <p><strong>Date:</strong> ${safeDate}</p>
    <p><strong>Time:</strong> ${safeTime}</p>
    ${safeMessage ? `<p><strong>Additional Notes:</strong> ${safeMessage}</p>` : ''}
    <hr />
    <p><em>This booking was submitted through the Intuitive Spine website.</em></p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RECEIVING_EMAIL,
      subject: 'New Booking Submission',
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send booking email' });
    }

    return res.status(200).json({ message: 'Booking email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send booking email' });
  }
}
