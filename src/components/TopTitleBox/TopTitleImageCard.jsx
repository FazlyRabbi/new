import React from "react";
import GoverningCard from "./../GoverningCard/GoverningCard";

const TopTitleImageCard = ({ name, image, position, identity }) => {
  return (
    <div className="bg-white text-center left-0 h-max w-10/12 lg:w-8/12 mx-auto rounded-md -mt-28 z-10  py-5">
      <div className="w-10/12 mx-auto text-center">
        <GoverningCard
          name={name}
          postion={position}
          image={image}
          identity={identity}
        />
      </div>
    </div>
  );
};

export default TopTitleImageCard;
