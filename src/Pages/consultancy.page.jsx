import React from "react";
import ContactForm from "../Components/contactForm";
import ContactHero from "../Components/Hero/contact.component";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
//Components
import Navbar from "../Components/Navbar";
import ServicesComponent from "../Components/services/services.component";
import Footer from "../Components/footer";

const ConsulancyPage = () => {
  const heroData = {
    title: "Consultancy",
    header: "End-To-End Consulting!",
    description:
      "Step by Step professional guidance from the project planning, strategy, design to execution.",
    image:
      "https://dnyhospitality.com/wp-content/uploads/2022/06/consulting-opts-2.png",
  };
  return (
    <>
      <div>
        <div className="w-full md:fixed md:py-2 bg-pink-50 dark:bg-blue-color">
          <Navbar />
        </div>
        <h1 className="text-4xl font-bold text-blue-color text-center lg:p-80">
          OUR SERVICES Page
        </h1>
        {/* <ContactHero {...heroData} />
        <div className="py-10 lg:px-44">
          <ServicesComponent />
        </div>
        <Footer /> */}
      </div>
    </>
  );
};

export default ConsulancyPage;
