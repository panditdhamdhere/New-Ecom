import React from "react";

const Counter = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="ml-5 shadow-lg flex ">
          <div className="bg-gray-600 text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md">
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-gray-600">1</div>
          <div className="bg-gray-600 text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md">+</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
