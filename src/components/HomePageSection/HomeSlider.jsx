import Slider from "react-slick";
import { SliderApi } from "./../../CustomApis/SliderApi";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className=" lg:w-10/12 mx-auto mt-10 overflow-hidden">
      <Slider {...settings}>
        {SliderApi.map((curElem, index) => {
          const { image, desc } = curElem;
          return (
            <div>
              {image && (
                <img src={image} className="w-full rounded-md" alt="" />
              )}
              <div className="p-2 ">
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
