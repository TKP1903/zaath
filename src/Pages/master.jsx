import React from 'react'
import { useParams } from 'react-router-dom';
import AboutPage from './about.page';
import ConsulancyPage from './consultancy.page';
import ContactPage from './contact.page';
import GalleryPage from './gallery.page';
import HomePage from './home.page';
import InnovationPage from './innovation.page';
import ProjectsPage from './projects.page';

const Master = () => {
  const { type } = useParams();
  
  return (
    <>
      { type === "home" && <HomePage /> }
      { type === "why-us" && <AboutPage /> }
      { type === "consultancy" && <ConsulancyPage /> }
      { type === "projects" && <ProjectsPage /> }
      { type === "innovations" && <InnovationPage /> }
      { type === "gallery" && <GalleryPage /> }
      { type === "contact-us" && <ContactPage /> }

    </>
  )
}

export default Master;