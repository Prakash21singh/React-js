import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-3/4 m-auto h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <img src="./doctors.svg" alt="" className="h-96" />
        <div className="item  p-2 text-left w-3/4 lg:w-1/2">
          <h1 className="text-3xl text-blue-600 mb-6">Avail-Meds</h1>
          <p className="text-left">
            Unlock swift healthcare at Avail-Meds! Secure your appointment
            effortlessly from home for faster service. Our online booking
            ensures priority access to telemedicine consultations, prescription
            fulfillment, and health screenings. Experience healthcare
            convenience with just a click!
          </p>
          <button className="bg-blue-400 p-2 rounded-lg text-white mt-2">
            <Link to="about">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
