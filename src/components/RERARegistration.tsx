"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn provides a button component
import { Input } from "@/components/ui/input"; // Assuming Shadcn provides an input component

export const RERARegistration = () => {
  const [isRERARegistered, setIsRERARegistered] = useState(false);
  const [reraNumbers, setRERANumbers] = useState<string[]>([]);

  const handleAddRERANumber = () => {
    if (reraNumbers.length < 2) {
      setRERANumbers([...reraNumbers, ""]);
    } else {
      alert("You can only add up to 2 RERA numbers.");
    }
  };

  const handleRERANumberChange = (index: number, value: string) => {
    const updatedRERANumbers = [...reraNumbers];
    updatedRERANumbers[index] = value;
    setRERANumbers(updatedRERANumbers);
  };

  const handleRemoveRERANumber = (index: number) => {
    const updatedRERANumbers = [...reraNumbers];
    updatedRERANumbers.splice(index, 1);
    setRERANumbers(updatedRERANumbers);
  };

  return (
    <div className="w-full max-w-md p-6">
      <h2 className="text-lg font-bold text-pink-500 mb-6">
        RERA Registration
      </h2>

      {/* RERA Registration Buttons */}
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-md text-gray-700 font-semibold">
          Is this project RERA registered?
        </span>
        <Button
          variant={isRERARegistered ? "default" : "outline"}
          className={`px-6 py-2 rounded-full font-semibold ${
            isRERARegistered
              ? "bg-pink-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setIsRERARegistered(true)}
        >
          Yes
        </Button>
        <Button
          variant={!isRERARegistered ? "default" : "outline"}
          className={`px-6 py-2 rounded-full font-semibold ${
            !isRERARegistered
              ? "bg-pink-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => {
            setIsRERARegistered(false);
            setRERANumbers([]); // Clear all RERA numbers
          }}
        >
          No
        </Button>
      </div>

      {/* RERA Number Inputs */}
      {isRERARegistered && (
        <div className="space-y-4">
          {reraNumbers.map((number, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-pink-50 border border-pink-300 rounded-lg px-4 py-3 shadow-md"
            >
              <Input
                type="text"
                placeholder={`Enter RERA Number ${index + 1}`}
                value={number}
                onChange={(e) => handleRERANumberChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-pink-300 rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
              <Button
                variant="outline"
                className="ml-4 text-pink-500 hover:text-pink-600"
                onClick={() => handleRemoveRERANumber(index)}
              >
                ✕
              </Button>
            </div>
          ))}

          {reraNumbers.length < 2 && (
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-lg flex items-center justify-center font-semibold"
              onClick={handleAddRERANumber}
            >
              + Add Another RERA Number
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
