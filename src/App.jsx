import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cuadros from './pages/Cuadros';
import Tejidos from './pages/Tejidos';
import Oops from './pages/Oops';
import { prefetchAll } from './services/api';

function App() {
  // Prefetch all data on app startup for instant gallery loading
  useEffect(() => {
    prefetchAll();
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuadros" element={<Cuadros />} />
            <Route path="/tejidos" element={<Tejidos />} />
            <Route path="*" element={<Oops />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
