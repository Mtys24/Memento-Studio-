import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Skeleton = () => {
  const { theme } = useTheme();
  const isTextile = theme === 'textile';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 md:pt-28 px-6 md:px-12 lg:px-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header shimmer ── */}
        <div className="py-8 md:py-16 space-y-5">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ width: [24, 48, 24] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`h-[2px] ${isTextile ? 'bg-memento-earth/20' : 'bg-memento-gold/30'}`}
            />
            <div className="h-3 w-20 bg-current/[0.06] rounded-full" />
          </div>

          <motion.div
            className="h-14 md:h-20 w-3/4 rounded bg-current/[0.04] overflow-hidden relative"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          <div className="h-4 w-1/2 bg-current/[0.04] rounded-full" />
        </div>

        {/* ── Cards shimmer grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="space-y-3"
            >
              <div className={`aspect-[3/4] rounded-lg overflow-hidden relative ${isTextile ? 'bg-memento-earth/[0.04]' : 'bg-memento-charcoal/[0.03]'}`}>
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                {/* Decorative frame lines */}
                <div className="absolute inset-4 border border-current/[0.03] rounded" />
              </div>
              <div className="space-y-2 px-1">
                <motion.div
                  animate={{ opacity: [0.04, 0.08, 0.04] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                  className="h-4 w-3/4 bg-current rounded-full"
                />
                <div className="h-3 w-1/2 bg-current/[0.04] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Loading indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center items-center gap-2 py-16"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            className={`w-1.5 h-1.5 rounded-full ${isTextile ? 'bg-memento-earth' : 'bg-memento-gold'}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skeleton;
