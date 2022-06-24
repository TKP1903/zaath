import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutPage from "./about.page";
import ConsulancyPage from "./consultancy.page";
import ContactPage from "./contact.page";
import GalleryPage from "./gallery.page";
import HomePage from "./home.page";
import InnovationPage from "./innovation.page";
import ProjectsPage from "./projects.page";

const Master = () => {
  const { type } = useParams();
  console.log(type);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [type]);
  return (
    <>
      {type === "home" && <HomePage />}
      {type === "why-us" && <AboutPage />}
      {type === "our-services" && <ConsulancyPage />}
      {type === "projects" && <ProjectsPage />}
      {(type === "gallery" ||
        type === "photo-gallery" ||
        type === "video-gallery") && <GalleryPage />}
      {type === "contact-us" && <ContactPage />}
    </>
  );
};

export default Master;
