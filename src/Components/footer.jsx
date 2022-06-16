import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin, BsTwitter, BsYoutube, BsDot } from "react-icons/bs";

const Footer = () => {
  const navitems = [
    {
      id: "HOME",
      link: "home",
    },
    {
      id: "WHY US",
      link: "why-us",
    },
    {
      id: "OUR SERVICES",
      link: "our-services",
    },
    {
      id: "PROJECTS",
      link: "projects",
    },
    {
      id: "INNOVATIONS",
      link: "innovations",
    },
    {
      id: "GALLERY",
      link: "gallery",
    },
    {
      id: "CONTACT US",
      link: "contact-us",
    },
  ];
  return (
    <>
      <div className="bg-black dark:bg-blue-color w-full flex flex-col md:flex-row items-center justify-around gap-8 lg:gap-8 py-20 border-t border-gray-400">
        <div className="md:w-4/12 flex flex-col items-center justify-center gap-6">
          <h4 className="text-xl font-semibold text-gray-50">Follow Us On</h4>
          <div className="flex flex-row md:flex-col lg:flex-row items-center justify-center gap-6">
            <GrInstagram className="w-8 h-8 text-gray-50" />
            <BsLinkedin className="w-8 h-8 text-gray-50" />
            <BsTwitter className="w-8 h-8 text-gray-50" />
            <BsYoutube className="w-8 h-8 text-gray-50" />
          </div>
        </div>
        <div className="flex flex-row items-start gap-3 justify-center mx-2">
          <div className="md:w-4/12 flex flex-col items-start justify-center gap-4">
            <h4 className="text-xl font-semibold text-gray-50">Quick Links</h4>
            <div>
              <ul className="flex flex-col items-start justify-center gap-3 text-white font-bold text-xs">
                {navitems.map((data) => (
                  <Link
                    to={`/${data.link}`}
                    className="flex flex-row items-center"
                  >
                    <BsDot className="w-6 h-6" />
                    <li key={`${data.id}`}>{data.id}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-4/12 flex flex-col items-start">
            <h4 className="text-xl font-semibold text-gray-50">Get In Touch</h4>
            <div className="dark:bg-blue-color flex flex-col items-start justify-center gap-2 md:gap-4 w-full p-4 rounded-2xl">
              <p className="text-sm md:text-md text-white dark:text-gray-50 text-center flex items-center">
                <div className="w-12 h-12">
                  <IoLocationSharp className="W-full h-full" />
                </div>
                Office 102, 1st floor, Ashar Bellezza (Ashar 16), 16th Road,
                WagleEstate, Thane West - 400607
              </p>
              <p className="text-sm md:text-md text-white text-gray-600 dark:text-gray-50 text-center flex items-center">
                <div className="w-12 h-12">
                  <MdEmail className="W-full h-full" />
                </div>
                zahara@gmail.com
              </p>
              <p className="text-sm md:text-md text-white text-gray-600 dark:text-gray-50 text-center flex items-center">
                <div className="w-12 h-12">
                  <MdCall className="W-full h-full" />
                </div>
                +919999999999
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
