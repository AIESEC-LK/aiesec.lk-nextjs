'use client'
import MultiText from "@components/Micro_components/Multitext";
import VideoPlayer from "./Micro_components/videoplayer";
import React, { useEffect, useRef } from "react";


function HomeVideo() {
  return (
    <section className=" relative w-screen overflow-hidden">
      <div className=" overflow-hidden w-screen z-0">
        <VideoPlayer/>
      </div>
      <div className=" absolute bottom-5 left-5 sm:bottom-10 sm:left-10 md:bottom-18 md:left-18 xl:bottom-72 xl:left-32 z-20 ">
        <MultiText />
      </div>
      <div className=" absolute bg-gradient-to-t from-aiesec-blue to-transparent h-96 z-10 w-screen bottom-0"></div>
    </section>
  );
}

export default HomeVideo;
