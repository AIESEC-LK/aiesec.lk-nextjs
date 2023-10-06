import React from "react";
import Image from "next/image";
import logo from "@public/aiesecwhite.png";

const Footer = () => {
  return (
    <section className="relative">
      <div className=" grid sm:grid-cols-12 grid-cols-2 bg-aiesec-blue text-white py-10">
        <div className=" sm:col-start-2 sm:col-span-3 col-start-1 col-span-12 max-sm:px-5">
          <Image src={logo} />
          <p className=" text-justify text-sm ">
            AIESEC is a global platform for young people to develop their
            leadership potential through international internships and volunteer
            opportunities. Founded in 1948 and currently present in 110+
            countries and territories, AIESEC is a non-governmental, and
            not-for-profit organization entirely run by youth for youth. AIESEC
            Sri Lanka was established in 1995, as a member chapter of AIESEC
            International
          </p>
        </div>
        <div className=" pl-5 pt-8 sm:col-start-5 sm:col-span-2 col-start-1 col-span-5">
          <h2 className=" text-lg font-semibold">Youth</h2>
          <ul className=" list-none text-sm">
            <li>Volunteer Abroad</li>
            <li>Intern Abroad</li>
            <li>Teach Abroad</li>
            <li>Become a Member</li>
            <li>Intern Locally</li>
          </ul>
        </div>
        <div className=" sm:col-start-7 sm:col-span-2 pl-5 pt-8 col-start-6 col-span-6">
          <h2 className=" text-lg font-semibold">For Organizations</h2>
          <ul className=" list-none text-sm">
            <li>International Volunterr for NGOs</li>
            <li>International Interns for Companies</li>
            <li>International Interns for Educational Institutes</li>
            <li>Local Interns for Companies</li>
          </ul>
        </div>
        <div className=" sm:col-start-9 sm:ol-span-1 pl-5 pt-8 col-start-1 col-span-5">
          <h2 className=" text-lg font-semibold">General</h2>
          <ul className=" list-none text-sm">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Events</li>
            <li>Sign Up!</li>
          </ul>
        </div>
        <div className=" sm:col-start-10 sm:col-span-2 pl-5 pt-8 col-start-6 col-span-6">
          <div className=" bg-white w-60 h-7 rounded-xl">
            <span><input className=" pt-1 ml-3 w-40 h-6 text-aiesec-blue border-0 placeholder-aiesec-blue" type="text" placeholder="Enter Your Email"></input></span>
            <span className=" bg-aiesec-blue px-2 py-1 pt-0.5 rounded-xl"><buuton>Submit</buuton></span>
            <p className=" mt-10">Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
