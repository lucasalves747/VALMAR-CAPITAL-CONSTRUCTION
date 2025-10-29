import { Building2, GraduationCap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/image_1_capital_construction - Editado.png";
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
    <section id="value" className="py-24 px-6 md:px-20 " 
    style={{color: "#fff",
        
        backgroundImage: `linear-gradient(to bottom, #1B365D 0%,rgba(27, 54, 93, 0)  100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    
      }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold  text-center mb-20">
          Por Que Capital Construction
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="glass-white rounded-[20px] p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hover:border-gold/30"
                style={{
          
          marginTop: "20px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          padding: "40px 15% 40px 15%",
        }}
              >
                <Icon className="w-12 h-12 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className=" leading-relaxed">
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
