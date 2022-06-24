import React from "react";
import { Link } from "react-router-dom";

const GalleryPhotoComponent = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-64 lg:w-72 h-80 object-cover transform transition duration-700 hover:scale-110">
        <Link to={`/gallery/${props.link}?name=photo&value=${props.link}`}>
          <div className="h-full flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-light-blue shadow-xl p-1 rounded-lg">
            <div className="w-full h-64">
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

export default GalleryPhotoComponent;
