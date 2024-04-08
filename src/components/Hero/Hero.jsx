import React from "react";
import heroImage from "../../assets/shortcake-in-a-jar.png";

const Hero = () => {
  return (
    <div className="h-full flex flex-col-reverse lg:flex-row items-center lg:justify-center gap-2 lg:gap-20">
      <div className="text-center font-granstander flex flex-col items-center justify-center flex-shrink w-[300px] lg:w-[500px]  lg:items-end gap-5">
        <h2 className="text-2xl lg:text-3xl text-cornell-red">
          Sweeten your links with Shoti
        </h2>
        <p className="text-md lg:text-2xl text-light-red">
          At Shoti, we believe in making your online experience as sweet and
          simple as possible. Say goodbye to long, cumbersome URLs and hello to
          convenient, bite-sized links! Whether you're sharing a funny cat video
          or promoting your latest blog post, Shoti has got you covered with
          our delectable URL shortening service.
        </p>
        <button className="bg-light-red  text-white px-4 py-2 w-fit rounded-md  border-dashed border-white border-2">
          Get Started
        </button>
      </div>
      <img src={heroImage} className="w-40 lg:w-96" />
    </div>
  );
};

export default Hero;
