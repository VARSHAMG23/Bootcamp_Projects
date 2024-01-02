import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-600 p-3'>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="text-xl font-bold text-red-50 font-serif">BLOG</span>
          <span className="text-xl font-bold font-serif">PAGE</span>
        </div>
        <form className="flex items-center rounded">
          <input type="text" id="search" placeholder="Search" className="p-2 border border-gray-300" />
          <button type="submit" className="ml-2">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <ul className="flex space-x-4">
          <li className="hover:text-green-400 font-bold">
            <Link to="/home">HOME</Link>
          </li>
          <li className="hover:text-green-400 font-bold">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:text-green-400 font-bold">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
