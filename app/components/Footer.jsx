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
    <footer className="text-gray-950 pt-16 bg-transparent relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern className="opacity-80 bg-gradient-to-t from-white/60 to-white/0" />
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 z-10 relative flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 py-12">
            Helping you
            <span className="text-purple-400"> design</span>
            ,build, and launch <br /> better UI experiences
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            From pixel-perfect design resources to code-ready UI kits
            <br />
            UI Helper is your go-to hub for front-end power-ups.
            <br />
            <span className="text-purple-400">
              {" "}
              Want to suggest a tool or Help finding one?{" "}
            </span>
          </p>

          <div className="mt-6 flex justify-center">
  <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
    <button
      onClick={handleCopy}
      className="flex items-center justify-center gap-2 text-md bg-white px-4 py-2 rounded-xl transition duration-500 tracking-wide"
    >
      <Mail className="h-4 w-4" />
      {!copied ? "Copy My Email!" : "Copied!"}
    </button>
  </div>
</div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {year} UI Helper — Crafted for devs who love clean UI.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black p-2 rounded-full border border-gray-700 hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black p-2 rounded-full border border-gray-700 hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-black p-2 rounded-full border border-gray-700 hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
