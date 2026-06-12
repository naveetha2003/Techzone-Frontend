import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import auth from '../config/firebase'
import { signOut } from 'firebase/auth'

function Navbar({ cart, wishlist,search,setSearch }) {
  

  const navigate = useNavigate()
    const [log,setLog]=useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          setLog(true)
          console.log("User Logged In")
        }
        else{
          setLog(false)
          console.log("User Logged Out")
        }
      })

    },[])

    function logout()
    {
      signOut(auth)
    }


  return (
    <nav className="bg-black text-white px-10 py-4 shadow-lg">
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">

          <div className="text-3xl font-extrabold">
            <span className="text-blue-500">Tech</span>
            <span className="text-white">Zone</span>
          </div>

          <Link to="/" className="hover:text-blue-500 transition ">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-500 transition ">
            Products
          </Link>

          <Link to="/contact" className="hover:text-blue-500 transition ">
            Contact
          </Link>

        </div>

        {/* CENTER SEARCH BAR */}
        <div>
          <input
            type="text"
            placeholder="Search laptops, mobiles, watches..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[480px] px-16 py-2 text-white border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <Link
            to="/wishlist"
            className="hover:text-pink-400 transition "
          >
            ❤️ Wishlist ({wishlist.length})
          </Link>

          <Link
            to="/cart"
            className="hover:text-blue-500 transition "
          >
            🛒 Cart ({cart.length})
          </Link>

           {
              log?<button className='button-style hidden md:block px-3 py-2.5
border-none rounded-md bg-gradient-to-r from-[#FAA116] to-[#df7320] text-white text-base font-bold text-center no-underline
shadow-md transition-all duration-300 hover:from-[#ff5f3e] hover:to-[#fb8c4f] hover:shadow-lg ' onClick={logout}>Logout</button>: <button className='button-style hidden md:block' onClick={()=>navigate("/login")} className='button-style hidden md:block px-3 py-2.5
border-none rounded-md bg-gradient-to-r from-[#FAA116] to-[#df7320] text-white text-base font-bold text-center no-underline
shadow-md transition-all duration-300 hover:from-[#ff5f3e] hover:to-[#fb8c4f] hover:shadow-lg '>Login</button>
            }

        </div>

      </div>
    </nav>
  );
}

export default Navbar;