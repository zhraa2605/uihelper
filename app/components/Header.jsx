"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { LoaderPinwheel } from "lucide-react";

export default function Header() {
  return (
    <header className=" p-4 border-b border-gray-100 dark:border-gray-700 shadow-sm w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center gap-1.5 text-color-4 dark:text-white">
          <LoaderPinwheel strokeWidth={1.25} size={28} />
        <Link href="/" className="text-2xl  font-semibold tracking-wider ">
            Kitstack
        </Link>

        </div>


        <ThemeToggle />
       
      </div>
    </header>
  );
}
