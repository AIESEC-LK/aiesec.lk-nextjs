"use client";
import "@styles/globals.css";
import SplashScreen from "@components/SplashScreen";

import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";

const RootLayout = ({children}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">

    <head>
      <title>AIESEC in Sri Lanka</title>
    </head>
    <body>
    {isLoading && isHome ? (
      <SplashScreen finishLoading={() => setIsLoading(false)}/>
    ) : (
      <div className=" overflow-hidden">
        {children}
      </div>
    )}
    </body>
    </html>
  );
};

export default RootLayout;
