const Joi = require("joi");

exports.productSchema = Joi.object({
  productName: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .min(5)
    .max(250)
    .required()
    .messages({
      "string.pattern.base":
        "Product name should only contain alphabet characters.",
      "string.min": "Product name should be at least 5 characters long",
    }),

  description: Joi.string().min(0).max(250).messages({
    "string.pattern.base": "description  should only contain characters.",
    "string.max":
      "description  must be less than or equal to 250 characters long.",
  }),
  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive value",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a valid number",
    "number.min": "Quantity must be at least 1",
  }),
  status: Joi.string().valid("active", "deactive").required().messages({
    "any.only": "Status must be either active or deactive",
  }),
});
exports.updateProductSchema = Joi.object({
  productName: Joi.string().min(0).max(250).messages({
    "string.min": "Product name must be at least 5 characters long.",
    "string.max":
      "Product name must be less than or equal to 250 characters long.",
  }),

  description: Joi.string().min(0).max(250).messages({
    "string.pattern.base": "description  should only contain characters.",
    "string.max":
      "description  must be less than or equal to 250 characters long.",
  }),

  price: Joi.number().positive().messages({
    "number.base": "Price must be a valid number.",
    "number.positive": "Price must be a positive value.",
    "any.required": "Price is required.",
  }),

  quantity: Joi.number().integer().messages({
    "number.base": "Quantity must be a valid number.",
    "number.integer": "Quantity must be an integer.",
    "number.min": "Quantity must be at least 1.",
  }),

  status: Joi.string().valid("active", "deactive").messages({
    "any.only": "Status must be either 'active' or 'deactive'.",
  }),
});
