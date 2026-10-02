const ContactEnquiry = require('../model/contactEnquiry.model');

const createContactEnquiry = async (contactData) => {
  const enquiry = await ContactEnquiry.create(contactData);

  return enquiry;
};

module.exports = {
  createContactEnquiry,
};