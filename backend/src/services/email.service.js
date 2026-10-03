
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Send enquiry notification to AIPNT's configured recipient
const sendContactEmail = async (contactData) => {
  console.log('sendContactEmail function called');

  const { name, email, phone, company, interest, message } = contactData;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: ['info@aipnt.in'],
      replyTo: email,
      subject: 'New Contact Enquiry - AIPNT Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; color: #333;">
          <h2>New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Area of Interest:</strong> ${interest}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Notification email failed:', error);
      throw new Error(error.message);
    }

  } catch (error) {
    console.error('Notification email error:', error.message);
    throw error;
  }
};

// Send thank-you email to the visitor
const sendConfirmationEmail = async (contactData) => {
  console.log('sendConfirmationEmail function called');

  const { name, email } = contactData;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [email],
      subject: 'Thank You for Contacting AIPNT',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; padding: 24px; color: #333; text-align:left;">
          <h2 style="color: #682cd1;">Thank You, ${name}!</h2>

          <p>Thank you for reaching out to AIPNT Technologies.</p>

          <p>
            We have successfully received your enquiry.
            Our team will review your message and get back to you as soon as possible.
          </p>

          <p>
            Best regards,<br />
            <strong>Team AIPNT</strong>
          </p>

          <hr />

          <p style="font-size: 12px; color: #777;">
            AIPNT Technologies Pvt Ltd
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Confirmation email failed:', error);
      throw new Error(error.message);
    }

    console.log('Confirmation email accepted by Resend:', data);
    return data;
  } catch (error) {
    console.error('Confirmation email error:', error.message);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail,
};