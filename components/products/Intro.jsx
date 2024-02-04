import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <div className="pb-10">
      <div className='flex flex-col items-center md:flex-row'>
      <div>
        <Image
          src="/assets/images/products/volunteer/gv-intro-image.png"
          width={700}
          height={700}
          alt="Intro Image"
        />
      </div>
      <div className="p-10">
        <h1 className="text-global-volunteer text-4xl font-bold pb-4">What is Global Volunteer?</h1>
        <Image className="pb-3"
          src="/assets/images/products/logos/product_GV-horizontal-orange-min.png"
          width={500}
          height={500}
          alt="Intro Image"
        />
        <p className="pb-3">Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world.</p>
        <div className="flex">
          <p className="mr-7"><span className="font-bold">Duration:</span> 6 - 8 Weeks</p>
          <p><span className="font-bold">Organization:</span> NGO or School</p>
        </div>
        <div>
          <button className="bg-global-volunteer text-white px-6 py-2 rounded-md mt-4 mr-6">Sign Up</button>
          <button className="border-2 border-global-volunteer border-global-volunteer text-global-volunteer px-6 py-2 rounded-md mt-4">Learn More</button>

        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-around">
    <div>
        <Image
          src="/assets/images/products/volunteer/Cross culture.png"
          width={100}
          height={100}
          alt="Cross culture"
        />
        <p>Cross Cultural Experience</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/SDGs.png"
          width={100}
          height={100}
          alt="SDGs"
        />
        <p>Contribution Towards the SDGs</p>
      </div>
      <div>
        <Image
          src="/assets/images/products/volunteer/Personal growth.png"
          width={100}
          height={100}
          alt="Personal Development"
        />
        <p>Personal Development</p>
      </div>
    </div>
    </div>
  );
}

export default Intro;