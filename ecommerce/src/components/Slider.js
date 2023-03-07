import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ApiSlides } from "../api/SliderApi";
import './Slider.css'

const Slider = () => {
  //useStateHook
  const [slides] = useState(ApiSlides);
  const [activeSlides, setActiveSlides] = useState(0);

  // style
  const arrowStyle =
    " rounded-full bg-gray-50 flex justify-center items-center shadow-sm hover:cursor-pointer";

    const nextSlide = () => {
        if (activeSlides === slides.length -1) {
            setActiveSlides(0)
        }
        else{
            setActiveSlides(activeSlides + 1)
        }
    }

    const prevSlide = () => {
        if (activeSlides === 0 ) {
            setActiveSlides(slides.length - 1)
        }
        else {
            setActiveSlides(activeSlides - 1)
        }
    }

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between ">
      {/* left */}
      <div className={arrowStyle}>
        <ArrowLeftIcon style={{ fontSize: "50px" }} onClick ={prevSlide} />
      </div>

      {/* slidediv */}
      {slides.map((slide, index) => {
        if (index === activeSlides) {
          return (
            <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +slide.background}>
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImg flex flex-1 justify-center items-center h-[100%] ">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt=""
                  />
                </div>
                <div className="description flex flex-col flex-1 place-items-start justify-center -ml-11 ">
                  <h2 className="text-[55px]">
                  {slide.content.h2}
                  </h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* RightArrow Div  */}
      <div className={arrowStyle}>
        <ArrowRightIcon style={{ fontSize: "50px" }} onClick = {nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
