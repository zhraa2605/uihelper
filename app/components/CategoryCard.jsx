import React from 'react'
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ name, description, icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Card Header with Title and Icon */}
      <div className="flex items-center gap-3 p-5 border-b border-gray-100 ">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      </div>
      
      {/* Card Body with Description */}
      <div className="p-5 flex-grow">
        <p className="text-gray-700 text-sm md:text-md">{description}</p>
      </div>
      
      {/* Card Footer with Button */}
      <div className="p-5 hover:px-7 duration-300 ">
        <button className="flex items-center gap-2 text-purple-600 font-medium text-sm hover:text-purple-800 transition-colors">
        <Link href={`/tools/${id}`}>
        <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg inline-block">
          Explore {name}
        </a>
      </Link>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;