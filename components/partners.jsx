import React from "react";
import Image from "next/image";
import img1 from "@public/assets/images/partners/national/EFL Global Sri Lanka - National Partner.png";
import img2 from "@public/assets/images/partners/national/DIMO - National Partner_page-0001.jpg";
import img3 from "@public/assets/images/partners/national/Innovate - National Partner.png";
import img4 from "@public/assets/images/partners/national/Unilever - National Talent Partner.png";
import img5 from "@public/assets/images/partners/global/3mywAr3TX9X99bbv5pyqYCp6.png";
import img6 from "@public/assets/images/partners/global/1489406725.png";
import img7 from "@public/assets/images/partners/global/1489438110.png";
import img8 from "@public/assets/images/partners/global/1497265965.png";
import img9 from "@public/assets/images/partners/global/1497265137.png";
import img10 from "@public/assets/images/partners/global/1497266521.png";
import img11 from "@public/assets/images/partners/global/1570517070.jpeg";
import img12 from "@public/assets/images/partners/global/BCc6JuncxYDQPnBFM38TXfnm.png";
import img13 from "@public/assets/images/partners/global/CoqxUGJETQodgp2tZiYvcTMb.png";
import img14 from "@public/assets/images/partners/global/Ezm8xJc2RrpZeK87WdxXjTuY.png";
import img15 from "@public/assets/images/partners/global/Flag-United-Nations-Logo.png";
import img16 from "@public/assets/images/partners/global/kFznpVuqY1KDVS9EZ3YsdCbA.png";
import img17 from "@public/assets/images/partners/global/KLoHsfbN1W2G1waW1hkKQpyG.png";
import img18 from "@public/assets/images/partners/global/NEpMTxrxJxe7bRvYG38fb7Qa.png";
import img19 from "@public/assets/images/partners/global/nX3K6ZTAG2XUWUuTTCkj95eC.jpeg";
import img20 from "@public/assets/images/partners/global/Seap2BPiKnbsrJfMELDusawd.jpeg";
import img21 from "@public/assets/images/partners/global/UNDP-Logo-Blue-Large-Transparent.png";


const Partners = () => {
  const iconset1 = [
        {url: img1, width: 70, name: "EFL Global Sri Lanka"},
        {url: img2, width: 200, name: "DIMO"},
        {url: img3, width: 80, name: "Innovate"},
  ];

  const iconset2 = [
        {url: img4, width: 200, name: "Unilever"},
  ];

  const iconset3 = [
    {url: img5, width: 90, name: "quantum lead"},
    {url: img6, width: 100, name: "pwc"},
    {url: img7, width: 100, name: "eaton"},
    {url: img8, width: 100, name: "husqvarna group"},
    {url: img9, width: 100, name: "electrolux"},
    {url: img10, width: 100, name: "nokia"},
    {url: img11, width: 100, name: "schneider"},
    {url: img12, width: 100, name: "nexans"},
    
  ];

  const iconset3row2 = [
    {url: img13, width: 80, name: "henkel"},
    {url: img14, width: 80, name: "dhl"},
    {url: img15, width: 130, name: "un"},
    {url: img16, width: 80, name: "international sos"},
    {url: img17, width: 100, name: "tata"},
    {url: img18, width: 80, name: "alpa"},
    {url: img19, width: 100, name: "terrawind"},
    {url: img20, width: 100, name: "dp world"},
    {url: img21, width: 50, name: "undp"},
  ]

  return (
    <section>
      <div className="flex mt-10">
        <div className="mx-auto w-1/2">
          <h2 className=" text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
            National Partners
          </h2>
          <div className=" flex justify-center space-x-8 mt-5">
            {iconset1.map((icon, index) => (
              <div key={index} className="text-inline w-1/6">
                <Image
                  src={icon.url}
                  alt={icon.name}
                  className="mx-auto w-18 h-16 mb-2 top-0"
                  width={icon.width}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-1/2">
          <h2 className=" text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
            National Talent Partners
          </h2>
          <div className=" flex justify-center space-x-8 mt-5">
          {iconset2.map((icon, index) => (
            <div key={index} className="text-inline w-1/12">
              <Image
                src={icon.url}
                alt={icon.name}
                className="mx-auto w-18 h-16 mb-2 top-0"
                width={icon.width} height={500}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className=" mt-5">
        <h2 className=" text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
            Global Partners & Affliations
        </h2>
        <div className=" flex justify-center space-x-8 mt-5">
          {iconset3.map((icon, index) => (
            <div key={index} className="text-inline w-1/12">
              <Image
                src={icon.url}
                alt={icon.name}
                className="mx-auto w-18 h-20 mb-2 top-0"
                width={icon.width} height={300}
              />
            </div>
          ))}
        </div>
        <div className=" flex justify-center space-x-8 mt-5">
          {iconset3row2.map((icon, index) => (
            <div key={index} className="text-inline w-1/12">
              <Image
                src={icon.url}
                alt={icon.name}
                className="mx-auto w-18 h-20 mb-2 top-0"
                width={icon.width} height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;