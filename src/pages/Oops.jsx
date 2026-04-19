import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const Oops = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      <div className="relative mb-8">
        <motion.h1
          className="text-[8rem] sm:text-[10rem] md:text-[14rem] font-serif font-bold opacity-[0.04] select-none leading-none"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          404
        </motion.h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            className="font-art text-3xl md:text-4xl italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Oops!
          </motion.p>
        </div>
      </div>

      <motion.div
        className="space-y-5 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg md:text-xl font-serif uppercase tracking-[0.2em]">Narrativa Perdida</h2>
        <p className="font-art text-sm md:text-base opacity-50 leading-relaxed">
          Esta pieza no se encuentra en nuestra galería. El arte nos lleva por caminos inesperados.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-memento-gold hover:-translate-x-2 transition-transform tracking-widest uppercase text-xs font-bold pt-4"
        >
          <MoveLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </motion.div>

      <motion.div
        className="flex gap-2 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-1 h-1 rounded-full bg-memento-gold" />
        <div className="w-1 h-1 rounded-full bg-current opacity-15" />
        <div className="w-1 h-1 rounded-full bg-current opacity-5" />
      </motion.div>
    </motion.div>
  );
};

export default Oops;
