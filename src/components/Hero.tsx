import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6 md:px-20 text-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(27, 54, 93, 0) 0%, #1B365D 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-8 animate-fade-in-up"
        style={{
          color: "#fff",
          marginTop: "50px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          padding: "40px 3% 40px 3%",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-[56px] font-bold leading-tight md:leading-[1.3] tracking-tight">
          Construa Patrimônio<br />
          no Mercado Imobiliário<br />
          Americano
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-[520px] leading-relaxed">
          Participe de operações reais de construção e investimento através da
          mentoria mais exclusiva do mercado.
        </p>

        <Button
          onClick={scrollToContact}
          className="h-14 px-12 text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Agendar Reunião Estratégica
        </Button>

        <div className="flex flex-wrap justify-center items-center gap-3 text-base sm:text-lg md:text-xl font-medium">
          <span>150+ Investidores</span>
          <span>$50M+ em Operações</span>
          <span>95% Satisfação</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
