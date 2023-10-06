'use client'
import React, {useEffect, useState} from 'react';
//import anime from 'animejs';
//import Image from 'next/image';



export default function SplashScreen({finishLoading}) {
    const[isMounted, setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        })
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo",

        })
    }

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 10)
        animate()
        return () => clearTimeout(timeout)

    },[])


  return (
    <div className='flex h-screen items-center justify-center bg-aiesec-blue'
    isMounted={isMounted}>
        <img id="logo" src="https://media0.giphy.com/media/Q60YT16mePtbpTtHqG/giphy.gif?cid=6c09b952fh955vyes4fewnsgcq99oiwmjm2cq9553j144lbt&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="animation" width={300}/>
    </div>
  )
}
