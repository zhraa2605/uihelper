'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryCard from './CategoryCard';
import categories from '../data/category';

const CategoryGrid = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">{t('categories')}</h2>
      <p className="text-gray-600 mb-8 text-center">{t('choose_category')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={t(`category.${category.id}.name`, category.name)}
            description={t(`category.${category.id}.description`, category.description)}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
