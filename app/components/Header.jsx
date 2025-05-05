'use client';

import { useRef } from 'react';
import { Search, Globe, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResponsiveHeader() {
  const searchRef = useRef(null);
  const mobileSearchContainerRef = useRef(null);
  const searchButtonRef = useRef(null);
  const router = useRouter();

  const toggleMobileSearch = () => {
    const mobileSearchContainer = mobileSearchContainerRef.current;
    const searchButton = searchButtonRef.current;
    
    if (mobileSearchContainer.classList.contains('hidden')) {
      mobileSearchContainer.classList.remove('hidden');
      searchButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      // Focus the search input when expanded
      setTimeout(() => {
        const mobileInput = mobileSearchContainer.querySelector('input');
        if (mobileInput) mobileInput.focus();
      }, 100);
    } else {
      mobileSearchContainer.classList.add('hidden');
      searchButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    if (searchQuery.trim()) {
      // Handle search - for example, navigate to search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-purple-700 text-2xl font-bold">
              UI Helper
            </Link>
          </div>
          
          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-grow max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
                <input
                  ref={searchRef}
                  name="search"
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-md focus:outline-none"
                />
                <button type="submit" className="p-2 text-gray-500 hover:text-purple-700">
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
          
          {/* Mobile Search Icon */}
          <div className="md:hidden flex items-center">
            <button 
              ref={searchButtonRef}
              onClick={toggleMobileSearch}
              className="p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none"
            >
              <Search size={20} />
            </button>
          </div>
          
          {/* Translation Icon */}
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Expanded Search - Hidden by default */}
      <div ref={mobileSearchContainerRef} className="md:hidden px-4 pb-4 hidden">
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
            <button type="submit" className="p-2 text-gray-500 hover:text-purple-700">
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}