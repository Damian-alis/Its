import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { CheckCircle, XCircle, ArrowRight, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  questionEs: string;
  questionEn: string;
  options: {
    id: string;
    textEs: string;
    textEn: string;
  }[];
  correctAnswer: string;
  explanationEs: string;
  explanationEn: string;
}

const Quiz: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const questions: Question[] = [
    {
      id: 1,
      questionEs: "¿Cuál de estas infecciones NO es una ITS?",
      questionEn: "Which of these infections is NOT an STI?",
      options: [
        { id: "a", textEs: "Clamidia", textEn: "Chlamydia" },
        { id: "b", textEs: "Gonorrea", textEn: "Gonorrhea" },
        { id: "c", textEs: "Neumonía", textEn: "Pneumonia" },
        { id: "d", textEs: "Sífilis", textEn: "Syphilis" }
      ],
      correctAnswer: "c",
      explanationEs: "La neumonía es una infección de los pulmones que puede ser causada por virus, bacterias u hongos, pero no se transmite sexualmente.",
      explanationEn: "Pneumonia is a lung infection that can be caused by viruses, bacteria, or fungi, but it is not sexually transmitted."
    },
    {
      id: 2,
      questionEs: "¿Cuál es el método más efectivo para prevenir la transmisión de ITS durante las relaciones sexuales?",
      questionEn: "What is the most effective method to prevent STI transmission during sexual intercourse?",
      options: [
        { id: "a", textEs: "Píldoras anticonceptivas", textEn: "Birth control pills" },
        { id: "b", textEs: "Dispositivo intrauterino (DIU)", textEn: "Intrauterine device (IUD)" },
        { id: "c", textEs: "Condones (preservativos)", textEn: "Condoms" },
        { id: "d", textEs: "Métodos de ritmo", textEn: "Rhythm methods" }
      ],
      correctAnswer: "c",
      explanationEs: "Los condones (preservativos) son el método más efectivo para prevenir la transmisión de ITS durante las relaciones sexuales, ya que crean una barrera física que impide el contacto directo con fluidos corporales potencialmente infecciosos.",
      explanationEn: "Condoms are the most effective method for preventing STI transmission during sexual intercourse, as they create a physical barrier that prevents direct contact with potentially infectious bodily fluids."
    },
    {
      id: 3,
      questionEs: "¿Cuál de estas afirmaciones sobre el VIH es FALSA?",
      questionEn: "Which of these statements about HIV is FALSE?",
      options: [
        { id: "a", textEs: "El VIH puede transmitirse por compartir alimentos con alguien infectado", textEn: "HIV can be transmitted by sharing food with someone who is infected" },
        { id: "b", textEs: "El VIH puede transmitirse por relaciones sexuales sin protección", textEn: "HIV can be transmitted through unprotected sex" },
        { id: "c", textEs: "El VIH puede transmitirse de madre a hijo durante el embarazo", textEn: "HIV can be transmitted from mother to child during pregnancy" },
        { id: "d", textEs: "El VIH puede transmitirse por compartir agujas", textEn: "HIV can be transmitted by sharing needles" }
      ],
      correctAnswer: "a",
      explanationEs: "El VIH NO puede transmitirse por compartir alimentos con alguien infectado. El VIH se transmite a través de fluidos corporales específicos como sangre, semen, fluidos vaginales y leche materna.",
      explanationEn: "HIV CANNOT be transmitted by sharing food with someone who is infected. HIV is transmitted through specific bodily fluids such as blood, semen, vaginal fluids, and breast milk."
    },
    {
      id: 4,
      questionEs: "¿Cuál de estas ITS no tiene cura definitiva?",
      questionEn: "Which of these STIs does not have a definitive cure?",
      options: [
        { id: "a", textEs: "Clamidia", textEn: "Chlamydia" },
        { id: "b", textEs: "Gonorrea", textEn: "Gonorrhea" },
        { id: "c", textEs: "Herpes genital", textEn: "Genital herpes" },
        { id: "d", textEs: "Sífilis", textEn: "Syphilis" }
      ],
      correctAnswer: "c",
      explanationEs: "El herpes genital, causado por el virus del herpes simple (VHS), no tiene cura definitiva. Una vez que una persona está infectada, el virus permanece en el cuerpo de por vida, aunque los síntomas pueden tratarse y controlarse con medicamentos antivirales.",
      explanationEn: "Genital herpes, caused by the herpes simplex virus (HSV), does not have a definitive cure. Once a person is infected, the virus remains in the body for life, although symptoms can be treated and controlled with antiviral medications."
    },
    {
      id: 5,
      questionEs: "¿Cuál de estas vacunas puede prevenir ciertas ITS?",
      questionEn: "Which of these vaccines can prevent certain STIs?",
      options: [
        { id: "a", textEs: "Vacuna contra la influenza", textEn: "Influenza vaccine" },
        { id: "b", textEs: "Vacuna contra el VPH", textEn: "HPV vaccine" },
        { id: "c", textEs: "Vacuna contra el tétanos", textEn: "Tetanus vaccine" },
        { id: "d", textEs: "Vacuna contra la polio", textEn: "Polio vaccine" }
      ],
      correctAnswer: "b",
      explanationEs: "La vacuna contra el Virus del Papiloma Humano (VPH) puede prevenir la infección por ciertos tipos de VPH que pueden causar verrugas genitales y varios tipos de cáncer, incluido el cáncer cervical.",
      explanationEn: "The Human Papillomavirus (HPV) vaccine can prevent infection from certain types of HPV that can cause genital warts and various types of cancer, including cervical cancer."
    }
  ];

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers({});
  };

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null && !isAnswerSubmitted) {
      const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
      
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: selectedAnswer
      }));
      
      setIsAnswerSubmitted(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setCurrentStep('results');
    }
  };

  const handleRestartQuiz = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers({});
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {currentStep === 'intro' && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h1 className="text-3xl font-bold text-teal-700 mb-6">{t.quizTitle}</h1>
              <p className="text-lg text-gray-700 mb-8">
                {t.quizDescription}
              </p>
              <button 
                onClick={handleStartQuiz}
                className="btn btn-primary inline-flex items-center"
              >
                {t.startQuizButton}
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}

          {currentStep === 'quiz' && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-500">
                  {t.question} {currentQuestionIndex + 1}/{questions.length}
                </span>
                <span className="text-sm font-medium text-teal-600">
                  {score}/{currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'es' ? currentQuestion.questionEs : currentQuestion.questionEn}
              </h2>
              
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-lg transition-all border ${
                      selectedAnswer === option.id
                        ? isAnswerSubmitted
                          ? option.id === currentQuestion.correctAnswer
                            ? 'bg-green-50 border-green-500'
                            : 'bg-red-50 border-red-500'
                          : 'bg-teal-50 border-teal-500'
                        : isAnswerSubmitted && option.id === currentQuestion.correctAnswer
                        ? 'bg-green-50 border-green-500'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <span className="font-medium mr-3">{option.id.toUpperCase()}.</span>
                      <span>{language === 'es' ? option.textEs : option.textEn}</span>
                      {isAnswerSubmitted && option.id === currentQuestion.correctAnswer && (
                        <CheckCircle size={20} className="ml-auto text-green-500" />
                      )}
                      {isAnswerSubmitted && selectedAnswer === option.id && option.id !== currentQuestion.correctAnswer && (
                        <XCircle size={20} className="ml-auto text-red-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {isAnswerSubmitted && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    {language === 'es' ? currentQuestion.explanationEs : currentQuestion.explanationEn}
                  </p>
                </div>
              )}
              
              <div className="flex justify-between">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {language === 'es' ? 'Comprobar Respuesta' : 'Check Answer'}
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn btn-primary inline-flex items-center"
                  >
                    {currentQuestionIndex < questions.length - 1 ? t.nextQuestion : t.seeResults}
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          )}

          {currentStep === 'results' && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h1 className="text-3xl font-bold text-teal-700 mb-6">
                {language === 'es' ? '¡Cuestionario Completado!' : 'Quiz Completed!'}
              </h1>
              
              <div className="mb-8">
                <p className="text-lg mb-2">
                  {t.yourScore}:
                </p>
                <p className="text-4xl font-bold text-teal-600">
                  {score}/{questions.length}
                </p>
                <p className="text-gray-600 mt-2">
                  {language === 'es' 
                    ? `Has respondido correctamente ${score} de ${questions.length} preguntas.`
                    : `You correctly answered ${score} out of ${questions.length} questions.`
                  }
                </p>
              </div>
              
              <button 
                onClick={handleRestartQuiz}
                className="btn btn-primary inline-flex items-center"
              >
                <RefreshCw size={20} className="mr-2" />
                {t.retakeQuiz}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;