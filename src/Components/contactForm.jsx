import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="w-full">
            <form className="w-full flex flex-col items-start justify-center gap-2">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Type of Project / Restaurent" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Location" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Capital Investment / Project Budget" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Contact No" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Describe Your Concept / idea" 
                    className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-gray-50"
                />
                <br />
                <button 
                    className="px-8 py-2 text-xl bg-white rounded-3xl"
                >
                    SUBMIT
                </button>


            </form>
        </div>
    </>
  )
}

export default ContactForm