const { body } = require('express-validator');

const contactValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ max: 100 })
    .withMessage('Name must not exceed 100 characters.'),

  body('email')
    .trim()
    .notEmpty()
    .toLowerCase()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required.')
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number must be between 10 and 15 characters.'),

  body('company')
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage('Company name must not exceed 150 characters.'),

  body('areaOfInterest')
  .trim()
  .notEmpty()
  .withMessage('Area of Interest is required.')
  .bail()
  .isIn([
    'enterprise_ai',
    'govtech',
    'medtech',
    'edutech',
    'corporate',
    'other',
  ])
  .withMessage('Please select a valid Area of Interest.'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ max: 5000 })
    .withMessage('Message must not exceed 5000 characters.'),
];

module.exports = contactValidator;