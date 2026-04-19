# Memento Studio — Galería Digital Narrativa 🎨📸

Plataforma web premium desarrollada con **React 19**, **Tailwind CSS v4** y **Framer Motion**, diseñada para **Memento Studio**. Backend invisible basado en Google Sheets para gestionar catálogos de arte fotográfico y textil, con enfoque en narrativa visual e inmersión para el mercado **Argentino**.

## 🌟 1. Identidad de Marca

### 📜 Misión
> *"El arte no reproduce lo visible, sino que hace visible lo que no siempre lo es."* — **Paul Klee**
>
> Transformar recuerdos efímeros en piezas de arte tangibles, utilizando la sensibilidad del encuadre audiovisual y la calidez de las texturas textiles para crear objetos que emocionen y perduren.

### 🔭 Visión
> *"Vi el ángel en el mármol y tallé hasta que lo liberé."* — **Miguel Ángel**
>
> Ser el estudio referente en decoración personalizada, donde la innovación técnica y la artesanía se fusionan para liberar las emociones contenidas en una fotografía, convirtiéndolas en legados visuales únicos.

### 🎯 Objetivos Estratégicos
*   **Composición de Autor:** Reflejar el trasfondo audiovisual de la fundadora en cada galería.
*   **Gestión Autónoma:** Control total del catálogo (precios, stock y fotos) mediante Google Sheets.
*   **Conversión Emocional:** Sistema de consulta directa vía Instagram para el mercado **Argentino**.
*   **Dualidad Estética:** Experiencia dual con diseños radicalmente opuestos para "Cuadros" (rígido/estructurado) y "Tejidos" (orgánico/texturizado).

---

## 🛠️ 2. Arquitectura Técnica

