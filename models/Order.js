const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  cart: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String }
    }
  ],
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
