import React from "react";

function PartnerHero() {
  return (
    <div>
      <section id="home" className="relative overflow-hidden">
        <div className="w-100 z-0 sm:mt-0 mt-20 max-h-[60vh]">
          <video
            src=""
            width="100%"
            autoPlay
            muted
            loop
            className="m-auto"
          />
        </div>
        {/*<div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 md:bottom-18 md:left-18 xl:bottom-72 xl:left-32 z-20 ">*/}
        {/*  */}
        {/*</div>*/}
        <div className=" absolute bg-gradient-to-t from-aiesec-blue to-transparent h-2/3 z-10 w-screen bottom-0 m-auto w-100"></div>
      </section>
    </div>
  );
}

export default PartnerHero;
