import React from "react";

//Components
import Navbar from "../Components/Navbar";
import ServicesComponent from "../Components/services/services.component";
import ContactHero from "../Components/Hero/contact.component";
import Footer from "../Components/footer";
import ContactForm from "../Components/contactForm";

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
        <Navbar />
        <ContactHero {...heroData} />
        <div className="py-10 lg:px-44">
          <ServicesComponent />
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default ConsulancyPage;
