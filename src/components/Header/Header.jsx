// FazlyRabbi
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header
      className="header bg-primary xl:h-[9rem] lg:h-[7rem] md:h-[6rem] sm:h-[3rem] sticky top-0 z-50
    
    
   py-2  px-3 flex   justify-between   items-center 
     "
    >
      {/* logo box */}
      <div className="logo__box  cursor-pointer  xl:w-[12rem] md:w-[10rem] sm:w-[3.5rem] ">
        <LazyLoadImage
          className="xl:h-18 lg:h-16 md:h-14 sm:h-7 "
          src={logo}
          alt="school__logo"
        />
      </div>

      {/* school detials */}
      <div className="info__main  flex  text-center    ">
        <div className="school__name  leading-normal  ">
          <h1
            className="bangla text-red xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[.4rem]   leading-none
                font-bold uppercase tracking-tight"
          >
            {" "}
            ধুনট আদর্শ উচ্চ বিদ্যালয়
          </h1>
          <h1 className="english xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem]  tracking-tight text-red font-bold uppercase sm:text-[.4rem]   ">
            Dhunat adarsha high school
          </h1>
          <p
            className="school__address xl:text-[1rem] lg:text-[.8rem] md:text-[.7rem] 
            
            sm:text-[.3rem]  tracking-widest leading-none text-center text-[#fff]"
          >
            Dhunat Bogura, Bangladesh
          </p>

          <div className="flex lg:space-x-6  sm:space-x-1 justify-center mt-3 sm:mt-1 text-white items-baseline">
            <p className="website xl:text-[1rem] lg:text-[.8rem]  md:text-[.8rem] sm:text-[.3rem]  text-[#fff]">
              www.education.com
            </p>
            <p className="email xl:text-[1rem] lg:text-[.8rem] md:text-[.8rem] sm:text-[.4rem] text-[#fff] ">
              Gmail : educaation@gamil.com
            </p>
          </div>
        </div>
      </div>

      {/* school addtional info */}
      <div
        className="info__sub text-white uppercase xl:text-[1rem]  lg:text-[.8rem] md:text-[.8rem] 
        sm:text-[.3rem] font-semibold flex-col xl:w-[12rem] md:w-[10rem] sm:w-[3.5rem]"
      >
        <h1 className="established ">Established : 10.25.1952</h1>
        <h1 className="einNumber">EIN : 56987</h1> 
        <h1 className="school__code">School code : 1544</h1>
      </div>
    </header>
  );
}

export default Header;
