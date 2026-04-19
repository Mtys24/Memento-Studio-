import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchData } from '../services/api';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { Heart } from 'lucide-react';

const Tejidos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('tejidos').then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="pt-24 md:pt-28 px-6 md:px-12 lg:px-20 pb-20 md:pb-32 relative overflow-hidden">
      {/* ═══ Textile Decorations ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated yarn curves */}
        <svg className="absolute top-16 -right-16 w-[350px] h-[500px] text-memento-earth/[0.06]" viewBox="0 0 350 500" fill="none">
          <motion.path
            d="M 300 30 Q 170 130, 250 260 T 200 480"
            stroke="currentColor" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M 330 80 Q 220 180, 280 340 T 240 490"
            stroke="currentColor" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>

        {/* Floating circles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            className="absolute rounded-full border-2 border-memento-earth/[0.05]"
            style={{ width: 24 + i * 14, height: 24 + i * 14, top: `${25 + i * 22}%`, left: `${-1 + i * 2}%` }}
          />
        ))}

        {/* Cross-stitch dots */}
        <div className="absolute bottom-10 right-5 grid grid-cols-5 gap-3 opacity-[0.04]">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.12 }}
              className="w-1.5 h-1.5 rounded-full bg-memento-earth"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="py-8 md:py-16 space-y-4"
        >
          <div className="flex items-center gap-3 text-memento-earth">
            <motion.div
              animate={{ width: [32, 48, 32] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-[1.5px] bg-current"
            />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold flex items-center gap-2">
              <Heart className="w-3.5 h-3.5" />
              Atelier de Hilo
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter text-memento-earth">
            Mundo <span className="font-medium italic">Tejidos</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-memento-earth/80 font-semibold">
            Calidez en cada trama, texturas que acarician los sentidos. Piezas creadas artesanalmente para envolver tus espacios.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-memento-earth/40"
          />
        </motion.header>

        {/* Gallery */}
        {products.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center space-y-4 text-memento-earth">
            <Heart className="w-8 h-8 mx-auto opacity-25" />
            <p className="font-textile tracking-widest uppercase text-sm italic opacity-50 font-medium">
              El telar está trabajando...
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.ID}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
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

export default Tejidos;
