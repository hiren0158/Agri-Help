const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST route to handle new orders
router.post('/place-order', async (req, res) => {
  try {
    const { name, address, contact, cart, total } = req.body;

    const newOrder = new Order({
      name,
      address,
      contact,
      cart,
      total,
    });

    await newOrder.save();  // Save order to MongoDB

    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error placing order' });
  }
});

module.exports = router;
