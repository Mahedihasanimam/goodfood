import React from 'react';

const MenuDetailsCard = ({ item }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg max-w-lg m-4">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold ml-1">{item.rating}</span>/5
                </div>
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-lg text-pink-600 mb-4">{item.price}</p>
                <p className="mb-4">{item.description}</p>
                <button className="bg-green-500 text-white w-full py-2 rounded mb-4 hover:bg-green-600">
                    Add to cart
                </button>
                <div className="flex justify-between text-sm mb-4">
                    <span>Protein: {item.protein}</span>
                    <span>Carbs: {item.carbs}</span>
                    <span>Fat: {item.fat}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <ul className="list-disc list-inside mb-4">
                    {item.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className="text-lg font-bold mb-2">Instructions</h3>
                <ol className="list-decimal list-inside">
                    {item.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default MenuDetailsCard;
