import React from "react";

const FaqSection = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 my-12 px-4">
      <div className=" space-y-4 text-center mx-auto">
        <h3 className="text-4xl font-semibold">
          Popular Frequently Asked Questions
        </h3>
        <p>
          Simply Good Food prepares and delivers organically sourced, fresh
          meals to your door nationwide. Unlike other meal kit delivery services
          that need preparation and cleaning, our meals are delivered ready to
          consume. Our mission is to make healthy eating easy and enjoyable
          while not sacrificing flavor. Do you have a question regarding our
          shipping service?
        </p>
      </div>

      <div>
        <div className="join join-vertical w-full space-y-4">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What are the foods like Steel Yat? How does the mail plan work?
            </div>
            <div className="collapse-content">
              <p>
                What are the foods like Steel Yat? How does the mail plan work
                What are the foods like Steel Yat? How does the mail plan work
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How Do I Eat Fresh and Lean?
            </div>
            <div className="collapse-content">
              <p>
                How Do I Eat Fresh and Lean What are the foods like Steel Yat?
                How does the mail plan work
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How long do my meals last?
            </div>
            <div className="collapse-content">
              <p>How long do my meals last How Do I Eat Fresh and Lean</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What if I don t eat them all at once?
            </div>
            <div className="collapse-content">
              <p>
                What if I don t eat them all at long do my meals last How Do I
                Eat Fresh and Lean
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What s in the food? Is it organic? Is it gluten free?
            </div>
            <div className="collapse-content">
              <p>
                What s in the food? Is it organic? Is it gluten free? if I don t
                eat them all at long do my meals last How Do I Eat Fresh and
                Lean
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
