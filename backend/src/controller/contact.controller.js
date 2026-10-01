const contactService = require('../services/contact.service');

const createContact = async (req, res) => {
  try {
    const enquiry = await contactService.createContactEnquiry(req.body);

    return res.status(201).json({
      success: true,
      message: 'Contact enquiry submitted successfully.',
      data: {
        id: enquiry._id,
      },
    });
  } catch (error) {
    console.error('Contact enquiry creation failed:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to submit contact enquiry.',
    });
  }
};

module.exports = {
  createContact,
};