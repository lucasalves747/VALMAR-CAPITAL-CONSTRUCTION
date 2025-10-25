import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "A mentoria da Capital Construction transformou minha forma de investir. Em 18 meses, já obtive retornos que superaram minhas expectativas iniciais.",
    name: "Ricardo Santos",
    result: "$180k em retornos",
    rating: 5
  },
  {
    quote: "Transparência total em cada etapa do processo. Finalmente encontrei uma forma segura de investir no mercado americano com suporte completo.",
    name: "Patricia Lima",
    result: "$120k em retornos",
    rating: 5
  },
  {
    quote: "O acompanhamento personalizado faz toda a diferença. Não é apenas um investimento, é uma verdadeira educação financeira aplicada.",
    name: "Fernando Costa",
    result: "$250k em retornos",
    rating: 5
  },
  {
    quote: "Participar de projetos reais nos EUA sempre foi meu sonho. A Capital Construction tornou isso possível com segurança e profissionalismo.",
    name: "Marina Oliveira",
    result: "$95k em retornos",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-20">
          Resultados Reais de Investidores
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-white rounded-[20px] p-10 space-y-8">
              {/* Quote */}
              <p className="text-lg text-text-primary leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Profile */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <span className="inline-block px-3 py-1 bg-gold-light text-text-primary text-sm rounded-full">
                    {testimonial.result}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
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
