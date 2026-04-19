import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchData } from '../services/api';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { Frame, Sparkles } from 'lucide-react';

const Cuadros = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('cuadros').then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="pt-24 md:pt-28 px-6 md:px-12 lg:px-20 pb-20 md:pb-32 relative overflow-hidden">
      {/* ═══ Floating Frames Background ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 3, -3, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-16 w-52 h-72 border-2 border-memento-gold/[0.06] rotate-12"
        />
        <motion.div
          animate={{ rotate: [0, -2, 2, 0], y: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 -left-12 w-36 h-48 border-2 border-memento-gold/[0.04] -rotate-6"
        />
        <motion.div
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute bottom-1/4 right-10 w-28 h-40 border border-memento-charcoal/[0.03] rotate-3"
        />
        {/* Gallery dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.6, 1], opacity: [0.04, 0.12, 0.04] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
            className="absolute w-2 h-2 rounded-full bg-memento-gold"
            style={{ top: `${20 + i * 20}%`, right: `${4 + (i % 3) * 10}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-8 md:py-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ width: [24, 40, 24] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-[2px] bg-memento-gold"
            />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-memento-gold flex items-center gap-2">
              <Frame className="w-3.5 h-3.5" />
              Exposición
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-memento-charcoal">
            Galería de <span className="italic font-medium">Cuadros</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-memento-charcoal/80 font-semibold">
            Encuadres que capturan la esencia de lo efímero. Cada cuadro es una ventana a una narrativa visual única.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-memento-gold/50"
          />
        </motion.header>

        {/* Gallery */}
        {products.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center space-y-4">
            <Sparkles className="w-8 h-8 mx-auto text-memento-gold/30" />
            <p className="font-serif tracking-widest uppercase text-sm text-memento-charcoal/50 italic font-medium">
              Próximamente nuevas piezas...
            </p>
          </motion.div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {products.map((product, i) => (
              <motion.div
                key={product.ID}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cuadros;
