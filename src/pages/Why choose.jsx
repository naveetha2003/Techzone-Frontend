import laphome from "../assets/laphome.jpeg";
import pic1 from "../assets/pic1.jpeg"
import pic2 from "../assets/pic2.jpeg"
import pic3 from "../assets/pic3.jpeg"
import pic4 from "../assets/pic4.jpeg"
function Whychoose()
{
    return(
     <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-14">
  <div className="container mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-3">
      Why Choose Tech Zone?
    </h2>

    <p className="text-center text-purple-100 mb-10">
      We provide the best shopping experience
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Fast Delivery */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
        <img
          src={pic1}
          alt="Fast Delivery"
          className="w-16 h-16 mx-auto mb-3"
        />
        <h3 className="font-bold text-lg">Fast Delivery</h3>
        <p className="text-sm text-gray-600">
          Quick delivery to your doorstep
        </p>
      </div>

      {/* Secure Payment */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
        <img
          src={pic2}
          alt="Secure Payment"
          className="w-16 h-16 mx-auto mb-3"
        />
        <h3 className="font-bold text-lg">Secure Payment</h3>
        <p className="text-sm text-gray-600">
          100% safe transactions
        </p>
      </div>

      {/* Support */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
        <img
          src={pic3}
          alt="24/7 Support"
          className="w-16 h-16 mx-auto mb-3"
        />
        <h3 className="font-bold text-lg">24/7 Support</h3>
        <p className="text-sm text-gray-600">
          We are always here to help
        </p>
      </div>

      {/* Genuine */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
        <img
          src={pic4}
          alt="Genuine Products"
          className="w-16 h-16 mx-auto mb-3"
        />
        <h3 className="font-bold text-lg">Genuine Products</h3>
        <p className="text-sm text-gray-600">
          Only original branded items
        </p>
      </div>

    </div>
  </div>
</div>
    )
}

export default Whychoose