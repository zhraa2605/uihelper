import React from "react";
import { InteractiveGridPattern } from "./SVGComponent";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden  transition-colors duration-300">
      {/* Background SVG inside and behind */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern />
      </div>
      

      
      {/* Foreground content */}
      <div className="container relative z-10 mx-auto text-center px-4 md:px-8 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <div className="max-w-3xl mx-auto">
          <p className="text-md md:text-xl text-gray-600 dark:text-gray-100 leading-snug tracking-wide font-extralight">
            Design smarter, not harder.
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-900 dark:bg-gradient-to-bl dark:from-purple-100 dark:to-purple-200  mb-3 leading-snug tracking-wide">
Kitstack — UI Tools for Developers           </h1>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-100 mb-8 leading-snug tracking-wide font-extralight">
            Because not every frontend dev is a pixel-perfect designer. <br className="hidden md:block" />
            Here's your cheat sheet to look like one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;