import React from 'react';
import ContactForm from '../Components/contactForm';
import ContactHero from '../Components/Hero/contact.component';

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
//Components
import Navbar from '../Components/Navbar';

const ContactPage = () => {
    const heroData = {       
            "title": "Contact Us",
            "header": "Reach Out To Us With Your Business Idea!",
            "description": "Let us make your dream, a reality!",
            "image": "https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-5-7.png"
    }
  return (
    <>
        <div>
            <div style={{ background: "#020c2B"}} className="w-full md:fixed md:py-2">
                <Navbar />
            </div>
            <ContactHero {...heroData}/>
            <div style={{ background: "#060125"}} className="bg-black w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-0 px-3 lg:px-44 py-10 lg:py-44">
                <div className="flex flex-col items-center justify-center gap-6 md:w-1/2">
                    <div className="flex flex-col items-start justify-center gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl font-bold border-b border-yellow-600 text-gray-50 pb-2">CONTACT US</h1>
                        <p className="text-md text-gray-50 text-center">Submit your details, You will receive a Call Back!</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 md:px-20">
                    <div className="flex flex-col items-start justify-center gap-2 md:gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl font-bold border-b border-yellow-600 text-gray-50 pb-2">INFO</h1>
                        <p className="text-sm md:text-md text-gray-50 md:w-3/4 text-center flex items-center">
                            <div className="w-12 h-12"><IoLocationSharp className="W-full h-full"/></div>
                            Office 102, 1st floor, Ashar Bellezza (Ashar 16), 16th Road, Wagle Estate, Thane West - 400607
                        </p>
                        <p className="text-sm md:text-md text-gray-50 text-center flex items-center">
                            <div className="w-12 h-12"><MdEmail className="W-full h-full"/></div>
                            zahara@gmail.com
                        </p>
                        <p className="text-sm md:text-md text-gray-50 text-center flex items-center">
                            <div className="w-12 h-12"><MdCall className="W-full h-full"/></div>
                            +919999999999
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default ContactPage