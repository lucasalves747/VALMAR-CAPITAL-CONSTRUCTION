import mentorImage from "@/assets/fd1d85e9-c032-495f-8e0c-18b291992e85.jpg";
import { CheckCircle2,} from "lucide-react";


const ProcessTimeline = () => {
  const achievements = [
    "Mais de 20 anos de experiência no mercado imobiliário americano",
    "VGV superior a $100 milhões em projetos desenvolvidos",
    "Especialista em estruturação de operações imobiliárias complexas",
    "Track record comprovado em construção e investimentos",
    "Network consolidado com investidores e construtores nos EUA",
    "Mentor de dezenas de investidores brasileiros de sucesso",
  ];
  return (
    <section id="process" className="py-24 px-6 md:px-20">
      
    
    
      <div className="container px-4 m-20px">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-4">
              Seu Mentor
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Valmar Nunes
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Investidor-Construtor | Especialista em Mercado Imobiliário Americano
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-premium">
                <img
                  src={mentorImage}
                  alt="Valmar Nunes - Investidor e Construtor"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-accent rounded-3xl -z-10 blur-2xl opacity-50" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Da Construção ao Capital: Uma Jornada de Excelência
                </h3>
                
                
              </div>

              {/* Achievements List */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="bg-card p-6 rounded-xl border-l-4 border-accent shadow-elegant">
                <p className="text-lg text-card-foreground italic leading-relaxed">
                  "Minha missão é transformar empresários brasileiros em investidores-construtores de sucesso, compartilhando não apenas conhecimento, mas experiência prática em operações reais que geram riqueza e constroem legados duradouros."
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">— Valmar Nunes</p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
