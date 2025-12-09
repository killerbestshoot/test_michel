import { useEffect, useState } from 'react';

const BrandsSection = ({ lang: propLang }) => {
  const [lang, setLang] = useState('fr');

  // Cookie helper
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  };

  useEffect(() => {
    // Read language from cookie or use prop
    const saved = getCookie('mc_lang');
    if (saved === 'fr' || saved === 'en') {
      setLang(saved);
    } else if (propLang === 'fr' || propLang === 'en') {
      setLang(propLang);
    }
  }, [propLang]);
  const brands = [
    // Première ligne (gauche -> droite)
    ['iPhone', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Huawei', 'Motorola', 'Redmi'],
    // Deuxième ligne (droite -> gauche)
    ['ZTE', 'TCL', 'Tecno', 'Google Pixel', 'Lenovo', 'HP', 'JBL', 'Amazon'],
    // Troisième ligne (gauche -> droite)
    ['Apple Watch', 'Galaxy Watch', 'Starlink', 'PS4', 'PS5', 'AirPods', 'Backup', 'Router']
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('brands-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="brands-section" className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden   font-inter" >
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            { lang === 'fr' ? 'Toutes les marques, un seul expert ' : 'All Brands, One Expert' }
            {' '}<span className="text-blue-400">MichelCell</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            { lang === 'fr' ? 'Découvrez notre vaste sélection de marques de confiance, soigneusement choisies pour vous offrir le meilleur en matière de technologie et de performance.' : 'Discover our vast selection of trusted brands, carefully chosen to offer you the best in technology and performance.' }
          </p>
        </div>

        {/* Conteneur des bandes animées */}
        <div className="space-y-6">
          {/* Première bande (gauche -> droite) */}
          <div className={`flex space-x-8 ${isVisible ? 'animate-scroll-right' : ''}`}>
            {[...brands[0], ...brands[0]].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-semibold text-lg whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          {/* Deuxième bande (droite -> gauche) */}
          <div className={`flex space-x-8 ${isVisible ? 'animate-scroll-left' : ''}`}>
            {[...brands[1], ...brands[1]].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-semibold text-lg whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          {/* Troisième bande (gauche -> droite) */}
          <div className={`flex space-x-8 ${isVisible ? 'animate-scroll-right' : ''}`}>
            {[...brands[2], ...brands[2]].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-semibold text-lg whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats ou informations supplémentaires */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">
              {lang === 'fr' ? 'Marques disponibles' : 'Available Brands'}
              </div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">
              {lang === 'fr' ? 'Produits en stock' : 'Products in Stock'}
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              { lang === 'fr' ? 'Extpert' : 'Expert' }
            </div>
            <div className="text-gray-300">
              {lang === 'fr' ? 'Accompagnement personnalisé' : 'Personalized Support'}
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx global>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        /* Pause l'animation au survol */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandsSection;