import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-11/12 lg:w-3/5 border-2 h-full flex flex-col-reverse lg:flex-row items-center justify-center min-h-96 shadow-md rounded-lg">
          <div className="left w-full lg:w-7/12 h-96 p-5">
            <h2>Get In Touch</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                className=" border-2 rounded-lg p-3 w-1/2"
              />
              <input
                type="email"
                placeholder="Email"
                className=" border-2 rounded-lg p-3 w-1/2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="border-2 rounded-lg p-3 my-2 w-full  "
              />
            </div>
            <div>
              <textarea
                className="border-2 w-full rounded-lg p-3"
                name="textarea"
                placeholder="Message"
                id=""
                cols="60"
                rows="5"></textarea>
            </div>
            <button className="bg-blue-400 p-3 rounded-lg font-semibold">
              Send Message
            </button>
          </div>
          <div className=" w-full bg-blue-300 lg:w-5/12 h-96 flex flex-col justify-center ">
            <h2 className="text-3xl font-bold ml-5">Contact Us</h2>
            <div className=" my-3 flex items-center justify-start ml-5">
              <b className="mx-3">Address:</b>New Delhi, Noida Sector 28
            </div>
            <div className=" my-3 flex items-center justify-start ml-5">
              <b className="mx-3">Contact:</b>+91234343338
            </div>
            <div className=" my-3 flex items-center justify-start ml-5">
              <b className="mx-3">Email:</b>Pk87096639@gmail.com
            </div>
            <div className=" my-3 flex items-center justify-start ml-5">
              <b className="mx-3">Website:</b>AvailMeds.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
