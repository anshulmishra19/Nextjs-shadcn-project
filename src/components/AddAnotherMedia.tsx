"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const AddAnotherMedia = () => {
  const [mediaInputs, setMediaInputs] = useState<
    { id: number; platform: string; url: string }[]
  >([]);
  const [platforms, setPlatforms] = useState<string[]>([
    "YouTube",
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Other",
  ]);

  const addNewMediaInput = () => {
    if (platforms.length > 0) {
      const nextPlatform = platforms.shift()!;
      setMediaInputs((prev) => [
        ...prev,
        { id: Date.now(), platform: nextPlatform, url: "" },
      ]);
    } else {
      alert("No more platforms to add!");
    }
  };

  const updateMediaUrl = (id: number, url: string) => {
    setMediaInputs((prev) =>
      prev.map((media) => (media.id === id ? { ...media, url } : media))
    );
  };

  const removeMediaInput = (id: number) => {
    setMediaInputs((prev) => prev.filter((media) => media.id !== id));
  };

  return (
    <div className="p-6 w-4/6 rounded-lg">
      <h2 className="text-lg font-bold text-pink-500 mb-4">
        Add at least one media
      </h2>

      {/* Add Media Button */}
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="outline"
          size="lg"
          className="w-48"
          onClick={addNewMediaInput}
        >
          <span className="text-2xl mr-2">+</span> Add Another URL
        </Button>
      </div>

      {/* Media Inputs */}
      {mediaInputs.map((media) => (
        <Card
          key={media.id}
          className="flex flex-col md:flex-row items-center justify-between bg-white border-pink-300 mb-4"
        >
          <CardContent className="flex-1 w-full md:w-auto flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">
              Add {media.platform} URL:
            </span>
            <Input
              type="text"
              placeholder={`Enter ${media.platform} URL`}
              value={media.url}
              onChange={(e) => updateMediaUrl(media.id, e.target.value)}
              className="w-full md:w-3/5"
            />
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              className="text-pink-500 hover:text-pink-600"
              onClick={() => removeMediaInput(media.id)}
            >
              ✕
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
