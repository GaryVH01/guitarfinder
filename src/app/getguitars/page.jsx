import React from "react";
import Slider from "@/components/Carrousel/Slider";
import Title from "@/components/globals/title";

const page = () => {
  return (
    <div>
      <Title title="A definir" />
      <article className="flex flex-col mx-12 lg:flex-row lg:mx-36">
        {/* card guitare */}
        <div className="flex flex-col lg:w-96">
          <Slider />
        </div>
        {/* description */}
        <div className="mt-5 lg:ml-10 lg:mt-0">
          <div className="flex gap- mb-1">
            <span className="font-semibold">Modèle :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Type :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Année :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Body type :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Body wood :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Neck wood :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Fretboard wood :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Pickups :</span>
            <p>...</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Quantity produced :</span>
            <p>...</p>
          </div>
          <div className="flex-col gap-2 mb-1">
            {" "}
            <span className="font-semibold">Description: </span>
            <p className="font-extralight text-justify">...</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;
