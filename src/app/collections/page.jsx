"use client";

import React, { useState, useEffect } from "react";
import CardsBrands from "@/components/cards/CardsBrands";
import { brandsCollection } from "@/assets/db";
import { brandFilters } from "@/assets/db";

const page = () => {
  const [item, setItem] = useState({ cat: "All" });
  const [brands, setBrands] = useState([]);
  const [active, setActive] = useState(0);

  // Fonction permettant de trier les Marques de guitare par ordre alphabétique
  const brandsOrdinate = brandsCollection.sort((a, b) => {
    if (a.brand < b.brand) return -1;
    return 1;
  });

  useEffect(() => {
    if (item.cat === "All") {
      setBrands(brandsCollection);
    } else {
      const newBrands = brandsCollection.filter((brand) => {
        return brand.cat === item.cat;
      });
      setBrands(newBrands);
    }
  }, [item]);
  console.log(setBrands);

  const handleClick = (e, index) => {
    setItem({ cat: e.target.textContent });
    setActive(index);
  };

  return (
    <div className="lg:px-36 xl:px-72">
      <h1 className="text-center mt-20 mb-20">COLLECTIONS</h1>
      <div className="mx-16 py-5 text-center">
        <div className="text-white">
          {/* Ici on map le tableau des filtres alphabétique qui sont dans le fichier db.jsx */}
          <span className="pr-10 ">Filters : </span>
          {brandFilters.map((item, index) => {
            return (
              <span
                key={index}
                className={
                  active === index ? "bg-red cursor-pointer" : "cursor-pointer"
                }
                onClick={(e) => {
                  handleClick(e, index);
                }}
              >
                {item.cat + " -"}{" "}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 rounded-lg">
        {/* Ici on map le tableau des marques en appelant le composant CardsBrands. */}
        {brandsCollection.map((content) => (
          <CardsBrands key={content.id} id={content.id} src={content.logo} />
        ))}
      </div>
    </div>
  );
};

export default page;
