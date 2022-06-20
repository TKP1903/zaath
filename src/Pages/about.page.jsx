import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { type } = useParams();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [type]);
  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-4xl font-bold text-blue-color text-center lg:p-80">
          About Us Page
        </h1>
      </div>
    </>
  );
};

export default AboutPage;
