import React from 'react'

const Header = () => {
  return (
    <header className="border-b-2 border-gray-300 shadow-sm text-purple-900 bg-white z-10 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">UI Help</h1>
          <div className="relative inline-block">
            <input
              placeholder="Search for a website,category..."
              className="shadow-lg bg-white border-2 border-gray-400 focus:border-gray-700 px-5 py-2 rounded-xl w-90 transition-all focus:w-100 outline-none"
              name="search"
              type="search"
            />
            
            <svg
              className="size-6 absolute right-3 top-2 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <nav className="flex space-x-4">
           
            <a href="#" >Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
