'use client'
import "@styles/globals.css";
import { useEffect, useState } from "react";
import Nav from "@components/Nav";

import Home from "@components/two-column";

import SplashScreen from "@components/SplashScreen";
import { usePathname } from "next/navigation";



const RootLayout = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome) 

  useEffect(() => {
    if(isLoading )
    return
  }, [isLoading ])
  return (
    <html>
      <head>
        <title>AIESEC in Sri Lanka</title>
      </head>
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={()=>setIsLoading(false)}/>
          ): (
        <div>
          <Nav />
        <h2>AIESEC.lk Rewamp</h2>
          <Home/>
      </div>
          )
        }
      
      </body>
    </html>
  );
};
``
export default RootLayout;
