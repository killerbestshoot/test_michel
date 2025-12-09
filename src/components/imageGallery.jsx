import React, { useState, useEffect } from 'react';

const ImageGallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const images = [
    {
      src: "/images/storefront_michel_cell.jpg",
      alt: "Michel Cell Storefront",
      caption: "Notre boutique principale"
    },
    {
      src: "/images/store-interior-1.jpg",
      alt: "Intérieur de la boutique",
      caption: "Espace d'exposition moderne"
    },
    {
      src: "/images/our_last_smartphone.jpg",
      alt: "Display de produits",
      caption: "Nos derniers smartphones"
    },
    {
      src: "/images/customer-service.jpg",
      alt: "Service client",
      caption: "Accompagnement personnalisé"
    },
    {
      src: "/images/repair-station.jpg",
      alt: "Station de réparation",
      caption: "Atelier technique expert"
    },
    {
      src: "/images/gaming_space_vr.jpg",
      alt: "Espace gaming",
      caption: "Zone dédiée aux gamers"
    },
    {
      src: "/images/accessories-wall.jpg",
      alt: "Mur d'accessoires",
      caption: "Large choix d'accessoires"
    },
    {
      src: "/images/team-photo.jpg",
      alt: "Équipe Michel Cell",
      caption: "Notre équipe d'experts"
    }
  ];

  const directions = [
    'left', 'right', 'top', 'bottom', 
    'top-left', 'top-right', 'bottom-left', 'bottom-right',
    'zoom-in', 'zoom-out', 'rotate-left', 'rotate-right'
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
    const baseClass = "w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-1000 ease-in-out";
    
    switch (dir) {
      case 'left':
        return `${baseClass} animate-slide-in-left`;
      case 'right':
        return `${baseClass} animate-slide-in-right`;
      case 'top':
        return `${baseClass} animate-slide-in-top`;
      case 'bottom':
        return `${baseClass} animate-slide-in-bottom`;
      case 'top-left':
        return `${baseClass} animate-slide-in-top-left`;
      case 'top-right':
        return `${baseClass} animate-slide-in-top-right`;
      case 'bottom-left':
        return `${baseClass} animate-slide-in-bottom-left`;
      case 'bottom-right':
        return `${baseClass} animate-slide-in-bottom-right`;
      case 'zoom-in':
        return `${baseClass} animate-zoom-in`;
      case 'zoom-out':
        return `${baseClass} animate-zoom-out`;
      case 'rotate-left':
        return `${baseClass} animate-rotate-left`;
      case 'rotate-right':
        return `${baseClass} animate-rotate-right`;
      default:
        return `${baseClass} animate-fade-in`;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Image Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className={getAnimationClass(direction)}
            />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-500 ease-in-out">
              <p className="font-mono text-white text-lg text-center">
                {images[currentImageIndex].caption}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setDirection(getRandomDirection());
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-blue-500 scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                setDirection(getRandomDirection());
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 text-white"
              aria-label="Image précédente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
                setDirection(getRandomDirection());
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 text-white"
              aria-label="Image suivante"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-linear"
              style={{
                width: `${((currentImageIndex + 1) / images.length) * 100}%`
              }}
            />
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4">
            <span className="font-mono text-gray-300 text-sm">
              {currentImageIndex + 1} / {images.length}
            </span>
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
          }
          to {
            opacity: 1;
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