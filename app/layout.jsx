'use client'
import "@styles/globals.css";
import Nav from "@components/Nav";
import SplashScreen from "@components/SplashScreen";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import EPCarousel from "@components/carousel";
import ContactFrom from "@components/form";
import Footer from "@components/Footer";
import logo from "@public/aiesecwhite.png";
import Opportunities from "@components/ouropts";
// import Home from "@components/two-column";


const RootLayout = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html>
      <head>
        <title>AIESEC in Sri Lanka</title>
      </head>
      <body>
        
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <div className=" overflow-hidden">
            <Nav />
            <HomeVideo />
            <Counter />
            {/* <Home/> */}
            <Opportunities/>
            <EPCarousel/>
            <ContactFrom/>
            <Footer/>
            
            <h2>AIESEC.lk Revamp</h2>
          </div>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
