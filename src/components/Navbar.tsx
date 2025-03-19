
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#roadmap' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled ? 'py-2 bg-tech-darker/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-mono font-bold text-xl md:text-2xl title-gradient">TECH-TREX</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-tech-teal transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="tech-button text-sm"
          >
            Register Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-tech-teal" /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-tech-darker/95 backdrop-blur-md py-4 px-6 flex flex-col gap-4 border-t border-tech-teal/20 animate-fade-in md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 py-2 hover:text-tech-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="tech-button text-center mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
