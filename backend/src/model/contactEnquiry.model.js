const mongoose = require('mongoose');

const contactEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
    },

    interest: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
    ipAddress: {
  type: String,
  default: null,
},

userAgent: {
  type: String,
  default: null,
},
  },
  {
    timestamps: true,
  }
);

const ContactEnquiry = mongoose.model(
  'ContactEnquiry',
  contactEnquirySchema
);

module.exports = ContactEnquiry;