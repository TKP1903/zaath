import React from "react";

export const ContactForm = () => {
  return (
    <>
      <div className="md:px-10 lg:px-44 flex items-center justify-center bg-red-50 dark:bg-blue-color py-20 border-t border-gray-100">
        <div className="bg-red-50 dark:bg-blue-color flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 p-4 lg:py-10 rounded-2xl">
          <div className="flex flex-col items-start justify-center gap-4 w-full">
            <h1 className="text-2xl md:text-4xl font-bold border-b border-yellow-600 text-blue-color dark:text-gray-50 pb-2">
              CONTACT US
            </h1>
            <p className="text-md text-gray-400 dark:text-gray-50 text-center">
              Submit your details, You will receive a Call Back!
            </p>
          </div>
          <div className="w-full">
            <form className="w-full flex flex-col items-start justify-center gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Type of Project / Restaurent"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Location"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Capital Investment / Project Budget"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Email Address"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Contact No"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Describe Your Concept / idea"
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <button className="px-8 py-2 text-xl font-bold bg-gray-800 text-gray-50 rounded-3xl shadow-lg">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export const CForm = () => {
  return (
    <>
      <div className="bg-red-50 dark:bg-blue-color flex flex-col items-center justify-center gap-6 md:w-1/2 p-4 lg:py-10 rounded-2xl">
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <h1 className="text-2xl md:text-4xl font-bold border-b border-yellow-600 text-blue-color dark:text-gray-50 pb-2">
            CONTACT US
          </h1>
          <p className="text-md text-gray-400 dark:text-gray-50 text-center">
            Submit your details, You will receive a Call Back!
          </p>
        </div>
        <div className="w-full">
          <form className="w-full flex flex-col items-start justify-center gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Type of Project / Restaurent"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Location"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Capital Investment / Project Budget"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Email Address"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Contact No"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Describe Your Concept / idea"
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <button className="px-8 py-2 text-xl font-bold bg-gray-800 text-gray-50 rounded-3xl shadow-lg">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
