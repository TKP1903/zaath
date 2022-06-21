import React from "react";
import { useParams } from "react-router-dom";
import ProjectHero from "./projectHero";
import ReactPlayer from "react-player/lazy";
import ProjectData from "./data.json";

const ProjectsDetails = () => {
  const { type } = useParams();
  // const data = [
  //   {
  //     key: "The Thick Shake Factory",
  //     header: "The Thickshake Factory",
  //     description:
  //       "The ThickShake Factory™ is a QSR Chain and India's 1st Premium ThickShake Brand! Winner of Multiple Awards, the company is expanding Pan India to promote the category of specialty retailing of Shakes. Creating and Organizing the Milkshakes segment in Retail, Founded in 2013, have now grown 15X. Currently operate multiple outlets across Hyderabad, Bangalore and Mumbai, and are poised to grow rapidly and striving to create India's biggest Shakes Brand in the years to come.",
  //     images: [
  //       "https://dnyhospitality.com/wp-content/uploads/2022/03/Picsart_22-03-10_13-52-57-286-scaled.jpg",
  //       "https://dnyhospitality.com/wp-content/uploads/2022/03/Picsart_22-03-10_13-52-57-286-scaled.jpg",
  //     ],
  //     videos: [
  //       "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  //       "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  //     ],
  //   },
  //   {
  //     key: "Falafels",
  //     header: "Falafels",
  //     description:
  //       "One of the fastest growing Quick Service Restaurant meal chains in the country, Falafel’s – authentic, good quality, healthy Mediterranean and Lebanese cuisine. Falafel’s not only pioneered the segment but remains the leader even today. As consulting the brand in all segments of franchise development, expansion in the GCC & Indian market with more powerful brand recognition and market positioning with our business relationship.",
  //     images: [
  //       "https://dnyhospitality.com/wp-content/uploads/2022/03/7-31-1-scaled.jpg",
  //       "https://dnyhospitality.com/wp-content/uploads/2022/03/7-32-1-scaled.jpg",
  //       "https://dnyhospitality.com/wp-content/uploads/2022/03/7-32-1-scaled.jpg",
  //     ],
  //     videos: [
  //       "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  //       "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  //     ],
  //   },
  // ];
  const project = ProjectData.find((pro) => {
    return pro.key === type;
  });
  console.log(project);
  project.images.map((data) => console.log(data));
  return (
    <>
      <div>
        <ProjectHero
          title="Our Projects"
          header={`${project.header}`}
          description={project.description}
        />
        <div>
          <div className="">
            {project.images.map((data) => (
              <div className="w-full h-screen">
                <img src={`${data}`} alt="" className="w-full h-full" />
              </div>
            ))}
          </div>
          <div>
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
