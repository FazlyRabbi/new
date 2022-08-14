// FazlyRabbi
import React from "react";
import banner from "../../assets/banner.png";
function Banner() {
  return (
    <div
      className="banner   
    "
    >
      <img
        className=" xl:h-[30rem] lg:h-[25rem] md:h-[20rem] sm:h-[15rem]  w-[100%] aspect-auto"
        src={banner}
        alt="banner"
      />
    </div>
  );
}

export default Banner;
