'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ categoryId, name, description, icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="flex items-center gap-3 p-5 border-b border-gray-100 ">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      </div>

      <div className="p-5 flex-grow">
        <p className="text-gray-700 text-sm md:text-md">{description}</p>
      </div>

      <div className="p-5 duration-300">
        <Link
          href={`/tools/${categoryId}`}
          className="flex items-center gap-2 text-purple-600 font-medium text-sm hover:text-purple-800 transition-colors"
        >
          Explore {name}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
