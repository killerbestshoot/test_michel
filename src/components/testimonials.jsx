import { useState, useEffect } from 'react';

const TestimonialsSection = ({ lang: propLang }) => {

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

  const testimonials = [
    {
      id: 1,
      name: "Mario Dubois",
      role: "Kliyan satisfe",
      image: "/images/mario_dubois.webp",
      text: "Avek MichelCell, mwen jwenn yon telefòn ki nan gou mwen ! Sèvis kliyan an te ekselan e mwen rekòmande yo bay tout moun.",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Gamer passionné",
      image: "/images/thomas_martin.jpg",
      text: "lontan mwen t ap chèche yon laptop pou jwèt videyo, MichelCell te ede m jwenn youn ki pafè pou bezwen mwen yo. Eksperyans achte a te fasil epi rapid.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Lambert",
      role: "Professionnelle",
      image: "/images/sophie_lambert.jpg",
      text: "Mon MacBook est comme neuf après la réparation. Rapidité et expertise au rendez-vous. Un service de qualité que je vais recommander.",
      rating: 4
    },
    {
      id: 4,
      name: "Natacha Cliford",
      role: "Etidyan fakilte dwa",
      image: "/images/natacha_cliford.jpg",
      text: "Nan zafè acha telefòn ak akseswa, MichelCell te ban mwen yon eksperyans san parèy. Mèsi pou tout èd la!",
      rating: 5
    },
    {
      id: 5,
      name: "Petit Daphné",
      role: "Fotograf amate",
      image: "/images/petit_daphne.jpg",
      text: "Mwen renmen nouvo kamera mwen an! MichelCell te ede m chwazi li epi sèvis la te ekstraòdinè. M'ap toujou achte isit la.",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    // Redémarre l'auto-play après 10 secondes d'inactivité
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-500 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            { lang === 'fr' ? 'Ils nous font confiance' : 'What Our Customers Say' }
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            { lang === 'fr' ? 'Découvrez les expériences de nos clients satisfaits' : 'Discover the experiences of our satisfied customers' }
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto font-inter">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Image Section */}
              <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-300 font-semibold text-lg">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>

                <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Navigation Dots */}
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                    aria-label="Témoignage précédent"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'bg-blue-500 scale-125'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Aller au témoignage ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                    aria-label="Témoignage suivant"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">
              { lang === 'fr' ? 'Clients satisfaits' : 'Satisfied Customers' }
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">{ lang === 'fr' ? 'Taux de satisfaction' : 'Satisfaction Rate' }</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
            <div className="text-gray-300">{ lang === 'fr' ? 'Support réactif' : 'Responsive Support' }</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;