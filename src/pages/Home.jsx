import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Scissors, Instagram, ChevronRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logos1 from '../assets/logos1.png';

const Home = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible" className="relative overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="relative z-10 space-y-8 md:space-y-10">
            <motion.div variants={fadeUp} className="space-y-5">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ width: [32, 56, 32] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[2px] bg-memento-gold"
                />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-memento-gold font-bold">
                  Memento Studio
                </span>
              </div>

              <motion.img
                src={logos1}
                alt="Memento Studio"
                className="w-[55%] sm:w-[45%] max-w-[340px] h-auto brightness-0 opacity-90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-memento-charcoal">
                Narrativa <br />
                <motion.span
                  className="italic font-medium text-memento-charcoal/70"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                >
                  Visual Exclusiva
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-base md:text-lg font-art leading-relaxed text-memento-charcoal/80 italic font-semibold"
            >
              "El arte no reproduce lo visible, sino que hace visible lo que no siempre lo es."
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cuadros"
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-memento-charcoal text-memento-bone inline-flex items-center justify-between gap-4 overflow-hidden transition-colors duration-300 hover:bg-memento-gold"
              >
                <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                  Galería de Cuadros
                </span>
                <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/tejidos"
                className="px-8 md:px-10 py-4 md:py-5 border-2 border-memento-charcoal/20 hover:border-memento-charcoal/60 transition-colors inline-flex items-center justify-center"
              >
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-memento-charcoal">
                  Mundo Tejidos
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-square lg:aspect-[4/5] hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-full border border-memento-charcoal/[0.06] flex items-center justify-center bg-memento-bone/30">
              {/* Corner ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-memento-gold/25" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-memento-gold/25" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-memento-gold/25" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-memento-gold/25" />

              {/* Rotating M */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute text-[18rem] lg:text-[24rem] font-serif font-black opacity-[0.025] select-none pointer-events-none"
              >
                M
              </motion.span>

              {/* Center icons */}
              <motion.div
                className="relative flex flex-col items-center gap-6 text-memento-charcoal/25"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Camera className="w-14 h-14" strokeWidth={1.2} />
                <motion.div
                  animate={{ height: [80, 100, 80] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-[1px] bg-gradient-to-b from-transparent via-memento-gold/30 to-transparent"
                />
                <Scissors className="w-14 h-14" strokeWidth={1.2} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ PHILOSOPHY ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="h-[1px] flex-1 bg-memento-charcoal/10" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-memento-gold">Filosofía</span>
            <div className="h-[1px] flex-1 bg-memento-charcoal/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { num: '01', title: 'Composición', desc: 'Cada pieza es un encuadre audiovisual, una narrativa congelada en el tiempo que transforma tus recuerdos en arte tangible.' },
              { num: '02', title: 'Artesanía', desc: 'Técnicas artesanales fusionadas con visión contemporánea. Del hilo a la textura, cada detalle cuenta una historia.' },
              { num: '03', title: 'Emoción', desc: 'Liberamos las emociones contenidas en una fotografía, convirtiéndolas en legados visuales que perduran generaciones.' }
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="space-y-4 group"
              >
                <motion.span
                  className="text-memento-gold text-sm font-black tracking-[0.2em] block"
                  whileInView={{ x: [0, 4, 0] }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.num}
                </motion.span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-memento-charcoal">{item.title}</h3>
                <p className="text-sm leading-relaxed text-memento-charcoal/80 font-medium">{item.desc}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '2rem' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                  className="h-[2px] bg-memento-gold/40"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IG CTA ═══ */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto border-2 border-memento-charcoal/[0.06] p-8 md:p-16 text-center space-y-5"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-memento-charcoal/60">Síguenos</span>
          <a
            href="https://instagram.com/memento.studiooo"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 md:gap-6 hover:text-memento-gold transition-colors"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-serif text-lg md:text-2xl tracking-[0.2em] uppercase font-black">
              @memento.studiooo
            </span>
          </a>
          <p className="text-xs text-memento-charcoal/70 max-w-md mx-auto font-medium">
            Consultá disponibilidad y encargos personalizados directamente por Instagram.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
