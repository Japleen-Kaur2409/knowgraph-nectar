
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route matches the link
  const isActiveRoute = (path: string) => location.pathname === path;

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMobileMenu}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-netblue-600 to-netblue-800 bg-clip-text text-transparent">
              NoteNet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActiveRoute('/')}>
              Home
            </NavLink>
            <NavLink to="/files" isActive={isActiveRoute('/files')}>
              Files
            </NavLink>
            <NavLink to="/about" isActive={isActiveRoute('/about')}>
              About Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <MobileNavLink to="/" onClick={closeMobileMenu} isActive={isActiveRoute('/')}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/files" onClick={closeMobileMenu} isActive={isActiveRoute('/files')}>
              Files
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={closeMobileMenu} isActive={isActiveRoute('/about')}>
              About Us
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop NavLink component
const NavLink = ({ children, to, isActive }: { children: React.ReactNode; to: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`relative font-medium text-sm transition-colors duration-300 
      ${isActive 
        ? 'text-netblue-600' 
        : 'text-gray-700 hover:text-netblue-600'
      }
    `}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-netblue-600 transform" />
    )}
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ 
  children, 
  to, 
  onClick,
  isActive 
}: { 
  children: React.ReactNode; 
  to: string; 
  onClick: () => void;
  isActive: boolean 
}) => (
  <Link
    to={to}
    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-300
      ${isActive 
        ? 'bg-netblue-50 text-netblue-600' 
        : 'text-gray-700 hover:bg-gray-50 hover:text-netblue-600'
      }
    `}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
