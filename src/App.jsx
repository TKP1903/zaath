import React from "react";
import { Route, Routes } from "react-router-dom";

//import Master from "./Pages/master";

// React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./Pages/home.page";
import Master from "./Pages/master";
import ProjectsPage from "./Pages/projects.page";
import ConsulancyPage from "./Pages/consultancy.page";
import GalleryPage from "./Pages/gallery.page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<Master />} />
        <Route path="/consulting/:type" element={<ConsulancyPage />} />
        <Route path="/projects/:type" element={<ProjectsPage />} />
        <Route path="/gallery/:type" element={<GalleryPage />} />
      </Routes>
    </>
  );
};

export default App;
