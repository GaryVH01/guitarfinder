"use client";
import axios from "axios";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

export default function App() {
  const [files, setFiles] = useState([]);
  const [arrayUrl, setArrayUrl] = useState([]);
  const [fileDataUrl, setFileDataUrl] = useState(null);

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles([...files, ...fileList]);
    const imageArray = fileList.map((file) => {
      return {
        // id: Date.now(),
        file: URL.createObjectURL(file),
      };
    });
    setArrayUrl([...files, ...imageArray]);
    // const listUrl = [];
    // for (let i = 0; i < imageArray.length; i++) {
    //   listUrl.push(imageArray[i].file);
    // }
    // setFileDataUrl(listUrl);
    // console.log(arrayUrl);
  };

  const handleFileDelete = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setArrayUrl((prevFiles) => {
      const newUrl = [...prevFiles];
      newUrl.splice(index, 1);
      return newUrl;
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // On boucle le tableau d'URL pour créer des URL et leur attribuer un index
    //______PARTIE INPUT FILES_______
    //On boucle sur le tableau d'url pour en extraire uniquement les urls
    for (let i = 0; i < arrayUrl.length; i++) {
      formData.append("imageUrl", arrayUrl[i].file);
    }

    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }
    // formData.append("image", files);

    const result = await axios.post(
      "http://localhost:5000/api/guitars",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(result.data);
    if (result.code === 201) {
      console.log("ok");
    } else {
      console.log("fuck");
    }
  };

  // Fonction pour soumettre le formulaire
  // const submit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   // On boucle le tableau d'URL pour créer des URL et leur attribuer un index
  //   for (let i = 0; i < imageUrl.length; i++) {
  //     formData.append("imageUrl", imageUrl[i]);
  //   }

  //   const result = await axios.post(
  //     "http://localhost:5000/api/guitars",
  //     formData,
  //     { headers: { "Content-Type": "multipart/form-data" } }
  //   );
  //   console.log(result.data);
  //   if (result.code === 201) {
  //     setStatus({ success: true, message: "Guitar added" });
  //   } else {
  //     setStatus({ succes: false, message: "An error has occured" });
  //   }
  // };

  return (
    <div className="flex flex-col gap-4 p-4">
      <label className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center cursor-pointer">
        <input
          type="file"
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
        <CiCirclePlus className="h-6 w-6 mr-2" />
        Add Files
      </label>

      <ul className="grid grid-cols-2 gap-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{file.name}</span>
              <span className="text-gray-500">({file.type})</span>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleFileDelete(index)}
            >
              <FaTrashAlt className="h-6 w-6" />
            </button>
          </li>
        ))}
      </ul>

      <button
        className="py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700"
        onClick={submit}
        // onClick={() => {
        //   console.log("files", files);
        //   console.log("url", arrayUrl);
        //   // console.log("list url:", fileDataUrl);
        // }}
      >
        Upload
      </button>
    </div>
  );
}
