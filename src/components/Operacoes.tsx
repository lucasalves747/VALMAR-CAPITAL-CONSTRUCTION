import mentorImage from "@/assets/image.png";
import { CheckCircle2 } from "lucide-react";

const ProcessTimeline = () => {
    const achievements = [
        {
            titulo: "Seleção do Projeto",
            descricao: "Nossa equipe de especialistas identifica e seleciona terrenos e imóveis com alto potencial de valorização"
        },
        {
            titulo:"Apresentação da Oportunidade",
            descricao:"O projeto é apresentado aos mentorados, com todas as informações de investimento, prazo e projeção de lucro."
        },
        {
            titulo:"Formação da Sociedade",
            descricao:"Os mentorados que desejam participar se tornam sócios do projeto, com um contrato claro e transparente que define a participação de cada um nos custos e nos lucros."
        },
        {
            titulo:"Acompanhamento da Obra",
            descricao:"Durante a mentoria, você acompanha de perto a execução da obra, participando de reuniões, visitas técnicas e decisões estratégicas."
        },
        {
            titulo:"Venda e Distribuição dos Lucros",
            descricao:"Após a conclusão e venda do imóvel, os lucros são distribuídos entre os sócios, de acordo com a participação de cada um."
        }
    ];


    return (
        <section id="process" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
                        
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                                COMO VOCÊ PODE SE TORNAR UM INVESTIDOR?
                            </h2>
                            <p className="text-sm sm:text-lg md:text-2xl text-muted-foreground">
                                Tornar-se investidor é o grande diferencial da nossa mentoria.
                            </p>
                        </div>


                {/* Grid principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">


                    {/* Conteúdo */}
                    <div className="space-y-6 sm:space-y-8">
                        

                        {/* Lista de conquistas */}
                        <div className="space-y-3 sm:space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start gap-2 sm:gap-3">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-lg sm:text-xl md:text-1xl text-accent">{achievement.titulo} <br /><span className="text-sm sm:text-base leading-relaxed font-light text-primary"> {achievement.descricao}</span></span>

                                </div>
                            ))}
                        </div>


                    </div>
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
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
