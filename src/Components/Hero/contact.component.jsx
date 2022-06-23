import React from "react";

const ContactHero = (props) => {
  console.log(props);
  return (
    <>
      <div className="lg:h-screen md:px-10 lg:px-20 bg-pink-50 dark:bg-blue-color lg:px-44 bg-pink-50 flex flex-col md:flex-row items-center justify-center gap-10 md:py-36 lg:py-0 pt-8 lg:pt-28">
        <div className="flex flex-col items-start justify-center gap-6 md:w-1/2 px-3 py-5 text-blue-color dark:text-gray-50 border border-gray-50 dark:border-light-blue shadow-xl">
          <p className="text-md font-semibold pb-2 border-b-2 border-yellow-500">
            {props.title}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            {props.header}
          </h1>
          <p className="text-md font-semibold text-gray-500">
            {props.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={`${props.image}`}
            alt=""
            className="w-full h-full p-2 md:p-4 lg:p-0 rounded-xl shadow-xl border border-gray-50 dark:border-light-blue"
          />
        </div>
      </div>
    </>
  );
};

export default ContactHero;
