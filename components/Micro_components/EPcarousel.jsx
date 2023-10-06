import React, { useEffect, useState } from "react"
import Image from "next/image";
import image1 from "@public/Epimg1.png";
import image2 from "@public/Epimg2.png";

const Carousel = () =>{
    const slides = [
        {
            id:1,
            img1:image1,
            img2:image2,
            title1: 'Lorem Ipsum',
            title2: 'Lorem Ipsum',
            content1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy",
            content2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"
        },
        {
            id:2,
            img1:image1,
            img2:image2,
            title1: 'Lorem Ipsum',
            title2: 'Lorem Ipsum',
            content1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy",
            content2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"
        
        },

    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () =>{
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () =>{
        setCurrentSlide((currentSlide -1 + slides.length) % slides.lenght);
    };

    useEffect(()=>{
        const interval =  setInterval(()=>{
            nextSlide();
        }, 2000);

        return ()=>{
            clearInterval(interval);
        };
    }, [currentSlide]);

    return(
        <div className=" w-screen flex justify-center">
            <div className=" w-3/4 overflow-hidden">
                {slides.map((slide, index)=>(
                    <div 
                    key={index}
                    className={`w-full ${
                        index === currentSlide ? "block" : "hidden"
                      } transition-transform duration-300 transform ${
                        index === currentSlide ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                        <div className=" grid grid-cols-2 grid-rows-1 grid-flow-row">
                            <div className=" relative ">
                                <div className=" relative z-0 float-right"><Image src={slide.img1} width={300} /></div>
                                <div className=" relative w-64 pt-8 pb-8 px-6 py-6 z-10 bg-white rounded-2xl shadow-aiesec-mid-grey shadow-2xl top-[70px] -right-20">
                                    <h2 className=" text-aiesec-light-blue font-semibold text-center">{slide.title1}</h2><br></br>
                                    <p className=" text-center">{slide.content1}</p>
                                </div>
                            </div>
                            <div className=" relative">
                            <div className="relative z-0 float-right"><Image src={slide.img2} width={300} /></div>
                                <div className=" relative w-64 pt-8 pb-8 px-6 py-6 z-10 bg-white rounded-2xl shadow-aiesec-mid-grey shadow-2xl top-[70px] -right-20">
                                    <h2 className=" text-aiesec-red font-semibold text-center">{slide.title2}</h2><br></br>
                                    <p className=" text-center">{slide.content2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className=" absolute bottom-0 left-0 right-0 flex justify-center mt-5">
                      {slides.map((_, index)=>(
                        <span
                        key={index}
                        onClick={()=> setCurrentSlide(index)}
                        className={`w-3 h-3 mx-2 cursor-pointer rounded-full ${
                            index === currentSlide ? "bg-aiesec-blue" : " bg-aiesec-mid-grey"
                          }`}
                        >
                        </span>
                      ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;