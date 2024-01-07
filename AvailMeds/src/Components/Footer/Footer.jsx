import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-100 flex justify-center items-center">
        <div className="w-11/12 lg:w-8/12  m-auto p-4 flex flex-col lg:flex-row items-center justify-between lg:items-start">
          <img src="./logo.svg" className="h-40" alt="meds" />
          <div className="w-full lg:w-9/12  border p-4">
            <h2 className="text-2xl text-blue-700 mx-2">Avail-Meds</h2>
            <h2 className="text-black text-lg mx-2">Your Personal Hospital</h2>
            <br />
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div>
                <ul>
                  <Link to="/" className="underline m-3">
                    Home
                  </Link>
                  <Link to="/about" className="underline m-3">
                    About
                  </Link>
                </ul>
                <br />
                <ul>
                  <Link to="/contact" className="underline m-3">
                    Contact
                  </Link>
                  <Link to="/services" className="underline m-3">
                    Services
                  </Link>
                </ul>
              </div>
              <div className="p-none lg:px-9 text-justify mt-5 lg:m-0 ">
                <h1>Avail-Meds Services</h1>
                <p>
                  Welcome to Avail-Meds, your trusted partner in healthcare
                  solutions. At Avail-Meds, we are dedicated to providing
                  high-quality medical services tailored to meet your unique
                  needs. Our team of experienced healthcare professionals is
                  committed to delivering excellence in patient care, ensuring
                  your well-being is our top priority.
                  <br />
                  <button className="bg-blue-500 p-2 rounded-lg my-2">
                    Learn More...
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
