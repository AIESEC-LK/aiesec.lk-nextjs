import React, { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <video className=" w-screen" autoPlay loop muted>
      <source src="/aslvideo.mp4" type="video/mp4" className=""/>
    </video>
  );
};

export default VideoPlayer;
