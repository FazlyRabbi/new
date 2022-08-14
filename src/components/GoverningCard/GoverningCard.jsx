const GoverningCard = ({ image, name, postion, identity }) => {
  return (
    <div className=" bg-primary rounded-sm text-center py-2 ">
      <div className=" border-white shadow-md  p-2 Card_image_div w-max rounded-full mx-auto mb-2">
        <img
          src={`${image ? image : "#"}`}
          alt="Not found"
          className="Card_image_main rounded-full w-32 h-32 lg:w-52 lg:h-52 object-cover mx-auto "
        />
      </div>
      <div className="pb-4 px-0.5">
        <h1 className="bg-gradient-to-r from-primary to-primary via-green text-sm lg:text-md uppercase text-white font-semibold py-0.5 ">
          {name ? name : "Unknown"}
        </h1>
        {postion && (
          <p className="text-white mt-2  text-sm lg:text-md font-semibold capitalize">
            {postion ? postion : "Unknown"}
          </p>
        )}
        {identity && (
          <p className="text-white mt-2  text-sm lg:text-md font-semibold capitalize">
            Identity <br />
            Donation
          </p>
        )}
      </div>
    </div>
  );
};

export default GoverningCard;
