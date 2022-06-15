import React from 'react';


const ItemComponent = (props) => {
  return (
    <>
        <div style={{ height: "600px" }} className="hidden md:flex items-center justify-center w-full text-gray-50">
          <div className="w-1/2 flex flex-col items-start justify-center gap-6">
            <h1 className="text-5xl lg:text-6xl font-bold">End-To-End Restaurant Consulting!</h1>
            <p className="text-md lg:text-lg text-gray-500 w-5/6">End-To-End Consulting for Bars, Cafes, Restaurants, QSRs and Cloud Kitchen</p>
          </div>
          <div className="h-full">
            <img src={`${props.image}`} alt="Loading..." className="w-full h-full p-20 lg:p-24 z-0"/>
          </div>
        </div>

        <div style={{ height: "90%" }} className="flex flex-col md:hidden items-center justify-center relative pt-10 text-gray-50">
          <div className="flex flex-col items-start justify-center gap-6 w-4/5">
            <h1 className="text-4xl text-center font-bold">End-To-End Restaurant Consulting!</h1>
            <p className="text-md text-gray-500 text-center">End-To-End Consulting for Bars, Cafes, Restaurants, QSRs and Cloud Kitchen</p>
          </div>
          <div className="h-full">
            <img src={`${props.image}`} alt="Loading..." className="w-full h-full p-20 lg:p-24"/>
          </div>
        </div>
    </>
  )
}

export default ItemComponent