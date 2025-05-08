'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ categoryId, name, description, icon }) => {
  return (
    <div className="bg-white dark:bg-[#000212] rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full dark:shadow-gray-500">
      <div className="flex items-center gap-3 p-5 border-b border-gray-100 dark:border-gray-700 ">
        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-100">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-50">{name}</h3>
      </div>

      <div className="p-5 flex-grow">
        <p className="text-gray-700 dark:text-gray-200 text-sm md:text-md">{description}</p>
      </div>

      <div className="p-5 duration-300">
        <Link
          href={`/tools/${categoryId}`}
          className="flex items-center justify-end gap-2 hover:mx-2 text-purple-600 dark:text-purple-100 font-medium text-sm md:text-md dark:hover:text-purple-400 hover:text-purple-800 transition-all duration-400"
        >
          Explore {name}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
