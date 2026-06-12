function Newsletter()
{
    return(
<div className="bg-gray-50 py-20 mt-16">
  <div className="container mx-auto px-6">

    {/* Center Card */}
    <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Stay Updated with Tech Zone
      </h2>

      <p className="text-gray-500 mb-8">
        Get latest offers, discounts and new product updates directly in your inbox
      </p>

      {/* Input */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full md:w-2/3 px-5 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-500"
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Subscribe
        </button>

      </div>

      <p className="text-xs text-gray-400 mt-5">
        We never send spam. Only useful tech updates.
      </p>

    </div>

  </div>
</div>

    )
}

export default Newsletter