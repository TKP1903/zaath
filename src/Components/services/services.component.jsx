import React from "react";
import Card from "./card";

const ServicesComponent = () => {
  const serviceCard = [
    {
      name: "CENTRAL KITCHEN CONSULTING",
      path: "centralkitchenconsulting",
      description: "Focus on the core production",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-17.png",
    },
    {
      name: "QSR CONSULTING",
      path: "qsrconsulting",
      description: "Fast, Easy, Replicable",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/02/Untitled-design-10.png",
    },
    {
      name: "CLOUD KITCHEN CONSULTING",
      path: "cloudkitchenconsulting",
      description: "Business that will become the future",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-11-1.png",
    },
    {
      name: "DINE-IN RESTAURANT CONSULTING",
      path: "dineinrestaurantconsuting",
      description: "Fine dine business for a family target audience",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-1.png",
    },
    {
      name: "FRANCHISE DEVELOPMENT",
      path: "franchisedevelopmentconsulting",
      description: "Standardize, Replicate & Revolutionize",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-16.png",
    },
    {
      name: "CO-WORKING KITCHEN CONSULTING",
      path: "co-workingcloudkitchenconsulting",
      description: "Invest in a ready co-working kitchen",
      image:
        "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-7-1.png",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-9 md:mx-2">
        {serviceCard.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </>
  );
};

export default ServicesComponent;
