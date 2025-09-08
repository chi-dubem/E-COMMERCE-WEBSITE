import React from 'react' 
import ShoppingCart_jsx from '../../assets/Jsxs/ShoppingCart_jsx';
import User_Jsx from '../../assets/Jsxs/User_Jsx';
import Like_jsx from '../../assets/Jsxs/Like_jsx';
import Search_jsx from '../../assets/Jsxs/Search_jsx';
import Menu_jsx from '../../assets/Jsxs/menu_jsx';

const Header = () => {
  return (
    <div>
      <div className=" flex gap-10 px-2">
        <div className="flex  gap-10 w-full justify-center">
          <div className="shrink-0">
            <img src="src\assets\images\logo1.png" className="h-20" />
          </div>
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
            <ShoppingCart_jsx />
            <Like_jsx />
            <User_Jsx />
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
}

export default Header