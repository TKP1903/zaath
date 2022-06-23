import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ProjectData from "./data.json";
import ContactHero from "../Hero/contact.component";

const ProjectsDetails = () => {
  const { type } = useParams();
  const project = ProjectData.find((pro) => {
    return pro.key === type;
  });
  return (
    <>
      <div>
        <ContactHero
          title="Our Projects"
          header={`${project.header}`}
          description={project.description}
          image={`${project.banner}`}
        />
        <div className="flex flex-col items-center gap-10 w-full py-20">
          <div className="w-full">
            {project.images.map((data) => (
              <div className="w-full h-screen">
                <img src={`${data}`} alt="" className="w-full h-full" />
              </div>
            ))}
          </div>
          <div className="w-full">
            {project.videos.map((data) => (
              <div className="w-full h-screen">
                <ReactPlayer url={`${data}`} width={"100%"} height={"100%"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetails;
