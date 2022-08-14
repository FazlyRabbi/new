import TopTitleImageCard from "./TopTitleImageCard";
const TopTigleBox = ({ text, bg, name, image, position, identity }) => {
  return (
    <>
      <div
        className={`${bg === "green" && "bg-primary "} ${
          bg === "white" && " bg-white"
        } lg:w-10/12 w-11/12 px-1 lg:px-0 mx-auto rounded-lg text-center pt-5 pb-32 font-bold uppercase relative shadow-sm -z-10 `}
      >
        <h1
          className={` text-xl lg:text-2xl mb-4 mt-4 ${
            bg === "green" && "text-white"
          } ${bg === "white" && "text-primary"}`}
        >
          {text}
        </h1>
      </div>
      <TopTitleImageCard
        name={name}
        image={image}
        position={position}
        identity={identity}
      />
    </>
  );
};

export default TopTigleBox;
