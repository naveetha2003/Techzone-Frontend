import Navbar from "../components/Navbar";
import bann1 from "../assets/bann1.jpeg";

import homelap1 from "../assets/homelap1.jpeg";
import mouse4 from "../assets/mouse4.jpeg";
import watch1 from "../assets/watch1.jpeg";
import speaker1 from "../assets/speaker1.jpeg";
import homemobile1 from "../assets/homemobile1.jpeg";
import homespeaker1 from "../assets/homespeaker1.jpeg";
import Whychoose from "../pages/Why choose";
import Brands from "../pages/Brands";
import Newsletter from "../pages/Newsletter";


import finalb3 from "../assets/finalb3.jpeg";
import finalb4 from "../assets/finalb4.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Reviews from "../pages/Review";

function Home({wishlist,setWishlist,cart,setCart,search}) {
  const banners = [finalb4, finalb3, bann1];

  const [currentBanner, setCurrentBanner] = useState(0);
  const navigate = useNavigate();

  const handleBuyNow = (product)=>{
    navigate("/checkout",{state:product});
  }

  // Wishlist state (per product)
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: "Dell Laptop ",
      category:"Laptop",
      image: homelap1,
      
      price: "₹55,000",
    },
    {
      id: 2,
      name: "Mouse",
      category:"Mouse",
      image: mouse4,
     
      price: "₹32,999",
    },
    {
      id: 3,
      name: " Watch",
      category:"Watch",
      image: watch1,
      
      price: "₹4,999",
    },
    {
      id: 4,
      name: "Speaker",
      category:"Speaker",
      image: speaker1,
     
      price: "₹9,999",
    },
  ]; 

  const filteredProducts = products.filter(
  (p) =>
    p.name.toLowerCase().includes((search || "").toLowerCase()) ||
   p.category.toLowerCase().includes((search || "").toLowerCase()) 
   
);

if (search) {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Search Results
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />

            <h2 className="text-xl font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {product.specs}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



  

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Categories Bar */} 
      <div className="bg-white shadow-md py-4 sticky top-0 z-10"> <div className="container mx-auto flex flex-wrap justify-center gap-8"> 
        <button className="font-medium hover:text-blue-600 transition">  Laptops </button>
         <button className="font-medium hover:text-blue-600 transition">  Mobiles </button>
          <button className="font-medium hover:text-blue-600 transition">  Watches </button>
           <button className="font-medium hover:text-blue-600 transition"> Mouse </button>
            <button className="font-medium hover:text-blue-600 transition">  Speakers </button>
             <button className="font-medium hover:text-blue-600 transition"> keyboards </button>
              <button className="font-medium hover:text-blue-600 transition">  Accessories </button> </div> </div>

      {/* Banner */}
      <div className="w-full">
        <img
          src={banners[currentBanner]}
          className="w-full h-[400px] object-cover"
          alt="banner"
        />
      </div>

      {/* Hero */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Tech Zone
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover best tech products at best prices
        </p>
      </div>


      

      {/* Products */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

         
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-4 relative"
            >
              {/* Wishlist Button */}
              <button
                onClick={() =>{
                 const exists = wishlist.find(
                  (item) => item.id === product.id
                 );

                  if (exists) {
                 setWishlist(
                 wishlist.filter(
                     (item) => item.id !== product.id
            )
      );
               } else {
       setWishlist([...wishlist, product]);
        }
                }}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
              >
                <FaHeart
                  className={`text-sm ${
                    wishlist.find((item)=>item.id===product.id)
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                />
              </button>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />

              {/* Name */}
              <h2 className="text-xl font-semibold mt-3">
                {product.name}
              </h2>

               {/* category */}
              <p className="text-gray-500 text-sm">
                {product.category}
              </p>

              {/* Specs */}
              <p className="text-gray-500 text-sm">
                {product.specs}
              </p>

              {/* Price */}
              <p className="text-blue-600 font-bold mt-2">
                {product.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button onClick={()=> setCart([...cart,product])} className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>

                <button className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700" onClick={()=> handleBuyNow(product)}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Brands/>
      <Whychoose/>
      <Reviews/>
      <Newsletter/>


      {/* Offer */}
      <div className="container mx-auto px-6 py-10">
        <div className="bg-blue-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-4xl font-bold">Special Offer</h2>
          <p className="mt-3 text-lg">
            Get up to 30% off on selected tech products.
          </p>
        </div>
      </div>

    </div>
    
    
  );
}

export default Home;