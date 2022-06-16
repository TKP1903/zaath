import React from "react";
import ContactForm from "../Components/contactForm";
import ContactHero from "../Components/Hero/contact.component";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
//Components
import Navbar from "../Components/Navbar";
import MapView from "../Components/mapView";
import Footer from "../Components/footer";

const ContactPage = () => {
  const heroData = {
    title: "Contact Us",
    header: "Reach Out To Us With Your Business Idea!",
    description: "Let us make your dream, a reality!",
    image:
      "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-5-7.png",
  };
  return (
    <>
      <div>
        <div className="w-full md:fixed md:py-2 bg-pink-50 dark:bg-blue-color">
          <Navbar />
        </div>
        <ContactHero {...heroData} />
        <div className="bg-slate-50 dark:bg-light-blue w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-0 px-3 lg:px-44 py-10 lg:py-44">
          <div className="bg-red-50 dark:bg-blue-color flex flex-col items-center justify-center gap-6 md:w-1/2 p-4 lg:py-10 rounded-2xl">
            <div className="flex flex-col items-start justify-center gap-4 w-full">
              <h1 className="text-2xl md:text-4xl font-bold border-b border-yellow-600 text-blue-color dark:text-gray-50 pb-2">
                CONTACT US
              </h1>
              <p className="text-md text-gray-400 dark:text-gray-50 text-center">
                Submit your details, You will receive a Call Back!
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 md:w-1/2 md:px-10 lg:px-20">
            <div className="bg-red-50 dark:bg-blue-color flex flex-col items-start justify-center gap-2 md:gap-4 w-full p-4 rounded-2xl">
              <h1 className="text-3xl md:text-4xl font-bold border-b border-yellow-600 text-blue-color dark:text-gray-50 pb-2">
                INFO
              </h1>
              <p className="text-sm md:text-md text-grey-800 dark:text-gray-50 md:w-3/4 text-center flex items-center">
                <div className="w-12 h-12">
                  <IoLocationSharp className="W-full h-full" />
                </div>
                Office 102, 1st floor, Ashar Bellezza (Ashar 16), 16th Road,
                Wagle Estate, Thane West - 400607
              </p>
              <p className="text-sm md:text-md text-gray-600 dark:text-gray-50 text-center flex items-center">
                <div className="w-12 h-12">
                  <MdEmail className="W-full h-full" />
                </div>
                zahara@gmail.com
              </p>
              <p className="text-sm md:text-md text-gray-600 dark:text-gray-50 text-center flex items-center">
                <div className="w-12 h-12">
                  <MdCall className="W-full h-full" />
                </div>
                +919999999999
              </p>
            </div>
            <div className="bg-red-50 dark:bg-blue-color my-4 w-full flex flex-col gap-4 p-4 rounded-2xl">
              <MapView
                title={"Zaath Consulting Services"}
                phno={`+91 999734709237497`}
                mapLocation={[13.029812431043233, 80.24452209137593]}
                address={
                  "New no 21,Old, no 14, Chamiers 3rd Ln, Nandanam, Chennai, Tamil Nadu 600035"
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
