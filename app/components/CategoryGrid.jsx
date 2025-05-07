import React from 'react';
import CategoryCard from './CategoryCard';
import {categories} from '../data/category';

const CategoryGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center leading-snug tracking-wider ">  Explore <span className='text-color-4 dark:text-color-3'>UI Categories</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg">Choose a category to get started</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
           categoryId={category.id}
            key={category.name}
            name={category.name}
            description={category.description || 'No description provided'}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
