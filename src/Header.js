import React, { useContext, useState } from 'react';
import { Store } from './Store';
import { Link, useNavigate } from 'react-router-dom';
import { User, Menu } from 'lucide-react';

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  // const [suggestions, setSuggestions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

 

  



  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-orange-500 font-bold text-2xl">
            <span className="text-orange-500 text-3xl font-bold">RV</span>
            <span className="text-black text-3xl font-light">FITNESS</span>
            </Link>
          </div>

          
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/workout" className="px-3 py-2 text-gray-700 hover:text-orange-500">Workout plan</Link>
            <Link to="/trainers" className="px-3 py-2 text-gray-700 hover:text-orange-500">Trainers</Link>
            <Link to="/subscription" className="px-3 py-2 text-gray-700 hover:text-orange-500">Subscription</Link>
            <Link to="/blog" className="px-3 py-2 text-gray-700 hover:text-orange-500">Blog</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-orange-500">About us</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-orange-500">Contact</Link>

            {/* User Menu */}
            {userInfo ? (
              <div className="relative ml-3">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <User className="h-5 w-5" />
                  <span className="ml-1">Account</span>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                    >
                      User Profile
                    </Link>
                    <button
                      onClick={signoutHandler}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-3 px-3 py-2 text-gray-700 hover:text-orange-500"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Mobile search */}
            

            {/* Mobile navigation links */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
              <Link to="/workout" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Workout plan</Link>
              <Link to="/trainers" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Trainers</Link>
              <Link to="/subscription" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Subscription</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About us</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Contact</Link>
              
              {userInfo ? (
                <>
                  <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-orange-500">User Profile</Link>
                  <button
                    onClick={signoutHandler}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;