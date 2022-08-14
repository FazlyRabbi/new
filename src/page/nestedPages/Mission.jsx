import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Mission() {
  return (
    <section className="mission bg-primary min-h-screen m-4">
      <div className="mission__content p-8 flex flex-col items-center">
        {/* heading */}
        <div className="heading xl:h-[18rem] sm:h-[15rem] md:h-[15rem] w-[100%] bg-white rounded-xl   ">
          <h1 className="uppercase  pt-8 text-center text-primary font-bold xl:text-[2rem] md:text-[1.5rem] ">
            Mission & Visson{" "}
          </h1>
        </div>
        {/* mission text */}
        <div className="mission__text bg-primary -mt-[10rem] p-6 m-5 text-white text-center">
          <h1 className="uppercase  font-bold underline underline-offset-[.8rem] mb-4 xl:text-[2rem] md:text-[1.5rem]">
            Mission
          </h1>
          <p className="xl:px-20 lg:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dolorem nihil fuga nam pariatur, quia ullam tenetur
            cupiditate vitae delectus beatae. Eum ut optio nemo temporibus
            cumque? Veritatis, quidem aspernatur? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ipsum quisquam perspiciatis eum harum
            hic! Mollitia sint, temporibus consectetur quam, culpa atque
          </p>
        </div>
        {/* mission image */}
        <div className="mission__img">
          <LazyLoadImage
            src={`https://media.istockphoto.com/vectors/target-icon-on-transparent-background-vector-id1282050925?k=20&m=1282050925&s=612x612&w=0&h=N2_Pwrz-wVUvRI5yNkqcGWkyor6WDlo-2y0sWzLUMco=`}
            alt="mission__img"
            className="xl:h-[20rem]  sm:h-[15rem]"
          />
        </div>
        {/* visson text */}
        <div className="mission__text bg-primary p-6 m-5 text-white text-center">
          <h1 className="uppercase  font-bold underline underline-offset-[.8rem] mb-4 xl:text-[2rem] md:text-[1.5rem]">
            Vision
          </h1>
          <p className="xl:px-20 lg:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dolorem nihil fuga nam pariatur, quia ullam tenetur
            cupiditate vitae delectus beatae. Eum ut optio nemo temporibus
            cumque? Veritatis, quidem aspernatur? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ipsum quisquam perspiciatis eum harum
            hic! Mollitia sint, temporibus consectetur quam, culpa atque
          </p>
        </div>
        {/* vission image */}
        <div className="vission__img">
          <LazyLoadImage
            src={`https://media.istockphoto.com/vectors/target-icon-on-transparent-background-vector-id1282050925?k=20&m=1282050925&s=612x612&w=0&h=N2_Pwrz-wVUvRI5yNkqcGWkyor6WDlo-2y0sWzLUMco=`}
            alt="mission__img"
            className="xl:h-[20rem]  sm:h-[15rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
