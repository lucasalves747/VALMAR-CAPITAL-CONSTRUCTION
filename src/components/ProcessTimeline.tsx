const steps = [
  {
    number: "1",
    title: "Reunião Estratégica",
    description: "Análise do seu perfil e objetivos",
    duration: "15 min"
  },
  {
    number: "2",
    title: "Planejamento",
    description: "Estruturação financeira personalizada",
    duration: "1 semana"
  },
  {
    number: "3",
    title: "Entrada em Operações",
    description: "Participação em projetos reais",
    duration: "30 dias"
  },
  {
    number: "4",
    title: "Acompanhamento",
    description: "Gestão e retorno do investimento",
    duration: "Contínuo"
  }
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-20">
          Como Funciona
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-soft-gray via-gold to-soft-gray" />
          
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6">
                {/* Circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 glass-white rounded-full border-2 border-soft-gray hover:border-gold transition-all duration-300 hover:scale-105 mx-auto">
                  <span className="text-2xl font-bold text-gold">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gold-light text-text-primary text-sm rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
