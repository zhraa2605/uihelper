"use client";

import Link from "next/link";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { InteractiveGridPattern } from "./SVGComponent";
import { useState } from "react";
import clsx from "clsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = "hello@uihelper.dev";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <footer className="text-gray-950 dark:text-white pt-16 bg-transparent relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern />
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 z-10 relative flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold py-12 leading-snug">
            Helping you
            <span className="text-purple-400  dark:text-purple-300"> build </span>
             and launch  <br className="hidden lg:block" /> 
         better UI experiences
          </h2>
          <p className="text-md md:text-xl text-gray-700 dark:text-gray-200">
              Want to suggest a tool or Help finding one?{" "} let&apos;s connect! <br />
          </p>

          <div className="mt-6 flex justify-center">
  <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
    <button
      onClick={handleCopy}
      className="flex items-center justify-center gap-2 text-md bg-white dark:bg-dark-color px-4 py-2 rounded-xl tracking-wider duration-500 "
    >
      <Mail className="h-4 w-4" />
      {!copied ? "Copy My Email!" : "Copied!"}
    </button>
  </div>
</div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-200 w-full pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 dark:text-gray-100 mb-4 md:mb-0 text-xs md:text-md">
            © {year} Kitstack — Crafted for devs who love clean UI.
          </p>

          
        </div>
      </div>
    </footer>
  );
}
