import React from "react";

const VideoComponent = () => {
  return (
    <>
      <div className="w-full md:h-11/12 flex flex-col md:flex-row items-center justify-center dark:bg-slate-900">
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center md:gap-6 dark:text-gray-50 px-3 md:px-20 py-4 md:py-14">
          <p className="text-md pt-4 mb-10 font-bold border-b-2 border-orange-500 pb-1">
            WHO WE ARE
          </p>
          <h4 className="text-2xl md:text-3xl lg:text-6xl font-bold">
            Celebrating The Success in Hospitality Consulting!
          </h4>
          <p className="text-sm lg:text-lg font-semibold p-2 text-gray-500 md:p-4">
            Helping Entrepreneurs Start Scalable & Impactful Brands!
          </p>
          <button className="px-6 py-1.5 text-lg mt-6 mb-3 md:mb-16 font-semibold border dark:border-gray-50 rounded-3xl">
            Read More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <div className="md:hidden">
            <iframe
              width="100%"
              height="700"
              src="https://www.youtube.com/embed/syF_bd3WVWY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="hidden md:block lg:hidden">
            <iframe
              width="100%"
              height="615"
              src="https://www.youtube.com/embed/syF_bd3WVWY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="hidden lg:block">
            <iframe
              width="100%"
              height="700"
              src="https://www.youtube.com/embed/syF_bd3WVWY"
              title="YouTube video player"
              frameborder="0"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComponent;
