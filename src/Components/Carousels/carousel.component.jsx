import React, { useState } from "react";
import Slider from "react-slick";

//Components
import ItemComponent from "./item.component";

const Carousels = () => {
  const [heroBanners, setHeroBanners] = useState([
    {
      title: "Global Leaders In Hospitality Consulting",
      description: "Creating Scalable F&B Brands Globally!",
      image: "https://dnyhospitality.com/wp-content/uploads/2022/06/01.png",
    },
    {
      title: "End-To-End Restaurant Consulting!",
      description:
        "Start your F&B business from scratch and operate like a pro, with our professional consulting!",
      image: "https://dnyhospitality.com/wp-content/uploads/2022/06/02.png",
    },
    {
      title: "Globally Creating F&B Brands",
      description:
        "End-To-End Consulting for Bars, Cafes, Restaurants, QSRs and Cloud Kitchen",
      image: "https://dnyhospitality.com/wp-content/uploads/2022/06/03.png",
    },
  ]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    fade: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        style={{ height: "90%" }}
        className="hidden bg-pink-50 dark:bg-blue-color py-20 md:block md:px-10 lg:px-44 bg-pink-50"
      >
        <Slider {...settings}>
          {heroBanners?.map((data) => (
            <div className="">
              <ItemComponent {...data} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-pink-50 dark:bg-blue-color md:hidden">
        <Slider {...settings}>
          {heroBanners?.map((data) => (
            <ItemComponent {...data} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousels;
