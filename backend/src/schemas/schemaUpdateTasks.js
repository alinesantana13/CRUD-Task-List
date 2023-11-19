const joi = require('joi');

const schemaUpdateTasks = joi.object({
  title: joi.string().required().messages({
    'string.base': 'The field title is of type text',
    'string.empty': 'Title cannot be empty',
    'any.required' : 'The field title is required'
  }),
  status: joi.string().required().messages({
    'string.base': 'The field status is of type text',
    'string.empty': 'Status cannot be empty',
    'any.required' : 'The field status is required'
  })
});

module.exports = schemaUpdateTasks;