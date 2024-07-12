import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Dailymela = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center bg-slate-200 my-12 container mx-auto">
      <div className="space-y-6 h-fit bg-white p-6 lg:rounded-r-full pr-12 w-full lg:max-w-2xl">
        <h3 className="text-4xl font-semibold">
          Make daily meals <br /> healthy and moderate
        </h3>
        <p>Ingredients are naturally rich and full of taste.</p>
        <button className="btn btn-pri px-6 py-3 rounded-lg shadow-xl bg-[#5a9750] text-white  flex items-center justify-center gap-2 ">
          Meal Plans <FiArrowUpRight />
        </button>
      </div>
      <div className="lg:w-1/2 w-full ">
        <Image  height={500} width={500} className="h-full w-full" src={"/asets/daily.jpg"}/>
      </div>
    </div>
  );
};

export default Dailymela;
