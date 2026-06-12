import laphome from "../assets/laphome.jpeg";
import boatlogo from "../assets/boatlogo.jpeg";
import delllogo from "../assets/delllogo.jpeg";
import hplogo from "../assets/hplogo.jpeg";
import lenovologo from "../assets/lenovologo.jpeg";
import samsunglogo from "../assets/samsunglogo.jpeg"
import applelogo from "../assets/applelogo.jpeg";
function Brands()
{
    return(

       <div className="bg-gradient-to-r from-gray-100to-purple-50 py-14">
  <div className="container mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-3 text-gray-800">
      Our Brand Partners
    </h2>

    <p className="text-center text-gray-500 mb-10">
      Trusted global technology brands
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={boatlogo} className="h-14 object-contain" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={hplogo} className="h-14 object-contain" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={samsunglogo} className="h-14 object-contain" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={delllogo} className="h-14 object-contain" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={lenovologo} className="h-14 object-contain" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex items-center justify-center">
        <img src={applelogo} className="h-14 object-contain" />
      </div>

    </div>
  </div>
</div>

    )
}

export default Brands