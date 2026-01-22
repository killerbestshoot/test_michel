
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/header';
import Landing from './components/Landing';
import LoadingFallback from './components/LoadingFallback';

const Accessories = lazy(() => import('./pages/Accessories'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
