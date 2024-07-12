"use client";

import RelatedProduct from "@/app/components/RelatedPoduct";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";

const MenuDetailsCard = ({ params }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setMenuItems(data);
    };

    fetchData();
  }, []);
  const item = menuItems.find((i) => i.id === parseInt(params.id));

  return (
    
    <div>
        <div className=" flex overflow-hidden  lg:flex-row md:flex-row flex-col justify-center items-center gap-12 m-4 mb-32">
      <div>
        <Image className=" rounded-[100px] w-full border p-2 bg-gray-200" height={500} width={500} src={item?.imageUrl} />
      </div>
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-2 text-[#656565] ">{item?.name}</h2>
        <div className="flex items-center mb-2 text-yellow-500">
          <span className="text-yellow-500">⭐</span>
          <span className="font-bold ml-1">{item?.rating}</span>/5
        </div>
        <div className="flex justify-between text-sm text-[#faa580] max-w-xs my-4">
        <span>Protein: {item?.protein}</span><span className="text-black" >/</span>
          <span>Carbs: {item?.carbs}</span><span className="text-black"  >/</span>
          <span>Fat: {item?.fat}</span>
                </div>
        <p className="text-lg text-[#656565] font-semibold mb-4">{item?.price}</p>
        <p className="mb-4">{item?.description}</p>
        <button className="bg-[#5a9750] text-white w-full py-2 rounded mb-4 hover:bg-green-600">
          Add to cart
        </button>
       
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <h3 className="text-lg font-bold mb-2">Ingredients</h3>
            </div>
            <div className="collapse-content">
              <ul className="list-disc list-inside mb-4">
                {item?.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <h3 className="text-lg font-bold mb-2">Instructions</h3>
            </div>
            <div className="collapse-content">
              <ol className="list-decimal list-inside">
                {item?.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-12 right-4 p-4 rounded-full fixed z-50 bg-green-700 text-white">
      <MdShoppingCart size={25}/>
      </div>
    </div>


    <RelatedProduct/>
    
    </div>
  );
};

export default MenuDetailsCard;
