import { Building2, GraduationCap, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Building2,
    title: "Operações Reais",
    description: "Invista em projetos concretos de construção e desenvolvimento nos Estados Unidos."
  },
  {
    icon: GraduationCap,
    title: "Educação Prática",
    description: "Aprenda fazendo com mentoria individualizada de investidores experientes."
  },
  {
    icon: TrendingUp,
    title: "Resultados Reais",
    description: "Acompanhe o crescimento do seu patrimônio com total transparência."
  }
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 px-6 md:px-20 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-20">
          Por Que Capital Construction
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="glass-white rounded-[20px] p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hover:border-gold/30"
              >
                <Icon className="w-12 h-12 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
