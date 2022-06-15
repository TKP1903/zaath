import React from 'react'
import { Route, Routes } from 'react-router-dom';

//import Master from "./Pages/master";


// React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Pages/home.page';
import Master from './Pages/master';
import ConsultingService from './Pages/consultingService';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/:type" element={<Master />} />  
        <Route path="/consulting/:id" element={<ConsultingService />} />  

      </Routes>
    </>
  )
}

export default App