import React from "react";
import Marquee from "react-fast-marquee";

function News() {

 
  return (
    <div className="news   ">
      <div className="news__container flex bg-primary items-center text-[#fff]">
        <div className="news__left bg-secondary xl:min-w-[15rem] lg:min-w-[12.7rem] md:min-w-[12rem]  sm:min-w-[8rem] xl:p-2 sm:p-1">
          <h3 className="font-bold text-center text-[1rem]  ">Latest News :</h3>
        </div>

        <div className="news__content grow cursor-pointer ">
          <Marquee play={true} speed={60} gradient={false} pauseOnClick={true}>
            <p className="tracking-widest">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              molestiae?
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
export default News;
