import React from 'react';
import LibraryCard from './ToolCard'; // Assuming ToolCard is used for rendering individual cards
import { componentLibraries } from '../data/components';
import { useRouter } from 'next/router';

const toolsGrid = ({ categoryId }) => {
  const router = useRouter();
  const { categoryId } = router.query; // Get categoryId from URL

  // Filter libraries based on the provided categoryId
  const filteredLibraries = componentLibraries.filter(
    (library) => library.categoryId === categoryId
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center leading-snug tracking-wider">
        Explore <span className="text-color-4">UI Libraries</span>
      </h1>
      <p className="text-gray-600 mb-8 text-center text-lg">
        Choose a library to get started
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLibraries.map((library) => (
          <LibraryCard
            key={library.name}
            name={library.name}
            description={library.description}
            url={library.url}
            image={library.image}
            tech={library.tech}
            requiresInstallation={library.requiresInstallation}
          />
        ))}
      </div>
    </div>
  );
};

export default toolsGrid;