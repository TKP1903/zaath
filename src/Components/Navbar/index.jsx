import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import classnames from "classnames";

const LgNav = () => {
    const { type } = useParams();
    console.log(type);
    const navitems = [
        {
            id: "HOME",
            link: "",            
        },
        {
            id: "WHY US",
            link: "why-us",            
        },
        {
            id: "CONSULTING",
            link: "consultancy",            
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
    ]
    return (
        <>
            <div className="hidden md:flex flex-row items-center justify-between mx-44">
                <div className="w-26 h-14 p-1">
                    <img src="https://dnyhospitality.com/wp-content/uploads/2022/04/dny-logo.png" alt="LOGO" className="w-full h-full" />
                </div>
                <div>
                    <ul className="hidden lg:flex flex-row items-center justify-center gap-5 text-sm font-lato text-gray-50">                        
                    {
                        navitems.map((data) => (
                            <Link to={`/${data.link}`}>                
                                <li key={`123${data.id}`}
                                    className={data.link === type ? "text-yellow-500 border-b-2 border-yellow-500 pb-2" : "" }
                                >
                                    {data.id}
                                </li>
                            </Link>
                        ))
                    }                                     
                    </ul>
                </div>
            </div>
        </>
    )
}

const SmNav = () => {
    const [ isDropDownOpen, setIsDropDownOpen ] =  useState(false);
    const navitems = [
        {
            id: "HOME",
            link: "/",            
        },
        {
            id: "WHY US",
            link: "why-us",            
        },
        {
            id: "CONSULTING",
            link: "consulting",            
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
    ]
    return (
        <>
            {isDropDownOpen ? (
                <div className="md:hidden w-full h-screen flex flex-col items-end bg-black">
                    <button 
                        className="w-9 h-9 mr-5 mt-4"
                        onClick={() => setIsDropDownOpen((prev) => !prev) }
                    >
                        <MdClose className="w-full h-full text-gray-50 ease-in duration-300"/>
                    </button>
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <ul className="flex flex-col items-center justify-center gap-6 text-white font-bold text-lg">
                        {
                        navitems.map((data) => (
                            <Link to={`${data.link}`}>                
                                <li key={`123${data.id}`}>
                                    {data.id}
                                </li>
                            </Link>
                        ))
                    }  
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="md:hidden flex items-center justify-between px-4">
                <div className="w-24 h-12 p-2">
                    <img src="https://dnyhospitality.com/wp-content/uploads/2022/04/dny-logo.png" alt="LOGO" className="w-full h-full" />
                </div>
                <div>
                    <button className="w-7 h-7 text-gray-50"
                        onClick={() => setIsDropDownOpen((prev) => !prev) }
                    >
                        <GiHamburgerMenu className="w-full h-full ease-in duration-300"/>
                    </button>
                </div>
            </div>
            )                
            }
            
        </>
    )
}
const Navbar = () => {
  return (
    <div className=''>
        <LgNav />
        <SmNav />
    </div>
  )
}

export default Navbar