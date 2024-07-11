"use client";
import { FiArrowUpRight } from "react-icons/fi";

// import Image from "next/image";

import HeroSlider from "./HeroSlider";


const Hero = () => {
  return (
    <div className="custom-bg bg-opacity-20 min-h-[600px] flex items-center justify-center my-6 ">
      <div className="lg:flex md:flex  justify-between items-center gap-12 container  mx-auto h-full relative z-10 px-4">
        <div className="space-y-6">
          <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#1A1A1A]">Keep track of</h1>
          <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#237314]">Fitness Goal</h1>
          <p className="text-xl font-medium">Order on Simply Good Food</p>
          <button className="btn btn-pri px-6 py-3 rounded-lg shadow-xl bg-[#FDB64E]  flex items-center justify-center gap-2 ">Explore Menu <FiArrowUpRight/></button>
        </div>
        <div className="lg:mt-0 max-w-2xl  mt-4">
            <HeroSlider/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
