import React from "react";
import GoverningCard from "../../components/GoverningCard/GoverningCard";
import TopTigleBox from "../../components/TopTitleBox/TopTigleBox";
import { DonorApi } from "./../../CustomApis/donorApi";
const DonorFounder = () => {
  return (
    <section>
      <TopTigleBox
        text="nodor & founder"
        bg="green"
        image="image/image.jpg"
        name="Asdul islam"
        identity="Donation"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        {DonorApi.map((info, index) => {
          return (
            <GoverningCard
              key={info._id}
              name={info.name}
              identity={info.identity}
              image={info.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DonorFounder;
