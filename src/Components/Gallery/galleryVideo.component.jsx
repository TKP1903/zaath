import React from "react";
import { Link } from "react-router-dom";

const GalleryVideoComponent = (props) => {
  return (
    <>
      <div className="w-64 lg:w-3/12 object-cover transform transition duration-700 hover:scale-110">
        <Link to={`/gallery/${props.name}?name=video&value=${props.link}`}>
          <div className="flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-light-blue shadow-xl p-1 rounded-lg">
            <div className="w-full h-full">
              <img
                src={props.cover_image}
                alt=""
                className="rounded-t-lg w-full h-full"
              />
            </div>
            <h5 className="text-md  truncate w-full text-center font-semibold text-gray-400 py-2">
              {props.name}
            </h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GalleryVideoComponent;
