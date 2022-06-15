import React from 'react'
import { Route, Routes } from 'react-router-dom';

//import Master from "./Pages/master";


// React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Pages/home.page';
import ContactPage from './Pages/contact.page';
import ConsulancyPage from './Pages/consultancy.page';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/contact-us" element={<ContactPage />} />        
        <Route path="/consultancy" element={<ConsulancyPage />} />        

      </Routes>
    </>
  )
}

export default App