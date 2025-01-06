"use client";

import React, { useState } from "react";

export const ImageUploader = () => {
  const [uploadedImages, setUploadedImages] = useState<
    { id: number; url: string; description: string; isPrimary: boolean }[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const newImages = filesArray.map((file, index) => ({
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        description: "",
        isPrimary: false,
      }));
      setUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleRemoveImage = (id: number) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleDescriptionChange = (id: number, value: string) => {
    setUploadedImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, description: value } : img))
    );
  };

  const togglePrimary = (id: number) => {
    setUploadedImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, isPrimary: !img.isPrimary } : img
      )
    );
  };

  return (
    <div className="p-6 w-full max-w-2xl  rounded-lg ">
      <h2 className="text-lg font-bold text-pink-500 mb-6">Upload Images</h2>

      {/* Drag-and-Drop Box */}
      <div className="border-2 border-dashed border-gray-400 bg-gray-200 rounded-lg h-64 flex flex-col items-center justify-center text-gray-600 relative mb-6">
        <p className="text-sm">Click or drag images here to upload</p>
        <input
          type="file"
          multiple
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>

      {/* Uploaded Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uploadedImages.map((image) => (
          <div
            key={image.id}
            className="relative bg-white border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <button
              className="absolute top-2 right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              onClick={() => handleRemoveImage(image.id)}
            >
              ✕
            </button>
            <img
              src={image.url}
              alt="Uploaded"
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={image.description}
              onChange={(e) =>
                handleDescriptionChange(image.id, e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-2"
            />
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-700">Set as Primary</label>
              <button
                onClick={() => togglePrimary(image.id)}
                className={`w-12 h-6 rounded-full ${
                  image.isPrimary ? "bg-pink-500" : "bg-gray-300"
                } relative transition-colors`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    image.isPrimary ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
