"use client";

import React, { useEffect, useState } from "react";
import Slider from "@/components/Carrousel/Slider";
import Title from "@/components/globals/title";
import axios, { Axios } from "axios";
import { useParams } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState([]);
  const [guitar, setGuitar] = useState("");
  const params = useParams();
  const id = params.guitarId;
  const api = "http://localhost:5000/guitars/";

  const router = useRouter();

  console.log("params:", params);
  useEffect(() => {
    axios
      .get(api, {
        responseType: "json",
      })
      .then((res) => {
        const data = res.data;
        setData(data);
        console.log("data:", data);
        const guitar = data.guitars.find((guit) => guit.id == id);
        console.log(guitar);
        setGuitar(guitar);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const redirect = () => {
    router.push("/guitars");
  };

  const handleDeleteGuitar = (e) => {
    if (
      confirm(
        "Etes-vous sûr de vouloir supprimer l'article : " +
          guitar.BRAND.toUpperCase() +
          " - " +
          guitar.MODEL +
          "?"
      )
    ) {
      axios
        .delete(api + id)
        .then((res) => {
          console.log("deleted", res);
          alert("la guitare a bien été supprimée");
        })
        .catch((err) => console.log(err));
    }
    redirect();
  };

  return (
    <div>
      <Title title={guitar.BRAND + " - " + guitar.MODEL} />
      <article className="flex flex-col mx-12 lg:flex-row lg:mx-36">
        {/* card guitare */}
        <div className="flex flex-col lg:w-96">
          <Slider id={guitar.id} src={guitar.IMAGE_URL} />
        </div>
        {/* description */}
        <div className="mt-5 lg:ml-10 lg:mt-0">
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Brand :</span>
            <p>{guitar.BRAND}</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Modèle :</span>
            <p>{guitar.MODEL}</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Type :</span>
            <p>{guitar.TYPE}</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Année :</span>
            <p>{guitar.YEAR}</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Body type :</span>
            <p>{guitar.BODY_TYPE}</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Body wood :</span>
            <p>{guitar.BODY_WOOD}</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Neck wood :</span>
            <p>{guitar.NECK_WOOD}</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Fretboard wood :</span>
            <p>{guitar.FRETBOARD_WOOD}</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Pickups :</span>
            <p>{guitar.PICKUPS}</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Quantity produced :</span>
            <p>...</p>
          </div>
          <div className="flex-col gap-2 mb-1">
            {" "}
            <span className="font-semibold">Description: </span>
            <p className="font-extralight text-justify">{guitar.DESCRIPTION}</p>
          </div>
        </div>
      </article>
      <div className="flex justify-center gap-10">
        <button
          onClick={(e) => handleDeleteGuitar(id, e)}
          className="flex text-center text-white mt-5 px-5 py-3 bg-red-400 rounded-md hover:bg-red-200 hover:text-black "
        >
          Supprimer
          {/* <FaTrashAlt className="h-6 w-6" /> */}
        </button>
        <button
          onClick={(e) => handleDeleteGuitar(id, e)}
          className="flex text-center text-white mt-5 px-5 py-3 bg-red-400 rounded-md  hover:bg-red-200 hover:text-black"
        >
          Modifier
          {/* <FaTrashAlt className="h-6 w-6" /> */}
        </button>
      </div>
    </div>
  );
};

export default page;
