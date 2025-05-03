import React from "react";
import { InteractiveGridPattern } from "./SVGComponent";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-off-white overflow-hidden">
      {/* Background SVG inside and behind */}
      <div className="absolute inset-0 -z-10">
        <InteractiveGridPattern />
      </div>

      {/* Foreground content */}
      <div className="container relative z-10 mx-auto text-center px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-6">
            UI Helper — Design Help for Non-Designers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Because not every frontend dev is a pixel-perfect designer. <br />
            Here's your cheat sheet to look like one.
          </p>
          <div className="relative inline-block">
            <input
              placeholder="Search for a website,category..."
              className="shadow-lg bg-white border-2 border-gray-400 focus:border-gray-700 px-5 py-3 rounded-xl w-90 transition-all focus:w-100 outline-none"
              name="search"
              type="search"
            />
            
            <svg
              className="size-6 absolute top-3 right-3 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;