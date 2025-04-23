import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { ShieldCheck, Syringe, AlertCircle, FileCheck, Users } from 'lucide-react';

const Prevention: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const preventionMethods = [
    {
      id: 'condoms',
      titleEs: 'Uso de condones',
      titleEn: 'Condom use',
      descriptionEs: 'Los condones son una de las formas más efectivas de prevenir la transmisión de ITS durante las relaciones sexuales. Deben usarse correctamente en cada relación sexual vaginal, anal u oral.',
      descriptionEn: 'Condoms are one of the most effective ways to prevent STI transmission during sexual intercourse. They should be used correctly during every vaginal, anal, or oral sexual encounter.',
      icon: <ShieldCheck size={36} className="text-teal-600" />,
      tipsEs: [
        'Usa un condón nuevo para cada acto sexual',
        'Almacena los condones en un lugar fresco y seco',
        'Verifica la fecha de caducidad',
        'Usa condones de látex o poliuretano'
      ],
      tipsEn: [
        'Use a new condom for each sex act',
        'Store condoms in a cool, dry place',
        'Check the expiration date',
        'Use latex or polyurethane condoms'
      ]
    },
    {
      id: 'vaccination',
      titleEs: 'Vacunación',
      titleEn: 'Vaccination',
      descriptionEs: 'Existen vacunas disponibles para prevenir ciertas ITS, como el VPH y la hepatitis B. Consulta con tu proveedor de atención médica sobre las vacunas recomendadas para ti.',
      descriptionEn: 'Vaccines are available to prevent certain STIs, such as HPV and hepatitis B. Consult with your healthcare provider about which vaccines are recommended for you.',
      icon: <Syringe size={36} className="text-teal-600" />,
      tipsEs: [
        'La vacuna contra el VPH se recomienda para adolescentes y adultos jóvenes',
        'La vacuna contra la hepatitis B es parte del calendario regular de vacunación infantil',
        'Es posible vacunarse contra la hepatitis B como adulto si no se recibió la vacuna en la infancia'
      ],
      tipsEn: [
        'The HPV vaccine is recommended for adolescents and young adults',
        'The hepatitis B vaccine is part of the regular childhood vaccination schedule',
        'It\'s possible to get vaccinated against hepatitis B as an adult if you didn\'t receive the vaccine in childhood'
      ]
    },
    {
      id: 'testing',
      titleEs: 'Pruebas regulares',
      titleEn: 'Regular testing',
      descriptionEs: 'Realizarse pruebas de detección de ITS regularmente es crucial, especialmente si eres sexualmente activo con múltiples parejas o si tienes una nueva pareja sexual.',
      descriptionEn: 'Getting tested for STIs regularly is crucial, especially if you are sexually active with multiple partners or if you have a new sexual partner.',
      icon: <FileCheck size={36} className="text-teal-600" />,
      tipsEs: [
        'Habla abiertamente con tu proveedor de atención médica sobre tu actividad sexual',
        'Las pruebas regulares pueden detectar infecciones antes de que causen problemas',
        'Muchas ITS no muestran síntomas, por lo que las pruebas son la única forma de saber con certeza',
        'La frecuencia de las pruebas depende de tu situación personal y nivel de riesgo'
      ],
      tipsEn: [
        'Speak openly with your healthcare provider about your sexual activity',
        'Regular testing can detect infections before they cause problems',
        'Many STIs don\'t show symptoms, so testing is the only way to know for sure',
        'The frequency of testing depends on your personal situation and risk level'
      ]
    },
    {
      id: 'communication',
      titleEs: 'Comunicación con la pareja',
      titleEn: 'Partner communication',
      descriptionEs: 'Mantener una comunicación abierta y honesta con tu(s) pareja(s) sexual(es) sobre la salud sexual es fundamental para la prevención de ITS.',
      descriptionEn: 'Maintaining open and honest communication with your sexual partner(s) about sexual health is fundamental for STI prevention.',
      icon: <Users size={36} className="text-teal-600" />,
      tipsEs: [
        'Habla sobre el historial de ITS y pruebas recientes antes de tener relaciones sexuales',
        'Discute y acuerda métodos de protección',
        'Si tienes una ITS, informa a tus parejas para que puedan hacerse pruebas y recibir tratamiento si es necesario'
      ],
      tipsEn: [
        'Talk about STI history and recent tests before having sex',
        'Discuss and agree on protection methods',
        'If you have an STI, inform your partners so they can get tested and receive treatment if necessary'
      ]
    },
    {
      id: 'abstinence',
      titleEs: 'Abstinencia o monogamia mutua',
      titleEn: 'Abstinence or mutual monogamy',
      descriptionEs: 'La forma más segura de prevenir las ITS es abstenerse de la actividad sexual o mantener una relación mutuamente monógama con una pareja que se ha hecho pruebas y no tiene ITS.',
      descriptionEn: 'The safest way to prevent STIs is to abstain from sexual activity or maintain a mutually monogamous relationship with a partner who has been tested and doesn\'t have STIs.',
      icon: <AlertCircle size={36} className="text-teal-600" />,
      tipsEs: [
        'La abstinencia significa evitar el contacto sexual vaginal, anal y oral',
        'La monogamia mutua significa que tú y tu pareja sólo tienen relaciones sexuales entre ustedes y con nadie más',
        'Para que la monogamia sea efectiva como método de prevención, ambos deben haber sido examinados para detectar ITS'
      ],
      tipsEn: [
        'Abstinence means avoiding vaginal, anal, and oral sexual contact',
        'Mutual monogamy means you and your partner only have sex with each other and no one else',
        'For monogamy to be effective as a prevention method, both of you should have been tested for STIs'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'es' ? 'Prevención de Infecciones de Transmisión Sexual' : 'Prevention of Sexually Transmitted Infections'}
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es' 
              ? 'La prevención es fundamental para mantener una buena salud sexual. Adoptar prácticas sexuales más seguras puede reducir significativamente el riesgo de contraer y transmitir ITS.'
              : 'Prevention is key to maintaining good sexual health. Adopting safer sex practices can significantly reduce the risk of contracting and transmitting STIs.'}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es'
              ? 'A continuación, encontrarás información sobre los métodos más efectivos para prevenir las ITS:'
              : 'Below, you\'ll find information about the most effective methods for preventing STIs:'}
          </p>
        </div>
        
        <div className="space-y-12">
          {preventionMethods.map((method) => (
            <div key={method.id} id={method.id} className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="mb-4 md:mb-0 md:mr-6">
                  {method.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-teal-600 mb-4">
                    {language === 'es' ? method.titleEs : method.titleEn}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {language === 'es' ? method.descriptionEs : method.descriptionEn}
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      {language === 'es' ? 'Recomendaciones:' : 'Tips:'}
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {(language === 'es' ? method.tipsEs : method.tipsEn).map((tip, index) => (
                        <li key={index} className="pl-2">{tip}</li>
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
            {language === 'es' ? 'Recuerda' : 'Remember'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'es' 
              ? 'Ningún método de prevención es 100% efectivo. Combinar varios métodos, como el uso de condones y las pruebas regulares, ofrece la mejor protección contra las ITS.'
              : 'No prevention method is 100% effective. Combining several methods, such as using condoms and getting regular tests, offers the best protection against STIs.'}
          </p>
          <p className="text-gray-700 mb-4">
            {language === 'es'
              ? 'Es importante hablar abiertamente sobre la salud sexual con tus parejas y profesionales de la salud.'
              : 'It\'s important to talk openly about sexual health with your partners and healthcare professionals.'}
          </p>
          <p className="text-gray-700 font-semibold">
            {language === 'es'
              ? 'La prevención no solo te protege a ti, sino también a tus parejas actuales y futuras.'
              : 'Prevention not only protects you, but also your current and future partners.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prevention;