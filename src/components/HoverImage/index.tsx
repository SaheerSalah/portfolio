import React from 'react';
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HoverImageProps {
  src: string | StaticImageData;
  className: string;
  sliderData: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index:number|null)=> void;
}

const HoverImage= ({ src, className, sliderData, index, hoveredIndex, setHoveredIndex }:HoverImageProps) => {
  return (
    <div
      className="relative overflow-hidden flex justify-self-center justify-center items-center h-80 w-96"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        className={className}
        src={src}
        alt="projectImage"
        width={500}
        height={500}
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 transform transition-transform duration-300 ${
          hoveredIndex === index ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <p className="text-sm">{sliderData}</p>
      </div>
    </div>
  );
};


export default HoverImage;