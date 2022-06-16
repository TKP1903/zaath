import React from "react";

//Components
import Navbar from "../Components/Navbar";
import Carousels from "../Components/Carousels/carousel.component";
import VideoComponent from "../Components/Carousels/video.Component";
import ServicesComponent from "../Components/services/services.component";
import Clients from "../Components/clientsLogos/clients";
import Footer from "../Components/footer";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="bg-pink-50 dark:bg-blue-color w-full md:fixed md:py-2">
          <Navbar />
        </div>
        <Carousels />
        <VideoComponent />
        <div className="flex flex-col items-center justify-cecnter gap-10 pt-28 pb-10 md:pb-20 lg:px-44">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold border-b border-yellow-600 pb-2">
              End-To-End Consulting
            </h1>
            <p className="text-sm md:text-md text-gray-400 w-3/4 text-center">
              END-TO-END CONSULTING SERVICE FOR HOW TO START FOOD BUSINESS FROM
              SCRATCH AND OPERATE LIKE A PRO!
            </p>
          </div>
          <ServicesComponent />
        </div>
        <div className="flex flex-col items-center justify-cecnter gap-10 pt-28 md:px-20 lg:px-44 dark:bg-blue-color py-4 md:py-10">
          <div className="flex flex-col items-center justify-center gap-4 dark:text-gray-50">
            <h1 className="text-4xl font-bold border-b border-yellow-600 pb-2">
              Our Clientele
            </h1>
            <p className="text-md text-gray-400 text-center">
              FROM YOUR VISION TO REALITY!
            </p>
          </div>
          <Clients />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
