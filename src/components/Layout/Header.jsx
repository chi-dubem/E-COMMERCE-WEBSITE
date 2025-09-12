import ShoppingCart_jsx from '../../assets/Jsxs/ShoppingCart_jsx';
import User_Jsx from '../../assets/Jsxs/User_Jsx';
import Like_jsx from '../../assets/Jsxs/Like_jsx';
import Search_jsx from '../../assets/Jsxs/Search_jsx';
import Menu_jsx from '../../assets/Jsxs/Menu_jsx';
import Logo from '../Logo';

const Header = ({setDisplayCart }) => {
  function handelDisplayCart() {
    setDisplayCart(
      (prev) => prev = true
    )
  }
  return (
    <div>
      <div className=" flex gap-10 px-2">
        <div className="flex  gap-10 w-full justify-center">
          <Logo />
          <div className="flex flex-1 items-center rounded-4xl bg-gray-100 w-80 max-w-[1000px]">
            <input
              type="text"
              placeholder="Search..."
              className=" p-4 w-full rounded-l-4xl h-[90%]  text-[12px]"
            />
            <div className="py-6 px-10 rounded-r-4xl h-full  bg-gray-200">
              <Search_jsx />
            </div>
          </div>
          <div className="flex items-center gap-10 ">
            <div onClick={handelDisplayCart} className="hover:border">
              <ShoppingCart_jsx />
            </div>
            <div className="hover:border">
              <Like_jsx />
            </div>
            <div className="hover:border">
              <User_Jsx />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3DD7E0]">
        <div className="w-fit hover:border ">
          <Menu_jsx />
        </div>
      </div>
    </div>
  );
};

export default Header