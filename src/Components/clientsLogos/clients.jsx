import React from "react";

//client logos
import sb from "../../assets/sb.jpeg";
import aa from "../../assets/aa.jpeg";
import cfc from "../../assets/cfc.jpeg";
import egfc from "../../assets/egfe.jpeg";
import foodo from "../../assets/foodo.jpeg";

const Clients = () => {
  const clientLogos = [
    {
      name: "SB",
      logo: sb,
    },
    {
      name: "ATTI SQUARE",
      logo: aa,
    },
    {
      name: "CRAVE FOOD COMPANY",
      logo: cfc,
    },
    {
      name: "EVER GREEN FOOD EXPRESS",
      logo: egfc,
    },
    {
      name: "FOODO",
      logo: foodo,
    },
  ];
  return (
    <>
      {/* <div className="hidden md:block w-full h-screen mx-10">
            <img src="https://dnyhospitality.com/wp-content/uploads/2022/03/Front-page-logo-02-7-1024x673.jpg" alt="" className="w-full h-full"/>
        </div> */}
      <div className="flex flex-wrap items-center justify-around gap-6">
        {clientLogos.map((data) => (
          <div className="flex flex-row items-center justify-around gap-3 border-2 w-full lg:w-80 mx-4 h-36 rounded-lg px-4 shadow-sm">
            <div className="w-36 h-38">
              <img src={data.logo} alt="" className="w-full h-full" />
            </div>
            <h4 className="text-xl font-semibold px-4 dark:text-gray-50">
              {data.name}
            </h4>
          </div>
        ))}
      </div>
      {/* <div className="md:hidden w-full h-screen mx-10">
            <img src="https://dnyhospitality.com/wp-content/uploads/2022/03/Inventory-management-27.png" alt="" className="w-full h-full"/>
        </div> */}
    </>
  );
};

export default Clients;
