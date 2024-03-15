"use client";
import CardGuitars from "@/components/cardGuitars/CardGuitars";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/guitars", {
        responseType: "json",
      })
      .then((res) => {
        const data = res.data;
        console.log("data", data);
        setData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="">
      <h1>GET ALL</h1>
      {data ? (
        <div className="flex flex-wrap justify-center gap-10 w-5/6 lg:w-4/6 mx-auto">
          {data.guitars?.map((guitar) => (
            <CardGuitars
              key={guitar.id}
              id={guitar.id}
              title={guitar.BRAND + " " + guitar.MODEL}
              src={URL.revokeObjectURL(guitar.IMAGEURL)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mx-auto text-white text-xl">
          {" "}
          Il n'y a aucune guitare dans la bibliothèque
        </div>
      )}
    </div>
  );
};

export default page;
