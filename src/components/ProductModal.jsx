import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  if (!product) return null;

  const images = product.images || [];

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  // Reset index when modal opens with new product
  const handleExited = () => setCurrentImg(0);

  return (
    <AnimatePresence onExitComplete={handleExited}>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-memento-charcoal/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-memento-bone overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 bg-memento-charcoal/80 text-white rounded-full hover:bg-memento-gold transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Image */}
            <div className="relative w-full md:w-3/5 aspect-square md:aspect-auto bg-memento-charcoal/5 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={images[currentImg]}
                  alt={product.Nombre}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-3 p-2 md:p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImg} className="absolute right-3 p-2 md:p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImg ? 'bg-white w-4' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="w-full md:w-2/5 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-6 overflow-y-auto">
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-memento-charcoal">
                    {product.Nombre}
                  </h2>
                  <div className="h-[2px] w-10 bg-memento-gold mt-3" />
                </div>

                <p className="font-art text-sm md:text-base leading-relaxed text-memento-charcoal/70 font-semibold">
                  {product.Detalles}
                </p>

                <span className="block text-2xl md:text-3xl font-serif font-bold text-memento-charcoal">
                  ${Number(product.Valor).toLocaleString('es-AR')}
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href="https://instagram.com/memento.studiooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-memento-charcoal text-white py-4 px-6 flex items-center justify-between group hover:bg-memento-gold transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold">
                      Consultar
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-center text-memento-charcoal/40 font-bold">
                  Envíos a toda Argentina
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
