import React from "react";
import ContactHero from "../Hero/contact.component";
import ProjectHero from "../Projects/projectHero";
import ServicesDescription from "./ServicesDescription";
import { useParams } from "react-router-dom";

import services from "./services.json";

const IndividualService = () => {
  const { type } = useParams();
  const data = services.find((service) => {
    if (service.path === type) {
      console.log(service);
      return service;
    }
    // console.log(service.path + "AAAAAAAAAAAAAAAAAAAaa" + type);
    // return service.path === type;
  });
  return (
    <>
      <div className="pt-16">
        <ContactHero
          title="Our Services"
          header={data?.name}
          description={data?.description}
          image={data?.image}
        />
        <div className="flex flex-col items-center justify-center gap-5 bg-red-50 py-20">
          <h1 className="text-5xl text-blue-color font-bold text">
            Project Flow
          </h1>
          <p className="text-md font-semibold text-gray-400">
            OUR MOTTO - QUALITY! THE FIRST TIME!
          </p>
          <div className="w-full md:h-auto lg:h-full">
            <img
              src={`${data?.project_flow_image}`}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="py-36">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-color dark:text-gray-50 text-center pb-20">
            You Must Know
          </h1>
          <ServicesDescription data={data.you_must_know} />
        </div>
      </div>
    </>
  );
};

export default IndividualService;
