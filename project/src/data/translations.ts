interface Translation {
  // Navigation
  home: string;
  types: string;
  prevention: string;
  symptoms: string;
  treatments: string;
  mythsAndFacts: string;
  resources: string;
  quiz: string;
  searchPlaceholder: string;
  
  // Footer
  aboutUs: string;
  footerAboutText: string;
  quickLinks: string;
  officialResources: string;
  contact: string;
  rightsReserved: string;
  disclaimer: string;
  
  // Home page
  heroTitle: string;
  heroSubtitle: string;
  learnMore: string;
  whatAreSTIs: string;
  whatAreSTIsText: string;
  whyImportant: string;
  whyImportantText: string;
  typesOverview: string;
  preventionOverview: string;
  treatmentOverview: string;
  readMore: string;
  startQuiz: string;
  
  // Common sections
  featuredResources: string;
  helpfulLinks: string;
  emergencyInfo: string;
  emergencyInfoText: string;
  commonSTIs: string;
  preventionMethods: string;
  treatmentOptions: string;
  mythsVsFacts: string;
  
  // Quiz
  quizTitle: string;
  quizDescription: string;
  startQuizButton: string;
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  nextQuestion: string;
  seeResults: string;
  yourScore: string;
  retakeQuiz: string;
}

interface Translations {
  es: Translation;
  en: Translation;
}

const translations: Translations = {
  es: {
    // Navigation
    home: "Inicio",
    types: "Tipos",
    prevention: "Prevención",
    symptoms: "Síntomas",
    treatments: "Tratamientos",
    mythsAndFacts: "Mitos y Realidades",
    resources: "Recursos",
    quiz: "Cuestionario",
    searchPlaceholder: "Buscar información...",
    
    // Footer
    aboutUs: "Sobre Nosotros",
    footerAboutText: "InfoSalud es una plataforma educativa que proporciona información actualizada y basada en evidencia sobre las infecciones de transmisión sexual (ITS).",
    quickLinks: "Enlaces Rápidos",
    officialResources: "Recursos Oficiales",
    contact: "Contacto",
    rightsReserved: "Todos los derechos reservados",
    disclaimer: "La información proporcionada en este sitio es solo para fines educativos y no sustituye el consejo médico profesional.",
    
    // Home page
    heroTitle: "Información confiable sobre las ITS",
    heroSubtitle: "Educación, prevención y concientización para una salud sexual responsable",
    learnMore: "Aprender más",
    whatAreSTIs: "¿Qué son las ITS?",
    whatAreSTIsText: "Las infecciones de transmisión sexual (ITS) son infecciones que se propagan principalmente a través del contacto sexual, incluyendo el sexo vaginal, anal y oral.",
    whyImportant: "¿Por qué es importante conocerlas?",
    whyImportantText: "Las ITS pueden afectar a cualquier persona sexualmente activa. Muchas ITS no presentan síntomas evidentes, lo que puede llevar a complicaciones graves si no se detectan y tratan a tiempo.",
    typesOverview: "Tipos de ITS",
    preventionOverview: "Métodos de Prevención",
    treatmentOverview: "Opciones de Tratamiento",
    readMore: "Leer más",
    startQuiz: "Iniciar Cuestionario",
    
    // Common sections
    featuredResources: "Recursos Destacados",
    helpfulLinks: "Enlaces Útiles",
    emergencyInfo: "Información de Emergencia",
    emergencyInfoText: "Si crees que puedes tener una ITS, es importante buscar atención médica lo antes posible. Contacta a tu médico o visita una clínica de salud sexual.",
    commonSTIs: "ITS Comunes",
    preventionMethods: "Métodos de Prevención",
    treatmentOptions: "Opciones de Tratamiento",
    mythsVsFacts: "Mitos vs. Realidades",
    
    // Quiz
    quizTitle: "Pon a prueba tus conocimientos sobre las ITS",
    quizDescription: "Este cuestionario te ayudará a evaluar y mejorar tu comprensión sobre las infecciones de transmisión sexual, su prevención y tratamiento.",
    startQuizButton: "Comenzar Cuestionario",
    question: "Pregunta",
    correctAnswer: "¡Correcto!",
    wrongAnswer: "Incorrecto",
    nextQuestion: "Siguiente Pregunta",
    seeResults: "Ver Resultados",
    yourScore: "Tu Puntuación",
    retakeQuiz: "Reintentar Cuestionario"
  },
  en: {
    // Navigation
    home: "Home",
    types: "Types",
    prevention: "Prevention",
    symptoms: "Symptoms",
    treatments: "Treatments",
    mythsAndFacts: "Myths & Facts",
    resources: "Resources",
    quiz: "Quiz",
    searchPlaceholder: "Search information...",
    
    // Footer
    aboutUs: "About Us",
    footerAboutText: "InfoSalud is an educational platform providing up-to-date, evidence-based information about sexually transmitted infections (STIs).",
    quickLinks: "Quick Links",
    officialResources: "Official Resources",
    contact: "Contact",
    rightsReserved: "All rights reserved",
    disclaimer: "The information provided on this site is for educational purposes only and is not a substitute for professional medical advice.",
    
    // Home page
    heroTitle: "Reliable STI Information",
    heroSubtitle: "Education, prevention, and awareness for responsible sexual health",
    learnMore: "Learn more",
    whatAreSTIs: "What are STIs?",
    whatAreSTIsText: "Sexually transmitted infections (STIs) are infections that are spread primarily through sexual contact, including vaginal, anal, and oral sex.",
    whyImportant: "Why is it important to know about them?",
    whyImportantText: "STIs can affect anyone who is sexually active. Many STIs don't show obvious symptoms, which can lead to serious complications if they aren't detected and treated early.",
    typesOverview: "Types of STIs",
    preventionOverview: "Prevention Methods",
    treatmentOverview: "Treatment Options",
    readMore: "Read more",
    startQuiz: "Start Quiz",
    
    // Common sections
    featuredResources: "Featured Resources",
    helpfulLinks: "Helpful Links",
    emergencyInfo: "Emergency Information",
    emergencyInfoText: "If you think you may have an STI, it's important to seek medical attention as soon as possible. Contact your doctor or visit a sexual health clinic.",
    commonSTIs: "Common STIs",
    preventionMethods: "Prevention Methods",
    treatmentOptions: "Treatment Options",
    mythsVsFacts: "Myths vs. Facts",
    
    // Quiz
    quizTitle: "Test your knowledge about STIs",
    quizDescription: "This quiz will help you assess and improve your understanding of sexually transmitted infections, their prevention, and treatment.",
    startQuizButton: "Start Quiz",
    question: "Question",
    correctAnswer: "Correct!",
    wrongAnswer: "Incorrect",
    nextQuestion: "Next Question",
    seeResults: "See Results",
    yourScore: "Your Score",
    retakeQuiz: "Retake Quiz"
  }
};

export default translations;