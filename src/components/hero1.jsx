import React from "react";
import { Link } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext";

export default function Hero1() {
  const { t } = useLanguage();

  return (
    <section className="hero-section relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://via.placeholder.com/1920x1080"
        >
          <source
            src="/videos/6611939-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          <source src="/videos/votre-video.webm" type="video/webm" />
          {t('videoFallback')}
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="container relative z-10 text-center text-white drop-shadow-lg max-w-3xl mx-auto p-8 rounded-lg">
        <h1 className="font-inter font-semibold text-white text-3xl md:text-4xl mb-4">
          {t('heroTitle')}
        </h1>
        <p className="mt-4 text-gray-100 font-inter text-lg md:text-xl leading-relaxed">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/products"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('discoverCollection')}
          </Link>
          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-lg"
          >
            {t('buyingGuide')}
          </Link>
        </div>
      </div>
    </section>
  );
}