'use client'
import React from "react";
import { useRef } from "react";
import Image from "next/image"
import banner1 from "@public/nlds2019.png";
import CountUp from 'react-countup';
import NumberTransition from "./Micro_components/Microcounter";


export default function Counter(){
    return(
        <section className=" mt-56 w-screen">
            <div className=" relative flex align-middle justify-center">
                <Image src={banner1} className=" w-screen z-0"/>
                <div className=" absolute z-10 w-3/4 bg-aiesec-blue sm:h-52 h-fit rounded-xl -top-32">
                    <div className=" grid sm:grid-cols-4 sm:text-lg text-sm text-white m-14 grid-cols-1 grid-rows-4">
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" flex justify-center sm:text-7xl text-4xl"><span><CountUp start={1500} end={1600} duration={2} delay={0}/></span><span>+</span></li>
                                <li className=" flex justify-center">Active Members</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" flex justify-center sm:text-7xl text-4xl"><span id="unicount">19</span><span>+</span></li>
                                <li className=" flex justify-center">Universities</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 mb-4">
                            <ul className=" list-none">
                                <li className=" flex justify-center sm:text-7xl text-4xl"><span id="prjcount">100</span><span>+</span></li>
                                <li className=" flex justify-center">Social Projects Every Year</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center align-middle sm:mb-0 -mb-1">
                            <ul className=" list-none">
                                <li className=" flex justify-center sm:text-7xl text-4xl"><span id="expcount">1500</span><span>+</span></li>
                                <li className=" flex justify-center">Experiences Every Year</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative flex overflow-x-hidden">
                <div className=" animate-marquee whitespace-nowrap"><span className=" text-8xl text-aiesec-mid-grey">YOUTH LEADERSHIP EXPERIENCE YOUTH LEADERSHIP EXPERIENCE</span></div>
            </div>
        </section>
    )
}