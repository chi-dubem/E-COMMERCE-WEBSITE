import Logo from "./Logo";
import Cart from "./cart";

const Cart_section = ({displayCart, setDisplayCart}) => {
  return (
    <div
      className={`${
        displayCart == true ? "" : "hidden"
      } absolute w-full top-0 left-0 h-full bg-[rgba(0,0,0,0.55)] z-[4]`}
      onClick={() => setDisplayCart((prev) => !prev)}
    >
      <div className="w-full lg:w-[80%] bg-white z-[5] mx-auto p-5 mt-30">
        <div className="flex items-center">
          <Logo />
          <span className="mx-auto text-lg font-bold">(0) Cart Items</span>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
          <div className="w-[30%] shadow-lg p-2 h-fit">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Order Summary
              </h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">$209.49</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span className="font-medium text-gray-900">$10.47</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-indigo-600">$224.96</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-indigo-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart_section