*   **Frontend:** React 19 (Vite 8)
*   **Estilos:** Tailwind CSS v4 + CSS Variables (`@theme`) + Custom Design System
*   **Animaciones:** Framer Motion (scroll-triggered, staggering, spring physics, page transitions, path drawing)
*   **CMS / Fuente de Datos:** Google Sheets (Pestañas separadas por GID)
*   **URLs de Datos:** 
    *   `Cuadros`: [CSV GID 0](https://docs.google.com/spreadsheets/d/e/2PACX-1vRMGw9wRMnqwwxsMcz1rxty2ZCYTGp3VZJjIAalwjyUf6O4Y6mjsQEPvtJiYOPhIK8DpiZ2GWFCP8jP/pub?output=csv&gid=0)
    *   `Tejidos`: [CSV GID 1668974614](https://docs.google.com/spreadsheets/d/e/2PACX-1vRMGw9wRMnqwwxsMcz1rxty2ZCYTGp3VZJjIAalwjyUf6O4Y6mjsQEPvtJiYOPhIK8DpiZ2GWFCP8jP/pub?output=csv&gid=1668974614)
*   **Tipografía:** 
    *   `Art`: Playfair Display (font-black) / Cormorant Garamond (font-semibold)
    *   `Textile`: Montserrat (font-semibold)
    *   `UI`: Inter

---

## 🎨 3. Sistema de Diseño

### Paleta de Colores (Alto Contraste)
| Token | Hex | Uso |
|-------|-----|-----|
| `art-bg` | #EDE8DF | Fondo museo (más cálido/oscuro para contraste) |
| `art-text` | #111111 | Texto negro fuerte |
| `art-muted` | #555250 | Texto secundario legible |
| `art-accent` | #B8973E | Gold oscurecido |
| `textile-bg` | #EBE0D0 | Fondo atelier |
| `textile-text` | #1F1410 | Texto marrón oscuro |
| `memento-earth` | #5C2E10 | Acento tierra intenso |
| `memento-charcoal` | #111111 | Negro puro |

### Animaciones Temáticas
| Página | Decoraciones |
|--------|-------------|
| Home | Línea gold animada, M rotando 60s, iconos flotantes, scroll indicator |
| Cuadros | Marcos flotantes giratorios, puntos de galería pulsantes |
| Tejidos | Hilos SVG con path-draw, Bolas de lana flotantes, Punto cruz pulsante |
| Skeleton | Shimmer escalonado, expanding line, 3-dot pulse loader |

### Responsive Breakpoints
| Breakpoint | Uso |
|------------|-----|
| `sm` (640px) | 2 columnas grid |
| `md` (768px) | Desktop nav, modals lado a lado |
| `lg` (1024px) | 3 columnas, layout completo |
| `xl` (1280px) | 4 columnas tejidos |

---

## 📂 4. Estructura de Carpetas

```text
memento-studio/
├── public/
│   └── favicon.png            # Logo M como ícono de pestaña
├── src/
│   ├── assets/                # Logos (logos1.png, logos2.png) + hero.png
│   ├── components/
│   │   ├── Navbar.jsx         # Glassmorphism + Mobile hamburger + Scroll-aware
│   │   ├── ProductCard.jsx    # Theme-aware + Image shimmer loading + Modal trigger
│   │   ├── ProductModal.jsx   # Detail view + Dot navigation + IG CTA
│   │   ├── Skeleton.jsx       # Premium shimmer + 3-dot pulse loader
│   │   └── Layout.jsx         # Theme wrapper + Page transitions + Footer
│   ├── context/
│   │   └── ThemeContext.jsx    # Route-based theme engine (art ↔ textile)
│   ├── pages/
│   │   ├── Home.jsx           # Hero + Philosophy + IG CTA (cinematic)
│   │   ├── Cuadros.jsx        # Masonry + Floating frames decorations
│   │   ├── Tejidos.jsx        # Grid + SVG yarn + Cross-stitch dots
│   │   └── Oops.jsx           # Artistic 404 with breathing animation
│   ├── services/
│   │   └── api.js             # Multi-tab GID + In-memory cache (5min TTL) + Prefetch
│   ├── index.css              # Design system (@theme tokens + animations + utilities)
│   ├── App.jsx                # Router + prefetchAll on startup
│   └── main.jsx               # Entry point
```

## 🎨 5. Esencia Dual (Theming)

*   **Mundo Cuadros**: 
    *   *Feeling*: Galería de arte moderno, líneas rectas, sombras duras, superficies blancas.
    *   *Layout*: Masonry (staggered columns).
    *   *Decoraciones*: Marcos flotantes con rotación sutil + puntos gold pulsantes.
*   **Mundo Tejidos**: 
    *   *Feeling*: Atelier artesanal, bordes redondeados (rounded-2xl), paleta tierra.
    *   *Layout*: Grid uniforme con hover scale.
    *   *Decoraciones*: Líneas SVG (hilos), bolas flotantes (lana), patrón punto cruz.
*   **Navbar**: Glassmorphism scroll-aware + Mobile hamburger con slide-in. Logo adapta brightness/sepia por tema.
*   **Footer**: Minimalista con IG link + Copyright + País.

## 📊 6. Lógica de Negocio

*   **Cache Inteligente:** `prefetchAll()` en App startup → datos en cache 5 min → carga instantánea en galerías.
*   **Carga por Categoría:** `fetchData('cuadros')` / `fetchData('tejidos')` apunta al GID correcto.
*   **Normalización de Headers:** Unifica `ImagenCuadro X` / `Imagen Tejido X` → `images[]`.
*   **Filtro:** Solo `Estado: 1` + `Nombre` presente (descarta filas vacías).
*   **Conversor Imagen:** Google Drive → `lh3.googleusercontent.com/d/ID`.
*   **Fallback:** Shimmer loader mientras carga imagen + "Obra en preparación" si falla.
*   **Modal:** Carrusel con dot navigation + CTA Instagram + Precio formateado ARS.
*   **Error Recovery:** Si la red falla, sirve datos stale del cache como fallback.

---

## 🇦🇷 7. Operación Local
*   **Moneda:** Pesos Argentinos ($ ARS).
*   **Atención:** Centralizada en Instagram @memento.studiooo.
*   **Responsive:** Mobile-first, probado 320px → 1920px.
*   **Favicon:** Logo M personalizado en pestaña del navegador.