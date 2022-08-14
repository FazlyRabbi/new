import React from "react";

const HomeUser = () => {
  return (
    <section>
      <div className="text-center bg-white pt-10 rounded-lg overflow-hidden ">
        <div className="border-4 border-white rounded-full w-max mx-auto -mb-10 ">
          <div className="z-20 Card_image_div w-max rounded-full">
            <img
              src="image/image.jpg"
              className="Card_image_main h-32 w-32  rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="bg-green pt-6 text-white rounded-lg">
          <h1 className="font-semibold text-white">NAME HERE</h1>
          <p className="pb-2">Description</p>
          <p className="bg-primary p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            exercitationem fugiat in autem, repellat consectetur. Natus minima
            repudiandae optio nobis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeUser;
