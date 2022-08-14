import React from "react";
import { GoverningApi } from "../../CustomApis/GoverningApi";
// import MainPageLayout from "./../../Layouts/MainPageLayout/MainPageLayout";
import TopTigleBox from "../../components/TopTitleBox/TopTigleBox";
import GoverningCard from "../../components/GoverningCard/GoverningCard";

const GoverningBody = () => {
  return (
    // <MainPageLayout>
    <section>
      <TopTigleBox
        text="Meet our governing body"
        bg="green"
        name="Asraful islam sakil"
        position={"Assestent Head Secritary"}
        image="image/image.jpg"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2">
        {GoverningApi.map((info, index) => {
          return (
            <GoverningCard
              key={info._id}
              name={info.name}
              postion={info.position}
              image={info.image}
            />
          );
        })}
      </div>
    </section>
    // </MainPageLayout>
  );
};

export default GoverningBody;
