
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-kudevs-blue to-kudevs-purple"
        >
          RankBoost Ai
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              {['services', 'courses', 'portfolio', 'team', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2"
                >
                  {item}
                </button>
              ))}
            </>
          ) : (
            <>
              <Link to="/#services" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Services
              </Link>
              <Link to="/#courses" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Courses
              </Link>
              <Link to="/#portfolio" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Portfolio
              </Link>
              <Link to="/#team" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Team
              </Link>
              <Link to="/#testimonials" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Testimonials
              </Link>
              <Link to="/#contact" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
                Contact
              </Link>
            </>
          )}
          
          <Link to="/blog" className="nav-item text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2">
            Blog
          </Link>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-kudevs-blue to-kudevs-purple text-white hover:shadow-lg transition-all"
          >
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-kudevs-gray-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-lg border-t border-kudevs-gray-100 animate-fade-in-up">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                {['services', 'courses', 'portfolio', 'team', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left"
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link to="/#services" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Services
                </Link>
                <Link to="/#courses" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Courses
                </Link>
                <Link to="/#portfolio" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Portfolio
                </Link>
                <Link to="/#team" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Team
                </Link>
                <Link to="/#testimonials" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Testimonials
                </Link>
                <Link to="/#contact" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
                  Contact
                </Link>
              </>
            )}
            
            <Link to="/blog" className="text-kudevs-gray-800 hover:text-kudevs-blue font-medium capitalize py-2 text-left">
              Blog
            </Link>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-kudevs-blue to-kudevs-purple text-white w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
