//fojlay rabbi edited : 08/11/2022
import React from "react";
import {  LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// importing icons
import notice from "../../assets/svg/notice.svg";
import studentLogin from "../../assets/svg/studentLogin.svg";
import classRutin from "../../assets/svg/classRutin.svg";


const navbarItems = (
  <>
    <ul className="text-[#fff]  cursor-pointer p-2 space-y-3 ">
      <Link to={`/`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={notice}  alt="icon" className="h-5  w-6"  />
          <p>Notice</p>
        </li>
      </Link>

      <Link to={`/administration`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={studentLogin} className="h-5  w-6" alt="icon" />
          <p>Student Log In</p>
        </li>
      </Link>
      <Link to={`/president`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={classRutin} className="h-5  w-6" alt="icon" />
          <p>Class Routine</p>
        </li>
      </Link>
      </ul>
      </>
);

function NavRight() {
  return (
    <nav className=" navbar__right xl:min-w-[15rem] lg:min-w-[12.8rem] md:min-w-[12rem] bg-primary md:block sm:hidden xl:text-[1rem] lg:text-[.8rem] md:text-[.7rem]">
      {navbarItems}
    </nav>
  );
}

export default NavRight;
