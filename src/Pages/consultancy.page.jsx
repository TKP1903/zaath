import React, { useEffect } from "react";

//Components
import Navbar from "../Components/Navbar";
import ServicesComponent from "../Components/services/services.component";
import ContactHero from "../Components/Hero/contact.component";
import Footer from "../Components/footer";
import ContactForm from "../Components/contactForm";
import { useParams } from "react-router-dom";
import IndividualService from "../Components/services/individualService.component";

const ConsulancyPage = () => {
  const { type } = useParams();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [type]);
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
      <div className="bg-pink-50 dark:bg-blue-color">
        <Navbar />
        {type === "our-services" ? (
          <div>
            <ContactHero {...heroData} />
            <div className="py-10 lg:px-20">
              <ServicesComponent />
            </div>
          </div>
        ) : (
          <IndividualService />
        )}
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default ConsulancyPage;
