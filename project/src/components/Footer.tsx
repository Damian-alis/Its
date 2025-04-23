import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.aboutUs}</h3>
            <p className="text-slate-300 mb-4">
              {t.footerAboutText}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-teal-400 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/tipos" className="text-slate-300 hover:text-teal-400 transition-colors">
                  {t.types}
                </Link>
              </li>
              <li>
                <Link to="/prevencion" className="text-slate-300 hover:text-teal-400 transition-colors">
                  {t.prevention}
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-slate-300 hover:text-teal-400 transition-colors">
                  {t.resources}
                </Link>
              </li>
              <li>
                <Link to="/cuestionario" className="text-slate-300 hover:text-teal-400 transition-colors">
                  {t.quiz}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.officialResources}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.who.int/health-topics/sexually-transmitted-infections" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors flex items-center"
                >
                  <span>OMS/WHO</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cdc.gov/std/spanish/default.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors flex items-center"
                >
                  <span>CDC</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.paho.org/es/temas/infecciones-transmision-sexual" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors flex items-center"
                >
                  <span>OPS/PAHO</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contacto@infosalud-its.org" className="text-slate-300 hover:text-teal-400 transition-colors">
                  contacto@infosalud-its.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-teal-400 transition-colors">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© {new Date().getFullYear()} InfoSalud. {t.rightsReserved}</p>
          <p className="mt-2 text-sm">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;