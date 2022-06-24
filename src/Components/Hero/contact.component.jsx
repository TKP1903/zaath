import React from "react";

const ContactHero = (props) => {
  return (
    <>
      <div className="px-4 py-20 pt-20 md:py-0 md:px-10 lg:px-20 h-screen lg:pt-28 bg-pink-50 dark:bg-blue-color bg-pink-50 flex flex-col md:flex-row items-center justify-center gap-10 ">
        <div className="flex flex-col items-start justify-center gap-6 md:w-1/2 px-3 py-5 text-blue-color dark:text-gray-50 border-2 border-gray-50 dark:border-light-blue shadow-xl">
          <p className="text-md font-semibold pb-2 border-b-2 border-yellow-500">
            {props.title}
          </p>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">
            {props.header}
          </h1>
          <p className="text-md font-semibold text-gray-500">
            {props.description}
          </p>
        </div>
        <div className="md:w-1/2 h-4/5">
          <img
            src={`${props.image}`}
            alt=""
            className="w-full h-full p-2 md:p-4 lg:p-0 rounded-xl shadow-xl border-2 border-gray-50 dark:border-light-blue rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default ContactHero;
