"use client";

import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Carrousel = () => {
  return (
    <div className="relative flex mt-3 bg-white rounded-lg shadow-lg shadow-zinc-400 overflow-x-hidden">
      <div className="flex-1 m-2 ml-10 rounded-lg z-10 ">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out	"
          src="guit.jpeg"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit2.jpeg"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit3.webp"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit3.webp"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit3.webp"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit3.webp"
          alt=""
        />
      </div>
      <div className="flex-1 m-2 mr-10 rounded-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg hover:transition-all scale-95 hover:scale-105 hover:duration-100 hover:ease-in-out"
          src="guit4.jpeg"
          alt=""
        />
      </div>

      <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full justify-between px-2">
        <FaRegArrowAltCircleLeft className="text-2xl text-orange-500 cursor-pointer" />
        <FaRegArrowAltCircleRight className="text-2xl text-orange-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Carrousel;
