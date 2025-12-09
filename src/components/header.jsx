import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const logo = '/icon/michell_cell_logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerBtnRef.current &&
        !hamburgerBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-2xl">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
          
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="text-2xl font-bold text-white drop-shadow-xl tracking-tight">
              <img src={logo} alt="MichelCell Logo" className="h-16 w-16 inline-block mr-2 p-0" />
            </Link>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex space-x-10 text-white font-medium">
            <li>
              <Link
                to="/"
                className="relative text-lg font-semibold hover:text-blue-200 transition-all duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="relative text-lg hover:text-blue-200 transition-all duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Smartphones
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="relative text-lg hover:text-blue-200 transition-all duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Accessoires
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative text-lg hover:text-blue-200 transition-all duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative text-lg hover:text-blue-200 transition-all duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              className="text-white hover:text-blue-200 hover:scale-110 transition-transform duration-300 text-xl"
              aria-label="Recherche"
            >
              🔍
            </button>
            <button 
              className="text-white hover:text-blue-200 hover:scale-110 transition-transform duration-300 text-xl relative"
              aria-label="Panier"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Menu Hamburger Mobile */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              className="text-white hover:text-blue-200 hover:scale-110 transition-transform duration-300 text-xl"
              aria-label="Panier"
            >
              🛒
            </button>
            <button 
              ref={hamburgerBtnRef}
              className={`text-white hover:text-blue-200 transition-transform duration-300 text-xl ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

        </nav>

        {/* Menu Mobile */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden backdrop-blur-xl bg-white/10 border-t border-white/20 shadow-2xl ${
            isMenuOpen ? 'flex' : 'hidden'
          } ${isMenuOpen ? 'animate-slideDown' : ''} transition-all duration-300 ease-in-out`}
          style={{
            animation: isMenuOpen ? 'slideDown 0.3s ease-out' : 'none'
          }}
        >
          <ul className="flex flex-col space-y-2 w-full py-4 px-6">
            <li>
              <Link
                to="/"
                className="block text-white text-lg font-semibold hover:text-blue-200 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block text-white text-lg hover:text-blue-200 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Smartphones
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="block text-white text-lg hover:text-blue-200 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Accessoires
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white text-lg hover:text-blue-200 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white text-lg hover:text-blue-200 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t border-white/20">
              <div className="flex space-x-6 py-2 px-4 justify-center">
                <button 
                  className="text-white hover:text-blue-200 hover:scale-110 transition-transform duration-300 text-xl"
                  aria-label="Recherche"
                >
                  🔍
                </button>
                <button 
                  className="text-white hover:text-blue-200 hover:scale-110 transition-transform duration-300 text-xl relative"
                  aria-label="Panier"
                >
                  🛒
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Animation CSS dans le style global */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;