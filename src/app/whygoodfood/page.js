import React from 'react';

const WhySimplyGoodFood = () => {
  return (
    <section aria-labelledby="why-simply-good-food" className="py-12 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="why-simply-good-food" className="text-3xl leading-9 font-extrabold text-gray-900">
          Why Simply Good Food
        </h2>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <article className="benefit text-center flex-1">
            <div className="flex justify-center">
              <img src="/asets/img1.png" alt="Health awareness icon" className="h-16 w-16" />
            </div>
            <h3 className="mt-4 text-xl leading-6 font-semibold text-gray-900">Health awareness</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.
            </p>
          </article>
          <article className="benefit text-center flex-1">
            <div className="flex justify-center">
              <img src="/asets/img2.png" alt="More protein icon" className="h-16 w-16" />
            </div>
            <h3 className="mt-4 text-xl leading-6 font-semibold text-gray-900">More Protein</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.
            </p>
          </article>
          <article className="benefit text-center flex-1">
            <div className="flex justify-center">
              <img src="/asets/img3.png" alt="Unending variety icon" className="h-16 w-16" />
            </div>
            <h3 className="mt-4 text-xl leading-6 font-semibold text-gray-900">Unending Variety</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhySimplyGoodFood;
