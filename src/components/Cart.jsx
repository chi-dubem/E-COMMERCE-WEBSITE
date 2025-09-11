const Cart = ({ product, setCart }) => {
  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handelRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="px-5 text-2xl font-bold hover:text-red-700 cursor-pointer"
          onClick={() =>
            handelRemove(product.id)
          }
        >
          x
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center shadow-lg p-2 mb-4">
        <div className="flex-shrink-0 w-32 h-32 md:w-24 md:h-24 rounded-lg overflow-hidden mr-4 md:mr-6">
          <img
            className="w-full h-full object-cover"
            src={`src/assets/images/${product.image}`}
          />
        </div>
        <div className="flex-grow text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-500">
            Size: {product.size}, Color: {product.color}
          </p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            ${product.discountedPrice}
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button
            className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            onClick={() => decrease(product.id)}
            type="button"
          >
            -
          </button>
          <span className="text-lg font-medium text-gray-800">
            {product.quantity}
          </span>
          <button
            className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            onClick={() => increase(product.id)}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
