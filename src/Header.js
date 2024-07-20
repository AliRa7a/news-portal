import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
      <div className="header__left">
        <h1 className="text-xl font-bold">News Analytics</h1>
      </div>
      <nav className="header__right">
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Headlines</li>
          <li className="cursor-pointer">Sources</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
