import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const { theme } = useTheme();
  const [currentImg, setCurrentImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImgError, setIsImgError] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const images = product.images || [];
  const isArt = theme === 'art';

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
    setIsImgError(false);
    setIsImgLoaded(false);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
    setIsImgError(false);
    setIsImgLoaded(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsModalOpen(true)}
        className={`group cursor-pointer relative overflow-hidden transition-all duration-500
          ${isArt
            ? 'bg-art-surface shadow-md hover:shadow-xl border border-art-muted/10'
            : 'rounded-2xl bg-textile-surface/80 border border-textile-muted/15 shadow-lg hover:shadow-xl'
          }`}
      >
        {/* Image */}
        <div className={`relative aspect-[3/4] overflow-hidden ${!isArt && 'rounded-t-2xl'}`}>
          {/* Loading shimmer */}
          {!isImgLoaded && !isImgError && (
            <div className="absolute inset-0 bg-memento-bone/50 z-10">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isImgError && images.length > 0 ? (
              <motion.img
                key={images[currentImg]}
                src={images[currentImg]}
                alt={product.Nombre}
                onError={() => setIsImgError(true)}
                onLoad={() => setIsImgLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isImgLoaded ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-memento-bone/40 flex items-center justify-center">
                <span className="font-serif text-xs text-memento-charcoal/30 italic text-center px-4 font-medium">
                  Obra en preparación...
                </span>
              </div>
            )}
          </AnimatePresence>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-memento-charcoal/0 group-hover:bg-memento-charcoal/15 transition-all duration-500" />

          {/* Expand icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <div className="p-1.5 backdrop-blur-md rounded-full bg-white/80 shadow-sm">
              <Maximize2 className="w-3.5 h-3.5 text-memento-charcoal" />
            </div>
          </div>

          {/* Carousel */}
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevImg} className="p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors backdrop-blur-sm shadow-sm">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button onClick={nextImg} className="p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors backdrop-blur-sm shadow-sm">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentImg ? 'w-4 bg-white' : 'w-1 bg-white/40'}`} />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-4 md:p-5 space-y-2 ${!isArt && 'text-center'}`}>
          <div className={`flex items-baseline gap-2 ${!isArt && 'justify-center'}`}>
            <h3 className={`text-sm md:text-base font-serif font-black tracking-tight ${isArt ? 'uppercase' : ''}`}>
              {product.Nombre}
            </h3>
            <span className="text-xs font-bold opacity-50 whitespace-nowrap">
              ${Number(product.Valor).toLocaleString('es-AR')}
            </span>
          </div>

          <p className="text-[11px] text-memento-charcoal/60 leading-relaxed line-clamp-2 italic font-semibold">
            {product.Detalles}
          </p>

          <div className="pt-2 flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-current/10" />
            <span className={`text-[9px] uppercase tracking-[0.2em] font-bold
              ${isArt ? 'text-memento-gold' : 'text-memento-earth'} opacity-40`}>
              Ver más
            </span>
            <div className="h-[1px] flex-1 bg-current/10" />
          </div>
        </div>
      </motion.div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
