import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Toggle from "../../Themes/ThemeToggle";

const LgNav = () => {
  const { type } = useParams();
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
      id: "WHO WE ARE",
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
      <div className="hidden  md:flex flex-row items-center justify-between md:mx-10 lg:mx-32 md:h-16">
        <div className="w-26 h-14 p-1">
          {/* <img
            src="https://dnyhospitality.com/wp-content/uploads/2022/04/dny-logo.png"
            alt="LOGO"
            className="w-full h-full"
          /> */}
          <h4
            style={{
              color: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,202,197,0.22202384371717432) 7%, rgba(0,212,255,1) 100%)",
            }}
            className="text-3xl text-center font-bold text-gray-50"
          >
            Zaath
          </h4>
          <p className="text-bluecolor dark:text-gray-50 text-sm font-semibold px-2">
            Food Hospitality Services
          </p>
        </div>
        <div className="">
          <ul className="hidden md:flex flex-row items-center justify-center gap-3 lg:gap-6 text-md lg:text-md font-lato text-black dark:text-gray-50 mb-2">
            {navitems.map((data) => (
              <Link to={`/${data.link}`}>
                <li
                  key={`123${data.id}`}
                  className={
                    data.link === type
                      ? "text-yellow-500 border-b-2 border-yellow-500 pb-1 transition ease-in-out delay-150"
                      : ""
                  }
                >
                  {data.id}
                </li>
              </Link>
            ))}
            {/* <a href="#home">HOME</a>
            <a href="#our-services">OUR SERVICES</a>
            <a href="#our-clientele">OUR CLIENTELE</a>
            <a href="#footer">CONTACT US</a> */}
            <Toggle />
          </ul>
        </div>
      </div>
    </>
  );
};

const SmNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
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
      id: "WHO WE ARE",
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
    // {
    //   id: "CONTACT US",
    //   link: "contact-us",
    // },
  ];
  return (
    <>
      {/* {isDropDownOpen ? (
        // <div className="md:hidden w-full h-screen flex flex-col items-end bg-black">
        //   <button
        //     className="w-9 h-9 mr-5 mt-4"
        //     onClick={() => setIsDropDownOpen((prev) => !prev)}
        //   >
        //     <MdClose className="w-full h-full text-gray-50 ease-in duration-300" />
        //   </button>
        //   <div className="w-full h-full flex flex-col items-center justify-center">
        //     <ul className="flex flex-col items-center justify-center gap-6 text-white font-bold text-lg">
        //       {navitems.map((data) => (
        //         <Link to={`/${data.link}`}>
        //           <li key={`${data.id}`}>{data.id}</li>
        //         </Link>
        //       ))}
        //       </ul>
        //     </div>

        // </div>
        <div className="flex flex-col items-start gap-6 mt-14">
          <a href="#home">HOME</a>
          <a href="#our-services">OUR SERVICES</a>
          <a href="#our-clientele">OUR CLIENTELE</a>
          <a href="#footer">CONTACT US</a>
        </div>
      ) : (
        <div className="md:hidden w-full flex items-center justify-between px-4">
          <div className="p-2">
            {/* <img
              src="https://dnyhospitality.com/wp-content/uploads/2022/04/dny-logo.png"
              alt="LOGO"
              className="w-full h-full"
            /> */}
      {/* <h4 className="text-3xl text-start md:text-center font-bold text-blue-900 dark:text-gray-50">
              Zaath
            </h4>
            <p className="text-bluecolor dark:text-gray-50 text-sm font-semibold md:px-2">
              Food Hospitality Services
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Toggle />
            <button
              className="w-7 h-7 text-gray-900 dark:text-gray-50"
              onClick={() => setIsDropDownOpen((prev) => !prev)}
            >
              <GiHamburgerMenu className="w-full h-full ease-in duration-300" />
            </button>
          </div>

        </div> */}
      {/* )}  */}
      <div className="block md:hidden">
        <div className="bg-pink-50 dark:bg-blue-color w-full md:hidden w-full flex items-center justify-between px-4">
          <div className="p-2">
            {/* <img
              src="https://dnyhospitality.com/wp-content/uploads/2022/04/dny-logo.png"
              alt="LOGO"
              className="w-full h-full"
            /> */}
            <h4 className="text-3xl text-start md:text-center font-bold text-blue-900 dark:text-gray-50">
              Zaath
            </h4>
            <p className="text-bluecolor dark:text-gray-50 text-sm font-semibold md:px-2">
              Food Hospitality Services
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Toggle />
            <button
              className="w-7 h-7 text-gray-900 dark:text-gray-50"
              onClick={() => setIsDropDownOpen((prev) => !prev)}
            >
              <GiHamburgerMenu className="w-full h-full ease-in duration-300" />
            </button>
          </div>
        </div>
        {isDropDownOpen && (
          <div className="flex items-end justify-end w-full">
            <div className="w-44 py-4 flex flex-col items-start px-2 justify-end gap-3  dark:bg-pink-50 dark:text-blue-color text-gray-50 bg-blue-color font-light text-md">
              <a href="#home">HOME</a>
              <a href="#our-services">OUR SERVICES</a>
              <a href="#our-clientele">OUR CLIENTELE</a>
              <a href="#footer">CONTACT US</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
const Navbar = () => {
  return (
    <div>
      <div className="fixed bg-pink-50 dark:bg-blue-color w-full md:fixed md:py-2 z-50">
        <LgNav />
      </div>
      <div className="fixed w-full z-50">
        <SmNav />
      </div>
    </div>
  );
};

export default Navbar;
