const joi = require('joi');

const schemaTasks = joi.object({
  title: joi.string().required().messages({
    'string.base': 'The field title is of type text',
    'string.empty': 'Title cannot be empty',
    'any.required' : 'The field title is required'
  })
});

module.exports = schemaTasks;