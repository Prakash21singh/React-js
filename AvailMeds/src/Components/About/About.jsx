import React from "react";

const About = () => {
  return (
    <>
      <div className="min-h-screen w-full p-0 lg:p-5">
        <h1 className="text-center text-4xl text-blue-600 my-6">
          About AvailMeds
        </h1>
        <div className="w-11/12 lg:w-5/6 m-auto p-5 flex flex-col lg:flex-row justify-between items-center">
          <img src="./services.svg" alt="" className="h-72 mx-4" />
          <div className=" p-2 flex flex-col lg:flex-row justify-center items-center">
            <ul className="m-3">
              <li>
                <p className="text-2xl text-blue-500">Mission</p>
                <ul className=" list-inside list-disc">
                  <li>Provide Meds to Rural Areas</li>
                  <li>Provide Online Booking Facility</li>
                  <li>Provide Ambulance to Every House</li>
                  <li>Unpartiality we serve</li>
                </ul>
              </li>
            </ul>
            <ul className="m-3">
              <li>
                <p className="text-2xl text-blue-500">Value</p>
                <ul className=" list-inside list-disc">
                  <li>Hygiene Maintainance</li>
                  <li>Free Ambulance Services</li>
                  <li>Treating Everyone With Consideration</li>
                  <li>
                    Insuring Impartiality and Equal
                    <br />
                    treatment for all
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-center text-4xl text-blue-600 my-6">
          Unique Selling Propositions(USP)
        </h1>
        <div className="w-11/12 flex m-auto flex-wrap items-center justify-center">
          <div className="div w-11/12 lg:w-5/12 m-7 ">
            <h1 className="text-blue-300 text-xl mb-3">
              Free Ambulance Services:
            </h1>
            <p>
              Avail-Meds takes pride in offering complimentary ambulance
              services, ensuring that individuals in need can access emergency
              medical transportation without any financial burden.
            </p>
          </div>
          <div className="div w-11/12 lg:w-5/12 m-7">
            <h1 className="text-blue-300 text-xl mb-3">
              Doorstep Pick-Up Facility:
            </h1>
            <p>
              Our commitment to convenience extends to providing doorstep
              pick-up services. Whether for scheduled medical appointments or
              emergency situations, our team ensures prompt and hassle-free
              transportation from your home to the required destination.
            </p>
          </div>
          <div className="div w-11/12 lg:w-5/12 m-7">
            <h1 className="text-blue-300 text-xl mb-3">
              Online Booking Facility:
            </h1>
            <p>
              Avail-Meds leverages technology to enhance your experience. With
              our user-friendly online booking platform, you can schedule
              appointments, request ambulance services, and consult with doctors
              from the comfort of your home. This streamlined process saves time
              and provides easy accessibility.
            </p>
          </div>
          <div className="div w-11/12 lg:w-5/12 m-7">
            <h1 className="text-blue-300 text-xl mb-3">
              Online Doctor Consultations:
            </h1>
            <p>
              Embrace the future of healthcare with Avail-Meds' online doctor
              consultations. Access qualified healthcare professionals remotely,
              receiving medical advice, prescriptions, and personalized care
              plans without the need for in-person visits.
            </p>
          </div>
          <div className="div w-11/12 lg:w-5/12 m-7">
            <h1 className="text-blue-300 text-xl mb-3">
              Direct Contact with Doctors:
            </h1>
            <p>
              Avail-Meds fosters direct communication between patients and
              healthcare providers. By facilitating direct contact with our
              experienced doctors, we empower individuals to seek guidance,
              clarify doubts, and make informed decisions about their health.
            </p>
          </div>
          <div className="div w-10/12 lg:w-5/12 m-7">
            <h1 className="text-blue-300 text-xl mb-3">
              Emergency Booking Assistance:
            </h1>
            <p>
              Recognizing the urgency of certain medical situations, Avail-Meds
              ensures immediate support through our emergency booking
              assistance. Our dedicated team is ready to respond swiftly,
              providing the necessary medical attention during critical times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
