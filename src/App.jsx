import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";

function App() {
  const [user, setUser] = useState(null);
  const[search,setSearch]=useState("");

  //  USER CHECK (simple fix)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ email: "User" }); // simple dummy user
    }
  }, []);

  //  WISHLIST
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  //  CART
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  //  SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //  SAVE WISHLIST
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
  
   <BrowserRouter>
      <Navbar cart={cart} wishlist={wishlist} user={user} setUser={setUser} search={search} setSearch={setSearch}/>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist} search={search}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist} search={search}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>

        <Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  }
/>
       

      </Routes>
      
      

      <Footer />
      </BrowserRouter>
     
  );
}

export default App;