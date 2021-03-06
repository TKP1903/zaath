import React from "react";
//import apiKey from "../../email_key";

export const ContactForm = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   emailjs
  //     .sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
  //     .then(
  //       (result) => {
  //         alert("Message Sent, We will get back to you shortly", result.text);
  //       },
  //       (error) => {
  //         alert("An error occurred, Please try again", error.text);
  //       }
  //     );
  // };
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
            <form 
              className="w-full flex flex-col items-start justify-center gap-2"
              action="https://formsubmit.co/339b4772859520d530ba5b99eccd96a7"
              method="POST"
              enctype="multipart/mixed"
              >
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Type of Project / Restaurent"
                name="email"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Location"
                name="location"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Capital Investment / Project Budget"
                name="capital/budget"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Contact No"
                name="number"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <input
                type="text"
                placeholder="Describe Your Concept / idea"
                name="idea"
                required
                className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
              />
              <br />
              <div className="px-8 py-2 text-xl font-bold bg-gray-800 text-gray-50 rounded-3xl shadow-lg">
                <input type="submit" />
              </div>
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
          <form className="w-full flex flex-col items-start justify-center gap-2" action="https://formsubmit.co/339b4772859520d530ba5b99eccd96a7"
              method="POST"
              enctype="multipart/mixed">
            <input
              type="text"
              placeholder="Your Name"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Type of Project / Restaurent"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Location"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Capital Investment / Project Budget"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Email Address"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Contact No"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <input
              type="text"
              placeholder="Describe Your Concept / idea"
              name=""
              required
              className="focus:outline-none focus:border-yellow-600 border-b pb-1.5 border-red-700 dark:border-gray-50 bg-transparent w-full placeholder:text-md placeholder:text-blue-color placeholder:dark:text-gray-50 plcaeholder:font-semibold text-md font-semibold text-blue-colr dark:text-gray-50"
            />
            <br />
            <button type="submit" className="px-8 py-2 text-xl font-bold bg-gray-800 text-gray-50 rounded-3xl shadow-lg">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
