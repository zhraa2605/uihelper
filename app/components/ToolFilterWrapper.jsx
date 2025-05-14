'use client';

import { useState, useMemo } from 'react';
import { ChevronUp , ChevronDown } from 'lucide-react'; // Importing arrow icons
import ToolsGrid from './ToolGrid';

const ToolFilterWrapper = ({ tools }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State for toggling filter visibility
  
  const allTags = useMemo(() => {
    const tagSet = new Set();
    tools.forEach(tool => tool.tags.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [tools]);


  const handleTagClick = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredTools = useMemo(() => {
    if (selectedTags.length === 0) return tools;
    return tools.filter(tool =>
      selectedTags.every(tag => tool.tags.includes(tag))
    );
  }, [selectedTags, tools]);

  return (
    <div className="space-y-8">
      {/* Filter Section Header with Arrow */}
    <div
  className="cursor-pointer flex items-center justify-between p-5 mb-9 border-b border-gray-400 dark:border-gray-700"
  onClick={() => setIsOpen(!isOpen)} // Toggle open/close state
>
  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
    Filter by Tags
    {selectedTags.length > 0 && (
      <span className="ml-2 ">
        ({selectedTags.length})
      </span>
    )}
  </h3>
  {isOpen ? (
    <ChevronUp className="text-gray-800 dark:text-gray-100" />
  ) : (
    <ChevronDown className="text-gray-800 dark:text-gray-100" />
  )}
</div>

      {/* Collapsible Filter Section */}
      {isOpen && (
        <div className="bg-purple-100 dark:bg-gray-800/50 p-4 rounded-xl shadow-sm">
          <div className="flex flex-wrap gap-2 ">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3.5 py-1.5 rounded-full border text-sm font-normal transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-purple-600 border-purple-700 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <div className="flex items-center justify-end border-t border-gray-400 dark:border-gray-700 p-2 mt-2">

              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium flex items-center"
              >
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Results count */}
    

      {/* Tools grid remains unchanged */}
      <ToolsGrid data={filteredTools} />
    </div>
  );
};

export default ToolFilterWrapper;
