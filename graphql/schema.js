const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Product {
    sku: String!
    brand: String!
    upperMaterial: String!
    technology: String!
    silhoute: String!
    designer: String!
    nickname:String!
    category: String!
    mainColor: String!
    realiseDate: String!
    sizes: [String]!
    id: ID!
  }

  input ProductInput {
    sku: String!
    brand: String!
    upperMaterial: String!
    technology: String!
    silhoute: String!
    designer: String!
    nickname:String!
    category: String!
    mainColor: String!
    realiseDate: String!
    sizes: [String]!
  }

  type Query {
    hello: String
    getProduct(productId: String): String
    getProducts: [Product]
  }
  type Mutation {
    addProduct(input: ProductInput): Product
  }
  `);
