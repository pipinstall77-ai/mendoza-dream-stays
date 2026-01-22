import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#propiedades', label: 'Propiedades' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#pagos', label: 'Pagos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary">
            Refugio<span className="text-gold">Mendoza</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors hover:text-gold ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant={isScrolled ? 'gold' : 'hero'} size="sm">
            Reservar Ahora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-foreground hover:text-gold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" className="w-full">
              Reservar Ahora
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
