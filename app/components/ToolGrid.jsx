'use client';

import LibraryCard from "@/app/components/ToolCard";
import Aos from "aos";
import "aos/dist/aos.css"; 

import { useEffect } from "react";
const ToolsGrid = ({ data }) => {

  useEffect(() => {
    Aos.init();
  }, []);

 
  return (
    <div>
    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? (
          data.map((library, index ) => (
            <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay={`${index * 100}`} 
            data-aos-duration="1000"
            key={library.name}
          >
            <LibraryCard
              key={library.name}
              name={library.name}
              description={library.description}
              url={library.url}
              image={library.image}
              tech={library.tech}
              installationType={library.installationType}
            />
            </div>
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
