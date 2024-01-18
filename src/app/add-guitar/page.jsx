"use client";
import React, { useRef, useState } from "react";
import axios from "axios";

const page = () => {
  /*Création d'une constante pour déclarer les données du formulaire*/
  // const formInitialDetails = {
  //   brand: "",
  //   model: "",
  //   type: "",
  //   year: "",
  //   body_type: "",
  //   body_wood: "",
  //   neck_wood: "",
  //   fretboard_wood: "",
  //   pickups: "",
  //   quantity: "",
  //   description: "",
  //   imageUrl: "",
  //   file: "",
  // };

  /*Initialisation du state */
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Upload guitar");
  const [status, setStatus] = useState({});
  const [preview, setPreview] = useState(null);
  const [fileInput, setFileInput] = useState(null);
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
  const [imageUrl, setImageUrl] = useState("");

  // Fonction pour afficher la photo à upload
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileInput(file);
    console.log(file);

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setPreview(e.target.result);
    };
    fileReader.readAsDataURL(file);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    console.log("url", imageUrl);
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", fileInput);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("type", type);
    formData.append("year", year);
    formData.append("body_type", bodyType);
    formData.append("body_wood", bodyWood);
    formData.append("neck_wood", neckWood);
    formData.append("fretboard_wood", fretboardWood);
    formData.append("pickups", pickups);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);
    const result = await axios.post(
      "http://localhost:5000/api/guitars",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(result.data);
    if (result.code === 201) {
      setStatus({ success: true, message: "Guitar added" });
    } else {
      setStatus({ succes: false, message: "An error has occured" });
    }
  };
  //Fonction unique pour modifier le state (la value) de chaque entrée du formulaire
  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };

  /*Fonction pour soumettre le formulaire*/
  // const handleSubmit = async (e, error) => {
  //   e.preventDefault();
  //   setButtonText("Uploading guitar");
  //   let response = await fetch("http://localhost:5000/api/guitars", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   console.log(formDetails);
  //   if (result.code === 200) {
  //     setStatus({ success: true, message: "Guitar added" });
  //   } else {
  //     setStatus({ succes: false, message: "An error has occured" });
  //   }
  // };

  return (
    <section className="flex flex-col mx-12 lg:flex-row lg:mx-36 min-h-screen justify-center">
      <form
        onSubmit={submit}
        name="contact"
        method="POST"
        className="flex mt-5 lg:mt-0 flex-col items-center"
      >
        <div className="">
          {/* DESCRIPTION */}
          <div className="flex mb-3 relative">
            <label className="font-semibold" htmlFor="brand">
              Brand :
            </label>
            <select
              className="absolute left-52 w-40"
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Gibson"
              // value={formDetails.brand}
            >
              <option value="">---</option>
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
          <div className="flex mb-3 relative">
            <label className="font-semibold" htmlFor="brand">
              Model :
            </label>
            <input
              className="absolute left-52 w-40"
              type="text"
              onChange={(e) => setModel(e.target.value)}
              placeholder="Les Paul"
              // value={formDetails.model}
            />
          </div>
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="type">
              Type :
            </label>
            <select
              className="absolute left-52 w-40"
              name="type"
              onChange={(e) => setType(e.target.value)}
              // value={formDetails.type}
            >
              <option value="">---</option>
              <option value="electric">Electric</option>
              <option value="acoustic">Acoustic</option>
              <option value="electro-acous">Electro-Acoustic</option>
              <option value="classic">Classic</option>
              <option value="dobro">Dobro</option>
              <option value="bass">Bass</option>
            </select>
          </div>
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="year">
              Année :
            </label>
            <input
              className="absolute left-52 w-40"
              name="year"
              type="text"
              minlength="4"
              maxLength="8"
              placeholder="1967"
              required
              // value={formDetails.year}
              onChange={(e) => setYear(e.target.value)}
            />{" "}
          </div>
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="body_type">
              Body type :
            </label>
            <input
              className="absolute left-52 w-40"
              id="body_type"
              type="text"
              placeholder="Single cut"
              // value={formDetails.body_type}
              onChange={(e) => setBodyType(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="body_wood">
              Body wood :
            </label>
            <select
              className="absolute left-52 w-40"
              name="body_wood"
              id=""
              onChange={(e) => setBodyWood(e.target.value)}
            >
              <option value="">---</option>

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
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="neck_wood">
              Neck wood :
            </label>
            <select
              className="absolute left-52 w-40"
              name="neck_wood"
              id=""
              onChange={(e) => setNeckWood(e.target.value)}
            >
              <option value="">---</option>

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
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="fretboard_wood">
              Fretboard wood :
            </label>
            <select
              className="absolute left-52 w-40"
              name="fretboard_wood"
              id=""
              onChange={(e) => setFretboardWood(e.target.value)}
            >
              <option value="">---</option>
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
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="pickups">
              Pickups :
            </label>
            <input
              className="absolute left-52 w-40"
              name="pickups"
              type="text"
              placeholder="Humbuckers"
              // value={formDetails.pickups}
              onChange={(e) => setPickups(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="quantity">
              Quantity produced :
            </label>
            <input
              className="absolute left-52 w-40"
              type="text"
              placeholder="2455"
              name="quantity"
              // value={formDetails.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3 relative">
            <label className="font-semibold" htmlFor="description">
              Description:{" "}
            </label>
            <textarea
              className=""
              name="description"
              id="description"
              cols="39"
              rows="10"
              placeholder="Be free to write what you want but respect the truth"
              // value={formDetails.description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {/* UPLOAD */}
            <div className="flex flex-col lg:h-32  p-5 bg-white rounded-xl items-center justify-center lg:mr-10 mb-5">
              {/* <label htmlFor="img" className="mb-3 text-black">
                Add guitar images :
              </label> */}
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={handleImage}
                value=""
              />
              <div>
                <img className="w-56 h-auto" src={preview} />
              </div>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-3 py-4 rounded-sm my-5 w-1/2 mx-auto"
            >
              Post Guitar
            </button>
            {status.message ? <p>{status.message}</p> : ""}
          </div>
        </div>
      </form>
    </section>
  );
};

export default page;
