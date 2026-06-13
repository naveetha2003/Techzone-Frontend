import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";

function Product({ wishlist, setWishlist, cart, setCart,search }) {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleBuyNow = (product)=>{
    navigate("/checkout",{state:product});
  }

  const API=import.meta.env.VITE_API_URL;
  

  //  FETCH PRODUCTS
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
  }, []);

  const searchResults = products.filter((p) =>
  p.name.toLowerCase().includes((search || "").toLowerCase())||
   p.category.toLowerCase().includes((search || "").toLowerCase())
);

  //  TOGGLE WISHLIST (SAFE FIX)
  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item._id === product._id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  //  ADD TO CART (SAFE FIX)
  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //  CATEGORY RENDER
     const renderCategory = (category, title) => {
  const filteredProducts = products.filter(
    (p) => p.category === category
  );



    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow-lg p-4 relative"
            >

              {/*  WISHLIST */}
              <button
                onClick={() => toggleWishlist(p)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
              >
                <span className="text-lg">
                  {wishlist.find((item) => item._id === p._id)
                    ? "❤️"
                    : "🤍"}
                </span>
              </button>

              {/* IMAGE */}
              <img
                src={p.image ||"images/laptops/laptop1.jpeg"}
                alt={p.name}
                className="w-full h-48 object-contain"
              />

              {/* DETAILS */}
              <h2 className="text-xl font-bold mt-3">
                {p.name}
              </h2>

              <p className="text-gray-500 text-sm">
                {p.category}
              </p>

              <p className="text-blue-600 font-bold mt-2 text-lg">
                ₹{p.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => addToCart(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Add Cart
                </button>

                <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={()=> handleBuyNow(p)}>
                  Buy Now
                </button>

              </div>

            </div>
          ))}

        </div>
       
      </div>
      
      
      
    );
  };


  if (search) {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Search Results
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchResults.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-contain"
            />

            <h2 className="text-xl font-bold mt-3">
              {p.name}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ₹{p.price}
            </p>
          </div>
        ))}
      </div>
    </div>
   
  );
}


  return (
    <div className="container mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="bg-blue-600 text-white text-center py-10 rounded-xl mb-8">
        <h1 className="text-4xl font-bold">Tech Zone Products</h1>
        <p className="mt-2">Best Deals on Electronics</p>
      </div>

      {/* CATEGORIES */}
      {renderCategory("mobile", "MOBILE")}
      {renderCategory("laptop", "LAPTOP")}
      {renderCategory("monitor", "MONITOR")}
      {renderCategory("keyboard", "KEYBOARD")}
      {renderCategory("mouse", "MOUSE")}
      {renderCategory("watch", "WATCH")}
      {renderCategory("speakers", "SPEAKERS")}

      <Newsletter/>

    </div>
  );
}

export default Product; 