import React from "react";

const ServicesDescription = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16">
        {props.data.map((data) => (
          <div className="flex flex-row items-center justify-center gap-10 w-full h-full md:px-10 lg:px-44">
            <div className="w-1/2 h-full flex flex-col items-start justify-center gap-5">
              <h2 className="md:text-3xl lg:text-4xl font-bold text-blue-color dark:text-gray-200">
                {data.title}
              </h2>
              {data.service_description.map((service) => (
                <p className="text-md font-semibold text-gray-600">{service}</p>
              ))}
            </div>
            <div className="w-1/2 h-full shadow-lg">
              <img
                src={`${data.services_image}`}
                alt=""
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesDescription;
