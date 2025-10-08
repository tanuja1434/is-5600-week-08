// tests/db.mock.js

/**
 * Mock data to be returned by our mock database queries.
 */
const mockProducts = [
    { description: 'Product 1' },
    { description: 'Product 2' }
];

/**
 * Mock Mongoose Query object.
 */
const mockQuery = {
    sort: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    exec: jest.fn().mockResolvedValue(mockProducts),
    then: function(resolve) { resolve(mockProducts) }
};

/**
 * Mock Mongoose Model object.
 */
const mockModel = {
    find: jest.fn().mockReturnValue(mockQuery)
};

/**
 * Mock DB object.
 */
const mockDb = {
    model: jest.fn().mockReturnValue(mockModel)
};

module.exports = {
    mockDb,
    mockProducts,
    mockModel,
    mockQuery
};