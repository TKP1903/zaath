import React from "react";

const ProjectHero = (props) => {
  return (
    <>
      <div className="py-32 flex items-center justify-center lg:px-44">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-gray-500 font-bold">{props.title}</p>
          <h1 className="text-6xl font-bold text-bluecolor dark:text-gray-50">
            {props.header}
          </h1>
          <p className="text-lg font-semibold text-gray-400">
            {props.description}
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
