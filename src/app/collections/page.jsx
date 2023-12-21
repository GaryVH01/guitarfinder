"use client";

import React, { useState, useEffect } from "react";
import CardsBrands from "@/components/cards/CardsBrands";
import { brandsCollection } from "@/assets/db";
import { brandsFilters } from "@/assets/db";

const page = () => {
  // Declaration des différents états
  const [item, setItem] = useState({ cat: "All" });
  const [brands, setBrands] = useState([]);
  const [active, setActive] = useState(0);

  // Fonction permettant de trier les Marques de guitare par ordre alphabétique
  const brandsOrdinate = brandsCollection.sort((a, b) => {
    if (a.brand < b.brand) return -1;
    return 1;
  });

  useEffect(() => {
    // Si la catégorie est strictement égale à "ALL"
    if (item.cat === "All") {
      // On changge l'état de la variable brands avec l'entièreté de la collection
      setBrands(brandsCollection);
    } else {
      // Sinon on crée un nouveau tableau avec les marques filtrées
      const newBrands = brandsCollection.filter((brand) => {
        return brand.cat === item.cat; //on rend toutes les marques qui ont la même catégorie que celle du state item.
      });
      console.log("brands filtered:" + newBrands);
      setBrands(newBrands); //puis on assigne le nouveau tableau comme valeur (brands) à afficher.
    }
  }, [item]);

  // Fonction permettant de changer la valeur de item (soit le om de la catégorie) avec la valeur ciblée ET de définir la variable active avec l'index de valeur ciblée
  const handleClick = (e, index) => {
    setItem({ cat: e.target.textContent });
    console.log(e.target.textContent);
    setActive(index);
  };

  return (
    <div className="lg:px-36 xl:px-72">
      <h1>COLLECTIONS</h1>
      <div className="flex flex-wrap px-2 py-5 justify-center text-white text-xs md:mx-16 md:text-sm ">
        {/* Ici on map le tableau des filtres alphabétique qui sont dans le fichier db.jsx */}
        <span className="sm:text-sm pr-10 ">Filters : </span>
        {brandsFilters.map((item, index) => {
          return (
            <span
              key={index}
              className={
                active === index
                  ? "font-bold cursor-pointer px-1 text-red-400 bg-white rounded-xl"
                  : "cursor-pointer px-1 "
              }
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.cat + ""}
            </span>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-5 rounded-lg">
        {/* Ici on map le tableau des marques en appelant le composant CardsBrands. */}
        {brands.map((content) => (
          <CardsBrands key={content.id} id={content.id} src={content.logo} />
        ))}
      </div>
    </div>
  );
};

export default page;
