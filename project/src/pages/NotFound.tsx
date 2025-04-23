import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {language === 'es' ? 'Página no encontrada' : 'Page Not Found'}
        </h2>
        <p className="text-gray-600 mb-8">
          {language === 'es' 
            ? 'Lo sentimos, la página que estás buscando no existe o ha sido movida.'
            : 'Sorry, the page you are looking for doesn\'t exist or has been moved.'}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Home size={20} className="mr-2" />
          {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;