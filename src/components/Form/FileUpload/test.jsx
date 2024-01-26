"use client";
import React, { useState } from "react";

export default function Test() {
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newImages = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        newImages.push(event.target.result);
        if (i === e.dataTransfer.files.length - 1) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="p-10 border-dashed border-4 border-gray-300 rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <p className="mb-4 text-xl text-gray-600">Drag and drop images here</p>
        <div className="grid gap-4 grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <input
                id="image"
                name="image"
                type="file"
                className="sr-only"
                multiple
                onChange={handleImageUpload}
              />
              <img
                src={image}
                alt="uploaded"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-0 right-0 p-2 bg-gray-800 text-white rounded-full"
                onClick={() => handleDelete(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
