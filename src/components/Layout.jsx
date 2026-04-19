import React from 'react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } }
};

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const isTextile = theme === 'textile';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ${isTextile ? 'bg-textile-bg text-textile-text' : 'bg-art-bg text-art-text'}`}>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className={`border-t ${isTextile ? 'border-textile-muted/20' : 'border-art-muted/10'}`}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-60">
            <div className="w-6 h-[1px] bg-current" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
              © {new Date().getFullYear()} Memento Studio
            </span>
            <div className="w-6 h-[1px] bg-current" />
          </div>

          <a
            href="https://instagram.com/memento.studiooo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity link-underline"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">@memento.studiooo</span>
          </a>

          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">
            Arte & Textil — Argentina
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
