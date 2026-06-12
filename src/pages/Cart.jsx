function Cart({ cart, setCart }) {

  //  REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  //  INCREASE QUANTITY
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  //  DECREASE QUANTITY
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  //  TOTAL PRICE
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border p-4 mb-3 rounded"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />

            {/* DETAILS */}
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => decreaseQty(item._id)}
                className="px-2 bg-gray-300"
              >
                -
              </button>

              <span>{item.quantity || 1}</span>

              <button
                onClick={() => increaseQty(item._id)}
                className="px-2 bg-gray-300"
              >
                +
              </button>

            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white px-3 py-1"
            >
              Remove
            </button>

          </div>
        ))
      )}

      {/* TOTAL */}
      {cart.length > 0 && (
        <h2 className="text-xl font-bold mt-6">
          Total: ₹{total}
        </h2>
      )}

    </div>
  );
}

export default Cart;