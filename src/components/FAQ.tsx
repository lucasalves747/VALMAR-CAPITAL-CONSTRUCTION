import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual o investimento mínimo necessário?",
    answer: "O investimento mínimo varia por projeto, geralmente entre $50k e $75k USD. Durante a reunião estratégica, identificamos as melhores oportunidades para seu perfil e orçamento."
  },
  {
    question: "Como funciona a estrutura jurídica nos EUA?",
    answer: "Trabalhamos com estruturas jurídicas consolidadas (LLC ou Corp) que garantem segurança patrimonial e benefícios fiscais. Nossa equipe cuida de toda a documentação e compliance."
  },
  {
    question: "Preciso viajar para os Estados Unidos?",
    answer: "Não é necessário. Todo o processo pode ser realizado remotamente. Porém, oferecemos visitas aos projetos para investidores que desejam conhecer pessoalmente."
  },
  {
    question: "Qual o prazo médio de retorno?",
    answer: "Os projetos têm prazo médio de 18 a 24 meses, com retornos projetados entre 18% e 28%, dependendo do tipo de operação e localização."
  },
  {
    question: "Posso investir em múltiplos projetos?",
    answer: "Sim! Recomendamos diversificação. Você pode participar de diferentes projetos simultaneamente para otimizar risco e retorno."
  },
  {
    question: "Como é feita a gestão dos investimentos?",
    answer: "Oferecemos acompanhamento mensal com relatórios detalhados, acesso a plataforma exclusiva e comunicação direta com a equipe de gestão dos projetos."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-20 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-16">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-gold/30' : ''
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/90 transition-colors"
              >
                <span className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-text-secondary leading-relaxed">
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
