'use client';

import LibraryCard from "@/app/components/ToolCard";

const ToolsGrid = ({ data }) => {

 
  return (
    <div>
    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? (
          data.map((library) => (
            <LibraryCard
              key={library.name}
              name={library.name}
              description={library.description}
              url={library.url}
              image={library.image}
              tech={library.tech}
              installationType={library.installationType}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No tools found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ToolsGrid;
