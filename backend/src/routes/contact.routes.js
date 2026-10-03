const express = require('express');

const contactValidator = require('../validators/contact.validator');
const validateRequest = require('../middleware/validation.middleware');
const contactController = require('../controller/contact.controller');
const contactRateLimiter = require('../middleware/rateLimit.middleware');

const router = express.Router();

router.post(
  '/contact',
  contactRateLimiter,
  contactValidator,
  validateRequest,
  contactController.createContact
);
module.exports = router;