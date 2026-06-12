function Footer(){
    return(
        <footer className="bg-gray-900 text-white mt-12">
  <div className="container mx-auto px-6 py-10">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Brand */}
      <div>
        <h2 className="text-2xl font-bold text-blue-400">
          Tech Zone
        </h2>
        <p className="mt-3 text-gray-400">
          Your one-stop destination for laptops, mobiles,
          smart watches and premium tech gadgets.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Quick Links
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Categories
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>Laptops</li>
          <li>Mobiles</li>
          <li>Smart Watches</li>
          <li>Audio Devices</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Contact Us
        </h3>

        <p className="text-gray-400">
          📧 support@techzone.com
        </p>

        <p className="text-gray-400 mt-2">
          📞 +91 98765 43210
        </p>

        <p className="text-gray-400 mt-2">
          📍 Madurai, Tamil Nadu
        </p>
      </div>

    </div>

    {/* Bottom Footer */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
      © 2026 Tech Zone. All Rights Reserved.
    </div>

  </div>
</footer>

    )
}
export default Footer