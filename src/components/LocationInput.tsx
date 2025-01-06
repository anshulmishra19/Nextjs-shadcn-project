"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

export const LocationInput = () => {
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState({
    landmark: "",
    distance: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setLocation((prev) => ({ ...prev, [field]: value }));
  };

  const handleMapSelect = () => {
    setLocation((prev) => ({
      ...prev,
      latitude: "12.9716",
      longitude: "77.5946",
    }));
    setShowMap(false);
  };

  return (
    <div className="p-6 bg-white w-full max-w-lg  space-y-6">
      <h2 className="text-xl font-bold text-pink-500">Project Location</h2>

      {/* Landmark and Distance fields in one row */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-600 font-semibold mb-2">
            Landmark
          </label>
          <Input
            type="text"
            value={location.landmark}
            onChange={(e) => handleInputChange("landmark", e.target.value)}
            placeholder="Enter landmark"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-600 font-semibold mb-2">
            Distance
          </label>
          <Input
            type="text"
            value={location.distance}
            onChange={(e) => handleInputChange("distance", e.target.value)}
            placeholder="Enter distance"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
      </div>

      {/* Description field */}
      <div>
        <label className="block text-gray-600 font-semibold mb-2">
          Description
        </label>
        <Textarea
          value={location.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Enter description"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      {/* Latitude and Longitude fields in one row */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-600 font-semibold mb-2">
            Latitude
          </label>
          <Input
            type="text"
            value={location.latitude}
            onChange={(e) => handleInputChange("latitude", e.target.value)}
            placeholder="Enter latitude"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-600 font-semibold mb-2">
            Longitude
          </label>
          <Input
            type="text"
            value={location.longitude}
            onChange={(e) => handleInputChange("longitude", e.target.value)}
            placeholder="Enter longitude"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
      </div>

      <Button
        onClick={() => setShowMap(true)}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg"
      >
        Open Map
      </Button>

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Select Location</h3>
            <div className="w-full h-48 border">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.34850833717!2d77.58207800000001!3d12.9715986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e1d39b29%3A0xf2b8edb7c5a5e78b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1630314250204!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setShowMap(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded-lg"
              >
                Cancel
              </Button>
              <Button
                onClick={handleMapSelect}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg"
              >
                Select Location
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
