import React, { useState, useEffect } from 'react';
import Hero1 from './hero1';
import Brand from './brand';
import TestimonialsSection from './testimonials';
import ProductsPreviewSection from './preview.jsx';
import OurVisionSection from './ourvision.jsx';
import Footer from './footer';
import ImageGallerySection from './imageGallery';


export default function Landing() {
  const [lang, setLang] = useState('fr');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const waMessage = lang === 'fr'
    ? encodeURIComponent("Bonjour Michel Cell 👋")
    : encodeURIComponent("Hello Michel Cell 👋");

  // Cookie helpers
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  };

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
    const saved = getCookie('mc_lang');
    const consentGiven = getCookie('mc_consent');
    
    if (saved === 'fr' || saved === 'en') {
      setLang(saved);
    }
    
    if (!consentGiven) {
      setShowCookieConsent(true);
    }
  }, []);

  const setLangAndCookie = (value) => {
    setLang(value);
    setCookie('mc_lang', value, 365);
  };

  const acceptCookies = () => {
    setCookie('mc_consent', 'true', 365);
    setShowCookieConsent(false);
  };


  return (
    <>
      <Hero1 lang={lang} />
      <Brand lang={lang} />
      <TestimonialsSection lang={lang} />
      <ProductsPreviewSection lang={lang} />
      <ImageGallerySection lang={lang} />
      <OurVisionSection lang={lang} />
      <Footer lang={lang} />
      
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 flex items-center gap-3">
        {/* Language toggle (FR / EN) */}
        <div className="flex items-center bg-white/5 rounded-full p-1 shadow-sm">
          <button
            type="button"
            aria-pressed={lang === 'fr'}
            onClick={() => setLangAndCookie('fr')}
            title="Français"
            className={`px-3 py-1 rounded-full text-sm font-semibold transition ${lang === 'fr' ? 'bg-white text-gray-900' : 'text-white/90 hover:bg-white/10'}`}
          >
            FR
          </button>
          <button
            type="button"
            aria-pressed={lang === 'en'}
            onClick={() => setLangAndCookie('en')}
            title="English"
            className={`ml-1 px-3 py-1 rounded-full text-sm font-semibold transition ${lang === 'en' ? 'bg-white text-gray-900' : 'text-white/90 hover:bg-white/10'}`}
          >
            EN
          </button>
        </div>

        <div className="group relative">
          <a
            href={`https://wa.me/50947763992?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M20.52 3.48A11.92 11.92 0 0012 .03C5.37.03-.09 5.49-.09 12.13c0 2.14.56 4.2 1.62 6.03L0 24l6.07-1.58A11.98 11.98 0 0012.03 24c6.63 0 12.09-5.46 12.09-12.12 0-3.24-1.27-6.28-3.6-8.4zM12.03 21.6c-1.64 0-3.24-.43-4.63-1.24l-.33-.19-3.6.94.95-3.5-.21-.36A9.37 9.37 0 012.7 12.13c0-5.13 4.18-9.31 9.33-9.31 2.5 0 4.84.98 6.61 2.76 1.8 1.8 2.8 4.13 2.8 6.64 0 5.15-4.19 9.33-9.34 9.33z"/>
              <path d="M17.2 14.04c-.27-.14-1.58-.78-1.82-.87-.24-.1-.41-.14-.58.14-.17.27-.66.86-.8 1.04-.15.17-.3.19-.57.06-.27-.14-1.13-.42-2.15-1.32-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.3.41-.45.14-.15.19-.25.29-.42.1-.17.05-.32-.03-.46-.08-.14-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.14.17 1.85 2.86 4.5 3.9 3.08 1.24 3.08.83 3.64.78.57-.05 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.49-.07-.12-.27-.19-.57-.33z"/>
            </svg>
          </a>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
            {lang === 'fr' ? 'Contacter nous' : 'Contact us'}
          </span>
        </div>
      </div>

      {/* Cookie Consent Modal */}
      {showCookieConsent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md mx-4 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'fr' ? 'Paramètres des Cookies' : 'Cookie Settings'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {lang === 'fr' 
                ? 'Notre site utilise des cookies pour améliorer votre expérience et mémoriser vos préférences (langue, données de navigation, etc.). En acceptant, vous consentez à l\'utilisation de ces cookies.' 
                : 'Our site uses cookies to enhance your experience and remember your preferences (language, browsing data, etc.). By accepting, you consent to the use of these cookies.'}
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={acceptCookies}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {lang === 'fr' ? 'Accepter' : 'Accept'}
              </button>
              <button
                onClick={() => setShowCookieConsent(false)}
                className="w-full px-4 py-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                {lang === 'fr' ? 'Refuser' : 'Decline'}
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {lang === 'fr' 
                ? 'Vous pouvez modifier vos préférences dans les paramètres du navigateur.' 
                : 'You can change your preferences in browser settings.'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
