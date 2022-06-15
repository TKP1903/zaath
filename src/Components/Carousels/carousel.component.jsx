import React, { useState } from 'react'
import Slider from 'react-slick';

//Components
import ItemComponent from './item.component';


const Carousels = () => {
  const [heroBanners, setHeroBanners] = useState([
    "https://dnyhospitality.com/wp-content/uploads/2022/06/03.png",
    "https://dnyhospitality.com/wp-content/uploads/2022/06/01.png"
  ]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div style={{ height: "90%", background: "#020c2B" }} className="hidden py-20 md:block md:px-10 lg:px-44 bg-pink-50">
        <Slider {...settings}>
        {
          heroBanners?.map((data) => (
          <div className="">
            <ItemComponent image={data}/>        
          </div>               
          ))
        }
        </Slider>
      </div>
      <div style={{ background: "#020c2B" }} className="bg-pink-50 md:hidden">
        <Slider {...settings}>
        {
          heroBanners?.map((data) => (            
            <ItemComponent image={data}/>        
          ))
        }
        </Slider>
    </div>
    </>
  )
}

export default Carousels