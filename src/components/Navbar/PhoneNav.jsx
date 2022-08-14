import React, { useContext } from "react";
import { NavContext } from "./../../context/NavContext";

const PhoneNav = () => {
  const [toggleNavbar, setToggleNavbar] = useContext(NavContext);

  return (
    <ul className="lg:hidden flex justify-around items-center fixed left-0 right-0  bottom-0 w-full  z-50 bg-primary py-2 text-center">
      <li onClick={() => setToggleNavbar(true)}>
        <img
          src="image/icons/menu.png"
          className="w-8 h-8 cursor-pointer"
          alt="Login"
        />
      </li>

      <li>
        <img
          src="image/icons/slogin.png"
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="Login"
        />
      </li>

      <li className="flex justify-center items-center flex-col text-white rounded-full cursor-pointer">
        <img src="image/icons/notice.png" className="w-8 h-8" alt="Login" />
        <p className="text-sm text-[#fff]">Notice</p>
      </li>
    </ul>
  );
};

export default PhoneNav;
