import React from "react";
import { Link } from "react-router-dom";

const GalleryPhotoComponent = (props) => {
  return (
    <>
      <Link to={`/${props.key}`}>
        <div className="flex flex-col items-center justify-center gap-2 w-1/4 border border-gray-200 p-1 rounded-lg">
          <div>
            <img
              src="https://dnyhospitality.com/wp-content/uploads/2022/02/branding-Gallery-05.jpg"
              alt=""
              className="rounded-t-lg"
            />
          </div>
          <h5 className="text-lg font-semibold text-gray-400 py-2">
            BRANDING AND DESIGNING
          </h5>
        </div>
      </Link>
    </>
  );
};

export default GalleryPhotoComponent;
