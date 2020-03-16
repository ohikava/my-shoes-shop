const Product = require('../models/product');

module.exports = {
  addProduct: async ({input}) => {
    try {
      /*const newProduct = new Product({...input});
      await newProduct.save();
      return newProduct;*/
      console.log(input);
  }
    catch (error) {
      throw error;
    }
  }
};
