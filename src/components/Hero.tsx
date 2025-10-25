import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-background to-off-white pt-24 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-[56px] font-bold text-text-primary leading-[1.1] tracking-tight">
              Construa Patrimônio<br />
              no Mercado Imobiliário<br />
              Americano
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-[520px] leading-relaxed">
              Participe de operações reais de construção e investimento através da mentoria mais exclusiva do mercado.
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="h-14 px-12 text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Agendar Reunião Estratégica
            </Button>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-3 text-sm md:text-base text-text-tertiary font-medium">
              <span>150+ Investidores</span>
              <span className="text-soft-gray">•</span>
              <span>$50M+ em Operações</span>
              <span className="text-soft-gray">•</span>
              <span>95% Satisfação</span>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="glass-white rounded-[24px] overflow-hidden animate-float shadow-2xl">
            <img 
              src={heroImage} 
              alt="Arquitetura moderna e elegante de projeto imobiliário"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
