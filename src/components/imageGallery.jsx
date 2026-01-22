import React, { useState, useEffect } from "react";
import { useLanguage } from '../context/LanguageContext';

const ImageGallerySection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const images = [
    {
      src: "/images/storefront_michel_cell.jpg",
      alt: t('imgStorefront'),
      caption: t('imgStorefront'),
    },
    {
      src: "/images/store-interior-1.jpg",
      alt: t('imgInterior'),
      caption: t('imgInterior'),
    },
    {
      src: "/images/our_last_smartphone.jpg",
      alt: t('imgSmartphone'),
      caption: t('imgSmartphone'),
    },
    {
      src: "/images/customer-service.jpg",
      alt: t('imgService'),
      caption: t('imgService'),
    },
    {
      src: "/images/repair-station.jpg",
      alt: t('imgRepair'),
      caption: t('imgRepair'),
    },
    {
      src: "/images/gaming_space_vr.jpg",
      alt: t('imgGaming'),
      caption: t('imgGaming'),
    },
    {
      src: "/images/accessories-wall.jpg",
      alt: t('imgAccessories'),
      caption: t('imgAccessories'),
    },
    {
      src: "/images/team-photo.jpg",
      alt: t('imgTeam'),
      caption: t('imgTeam'),
    },
  ];

  const directions = [
    "left",
    "right",
    "top",
    "bottom",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "zoom-in",
    "zoom-out",
    "rotate-left",
    "rotate-right",
  ];

  const getRandomDirection = () => {
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newDirection = getRandomDirection();
      setDirection(newDirection);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  const getAnimationClass = (dir) => {
    const baseClass =
      "w-full h-full object-cover transition-all duration-1000 ease-in-out";

    switch (dir) {
      case "left":
        return `${baseClass} animate-slide-in-left`;
      case "right":
        return `${baseClass} animate-slide-in-right`;
      case "top":
        return `${baseClass} animate-slide-in-top`;
      case "bottom":
        return `${baseClass} animate-slide-in-bottom`;
      case "top-left":
        return `${baseClass} animate-slide-in-top-left`;
      case "top-right":
        return `${baseClass} animate-slide-in-top-right`;
      case "bottom-left":
        return `${baseClass} animate-slide-in-bottom-left`;
      case "bottom-right":
        return `${baseClass} animate-slide-in-bottom-right`;
      case "zoom-in":
        return `${baseClass} animate-zoom-in`;
      case "zoom-out":
        return `${baseClass} animate-zoom-out`;
      case "rotate-left":
        return `${baseClass} animate-rotate-left`;
      case "rotate-right":
        return `${baseClass} animate-rotate-right`;
      default:
        return `${baseClass} animate-fade-in`;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image de fond pleine page */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className={getAnimationClass(direction)}
        />

        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenu superposé */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {/* Légende en haut */}
        <div className="pt-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 transform transition-all duration-500 ease-in-out">
              <p className="font-mono text-white text-xl md:text-2xl lg:text-3xl text-center">
                {images[currentImageIndex].caption}
              </p>
            </div>
          </div>
        </div>

        {/* Espace central vide pour maximiser la vue de l'image */}
        <div className="flex-grow flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length,
              );
              setDirection(getRandomDirection());
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/30 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:border-red-400 text-white"
            aria-label={t('imgPrev')}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              setCurrentImageIndex((prev) => (prev + 1) % images.length);
              setDirection(getRandomDirection());
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/30 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:border-red-400 text-white"
            aria-label={t('imgNext')}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Conteneur pour les contrôles en bas */}
        <div className="pb-8 md:pb-12 px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Progress Bar */}
            <div className="bg-white/20 rounded-full h-2 md:h-3 overflow-hidden w-full">
              <div
                className="bg-red-500 h-full rounded-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${((currentImageIndex + 1) / images.length) * 100}%`,
                }}
              />
            </div>

            {/* Navigation Dots et Counter */}
            <div className="flex items-center justify-between">
              {/* Navigation Dots */}
              <div className="flex gap-2 md:gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setDirection(getRandomDirection());
                    }}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-red-500 scale-125"
                        : "bg-white/60 hover:bg-red-400"
                    }`}
                    aria-label={`${t('goToImage')} ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center">
                <span className="font-mono text-white text-sm md:text-base bg-black/40 px-3 md:px-4 py-1 md:py-2 rounded-full">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%) scale(1.1);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%) scale(1.1);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-top {
          from {
            transform: translateY(-100%) scale(1.1);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom {
          from {
            transform: translateY(100%) scale(1.1);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-top-left {
          from {
            transform: translate(-100%, -100%) scale(1.2);
            opacity: 0;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-top-right {
          from {
            transform: translate(100%, -100%) scale(1.2);
            opacity: 0;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom-left {
          from {
            transform: translate(-100%, 100%) scale(1.2);
            opacity: 0;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom-right {
          from {
            transform: translate(100%, 100%) scale(1.2);
            opacity: 0;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes zoom-out {
          from {
            transform: scale(1.2);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes rotate-left {
          from {
            transform: rotate(-45deg) scale(1.1);
            opacity: 0;
          }
          to {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes rotate-right {
          from {
            transform: rotate(45deg) scale(1.1);
            opacity: 0;
          }
          to {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-slide-in-top {
          animation: slide-in-top 1s ease-out;
        }

        .animate-slide-in-bottom {
          animation: slide-in-bottom 1s ease-out;
        }

        .animate-slide-in-top-left {
          animation: slide-in-top-left 1s ease-out;
        }

        .animate-slide-in-top-right {
          animation: slide-in-top-right 1s ease-out;
        }

        .animate-slide-in-bottom-left {
          animation: slide-in-bottom-left 1s ease-out;
        }

        .animate-slide-in-bottom-right {
          animation: slide-in-bottom-right 1s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 1s ease-out;
        }

        .animate-zoom-out {
          animation: zoom-out 1s ease-out;
        }

        .animate-rotate-left {
          animation: rotate-left 1s ease-out;
        }

        .animate-rotate-right {
          animation: rotate-right 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ImageGallerySection;
