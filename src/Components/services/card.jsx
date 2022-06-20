import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <Link to={`/consulting/${props.name}`}>
        <div className="flex flex-col items-center justify-center gap-6 shadow-xl rounded-3xl hover:ease-in-out hover:delay-150">
          <div className="w-full h-full">
            <img
              src={props.image}
              alt="loading.."
              className="w-full h-full rounded-t-3xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1 pb-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {props.name}
            </h4>
            <p className="text-md font-semibold text-gray-400">
              ({props.description})
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
