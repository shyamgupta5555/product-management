const { productSchema } = require('../services/helper');

describe('Product Validation', () => {
  test('Should pass validation  valid for product data', () => {
    const validProduct = {
      productName: 'Valid Product',
      price: 100.00,
      quantity: 5,
      status: 'active'
    };

    const { error } = productSchema.validate(validProduct);
    expect(error).toBeUndefined();
  });

  test('should fail validation when productName is too short', () => {
    const invalidProduct = {
      productName: 'Prod',
      price: 100.00,
      quantity: 5,
      status: 'active'
    };

    const { error } = productSchema.validate(invalidProduct);
    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toContain('Product name should be at least 5 characters long');
  });

  test('should fail validation when price is negative', () => {
    const invalidProduct = {
      productName: 'Test Product',
      price: -100.00,
      quantity: 5,
      status: 'active'
    };

    const { error } = productSchema.validate(invalidProduct);
    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toContain('Price must be a positive value');
  });

  test('should fail validation when quantity is not number', () => {
    const invalidProduct = {
      productName: 'Test Product',
      price: 100.00,
      quantity: 'invalid',
      status: 'active'
    };

    const { error } = productSchema.validate(invalidProduct);
    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toContain('Quantity must be a valid number');
  });

  test('should fail validation when status is not active or deactive', () => {
    const invalidProduct = {
      productName: 'Test Product',
      price: 100.00,
      quantity: 5,
      status: 'invalid'
    };

    const { error } = productSchema.validate(invalidProduct);
    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toContain('Status must be either active or deactive');
  });

  test('should fail validation when required fields are missing', () => {
    const invalidProduct = {};

    const { error } = productSchema.validate(invalidProduct);
    expect(error).not.toBeUndefined();
  });
});
