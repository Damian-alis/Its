import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Activity, BookOpen, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import InfoCard from '../components/InfoCard';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[80vh] flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tipos" className="btn bg-white text-teal-600 hover:bg-gray-100">
              {t.learnMore}
            </Link>
            <Link to="/cuestionario" className="btn bg-teal-700 text-white hover:bg-teal-800 border border-teal-400">
              {t.startQuiz}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t.whatAreSTIs}
            </h2>
            <p className="text-lg mb-6">
              {t.whatAreSTIsText}
            </p>
            <p className="text-lg mb-6">
              Las ITS son causadas por bacterias, virus, hongos y parásitos que se transmiten de una persona a otra durante el contacto sexual. Algunas ITS comunes incluyen la clamidia, la gonorrea, la sífilis, el herpes genital, el VIH y el virus del papiloma humano (VPH).
            </p>
            <p className="text-lg mb-8">
              Es importante entender que las ITS pueden afectar a cualquier persona sexualmente activa, independientemente de su edad, género u orientación sexual. Muchas ITS no presentan síntomas evidentes, lo que significa que es posible tener una infección sin saberlo y transmitirla a otras personas.
            </p>
            
            <div className="mt-12 mb-12 bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                {t.whyImportant}
              </h3>
              <p className="text-gray-700">
                {t.whyImportantText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="section-title">Información Esencial</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title={t.typesOverview}
              description="Conoce los diferentes tipos de ITS, sus síntomas característicos y cómo se transmiten."
              icon={<FileText size={32} className="text-teal-600" />}
              linkTo="/tipos"
              linkText={t.readMore}
            />
            
            <InfoCard 
              title={t.preventionOverview}
              description="Aprende sobre los métodos efectivos para prevenir la transmisión de las ITS y mantener una salud sexual óptima."
              icon={<ShieldCheck size={32} className="text-teal-600" />}
              linkTo="/prevencion"
              linkText={t.readMore}
            />
            
            <InfoCard 
              title={t.treatmentOverview}
              description="Descubre las opciones de tratamiento disponibles para diferentes ITS y la importancia del diagnóstico temprano."
              icon={<Activity size={32} className="text-teal-600" />}
              linkTo="/tratamientos"
              linkText={t.readMore}
            />
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-indigo-700">
                {t.mythsVsFacts}
              </h3>
              <p className="mb-6 text-gray-700">
                Existen muchos mitos y conceptos erróneos sobre las ITS que pueden llevar a la desinformación y el estigma. Aprende a distinguir entre los mitos y las realidades.
              </p>
              <Link to="/mitos-y-realidades" className="btn-outline inline-flex items-center">
                <HelpCircle size={18} className="mr-2" />
                {t.readMore}
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">
                {t.featuredResources}
              </h3>
              <p className="mb-6 text-gray-700">
                Accede a recursos confiables, estudios científicos y materiales educativos sobre las ITS creados por organizaciones de salud reconocidas.
              </p>
              <Link to="/recursos" className="btn-outline inline-flex items-center">
                <BookOpen size={18} className="mr-2" />
                {t.readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-12 bg-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-700">
              {t.emergencyInfo}
            </h3>
            <p className="text-gray-700 mb-6">
              {t.emergencyInfoText}
            </p>
            <div className="p-4 bg-white rounded-lg shadow-sm inline-block">
              <p className="font-semibold text-gray-800">Línea de Ayuda: <a href="tel:+123456789" className="text-teal-600 hover:underline">+123 456 789</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;