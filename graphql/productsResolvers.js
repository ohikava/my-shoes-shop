const Product = require('../models/product');

module.exports = {
  addProduct: async ({input}) => {
    try {
      const newProduct = new Product({...input});
      await newProduct.save();
      return newProduct;
  }
    catch (error) {
      throw error;
    }
  },
  getProducts: async () => {
    try {
      let products = await Product.find({});
      products = products.map((p) => {
        console.log(p)
        return {
          ...p,
          id: p._id
        }
      });
      console.log(products);
      return products;
    }
      catch (error) {
        throw error;
      }
  }
};
