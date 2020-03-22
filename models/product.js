const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: String,
  brand: String,
  upperMaterial: String,
  technology: String,
  silhoute: String,
  designer: String,
  image: String,
  price: Number,
  nickname:String,
  category: String,
  mainColor: String,
  realiseDate: String,
  sizes: [String],
  id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Product', productSchema);
