import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Mario Dubois",
      role: "testim1Role",
      image: "/images/mario_dubois.webp",
      text: "testim1Text",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "testim2Role",
      image: "/images/thomas_martin.jpg",
      text: "testim2Text",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Lambert",
      role: "testim3Role",
      image: "/images/sophie_lambert.jpg",
      text: "testim3Text",
      rating: 4
    },
    {
      id: 4,
      name: "Natacha Cliford",
      role: "testim4Role",
      image: "/images/natacha_cliford.jpg",
      text: "testim4Text",
      rating: 5
    },
    {
      id: 5,
      name: "Petit Daphné",
      role: "testim5Role",
      image: "/images/petit_daphne.jpg",
      text: "testim5Text",
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
    <section className="py-20 bg-gradient-to-br from-red-950 via-red-900 to-red-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-600 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-red-400 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-red-100 text-xl max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto font-inter">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Image Section */}
              <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white/30 shadow-lg">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg">
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
                  <div className="text-red-200 font-semibold text-lg">
                    {t(testimonials[currentTestimonial].role)}
                  </div>
                </div>

                <blockquote className="text-red-100 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{t(testimonials[currentTestimonial].text)}"
                </blockquote>

                {/* Navigation Dots */}
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:border-red-200 transition-all duration-300 text-white border border-white/20"
                    aria-label={t('prevTestimonial')}
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
                            ? 'bg-red-500 scale-125'
                            : 'bg-white/30 hover:bg-red-400'
                        }`}
                        aria-label={`${t('goToTestimonial')} ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:border-red-200 transition-all duration-300 text-white border border-white/20"
                    aria-label={t('nextTestimonial')}
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
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30 hover:border-red-200 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl font-bold text-red-200 mb-2">500+</div>
            <div className="text-red-100">
              {t('statClients')}
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30 hover:border-red-200 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl font-bold text-red-200 mb-2">98%</div>
            <div className="text-red-100">{t('statSatisfaction')}</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/30 hover:border-red-200 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl font-bold text-red-200 mb-2">24h</div>
            <div className="text-red-100">{t('statSupport')}</div>
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