import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/footer";
import GalleryPhotoComponent from "../Components/Gallery/galleryPhoto.component";
import GalleryVideoComponent from "../Components/Gallery/galleryVideo.component";
import GalleryViewComponent from "../Components/Gallery/galleryView.component";

//Components
import ContactHero from "../Components/Hero/contact.component";
import Navbar from "../Components/Navbar";

import galleryPhotos from "./galleryPhotos.json";
import galleryVideos from "./gallerVideos.json";
import { useEffect } from "react";

const GalleryPage = () => {
  const { type } = useParams();
  const [galleryType] = useSearchParams();
  const check = galleryType.get("name");
  const heroData = {
    title: "Contact Us",
    header: "Here's A Visual Representation Of Our Expertise!",
    description: "Take a look & visualize your business concept.",
    image:
      "https://dnyhospitality.com/wp-content/uploads/2022/06/Gallary-section-main-vector.png",
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [type]);
  return (
    <>
      <div className="bg-pink-50 dark:bg-blue-color">
        <Navbar />
        {type === "gallery" ||
        type === "photo-gallery" ||
        type === "video-gallery" ? (
          <div>
            <ContactHero {...heroData} />
            <div className="py-10 flex flex-row items-center justify-center w-full gap-6 text-gray-700 dark:text-gray-50 text-lg font-light">
              <Link
                to="/photo-gallery"
                className={
                  (type === "photo-gallery" || type === "gallery") &&
                  "border-b border-yellow-400"
                }
              >
                <p>Photo Gallery</p>
              </Link>
              <Link to="/video-gallery">
                <p
                  className={
                    type === "video-gallery" && "border-b border-yellow-400"
                  }
                >
                  Video Gallery
                </p>
              </Link>
            </div>
            <div className="md:px-20 lg:px-20 pb-20">
              {type === "video-gallery" ? (
                <div className="flex flex-wrap items-center justify-center gap-10">
                  {galleryVideos.map((data) => (
                    <GalleryVideoComponent {...data} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-10">
                  {galleryPhotos.map((data) => (
                    <GalleryPhotoComponent {...data} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            {check === "photo" ? (
              <GalleryViewComponent data={galleryPhotos} />
            ) : (
              <GalleryViewComponent data={galleryVideos} />
            )}
          </div>
        )}
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
