import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { Pill, Syringe, Beaker, Clock, Shield, Activity } from 'lucide-react';

const Treatments: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const treatmentData = [
    {
      id: 'antibiotics',
      titleEs: 'Antibióticos',
      titleEn: 'Antibiotics',
      descriptionEs: 'Los antibióticos son el tratamiento principal para las ITS bacterianas como la clamidia, la gonorrea y la sífilis. Es importante completar todo el ciclo de antibióticos, incluso si los síntomas desaparecen antes.',
      descriptionEn: 'Antibiotics are the main treatment for bacterial STIs such as chlamydia, gonorrhea, and syphilis. It\'s important to complete the full course of antibiotics, even if symptoms disappear earlier.',
      icon: <Pill size={36} className="text-teal-600" />,
      examplesEs: [
        'Azitromicina - Utilizada para tratar la clamidia',
        'Ceftriaxona - Utilizada para tratar la gonorrea',
        'Penicilina - Utilizada para tratar la sífilis'
      ],
      examplesEn: [
        'Azithromycin - Used to treat chlamydia',
        'Ceftriaxone - Used to treat gonorrhea',
        'Penicillin - Used to treat syphilis'
      ]
    },
    {
      id: 'antivirals',
      titleEs: 'Antivirales',
      titleEn: 'Antivirals',
      descriptionEs: 'Los medicamentos antivirales se utilizan para tratar ITS virales como el herpes genital, el VIH y la hepatitis B. Estos medicamentos pueden reducir los síntomas y disminuir el riesgo de transmisión, pero generalmente no curan la infección.',
      descriptionEn: 'Antiviral medications are used to treat viral STIs such as genital herpes, HIV, and hepatitis B. These medications can reduce symptoms and decrease the risk of transmission, but generally do not cure the infection.',
      icon: <Beaker size={36} className="text-teal-600" />,
      examplesEs: [
        'Aciclovir - Utilizado para tratar el herpes genital',
        'Antirretrovirales - Utilizados para tratar el VIH',
        'Entecavir - Utilizado para tratar la hepatitis B'
      ],
      examplesEn: [
        'Acyclovir - Used to treat genital herpes',
        'Antiretrovirals - Used to treat HIV',
        'Entecavir - Used to treat hepatitis B'
      ]
    },
    {
      id: 'topical',
      titleEs: 'Tratamientos tópicos',
      titleEn: 'Topical treatments',
      descriptionEs: 'Los tratamientos tópicos se aplican directamente sobre la piel o las membranas mucosas afectadas. Se utilizan comúnmente para tratar afecciones como las verrugas genitales causadas por el VPH.',
      descriptionEn: 'Topical treatments are applied directly to the affected skin or mucous membranes. They are commonly used to treat conditions such as genital warts caused by HPV.',
      icon: <Activity size={36} className="text-teal-600" />,
      examplesEs: [
        'Podofilox - Utilizado para tratar verrugas genitales',
        'Imiquimod - Utilizado para tratar verrugas genitales',
        'Crioterapia - Congelación de verrugas genitales'
      ],
      examplesEn: [
        'Podofilox - Used to treat genital warts',
        'Imiquimod - Used to treat genital warts',
        'Cryotherapy - Freezing of genital warts'
      ]
    },
    {
      id: 'vaccines',
      titleEs: 'Vacunas',
      titleEn: 'Vaccines',
      descriptionEs: 'Aunque las vacunas no son tratamientos para infecciones existentes, existen vacunas preventivas para algunas ITS como el VPH y la hepatitis B que pueden proteger contra futuras infecciones.',
      descriptionEn: 'While vaccines are not treatments for existing infections, there are preventative vaccines for some STIs such as HPV and hepatitis B that can protect against future infections.',
      icon: <Syringe size={36} className="text-teal-600" />,
      examplesEs: [
        'Vacuna contra el VPH - Previene ciertos tipos de VPH que pueden causar verrugas genitales y cáncer',
        'Vacuna contra la hepatitis B - Previene la infección por el virus de la hepatitis B'
      ],
      examplesEn: [
        'HPV vaccine - Prevents certain types of HPV that can cause genital warts and cancer',
        'Hepatitis B vaccine - Prevents infection with the hepatitis B virus'
      ]
    },
    {
      id: 'follow-up',
      titleEs: 'Seguimiento y reevaluación',
      titleEn: 'Follow-up and reevaluation',
      descriptionEs: 'El seguimiento médico regular es esencial para garantizar que el tratamiento sea efectivo. Las pruebas de seguimiento pueden confirmar si la infección se ha curado o si se necesita tratamiento adicional.',
      descriptionEn: 'Regular medical follow-up is essential to ensure that treatment is effective. Follow-up testing can confirm whether the infection has been cured or if additional treatment is needed.',
      icon: <Clock size={36} className="text-teal-600" />,
      examplesEs: [
        'Pruebas de control después del tratamiento para clamidia y gonorrea',
        'Monitoreo regular para personas con VIH',
        'Exámenes de seguimiento después del tratamiento para sífilis'
      ],
      examplesEn: [
        'Control tests after treatment for chlamydia and gonorrhea',
        'Regular monitoring for people with HIV',
        'Follow-up examinations after syphilis treatment'
      ]
    },
    {
      id: 'partner',
      titleEs: 'Tratamiento de la pareja',
      titleEn: 'Partner treatment',
      descriptionEs: 'Es crucial que las parejas sexuales también sean examinadas y tratadas para prevenir la reinfección y detener la propagación de la ITS. Esto se conoce como tratamiento expedito de la pareja.',
      descriptionEn: 'It\'s crucial that sexual partners are also tested and treated to prevent reinfection and stop the spread of the STI. This is known as expedited partner therapy.',
      icon: <Shield size={36} className="text-teal-600" />,
      examplesEs: [
        'Notificación a parejas',
        'Tratamiento preventivo para parejas',
        'Educación sobre prácticas sexuales seguras'
      ],
      examplesEn: [
        'Partner notification',
        'Preventive treatment for partners',
        'Education about safe sex practices'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'es' ? 'Tratamientos para las Infecciones de Transmisión Sexual' : 'Treatments for Sexually Transmitted Infections'}
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es' 
              ? 'El diagnóstico temprano y el tratamiento adecuado son fundamentales para manejar las infecciones de transmisión sexual (ITS). Los tratamientos varían según el tipo de infección, su gravedad y otros factores individuales.'
              : 'Early diagnosis and appropriate treatment are essential for managing sexually transmitted infections (STIs). Treatments vary depending on the type of infection, its severity, and other individual factors.'}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es'
              ? 'A continuación, encontrarás información sobre los principales tipos de tratamientos disponibles para las ITS más comunes.'
              : 'Below, you\'ll find information about the main types of treatments available for the most common STIs.'}
          </p>
        </div>
        
        <div className="space-y-12">
          {treatmentData.map((treatment) => (
            <div key={treatment.id} id={treatment.id} className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="mb-4 md:mb-0 md:mr-6">
                  {treatment.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-teal-600 mb-4">
                    {language === 'es' ? treatment.titleEs : treatment.titleEn}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {language === 'es' ? treatment.descriptionEs : treatment.descriptionEn}
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      {language === 'es' ? 'Ejemplos:' : 'Examples:'}
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {(language === 'es' ? treatment.examplesEs : treatment.examplesEn).map((example, index) => (
                        <li key={index} className="pl-2">{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-teal-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            {language === 'es' ? 'Consideraciones importantes' : 'Important considerations'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'es' 
              ? 'Es fundamental completar el tratamiento prescrito por el profesional de la salud, incluso si los síntomas desaparecen antes. Esto ayuda a asegurar que la infección se elimine por completo.'
              : 'It\'s essential to complete the treatment prescribed by the healthcare professional, even if symptoms disappear earlier. This helps ensure that the infection is completely eliminated.'}
          </p>
          <p className="text-gray-700 mb-4">
            {language === 'es'
              ? 'Durante el tratamiento, es recomendable abstenerse de relaciones sexuales o usar protección para evitar la transmisión de la infección o la reinfección.'
              : 'During treatment, it\'s advisable to abstain from sexual relations or use protection to prevent transmission of the infection or reinfection.'}
          </p>
          <p className="text-gray-700 font-semibold">
            {language === 'es'
              ? 'Recuerda que el tratamiento temprano de las ITS puede prevenir complicaciones graves a largo plazo.'
              : 'Remember that early treatment of STIs can prevent serious long-term complications.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatments;