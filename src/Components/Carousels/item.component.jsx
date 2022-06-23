import React from "react";

const ItemComponent = (props) => {
  return (
    <>
      <div
        style={{ height: "600px" }}
        className="hidden z-10 md:flex items-center justify-center gap-10 w-full text-blue-color dark:text-gray-50"
      >
        <div className="w-1/2 flex flex-col items-start justify-center gap-6 p-3 border border-gray-50 dark:border-light-blue shadow-xl">
          <h1 className="text-5xl lg:text-6xl font-bold">{props.title}</h1>
          <p className="text-md lg:text-lg text-gray-500 w-5/6">
            {props.desctiption}
          </p>
        </div>
        <div className="">
          <img
            src={`${props.image}`}
            alt="Loading..."
            className="w-full h-full z-0 rounded-xl shadow-xl border border-gray-50 dark:border-light-blue"
          />
        </div>
      </div>

      <div className="z-10 flex flex-col md:hidden items-center justify-center relative pt-10 dark:text-gray-50 h-screen pb-10">
        <div className="flex flex-col items-start justify-center gap-6 w-4/5 pt-10">
          <h1 className="text-4xl text-center font-bold">{props.title}</h1>
          <p className="text-md text-gray-500 text-center">
            {props.desctiption}
          </p>
        </div>
        <div className="h-full">
          <img
            src={`${props.image}`}
            alt="Loading..."
            className="w-full h-full px-12 py-24 lg:p-24"
          />
        </div>
      </div>
    </>
  );
};

export default ItemComponent;
