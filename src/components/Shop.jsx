import React, { useState } from 'react';
import BG4 from '../assets/BG4.jpg'; // Adjust the path if needed

const products = [
  { id: 1, name: 'Pesticide Activated Neem Oil', price: 350, category: 'Pesticides' },
  { id: 2, name: 'AryaMono Pesticides', price: 690, category: 'Pesticides' },
  { id: 3, name: 'Magic Pesticides', price: 350, category: 'Pesticides' },
  { id: 4, name: 'DAP Fertilizer', price: 1250, category: 'Fertilizers' },
  { id: 5, name: 'Urea Fertilizer', price: 400, category: 'Fertilizers' },
  { id: 6, name: 'Suvarnabhumi Fertilizer', price: 300, category: 'Fertilizers' },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    contact: '',
  });

  // Function to handle adding to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to handle removing from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  // Function to handle user details input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Function to handle form submission (with backend integration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name: userDetails.name,
      address: userDetails.address,
      contact: userDetails.contact,
      cart,
      total: cart.reduce((total, item) => total + item.price, 0),
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully');
        // Clear cart and user details after successful order
        setCart([]);
        setUserDetails({ name: '', address: '', contact: '' });
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error placing order');
    }
  };

  return (
    <div
      className="shop-page min-h-screen p-5"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(0,0,0,0.5)), url(${BG4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold text-center text-white mb-6">Welcome to Our Shop</h1>

      {/* Product Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 border rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">{product.category}</p>
            <p className="text-green-600 text-xl font-bold mb-4">Rs. {product.price}</p>
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-lg transition hover:shadow-xl hover:bg-gradient-to-l"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section mt-10 bg-white p-6 border rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">{item.name}</span>
                  <span className="font-bold text-green-600">Rs. {item.price}</span>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-full shadow transition hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-right mt-4 text-xl font-semibold">
              Total: Rs. {cart.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty</p>
        )}
      </div>

      {/* User Details Form */}
      <div className="user-details mt-10 bg-white p-6 border rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Contact</label>
            <input
              type="text"
              name="contact"
              value={userDetails.contact}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg transition hover:shadow-xl hover:bg-gradient-to-l"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shop;
