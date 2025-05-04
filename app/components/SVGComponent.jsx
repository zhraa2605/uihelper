"use client";

import { clsx } from "clsx";
import React, { useState } from "react";

export function InteractiveGridPattern({
  width = 70,
  height = 70,
  squares = [50, 50],
  className,
  squaresClassName,
  ...props
}) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={clsx(
        "absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={clsx(
              "stroke-gray-100 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index ? "fill-purple-200" : "fill-transparent",
              squaresClassName
            )}
            onMouseOver={() => setHoveredSquare(index)}
            onMouseOut={() => setHoveredSquare(null)}
            onTouchStart={() => setHoveredSquare(index)}
            onTouchEnd={() => setHoveredSquare(null)}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
