import { React, useState } from "react";

const FileUpload = (props) => {
  // Fonction pour afficher un thumbnails et récupérer l'url des fichiers à soumettre
  const handleImageUpload = (e) => {
    const fileArray = Array.from(e.target.files);

    const imageArray = fileArray.map((file) => {
      return {
        id: Date.now(),
        file: URL.createObjectURL(file),
      };
    });
    console.log("Tableau d'images", imageArray);
    for (let i = 0; i < imageArray.length; i++) {
      const url = imageArray[i].file;
      console.log("url", url);
      setFile(url);
      console.log("file", file);
    }

    setPreview((prevImages) => [...prevImages, ...imageArray]);
    setFile(preview);
  };

  // Fonction pour afficher un thumbnails et récupérer l'url des fichiers à soumettre
  const handleImageDelete = (id) => {
    setPreview((prevImages) => prevImages.filter((image) => image.id !== id));
    console.log(preview);
  };

  return (
    <>
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
            multiple
            onChange={handleImageUpload}
          />
        </label>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {preview.length > 0 && (
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {preview.map((image) => (
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
                    onClick={() => handleImageDelete(image.id)}
                  >
                    <FaTrashAlt className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
