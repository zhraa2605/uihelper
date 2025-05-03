import React from 'react'

const Header = () => {
  return (
    <header className="border-b-2 border-gray-300 shadow-sm text-purple-900 bg-white z-10 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">UI Help</h1>
          <nav className="flex space-x-4">
            <a href="#">Home</a>
            <a href="#" >About</a>
            <a href="#" >Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
