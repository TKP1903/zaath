import React from "react";
import { Link, useParams } from "react-router-dom";
import GalleryPhotoComponent from "../Components/Gallery/galleryPhoto.component";
import GalleryVideoComponent from "../Components/Gallery/galleryVideo.component";

//Components
import ContactHero from "../Components/Hero/contact.component";
import Navbar from "../Components/Navbar";

const GalleryPage = () => {
  const { type } = useParams();
  alert(type);
  const heroData = {
    title: "Contact Us",
    header: "Here's A Visual Representation Of Our Expertise!",
    description: "Take a look & visualize your business concept.",
    image:
      "https://dnyhospitality.com/wp-content/uploads/2022/06/Gallary-section-main-vector.png",
  };
  const photos = [
    {
      key: "branding-and-designing",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/02/branding-Gallery-05.jpg",
      name: "BRANDING AND DESIGNING",
    },
    {
      key: "plating-and-presentation",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Plate-design-Gallery-09.jpg",
      name: "PLATING AND PRESENTATION",
    },
    {
      key: "branding-and-designing",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/02/branding-Gallery-05.jpg",
      name: "BRANDING AND DESIGNING",
    },
    {
      key: "plating-and-presentation",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Plate-design-Gallery-09.jpg",
      name: "PLATING AND PRESENTATION",
    },
    {
      key: "branding-and-designing",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/02/branding-Gallery-05.jpg",
      name: "BRANDING AND DESIGNING",
    },
    {
      key: "plating-and-presentation",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Plate-design-Gallery-09.jpg",
      name: "PLATING AND PRESENTATION",
    },
  ];
  return (
    <>
      <div className="bg-pink-50 dark:bg-blue-color">
        <Navbar />
        <ContactHero {...heroData} />
        <div className="py-10 flex flex-row items-center justify-center w-full gap-6 text-gray-700 dark:text-gray-50 text-lg font-light">
          <Link
            to="/photo-gallery"
            className={type === "photo-gallery" && "border-b border-yellow-400"}
          >
            <p>Photo Gallery</p>
          </Link>
          <Link to="/video-gallery">
            <p>Video Gallery</p>
          </Link>
        </div>
        <div className="md:px-20 lg:px-44">
          {type === "video-gallery" ? (
            <div className="flex flex-wrap items-center justify-center gap-10">
              <GalleryVideoComponent />
              <GalleryVideoComponent />
              <GalleryVideoComponent />
              <GalleryVideoComponent />
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-10">
              {photos.map((data) => (
                <GalleryPhotoComponent {...data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
