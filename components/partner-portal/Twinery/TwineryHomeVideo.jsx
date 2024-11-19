import React, { useEffect, useRef } from "react";
import VideoMultiText from "./VideoMultiText";

function TwineryHomeVideo() {
	return (
		<section id="home" className="relative w-fit overflow-hidden">
			<div className=" w-screen z-0 sm:mt-0 mt-20 overflow-hidden">
				<video src={require("@public/assets/videos/twinery-home-hd.mp4")} muted autoPlay loop />
			</div>
			<div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 md:bottom-18 md:left-18 xl:bottom-72 xl:left-32 z-20 ">
				<VideoMultiText />
			</div>
			{/* <div className=" absolute bg-gradient-to-t from-twinery-black via-twinery-red to-transparent h-1/5 z-10 w-screen bottom-0"></div> */}
		</section>
	);
}

export default TwineryHomeVideo;
