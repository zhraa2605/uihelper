"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-900  dark:text-white">
          UIHelper
        </Link>

        {/* Optional: Short Tagline or Description */}
        <ThemeToggle />
        {/* Call to Action Button */}
       
      </div>
    </header>
  );
}
