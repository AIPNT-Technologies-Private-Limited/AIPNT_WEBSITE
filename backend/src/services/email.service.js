const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (contactData) => {
  const { name, email, phone, company, interest, message } = contactData;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: ['servers.aipnt@gmail.com'],
    replyTo: email,
    subject: 'New Contact Enquiry - AIPNT Website',
    html: `
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Area of Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const sendConfirmationEmail = async (contactData) => {
  const { name, email } = contactData;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [email],
    subject: 'Thank You for Contacting AIPNT',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; color: #333;">
        <h2 style="color: #682cd1;">Thank You, ${name}!</h2>
        <p>Thank you for reaching out to AIPNT Technologies.</p>
        <p>We have successfully received your enquiry. Our team will review your message and get back to you as soon as possible.</p>
        <p>Best regards,<br /><strong>Team AIPNT</strong></p>
        <hr />
        <p style="font-size: 12px; color: #777;">AIPNT Technologies Pvt Ltd</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail,
};