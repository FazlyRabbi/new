import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import NavRight from "../../components/NavRight/NavRight";

function Content() {

  return (
    <section className="content   ">
      <div className="flex  justify-between">
        <Navbar  />
        <div className="content__main  grow  xl:max-w-[75%] lg:max-w-[71%] md:max-w-[61.5%]">
          <Outlet />
          <p className="text-primary font-bold py-8 text-center">Copyright © 2022</p>
        </div>
        <NavRight />
      </div>
    </section>
  );
}

export default Content;
