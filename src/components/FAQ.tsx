import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter experiência prévia com investimentos imobiliários?",
    answer:
      "Não é necessário. A mentoria foi desenhada para atender tanto iniciantes quanto investidores experientes. O conteúdo é estruturado de forma progressiva, permitindo que todos acompanhem independentemente do nível de conhecimento prévio.",
  },
  {
    question: "Qual o valor mínimo para participar das operações reais?",
    answer:
      "O valor mínimo varia de acordo com cada projeto, mas geralmente começa em U$ 25.000. Cada oportunidade é apresentada com todos os detalhes, incluindo valor mínimo de investimento, projeção de retorno e prazo estimado.",
  },
  {
    question: "Posso participar da mentoria sem investir nas operações?",
    answer:
      "Sim, a participação nas operações é opcional, mas altamente recomendada para maximizar o aprendizado e o retorno. Você pode participar apenas da mentoria e aplicar o conhecimento em seus próprios projetos posteriormente.",
  },
  {
    question: "Como funciona a tributação para brasileiros que investem nos EUA?",
    answer:
      "Este é um dos tópicos abordados na mentoria. Você aprenderá as melhores estratégias para otimizar sua tributação, tanto nos EUA quanto no Brasil. Trabalhamos com estruturas que minimizam a carga tributária de forma legal e segura.",
  },
  {
    question: "Quantas operações são realizadas durante a mentoria?",
    answer:
      "Geralmente, apresentamos de 2 a 3 oportunidades de investimento durante o programa, mas isso pode variar de acordo com as condições de mercado. Nosso foco é na qualidade das oportunidades, não na quantidade..",
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-10 md:mb-16">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "border-gold/30" : ""
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-white/90 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 sm:px-8 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base leading-relaxed" style={{color: "#65676eff" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
