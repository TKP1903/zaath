import React from "react";
import { Link } from "react-router-dom";
const ProjectCard = (props) => {
  return (
    <>
      <Link to={`/projects/${props.name}`}>
        <div className="w-72 h-72 relative">
          <img
            src={`${props.image}`}
            alt=""
            className="w-full h-full rounded-3xl"
          />
          <h4 className="absolute inset-x-0 bottom-0 text-center pb-2 text-xl text-gray-50 bg-black opacity-50 rounded-b-3xl">
            {props.name}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
