import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logos2.png';

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cuadros', path: '/cuadros' },
    { name: 'Tejidos', path: '/tejidos' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll detection for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTextile = theme === 'textile';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? 'glass shadow-sm border-b border-current/5'
          : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Memento"
                className={`w-full h-full object-contain transition-all duration-500
                  ${isTextile ? 'brightness-50 sepia' : 'brightness-0 opacity-80'}`}
              />
            </motion.div>
            <span className="hidden md:inline font-serif tracking-[0.4em] text-[10px] uppercase font-bold opacity-60 group-hover:opacity-100 transition-opacity">
              Memento Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-[10px] uppercase tracking-[0.3em] transition-all duration-300
                  ${location.pathname === link.path
                    ? 'opacity-100 font-bold'
                    : 'opacity-40 hover:opacity-80'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${isTextile ? 'bg-memento-earth' : 'bg-memento-gold'}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-memento-charcoal/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`absolute right-0 top-0 h-full w-[75%] max-w-sm p-8 pt-24 flex flex-col gap-8
                ${isTextile ? 'bg-textile-bg' : 'bg-art-bg'}`}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-2xl font-serif tracking-wider
                      ${location.pathname === link.path ? 'opacity-100 font-bold' : 'opacity-40'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-auto opacity-30">
                <div className="h-[1px] w-full bg-current mb-6" />
                <span className="text-[10px] uppercase tracking-[0.3em]">@memento.studiooo</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
