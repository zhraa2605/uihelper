import React from "react";
import { InteractiveGridPattern } from "./SVGComponent";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background SVG inside and behind */}
      <div className="absolute inset-0 -z-10 pointer-events-auto">
  <InteractiveGridPattern />
</div>

      {/* Foreground content */}
      <div className="container relative z-10 mx-auto text-center px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-6">
            UI Helper — Design Help for Non-Designers
          </h1>
          <p className="text-md md:text-lg text-xl text-gray-600 mb-8">
            Because not every frontend dev is a pixel-perfect designer. <br />
            Here's your cheat sheet to look like one.
          </p>
          
        </div>
      </div>
    </section>
  );
};


export default Hero;