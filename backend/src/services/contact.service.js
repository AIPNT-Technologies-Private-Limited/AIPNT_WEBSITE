
const ContactEnquiry = require('../model/contactEnquiry.model');

const {
  sendContactEmail,
  sendConfirmationEmail
} = require('./email.service');

const createContactEnquiry = async (contactData) => {
  // Save the enquiry first.
  const enquiry = await ContactEnquiry.create(contactData);

  // Send notification email separately.
  try {
    await sendContactEmail(contactData);
  } catch (error) {
    console.error('Notification email sending failed:', error);
  }

  // Send thank-you email to the visitor separately.
  try {
    await sendConfirmationEmail(contactData);
  } catch (error) {
    console.error('Confirmation email sending failed:', error);
  }

  return enquiry;
};

module.exports = { createContactEnquiry };