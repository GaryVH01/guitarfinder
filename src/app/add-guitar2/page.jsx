"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    const result = await axios.post(
      "http://localhost:5000/api/guitars",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(result.data);
  };

  // function handleFile(e) {
  //   setFile(e.target.files[0]);
  //   console.log(e.target.files[0]);
  // }

  // function handleUpload() {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   fetch("http://localhost:5000/api/guitars", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("sucess", result);
  //     })
  //     .catch((error) => {
  //       console.log("error :", error);
  //     });
  // }

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="file">CHOIX FICHIER</label>
        <input
          type="file"
          filename={file}
          accept="images/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div>{file ? <img src={file} alt="" /> : ""}</div>
        <label htmlFor="description"> DESCRIPTION</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default page;
