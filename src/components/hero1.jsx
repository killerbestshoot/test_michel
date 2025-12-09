import React from "react";
import { Link } from 'react-router-dom';

export default function Hero1() {
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
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="container relative z-10 text-center text-white drop-shadow-lg max-w-3xl mx-auto p-8 rounded-lg">
        <h1 className="font-inter font-semibold text-white text-3xl md:text-4xl mb-4">
          Votre référence en matière du numérique
        </h1>
        <p className="mt-4 text-gray-100 font-inter text-lg md:text-xl leading-relaxed">
          Venez découvrir notre sélection premium de smartphones, accessoires et
          services techniques avec un accompagnement expert et personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir la collection
          </Link>
          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-lg"
          >
            Guide d'achat
          </Link>
        </div>
      </div>
    </section>
  );
}
