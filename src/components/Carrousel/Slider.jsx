"use client";

import React, { useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { pics } from "@/assets/db";

const Slider = () => {
  // const ref = useRef(null);
  const imageRef = useRef();
  const [sliderData, setSliderData] = useState(pics[0]);

  // const box = ref.current;

  const next = () => {
    let box = document.getElementById("slider");
    box.scrollLeft = box.scrollLeft + 300;
  };

  const prev = () => {
    let box = document.getElementById("slider");
    box.scrollLeft = box.scrollLeft - 300;
  };

  const changeImage = (index) => {
    const slider = pics[index];
    setSliderData(slider);
    setPicActive(index);
  };

  const [picActive, setPicActive] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Main image */}
      <div className="flex justify-center ">
        <div className="rounded-lg bg-white shadow-lg shadow-zinc-400">
          <img
            src={sliderData.src}
            className="object-cover w-full h-full p-2 rounded-lg "
            alt=""
            ref={imageRef}
          />
        </div>
      </div>
      {/* Carrousel */}
      <div className="flex relative overflow-hidden bg-white p-5 mt-3 rounded-md md:w-96 md:mx-auto">
        <button
          onClick={prev}
          className="flex justify-center items-center absolute top-1/2  transform  -translate-y-1/2 left-1 z-20 text-orange-400 text-xl md:opacity-60 md:hover:opacity-100"
        >
          <FaRegArrowAltCircleLeft className="" />
        </button>
        <button
          onClick={next}
          className="flex justify-center items-center absolute top-1/2  transform  -translate-y-1/2 right-1 z-20  text-orange-400 text-xl md:opacity-60 md:hover:opacity-100"
        >
          <FaRegArrowAltCircleRight className="" />
        </button>
        {/* Slider */}

        <div
          id="slider"
          // ref={ref}
          className="flex overflow-x-hidden scroll-smooth gap-3 mx-2 "
        >
          {pics.map((data, index) => (
            <div
              className={
                picActive === index
                  ? "pictureDiv h-2 md:h-28"
                  : "pictureDiv h-2 md:h-28"
              }
            >
              <img
                className={
                  picActive === index
                    ? "w-72 object-cover rounded-md cursor-pointer opacity-60"
                    : "w-72 object-cover rounded-md cursor-pointer"
                }
                key={data.id}
                src={data.src}
                alt=""
                onClick={() => {
                  changeImage(index);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
