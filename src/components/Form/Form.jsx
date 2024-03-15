"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

const Form = () => {
  // ___________-DECLARATION DES VARIABLES D'ETAT_______________//
  const [preview, setPreview] = useState([]);
  const [files, setFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  // const [buttonText, setButtonText] = useState("Upload guitar");
  const [status, setStatus] = useState({});
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [bodyWood, setBodyWood] = useState("");
  const [neckWood, setNeckWood] = useState("");
  const [fretboardWood, setFretboardWood] = useState("");
  const [pickups, setPickups] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  // _____________________________FONCTIONS___________________________//
  // FONCTION POUR RECUPERER LA VALEUR DE L'INPUT ET AFFICHER LE THUMBNAILS
  const handleImageUpload = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles([...files, ...fileList]);
    const imageArray = fileList.map((file) => {
      return {
        // id: Date.now(),
        file: URL.createObjectURL(file),
      };
    });

    setImageUrl([...files, ...imageArray]);
    console.log("Tableau d'url:", imageUrl);
    setPreview((prevImages) => [...prevImages, ...imageArray]);
  };

  // FONCTION POUR SUPPRIMER DES IMAGES
  const handleImageDelete = (index, id, e) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setImageUrl((prevFiles) => {
      const newUrl = [...prevFiles];
      newUrl.splice(index, 1);
      return newUrl;
    });
    // setPreview((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  // FONCTION POUR SOUMETTRE LE FORMULAIRE
  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // On boucle le tableau d'URL pour créer des URL et leur attribuer un index

    //______PARTIE INPUT FILES_______
    for (let i = 0; i < imageUrl.length; i++) {
      formData.append("IMAGE_URL", imageUrl[i].file);
      // formData.append("image", files);
    }
    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }
    // formData.append("image", files);
    //_______PARTIE INPUT TEXT_______
    formData.append("BRAND", brand);
    formData.append("MODEL", model);
    formData.append("GUITAR_TYPE", type);
    formData.append("YEAR_PRODUCTION", year);
    formData.append("BODY_TYPE", bodyType);
    formData.append("BODY_WOOD", bodyWood);
    formData.append("NECK_WOOD", neckWood);
    formData.append("FRETBOARD_WOOD", fretboardWood);
    formData.append("PICKUPS", pickups);
    formData.append("QUANTITY", quantity);
    formData.append("DESCRIPTION", description);

    const result = await axios.post("http://localhost:5000/guitars", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("result data", result.data);
    console.log("result status", result.status);
    if (result.status === 201) {
      setStatus({ success: true, message: "Guitar added" });
      setPreview([]);
      setFiles([]);
      setImageUrl([]);
    } else {
      setStatus({ succes: false, message: "An error has occured" });
    }
  };

  return (
    <>
      <form
        onSubmit={submit}
        name="contact"
        method="POST"
        className="flex flex-col w-full overflow-hidden lg:w-3/6 mx-auto min-h-screen justify-center gap-3"
        encType="multipart/form-data"
      >
        {/* DESCRIPTION */}
        <div className="flex flex-col lg:flex-row  w-5/6 mx-auto justify-between gap-3 lg:gap-10 ">
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="brand">
              Brand :
            </label>
            <select
              className=""
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Gibson"
              // value={formDetails.brand}
            >
              <option value="">- Please Select -</option>
              <option value="blackstar">Blackstar</option>
              <option value="charvel">Charvel</option>
              <option value="cort">Cort</option>
              <option value="dean-guitars">Dean Guitars</option>
              <option value="duesenberg">Duesenberg</option>
              <option value="esp">ESP</option>
              <option value="evh">EVH</option>
              <option value="epiphone">Epiphone</option>
              <option value="faith">Faith</option>
              <option value="fender">Fender</option>
              <option value="gibson">Gibson</option>
              <option value="greg-bennett">Greg Bennett</option>
              <option value="gretsch">Gretsch</option>
              <option value="hagstrom">Hagstrom</option>
              <option value="hartwood">Hartwood</option>
              <option value="hofner">Höfner</option>
              <option value="ibanez">Ibanez</option>
              <option value="jackson-guitars">Jackson Guitars</option>
              <option value="jamstick">Jamstick</option>
              <option value="jet-guitars">Jet Guitars</option>
              <option value="kiesel">Kiesel</option>
              <option value="kramer">Kramer</option>
              <option value="lag">Lag</option>
              <option value="luna-guitars">Luna-guitars</option>
              <option value="martin">Martin&Co</option>
              <option value="mooer">Mooer</option>
              <option value="music-man">Music Man</option>
              <option value="ormsby">Ormsby</option>
              <option value="ortega">Ortega</option>
              <option value="prs">PRS</option>
              <option value="rickenbacker">Rickenbacker</option>
              <option value="sigma">Sigma</option>
              <option value="squier">Squier</option>
              <option value="stagg">Stagg</option>
              <option value="takamine">Takamine</option>
              <option value="tanglewood">Tanglewood</option>
              <option value="taylor">Taylor</option>
              <option value="traveler">Traveler</option>
              <option value="vintage">Vintgage</option>
              <option value="vox">Vox</option>
              <option value="yamaha">Yamaha</option>
            </select>
          </div>
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="brand">
              Model :
            </label>
            <input
              className=""
              type="text"
              onChange={(e) => setModel(e.target.value)}
              placeholder="Les Paul"
              // value={formDetails.model}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  w-5/6 mx-auto justify-between gap-3 lg:gap-10">
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="type">
              Type :
            </label>
            <select
              className=""
              name="type"
              onChange={(e) => setType(e.target.value)}
              // value={formDetails.type}
            >
              <option value="">- Please Select -</option>
              <option value="electric">Electric</option>
              <option value="acoustic">Acoustic</option>
              <option value="electro-acous">Electro-Acoustic</option>
              <option value="classic">Classic</option>
              <option value="dobro">Dobro</option>
              <option value="bass">Bass</option>
            </select>
          </div>
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="year">
              Année :
            </label>
            <input
              className=""
              name="year"
              type="text"
              minLength="4"
              maxLength="8"
              placeholder="1967"
              // required
              // value={formDetails.year}
              onChange={(e) => setYear(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  w-5/6 mx-auto justify-between gap-3 lg:gap-10">
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="body_type">
              Body type :
            </label>
            <input
              className=""
              id="body_type"
              type="text"
              placeholder="Single cut"
              // value={formDetails.body_type}
              onChange={(e) => setBodyType(e.target.value)}
            />
          </div>
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="body_wood">
              Body wood :
            </label>
            <select
              className=""
              name="body_wood"
              id=""
              onChange={(e) => setBodyWood(e.target.value)}
            >
              <option value="">- Please Select -</option>

              <option value="mahogany">Mahogany</option>
              <option value="rosewood">Rosewood</option>
              <option value="spruce">Spruce</option>
              <option value="walnut">Walnut</option>
              <option value="indian-rosewood">Indian Rosewood</option>
              <option value="pau-ferro">Pau Ferro</option>
              <option value="korina">Korina</option>
              <option value="maple">Maple</option>
              <option value="ash">Ash</option>
              <option value="lutz-spruce">Lutz Spruce</option>
              <option value="cocobolo">Cocobolo</option>
              <option value="poplar">Poplar</option>
              <option value="koa">KOA</option>
              <option value="alder">Alder</option>
              <option value="cedar">Cedar</option>
              <option value="sapele">Sapele</option>
              <option value="brazilian-osewood">Brazilian Rosewood</option>
              <option value="wenge">Wenge</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  w-5/6 mx-auto justify-between gap-3 lg:gap-10">
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="neck_wood">
              Neck wood :
            </label>
            <select
              className=""
              name="neck_wood"
              id=""
              onChange={(e) => setNeckWood(e.target.value)}
            >
              <option value="">- Please Select -</option>

              <option value="mahogany">Mahogany</option>
              <option value="rosewood">Rosewood</option>
              <option value="spruce">Spruce</option>
              <option value="walnut">Walnut</option>
              <option value="indian-rosewood">Indian Rosewood</option>
              <option value="pau-ferro">Pau Ferro</option>
              <option value="korina">Korina</option>
              <option value="maple">Maple</option>
              <option value="ash">Ash</option>
              <option value="lutz-spruce">Lutz Spruce</option>
              <option value="cocobolo">Cocobolo</option>
              <option value="poplar">Poplar</option>
              <option value="koa">KOA</option>
              <option value="alder">Alder</option>
              <option value="cedar">Cedar</option>
              <option value="sapele">Sapele</option>
              <option value="brazilian-osewood">Brazilian Rosewood</option>
              <option value="wenge">Wenge</option>
            </select>
          </div>
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="fretboard_wood">
              Fretboard wood :
            </label>
            <select
              className=""
              name="fretboard_wood"
              id=""
              onChange={(e) => setFretboardWood(e.target.value)}
            >
              <option value="">- Please Select -</option>
              <option value="mahogany">Mahogany</option>
              <option value="rosewood">Rosewood</option>
              <option value="spruce">Spruce</option>
              <option value="walnut">Walnut</option>
              <option value="indian-rosewood">Indian Rosewood</option>
              <option value="pau-ferro">Pau Ferro</option>
              <option value="korina">Korina</option>
              <option value="maple">Maple</option>
              <option value="ash">Ash</option>
              <option value="lutz-spruce">Lutz Spruce</option>
              <option value="cocobolo">Cocobolo</option>
              <option value="poplar">Poplar</option>
              <option value="koa">KOA</option>
              <option value="alder">Alder</option>
              <option value="cedar">Cedar</option>
              <option value="sapele">Sapele</option>
              <option value="brazilian-osewood">Brazilian Rosewood</option>
              <option value="wenge">Wenge</option>
            </select>{" "}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-5/6 mx-auto justify-between gap-3 lg:gap-10">
          <div className="flex flex-col relative justify-center w-full">
            <label className="font-semibold" htmlFor="pickups">
              Pickups :
            </label>
            <input
              className=""
              name="pickups"
              type="text"
              placeholder="Humbuckers"
              // value={formDetails.pickups}
              onChange={(e) => setPickups(e.target.value)}
            />
          </div>
          <div className="flex flex-col relative justify-cente w-full">
            <label className="font-semibold" htmlFor="quantity">
              Quantity produced :
            </label>
            <input
              className=""
              type="text"
              placeholder="2455"
              name="quantity"
              // value={formDetails.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-5/6 mx-auto">
          <label className="font-semibold" htmlFor="description">
            Description:{" "}
          </label>
          <textarea
            className="bg-white opacity-50 text-black"
            name="description"
            id="description"
            cols="39"
            rows="10"
            placeholder="Be free to write what you want but respect the truth"
            // value={formDetails.description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-col h-auto w-5/6 mx-auto p-5 border-gray-500 border-solid border-2 rounded-xl items-center justify-center mb-5">
          <label
            htmlFor="image"
            className="flex justify-center items-center w-full py-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
          >
            <CiCirclePlus className="h-6 w-6 text-gray-400" />
            <span className="ml-2 text-base font-medium text-gray-400">
              Add Image
            </span>
            <input
              id="image"
              name="image"
              type="file"
              className="sr-only"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {preview.length > 0 && (
              <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {preview.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative flex justify-center items-center h-32 bg-gray-300 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image.file}
                      alt="Uploaded Image"
                      className="h-full w-full object-cover"
                    />
                    <button
                      className="absolute top-0 right-0 p-1 m-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                      onClick={() => handleImageDelete(index)}
                    >
                      <FaTrashAlt className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <div>
          <input type="file" onChange={upload} />
        </div> */}
        <button
          type="submit"
          className="bg-white text-black px-3 py-4 rounded-sm my-5 w-1/2 mx-auto"
        >
          Post Guitar
        </button>
        {status.message ? (
          <p className="mx-auto text-center">{status.message}</p>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;
