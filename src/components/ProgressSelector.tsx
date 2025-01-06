"use client";

import { useState } from "react";
//import { Progress } from "@/components/ui/progress"; // Assuming Shadcn provides a progress component
import { Button } from "@/components/ui/button"; // Assuming Shadcn provides a button component

export const ProgressSelector = () => {
  const amenities = Array(20).fill("School in Vicnity"); // Replacing repetitive data with Array method
  const totalPoints = amenities.length;
  const [selectedPoints, setSelectedPoints] = useState<number[]>([]);

  const togglePointSelection = (point: number) => {
    setSelectedPoints(
      (prev) =>
        prev.includes(point)
          ? prev.filter((p) => p !== point) // Deselect point
          : [...prev, point] // Select point
    );
  };

  const progressPercentage = (selectedPoints.length / totalPoints) * 100;

  return (
    <div className="p-4 w-4/6">
      <h2 className="text-black font-bold text-lg mb-2">Update Amenities</h2>
      <span className="text-gray-500 text-sm mb-4 block">
        Fill out the amenities about the new project
      </span>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-4 rounded-lg">
        <div
          className="h-4 rounded-lg transition-all duration-300 ease-in-out"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "pink",
          }}
        ></div>
      </div>

      <p className="text-pink-500 mt-2">
        {progressPercentage.toFixed(0)}% completed
      </p>

      <hr className="my-4 border-gray-300" />

      {/* Amenities and Select All Button in same row */}
      <div className="flex justify-between items-center">
        <span className="text-black font-bold">Amenities</span>

        <Button
          variant="default"
          className="w-24"
          onClick={() =>
            setSelectedPoints(
              Array.from({ length: totalPoints }, (_, i) => i + 1)
            )
          }
        >
          Select All
        </Button>
      </div>

      {/* Amenities Selection with 3 Points per Row and Column-wise Alignment */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                selectedPoints.includes(index + 1)
                  ? "bg-pink-500 text-white"
                  : "bg-gray-300 text-black"
              } cursor-pointer`}
              onClick={() => togglePointSelection(index + 1)}
            >
              {selectedPoints.includes(index + 1) && <span>✓</span>}
            </div>
            <span className="text-black">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
