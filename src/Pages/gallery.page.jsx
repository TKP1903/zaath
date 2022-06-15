import React from 'react'
import Navbar from '../Components/Navbar'

const GalleryPage = () => {
  return (
    <>
        <div>
            <div className="w-full md:fixed md:py-2 bg-pink-50 dark:bg-blue-color">
                <Navbar />
            </div>
            <h1 className="text-4xl font-bold text-blue-color text-center lg:p-80">
                Gallery Page
            </h1>
      </div>
    </>
  )
}

export default GalleryPage