require('dotenv').config({ path: './.env' });

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: ['servers.aipnt@gmail.com'],
    subject: 'AIPNT Resend Test',
    html: '<h2>Resend is working!</h2><p>This is a test email from AIPNT.</p>',
  });

  if (error) {
    console.error('Email failed:', error);
    return;
  }

  console.log('Email sent successfully:', data);
}

testEmail();