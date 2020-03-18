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
  deleteProduct: async ({id}) => {
    try {
      let product = await Product.findOneAndDelete({_id: id});
      product.id = product._id;
      return product;
  } catch (error) {
      throw error;
    }
  },
  updateProduct: async ({input,id}) => {
    try {
      let product = await Product.findOneAndUpdate({_id: id}, {...input});
      product.id = product._id;
      return product;

  } catch (error) {
      throw error;
    }
  },
  getProducts: async () => {
    try {
      let products = await Product.find({});
      products = products.map((p) => {
        p.id = p._id;
        return p;
      });
      return products;
    }
    catch (error) {
      throw error;
    }
  },
  getProduct: async ({id}) => {
    try {
      let product = await Product.findOne({_id: id});
      if (product) product.id = product._id;
      return product;
  } catch (error) {
      throw error;
    }
  }
};
