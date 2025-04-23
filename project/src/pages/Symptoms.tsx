import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Symptoms = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {language === 'es' ? 'Síntomas' : 'Symptoms'}
      </h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg mb-4">
          {language === 'es' 
            ? 'Esta página proporciona información sobre los síntomas comunes del cáncer de piel.'
            : 'This page provides information about common symptoms of skin cancer.'}
        </p>
        
        <div className="mt-6">
          {/* Content will be filled with actual symptoms information */}
          <p className="italic text-gray-600">
            {language === 'es'
              ? 'Contenido detallado de síntomas en desarrollo...'
              : 'Detailed symptoms content in development...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;