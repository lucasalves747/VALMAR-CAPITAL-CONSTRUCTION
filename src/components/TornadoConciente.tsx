import { LockKeyhole, TriangleAlert, TrendingUp } from 'lucide-react';
import heroImage from "@/assets/image_1_capital_construction - Editado.png";

const values = [
  {
    icon: LockKeyhole,
    title: "O Círculo Fechado dos Investimentos",
    description: "O acesso aos investimentos imobiliários mais lucrativos dos EUA é, por tradição, restrito a um grupo seleto. Para quem está fora, as melhores oportunidades permanecem invisíveis, limitando seu potencial de crescimento.",
  },
  {
    icon: TriangleAlert,
    title: "Navegando em um Mar de Incertezas",
    description: "Sem o conhecimento certo, o investidor comum enfrenta um bombardeio de informações genéricas e promessas que não se cumprem. Esse caminho incerto aumenta drasticamente o risco de decisões ruins e perdas financeiras.",
  },
  {
    icon: TrendingUp,
    title: "A Riqueza que Fica Fora de Alcance",
    description: "Enquanto o mercado imobiliário americano cria fortunas, a falta de acesso e orientação especializada impede que novos investidores participem dessa multiplicação de capital, deixando uma oportunidade valiosa para trás.",
  },
];

const ValueProposition = () => {
  return (
    <section
      id="value"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, #1B365D 0%, rgba(27, 54, 93, 0) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-center mb-10 sm:mb-16 md:mb-20">
         VOCÊ ESTÁ CANSADO DE TEORIAS QUE NÃO TE LEVAM A LUGAR NENHUM?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hover:border-gold/30 text-center sm:text-left"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  padding: "28px 24px",
                }}
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold mb-4 sm:mb-6 mx-auto sm:mx-0" strokeWidth={1.5} />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
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
