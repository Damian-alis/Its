import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo: string;
  linkText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, linkTo, linkText }) => {
  return (
    <div className="card hover:shadow-lg bg-white p-6 rounded-xl transition-all duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-5">{description}</p>
      <Link 
        to={linkTo} 
        className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 group"
      >
        {linkText}
        <ArrowRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default InfoCard;