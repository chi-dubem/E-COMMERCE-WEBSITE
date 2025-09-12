import Button from "./Button";
import User_Jsx from "../assets/Jsxs/User_Jsx";
import Electronics_jsx from "../assets/Jsxs/Electronics_jsx";
import Home1 from "../assets/Jsxs/Home1";
import Card from "./Card";
import Data from "../utlils/data.js";

const Body = ({cart, setCart}) => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-full mx-auto bg-[#F7F7F7] lg:w-[50%] lg:min-w-[755px] py-4 ">
        {/* hero section */}
        <div className="w-full relative lg:rounded-2xl overflow-hidden">
          <img
            src="hero section.png"
            className="w-[100%] h-[400px]"
          />
          <div className="absolute top-20 left-20 text-white font-bold w-[250px]">
            <p className="text-6xl whitespace-normal">Big sale 50% Off</p>
            <Button text="Shop Now" />
          </div>
        </div>
        {/* Category section */}
        <div className="flex justify-evenly items-center my-4">
          <div className="flex justify-center items-center flex-col text-[#3DD7E0] bg-white shadow-lg w-[80px] h-[80px]">
            <User_Jsx />
            <span className="text-black">Man</span>
          </div>
          <div className="flex justify-center items-center flex-col text-[#3DD7E0] bg-white shadow-lg w-[80px] h-[80px]">
            <User_Jsx />
            <span className="text-black">Woman</span>
          </div>
          <div className="flex justify-center items-center flex-col text-[#3DD7E0] bg-white shadow-lg w-[80px] h-[80px]">
            <Electronics_jsx />
            <span className="text-black">Electonic</span>
          </div>
          <div className="flex justify-center items-center flex-col text-[#3DD7E0] bg-white shadow-lg w-[80px] h-[80px]">
            <Home1 />
            <span className="text-black">Home</span>
          </div>
        </div>
        <div className="px-4">
          <span className="text-2xl font-bold">Featured Products</span>
          {/* card */}
          <div className="grid my-10 grid-flow-row grid-cols-2 gap-8 md:grid-cols-3">
            {Data.map((product) => (
              <Card
                key={product.id}
                cart={cart}
                setCart={setCart}
                product={product}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#e4e1ab] rounded-2xl p-5  w-full">
          <div>
            <p className="text-2xl font-bold">Special Offer</p>
            <p className="text-2xl ">UP TO 30% OFF</p>
          </div>
          <div>
            <Button text="SHOP NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;