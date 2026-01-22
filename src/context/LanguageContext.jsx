import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState('fr');

  // Cookie helpers
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  };

  useEffect(() => {
    const saved = getCookie('mc_lang');
    if (saved === 'fr' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (value) => {
    setLangState(value);
    setCookie('mc_lang', value, 365);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, setCookie, getCookie }}>
      {children}
    </LanguageContext.Provider>
  );
};
