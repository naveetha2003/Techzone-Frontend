function Wishlist({ wishlist, setWishlist }) {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        My Wishlist 
      </h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id || item._id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain"
              />

              <h2 className="font-bold mt-2">
                {item.name}
              </h2>

              <p>{item.price}</p>

              <button
                onClick={() =>
                  setWishlist(
                    wishlist.filter(
                      (p) =>
                        (p.id || p._id) !==
                        (item.id || item._id)
                    )
                  )
                }
                className="bg-red-500 text-white px-3 py-1 rounded mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;