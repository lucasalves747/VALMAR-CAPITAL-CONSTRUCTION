import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A mentoria da Capital Construction transformou minha forma de investir. Em 18 meses, já obtive retornos que superaram minhas expectativas iniciais.",
    name: "Ricardo Santos",
    result: "$180k em retornos",
    rating: 5,
  },
  {
    quote:
      "Transparência total em cada etapa do processo. Finalmente encontrei uma forma segura de investir no mercado americano com suporte completo.",
    name: "Patricia Lima",
    result: "$120k em retornos",
    rating: 5,
  },
  {
    quote:
      "O acompanhamento personalizado faz toda a diferença. Não é apenas um investimento, é uma verdadeira educação financeira aplicada.",
    name: "Fernando Costa",
    result: "$250k em retornos",
    rating: 5,
  },
  {
    quote:
      "Participar de projetos reais nos EUA sempre foi meu sonho. A Capital Construction tornou isso possível com segurança e profissionalismo.",
    name: "Marina Oliveira",
    result: "$95k em retornos",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-10 sm:mb-16 md:mb-20">
          Resultados Reais de Investidores
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Quote */}
              <p className="text-sm sm:text-base md:text-lg text-text-primary leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Profile */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <div className="space-y-1 text-center sm:text-left">
                  <p className="font-semibold text-text-primary text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gold-light text-text-primary text-xs sm:text-sm rounded-full">
                    {testimonial.result}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex justify-center sm:justify-end gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
