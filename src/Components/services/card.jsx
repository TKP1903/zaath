import React from 'react'

const Card = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center gap-6 shadow-xl rounded-3xl">
            <div className="w-full h-full">
                <img src="https://dnyhospitality.com/wp-content/uploads/2022/03/Untitled-design-11-1.png" alt="loading.." className="w-full h-full rounded-t-3xl"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 pb-3">
                <h4 className="text-lg font-semibold text-gray-900">CLOUD KITCHEN CONSULTING</h4>
                <p className="text-md font-semibold text-gray-400">(Business that will become the future)</p>
            </div>
        </div>
    </>
  )
}

export default Card