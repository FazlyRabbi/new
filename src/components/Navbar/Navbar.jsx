// FazlyRabbi
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useWindowScroll } from "react-use";
import { Link } from "react-router-dom";
// importing icons
import home from "../../assets/svg/home.svg";
import admin from "../../assets/svg/administration.svg";
import president from "../../assets/svg/president.svg";
import head from "../../assets/svg/head.svg";
import History from "../../assets/svg/history.svg";
import Donor from "../../assets/svg/donor.svg";
import Mission from "../../assets/svg/mission.svg";
import Master from "../../assets/svg/master.svg";
import Students from "../../assets/svg/student.svg";
import Result from "../../assets/svg/result.svg";
import activity from "../../assets/svg/activity.svg";
import Gallery from "../../assets/svg/gallary.svg";
import megazine from "../../assets/svg/megazine.svg";
import contact from "../../assets/svg/contact.svg";
import physical from "../../assets/svg/physical.svg";
import science from "../../assets/svg/science.svg";
import ict from "../../assets/svg/ict.svg";
import academic from "../../assets/svg/academic.svg";

const navbarItems = (
  <>
    <ul className="text-[#fff]  cursor-pointer p-2 space-y-3 ">
      <Link to={`/`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={home} alt="icon" className="h-5  w-6" />
          <p>Home</p>
        </li>
      </Link>

      <Link to={`/administration`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={admin} className="h-5  w-6" alt="icon" />
          <p>Administration</p>
        </li>
      </Link>
      <Link to={`/president`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={president} className="h-5  w-6" alt="icon" />
          <p>President Message</p>
        </li>
      </Link>
      <Link to={`/headteachermsg`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={head} className="h-5  w-6" alt="icon" />
          <p>H Teacher Message</p>
        </li>
      </Link>

      <Link to={`/history`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={History} className="h-5  w-6" alt="icon" />
          <p>History</p>
        </li>
      </Link>

      <Link to={`/donorfounder`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Donor} className="h-5  w-6" alt="icon" />
          <p>Donor & Founder</p>
        </li>
      </Link>

      <Link to={`/mission`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Mission} className="h-5  w-6" alt="icon" />
          <p>Mission & Vision</p>
        </li>
      </Link>

      <Link to={`/masterplan`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Master} className="h-5  w-6" alt="icon" />
          <p>Master Plan</p>
        </li>
      </Link>
      <Link to={`/students`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Students} className="h-5  w-6" alt="icon" />
          <p>Students</p>
        </li>
      </Link>
      <Link to={`/result`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Result} className="h-5  w-6" alt="icon" />
          <p>Result Summery</p>
        </li>
      </Link>
      <Link to={`/onlineactivity`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={activity} className="h-5  w-6" alt="icon" />
          <p>Online Activity</p>
        </li>
      </Link>

      <Link to={`/gallery`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={Gallery} className="h-5   w-6 " alt="icon" />
          <p>Gallery</p>
        </li>
      </Link>

      <Link to={`/schoolmagazine`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={megazine} className="h-5  w-6" alt="icon" />
          <p>School magazine</p>
        </li>
      </Link>

      <Link to={`/contact`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={contact} className="h-5  w-6" alt="icon" />
          <p>Contact Us</p>
        </li>
      </Link>
      <Link to={`/physical`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={physical} className="h-5  w-6" alt="icon" />
          <p>Physical Infrastructure</p>
        </li>
      </Link>
      <Link to={`/ictlab`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={ict} className="h-5  w-6" alt="icon" />
          <p>ICT Lab/Facility</p>
        </li>
      </Link>
      <Link to={`/sciencelab`}>
        <li className=" bg-secondary  hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={science} className="h-5  w-6" alt="icon" />
          <p>Science Lab Facility</p>
        </li>
      </Link>

      <Link to={`/academic`}>
        <li className=" bg-secondary  cursor-pointer hover:bg-primary  drop-shadow-xl  rounded-xl transition-all flex justify-start px-4 py-2 items-center space-x-2 mb-3 hover:shadow-md">
          <LazyLoadImage src={academic} className="h-5  w-6" alt="icon" />
          <span>Academic Clender</span>
        </li>
      </Link>
    </ul>
  </>
);

function Navbar() {
  return (
    <nav
      className={`navbar  xl:min-w-[15rem] lg:min-w-[12.8rem] md:min-w-[12rem] bg-primary md:block sm:hidden xl:text-[1rem] lg:text-[.8rem] md:text-[.7rem]`}
    >
      {navbarItems}
    </nav>
  );
}

export default Navbar;
