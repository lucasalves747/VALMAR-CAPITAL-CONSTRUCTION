import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-20 text-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(27, 54, 93, 0) 0%, #1B365D 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 animate-fade-in-up"
        style={{
          color: "#fff",
          marginTop: "10%",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          padding: "28px 4%",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight md:leading-[1.3] tracking-tight">
          A JORNADA PARA SE TORNAR <br className="hidden sm:block" />
          UM CONSTRUTOR NO <br className="hidden sm:block" />
          MERCADO AMERICANO
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-[480px] leading-relaxed">
          A única mentoria que te transforma em sócio de operações reais de construção nos EUA, com a possibilidade de recuperar seu investimento e lucrar ainda durante o programa.
        </p>

        <Button
          onClick={scrollToContact}
          className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 text-sm sm:text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          QUERO ME INSCREVER
        </Button>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-medium">
          <span>150+ Investidores</span>
          <span>$50M+ em Operações</span>
          <span>95% Satisfação</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
