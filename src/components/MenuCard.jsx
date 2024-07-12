import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuCard = ({ item }) => {
    return (
        <div className="border rounded-lg overflow-hidden w-full shadow-lg m-4">
            <Image height={500} width={500} src={item.imageUrl} alt={item.name}  className="w-full max-h-56  object-cover" />
            <div className="p-4">
                <div className="flex items-center text-yellow-500 mb-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold ml-1">{item.rating}</span>/5
                </div>
                <h2 className="text-2xl text-[#656565] font-bold mb-2">{item.name}</h2>
                <p className="text-lg text-[#656565] font-bold mb-4">{item.price}</p>
                <Link href={`/details/${item?.id}`}>
                <button className="bg-[#5a9750] text-white w-full py-2 rounded mb-4 hover:bg-green-600">
                    Add to cart
                </button>
                </Link>
                <div className="flex justify-between text-sm text-[#faa580]">
                    <span>Protein: {item.protein}</span> /
                    <span>Carbs: {item.carbs}</span> /
                    <span>Fat: {item.fat}</span>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
