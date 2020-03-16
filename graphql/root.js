const productsResolvers = require('./productsResolvers');

module.exports = {
  hello: () => {
    return 'Hello World'
  },
  ...productsResolvers
}
