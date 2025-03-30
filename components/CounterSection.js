'use client'
import React from "react";
import { useRef } from "react";
import Image from "next/image"
import banner1 from "@public/assets/images/landing/nlds2019-min.png";
// import CountUp from 'react-countup';
import NumberTransition from "./Micro_components/Microcounter";
import VisibilitySensor from "react-visibility-sensor";
import CountUpComponent from "./Micro_components/Microcounter";

export default function Counter(){
    return(
        <section className=" mt-48 w-screen">
            <div className=" relative flex align-middle justify-center">
                <Image src={banner1} alt="AIESEC Event Banner" className="w-screen z-0 md:visible invisible" />
                <div className=" absolute z-10 w-3/4 bg-aiesec-blue sm:h-52 h-fit rounded-xl sm:-top-32 -top-40">
                    <div className=" grid md:grid-cols-4 md:text-lg text-sm text-white md:m-14 m-5 grid-cols-1 grid-rows-4">
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" info-num"><span><VisibilitySensor><CountUpComponent end={1500}/></VisibilitySensor></span><span>+</span></li>
                                <li className=" flex justify-center">Active Members</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" info-num"><span id="unicount"><CountUpComponent end={15}/></span><span>+</span></li>
                                <li className=" flex justify-center">Universities</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4 sm:mt-3 md:mt-0 lg:mt-0 px-3">
                            <ul className=" list-none">
                                <li className=" info-num"><span id="prjcount"><CountUpComponent end={100} /></span><span>+</span></li>
                                <li className=" flex justify-center text-center">Social Projects Every Year</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 -mb-1 sm:mt-3 md:mt-0 lg:mt-0">
                            <ul className=" list-none">
                                <li className=" info-num"><span id="expcount"><CountUpComponent end={1500}/></span><span>+</span></li>
                                <li className=" flex justify-center text-center">Experiences Every Year</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center sm:mt-0 mt-40 font-semibold"><span className=" md:text-7xl text-4xl text-aiesec-mid-grey text-center">AIESEC CREATES YOUNG LEADERS FROM</span></div>
            <div className=" relative flex overflow-x-hidden">
                <div className=" animate-marquee whitespace-nowrap"><span className=" md:text-8xl text-6xl text-aiesec-mid-grey font-bold"><span className=" text-global-volunteer">VOLUNTEERING EXPERIENCES</span> & <span className=" text-global-teacher">PROFESSIONAL INTERNSHIPS</span> & <span className=" text-global-volunteer">TEACHING OPPORTUNITIES</span> & <span className=" text-global-teacher">MEMBERSHIP EXPERIENCES</span>.</span></div>
            </div>
        </section>
    )
}
