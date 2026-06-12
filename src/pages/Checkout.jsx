import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">No product selected</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Products
        </button>
      </div>
    );
  }

  const placeOrder = () => {
    alert(" Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      {/* CARD */}
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
        
        {/* LEFT - PRODUCT */}
        <div className="p-6 bg-blue-50 flex flex-col items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-contain mb-4"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            ₹{product.price}
          </p>
        </div>

        {/* RIGHT - FORM */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Checkout Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded mb-3 focus:outline-blue-500"
          />

          <textarea
            placeholder="Address"
            className="w-full p-3 border rounded mb-3 focus:outline-blue-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded mb-5 focus:outline-blue-500"
          />

          <button
            onClick={placeOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
          >
            Place Order
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full mt-3 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg"
          >
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;