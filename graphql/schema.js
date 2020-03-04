const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    hello: String
    getProduct(productId: String): String
  }`);
