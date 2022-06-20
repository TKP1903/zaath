import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/footer";

//Components
import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/Projects/projectCard.component";
import ProjectHero from "../Components/Projects/projectHero";

const ProjectsPage = () => {
  const { type } = useParams();
  const projects = [
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
    {
      name: "The Thick Shake Factory",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/New-size-288-26.jpg",
    },
  ];

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [type]);
  return (
    <>
      <div className="bg-pink-50 dark:bg-blue-color bg-pink-50 dark:bg-blue-color">
        <Navbar />
        <ProjectHero
          title="Our Projects"
          header="Ideas Are Concepts Until Executed."
          description="Brands as creative structures from human minds."
        />
        <div className="md:block md:px-10 pb-20">
          <div className="flex flex-wrap items-center justify-center gap-10 ">
            {projects.map((data) => (
              <ProjectCard {...data} />
            ))}
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
