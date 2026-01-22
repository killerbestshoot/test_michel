import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LoadingFallback = () => {
  const { t } = useLanguage();
  return <div className="p-8 text-center">{t('loading')}</div>;
};

export default LoadingFallback;
