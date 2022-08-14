import React from "react";
import CopyrightFooter from "./CopyrightFooter";

const ClassRoutine = () => {
  return (
    <div>
      <div className="p-1 text-center left-0 h-max w-10/12 right-0 mx-auto z-10">
        <div className="bg-white p-1 h-[100vh] relative">
          <div className="bg-primary text-white pt-10">
            <h1 className="text-2xl font-bold text-center">
              Class Six Routine
            </h1>
            <div className="flex justify-between pt-16">
              <div>
                <button className="text-2xl text-white bg-[#008041] w-[30vw] md:w-[37vw] lg:w-[30vw] xl:w-[32vw] font-bold py-2">
                  Hour
                </button>
              </div>
              <div>
                <button className="text-2xl text-white bg-[#008041] w-[30vw] md:w-[37vw] lg:w-[30vw] xl:w-[32vw] font-bold py-2">
                  Subject
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16">
            <CopyrightFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutine;
