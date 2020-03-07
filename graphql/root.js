const {getProduct,addProduct} = require('./controllers/products');

module.exports = {
  hello: () => {
    return 'Hello World'
  },
  addProduct: addProduct
}
