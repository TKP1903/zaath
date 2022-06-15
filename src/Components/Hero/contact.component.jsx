import React from 'react'

const ContactHero = (props) => {
  return (
    <>
        <div className="md:px-20 bg-pink-50 dark:bg-blue-color lg:px-44 bg-pink-50 flex flex-col md:flex-row items-center justify-center gap-10 md:py-36 lg:py-0 pt-8 lg:pt-28">
            <div className="flex flex-col items-start justify-center gap-6 md:w-1/2 px-3 text-blue-color dark:text-gray-50">
                <p className="text-md font-semibold pb-2 border-b-2 border-yellow-500">{props.title}</p>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{props.header}</h1>
                <p className="text-md font-semibold text-gray-500">{props.description}</p>
            </div>
            <div className="md:w-1/2">
                <img src={`${props.image}`} alt="" className="w-full h-full p-2 md:p-4 lg:p-10" />
            </div>
        </div>
    </>
  )
}

export default ContactHero