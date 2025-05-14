import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../molecules/SearchBar';

const Header: React.FC = () => {
  const handleSearch = (term: string) => {
    console.log('Searching for:', term);
    // In a real app, this would trigger a search action
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="logo mr-10">
          <Link to="/" className="text-xl font-bold text-blue-600">Raven Exchange</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/markets" className="text-gray-700 hover:text-blue-600">Markets</Link></li>
            <li><Link to="/wallet" className="text-gray-700 hover:text-blue-600">Wallet</Link></li>
            <li><Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search markets..."
          className="w-64"
        />
        <div className="auth-links">
          <Link to="/auth" className="text-blue-600 hover:text-blue-800 font-medium">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
