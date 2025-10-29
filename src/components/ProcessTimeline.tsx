import mentorImage from "@/assets/fd1d85e9-c032-495f-8e0c-18b291992e85.jpg";
import { CheckCircle2 } from "lucide-react";

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
    <section id="process" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold">
            Seu Mentor
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Valmar Nunes
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-muted-foreground">
            Investidor-Construtor | Especialista em Mercado Imobiliário Americano
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Imagem */}
          <div className="relative order-0 lg:order-none">
            <div className="aspect-square rounded-2xl sm:rounded-3xl
            overflow-hidden shadow-lg sm:shadow-premium">
              <img
                src={mentorImage}
                alt="Valmar Nunes - Investidor e Construtor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 gradient-accent rounded-3xl -z-10 blur-xl sm:blur-2xl opacity-50" />
          </div>

          {/* Conteúdo */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Da Construção ao Capital: Uma Jornada de Excelência
              </h3>
            </div>

            {/* Lista de conquistas */}
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Missão */}
            <div className="bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-accent shadow-md sm:shadow-elegant">
              <p className="text-sm sm:text-base md:text-lg text-card-foreground italic leading-relaxed">
                "Minha missão é transformar empresários brasileiros em investidores-construtores de sucesso, compartilhando não apenas conhecimento, mas experiência prática em operações reais que geram riqueza e constroem legados duradouros."
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 font-semibold">
                — Valmar Nunes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
