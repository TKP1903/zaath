import React from 'react';
import ContactForm from '../Components/contactForm';
import ContactHero from '../Components/Hero/contact.component';

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
//Components
import Navbar from '../Components/Navbar';
import ServicesComponent from '../Components/services/services.component';

const ConsulancyPage = () => {
    const heroData = {       
            "title": "Consultancy",
            "header": "End-To-End Consulting!",
            "description": "Step by Step professional guidance from the project planning, strategy, design to execution.",
            "image": "https://dnyhospitality.com/wp-content/uploads/2022/06/consulting-opts-2.png"
    }
  return (
    <>
        <div>
            <div className="w-full md:fixed md:py-2 bg-pink-50 dark:bg-blue-color">
                <Navbar />
            </div>
            <ContactHero {...heroData}/>
            <div  className="py-10 lg:px-44">
                <ServicesComponent />
            </div>


        </div>
    </>
  )
}

export default ConsulancyPage;