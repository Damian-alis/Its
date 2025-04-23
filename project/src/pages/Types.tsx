import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

// STI data
const stiData = [
  {
    id: 'chlamydia',
    nameEs: 'Clamidia',
    nameEn: 'Chlamydia',
    descriptionEs: 'La clamidia es una infección bacteriana común que puede afectar tanto a hombres como a mujeres. A menudo no presenta síntomas, pero puede causar problemas graves si no se trata.',
    descriptionEn: 'Chlamydia is a common bacterial infection that can affect both men and women. It often has no symptoms but can cause serious problems if left untreated.',
    symptomsEs: ['Secreción anormal del pene o vagina', 'Ardor al orinar', 'Dolor durante las relaciones sexuales', 'Dolor en la parte baja del abdomen'],
    symptomsEn: ['Abnormal discharge from the penis or vagina', 'Burning sensation when urinating', 'Pain during sexual intercourse', 'Lower abdominal pain'],
    transmissionEs: 'Se transmite por contacto sexual (vaginal, anal u oral) con una persona infectada.',
    transmissionEn: 'Transmitted through sexual contact (vaginal, anal, or oral) with an infected person.',
    imageUrl: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'gonorrhea',
    nameEs: 'Gonorrea',
    nameEn: 'Gonorrhea',
    descriptionEs: 'La gonorrea es una infección bacteriana que puede infectar tanto a hombres como a mujeres. Puede causar infecciones en los genitales, el recto y la garganta.',
    descriptionEn: 'Gonorrhea is a bacterial infection that can infect both men and women. It can cause infections in the genitals, rectum, and throat.',
    symptomsEs: ['Secreción purulenta del pene o vagina', 'Dolor o ardor al orinar', 'Dolor o inflamación testicular', 'Sangrado vaginal anormal'],
    symptomsEn: ['Pus-like discharge from the penis or vagina', 'Pain or burning when urinating', 'Testicular pain or swelling', 'Abnormal vaginal bleeding'],
    transmissionEs: 'Se transmite a través del contacto sexual con una persona infectada.',
    transmissionEn: 'Transmitted through sexual contact with an infected person.',
    imageUrl: 'https://images.pexels.com/photos/3786119/pexels-photo-3786119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'syphilis',
    nameEs: 'Sífilis',
    nameEn: 'Syphilis',
    descriptionEs: 'La sífilis es una infección bacteriana grave que afecta principalmente los genitales, pero que puede extenderse por todo el cuerpo si no se trata.',
    descriptionEn: 'Syphilis is a serious bacterial infection that primarily affects the genitals but can spread throughout the body if left untreated.',
    symptomsEs: ['Úlcera indolora (chancro) en los genitales o boca', 'Erupción cutánea en manos y pies', 'Fiebre', 'Ganglios linfáticos inflamados'],
    symptomsEn: ['Painless ulcer (chancre) on the genitals or mouth', 'Rash on palms and soles', 'Fever', 'Swollen lymph nodes'],
    transmissionEs: 'Se transmite principalmente a través del contacto directo con una úlcera sifilítica durante las relaciones sexuales.',
    transmissionEn: 'Primarily transmitted through direct contact with a syphilitic sore during sexual relations.',
    imageUrl: 'https://images.pexels.com/photos/3846009/pexels-photo-3846009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'hiv',
    nameEs: 'VIH',
    nameEn: 'HIV',
    descriptionEs: 'El Virus de la Inmunodeficiencia Humana (VIH) es un virus que ataca el sistema inmunitario del cuerpo. Si no se trata, puede causar el Síndrome de Inmunodeficiencia Adquirida (SIDA).',
    descriptionEn: 'Human Immunodeficiency Virus (HIV) is a virus that attacks the body\'s immune system. If left untreated, it can cause Acquired Immunodeficiency Syndrome (AIDS).',
    symptomsEs: ['Síntomas similares a la gripe 2-4 semanas después de la infección', 'Fatiga', 'Fiebre', 'Sudores nocturnos', 'Pérdida de peso inexplicable'],
    symptomsEn: ['Flu-like symptoms 2-4 weeks after infection', 'Fatigue', 'Fever', 'Night sweats', 'Unexplained weight loss'],
    transmissionEs: 'Se transmite a través del intercambio de fluidos corporales como sangre, semen, fluidos vaginales y leche materna. Las formas más comunes de transmisión son las relaciones sexuales sin protección y compartir agujas.',
    transmissionEn: 'Transmitted through the exchange of body fluids such as blood, semen, vaginal fluids, and breast milk. The most common forms of transmission are unprotected sex and sharing needles.',
    imageUrl: 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'hpv',
    nameEs: 'VPH (Virus del Papiloma Humano)',
    nameEn: 'HPV (Human Papillomavirus)',
    descriptionEs: 'El VPH es una infección viral común que se transmite por contacto sexual. Algunos tipos pueden causar verrugas genitales, mientras que otros pueden provocar cáncer cervical y otros tipos de cáncer.',
    descriptionEn: 'HPV is a common viral infection transmitted through sexual contact. Some types can cause genital warts, while others can lead to cervical cancer and other types of cancer.',
    symptomsEs: ['Verrugas genitales', 'A menudo no hay síntomas visibles'],
    symptomsEn: ['Genital warts', 'Often no visible symptoms'],
    transmissionEs: 'Se transmite principalmente por contacto piel a piel durante las relaciones sexuales.',
    transmissionEn: 'Primarily transmitted through skin-to-skin contact during sexual intercourse.',
    imageUrl: 'https://images.pexels.com/photos/3764559/pexels-photo-3764559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'herpes',
    nameEs: 'Herpes Genital',
    nameEn: 'Genital Herpes',
    descriptionEs: 'El herpes genital es una infección viral que causa llagas o ampollas dolorosas en el área genital. Una vez infectado, el virus permanece en el cuerpo indefinidamente.',
    descriptionEn: 'Genital herpes is a viral infection that causes painful sores or blisters in the genital area. Once infected, the virus remains in the body indefinitely.',
    symptomsEs: ['Llagas o ampollas dolorosas en los genitales', 'Picazón o ardor en el área genital', 'Dolor al orinar', 'Síntomas similares a la gripe'],
    symptomsEn: ['Painful sores or blisters on the genitals', 'Itching or burning in the genital area', 'Pain when urinating', 'Flu-like symptoms'],
    transmissionEs: 'Se transmite por contacto directo con las llagas o a través de fluidos corporales durante períodos de actividad viral.',
    transmissionEn: 'Transmitted through direct contact with the sores or through bodily fluids during periods of viral activity.',
    imageUrl: 'https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Types: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'es' ? 'Tipos de Infecciones de Transmisión Sexual' : 'Types of Sexually Transmitted Infections'}
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es' 
              ? 'Las infecciones de transmisión sexual (ITS) son causadas por diferentes tipos de microorganismos como bacterias, virus, hongos y parásitos. Cada tipo de ITS tiene sus propias características, síntomas y métodos de tratamiento.'
              : 'Sexually transmitted infections (STIs) are caused by different types of microorganisms such as bacteria, viruses, fungi, and parasites. Each type of STI has its own characteristics, symptoms, and treatment methods.'}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es'
              ? 'A continuación, encontrarás información detallada sobre las ITS más comunes, sus síntomas y cómo se transmiten.'
              : 'Below, you\'ll find detailed information about the most common STIs, their symptoms, and how they are transmitted.'}
          </p>
        </div>
        
        <div className="space-y-12">
          {stiData.map((sti) => (
            <div key={sti.id} id={sti.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3">
                  <img 
                    src={sti.imageUrl} 
                    alt={language === 'es' ? sti.nameEs : sti.nameEn}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold text-teal-600 mb-4">
                    {language === 'es' ? sti.nameEs : sti.nameEn}
                  </h2>
                  
                  <p className="text-gray-700 mb-4">
                    {language === 'es' ? sti.descriptionEs : sti.descriptionEn}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {language === 'es' ? 'Síntomas comunes:' : 'Common symptoms:'}
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {(language === 'es' ? sti.symptomsEs : sti.symptomsEn).map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {language === 'es' ? 'Transmisión:' : 'Transmission:'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'es' ? sti.transmissionEs : sti.transmissionEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-teal-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            {language === 'es' ? 'Información importante' : 'Important information'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'es' 
              ? 'Muchas ITS no presentan síntomas evidentes, especialmente en las etapas iniciales. Es posible estar infectado y no saberlo, lo que aumenta el riesgo de transmisión a otras personas.'
              : 'Many STIs don\'t show obvious symptoms, especially in the early stages. It\'s possible to be infected and not know it, which increases the risk of transmission to others.'}
          </p>
          <p className="text-gray-700 mb-4">
            {language === 'es'
              ? 'Las personas sexualmente activas deben realizarse pruebas regulares para detectar ITS, incluso si no presentan síntomas.'
              : 'Sexually active individuals should get regular STI testing, even if they don\'t have symptoms.'}
          </p>
          <p className="text-gray-700 font-semibold">
            {language === 'es'
              ? 'Si sospechas que puedes tener una ITS, es importante buscar atención médica lo antes posible.'
              : 'If you suspect you may have an STI, it\'s important to seek medical attention as soon as possible.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Types;