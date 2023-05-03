import React from "react";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./home.css";
import hbi from "./HBIndustry.png"
import hbino from "./HBInnovation.png"
import title from "./titlepic.png"

export default function Slider() {
   const sliderImages = [ 
      {
        url: "https://flic.kr/p/2oeR8ZZ",
      },
      {
        url: "",
      }
   ];

   const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }
   return (
      <div>
         <section className = "image-slider">
            <div class = "left">
               <FaArrowAltCircleLeft onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <FaArrowAltCircleRight onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
                  </div>
               );
            })}
         </section>
      </div>
   );
}