const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: String,
  brand: String,
  upperMaterial: String,
  techonogy: String,
  silhoute: String,
  designer: String,
  nickname:String,
  category: String,
  mainColor: String,
  realiseDate: Number,
  sizes: [String],
  id: mongoose.Types.ObjectId
});

module.exports = mongoose.model('Product', productSchema);
