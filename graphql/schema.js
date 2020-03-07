const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Product {
    sku: String!
    brand: String!
    upperMaterial: String!
    techonogy: String!
    silhoute: String!
    designer: String!
    nickname:String!
    category: String!
    mainColor: String!
    realiseDate: Int!
    sizes: [String]!
    id: ID!
  }

  input ProductInput {
    sku: String!
    brand: String!
    upperMaterial: String!
    techonogy: String!
    silhoute: String!
    designer: String!
    nickname:String!
    category: String!
    mainColor: String!
    realiseDate: Int!
    sizes: [String]!
  }

  type Query {
    hello: String
    getProduct(productId: String): String
  }
  type Mutation {
    addProduct(input: ProductInput): Product
  }
  `);
