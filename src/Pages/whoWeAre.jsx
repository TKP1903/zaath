import React from "react";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/footer";

//Components
import ContactHero from "../Components/Hero/contact.component";
import Navbar from "../Components/Navbar";
import ServicesDescription from "../Components/services/ServicesDescription";

const WhoWeArePage = () => {
  const heroData = {
    title: "Why We Are",
    header: "Why We Are?",
    description: "",
    image:
      "https://dnyhospitality.com/wp-content/uploads/2022/06/why-us-2-opt.png",
  };
  const you_must_know = [
    {
      title: "Where We Come In Action",
      service_description: [
        "Having successfully executed over 210 F&B projects using most preferred business models, DNY helps to set up one’s business from scratch. We provide structured guidance to start and operate a food business. We work with integrity, promote open-working culture, ensure multiplication of leaders and create entrepreneurs.",
        "Our 15+ years of experience enables you to get a trusted direction, consulting and give a strong start to your business. Our End-to-End strategy, which includes Brand Ideation, Concept Development, Feasibility Study, Menu Engineering, Operational SOPs, Kitchen Planning, Team Training, and Branding, helps you meet professional challenges and keeps you connected to what’s round the corner.",
        "Owning a restaurant that can be started with a low investment can be one of the most rewarding experiences of one’s life since, and can open up a slew of new possibilities since, restaurant market is growing rapidly in the world.",
      ],
      services_image:
        "https://dnyhospitality.com/wp-content/uploads/2022/04/whyus1.jpg",
    },
    {
      title: "Our Business Vision",
      service_description: [
        "We aim to create a well-defined framework for the Brand, also standardize business operations. We aid you in running your company model hassle-free.",
        "With our expertise in the hospitality industry, we have grown our business in three countries: India, the United States, and the United Arab Emirates.",
        "Hacks to create a brand with minimum capital investment",
        "Achieve brand level expansion",
        "Boost business revenue growth and have lower operational costs",
        "Have a unique brand identity are keystones our success tales.",
      ],
      services_image:
        "https://dnyhospitality.com/wp-content/uploads/2022/04/whyus2.jpg",
    },
  ];
  return (
    <>
      <div className="bg-red-50 dark:bg-blue-color">
        <Navbar />
        <ContactHero {...heroData} />
        <ServicesDescription data={you_must_know} />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default WhoWeArePage;
