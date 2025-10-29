import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-20 text-center relative"
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
          Inscrição Recebida<br className="hidden sm:block" />
          com <span style={{color: "#fcb500ff"}}>Sucesso!</span> <br className="hidden sm:block" />
        
        </h1>
        

        <p className="text-sm sm:text-base md:text-lg max-w-[480px] leading-relaxed">
          <span style={{color: "#fcb500ff"}}>Parabéns! </span>Sua inscrição para o processo seletivo da Mentoria Capital Construction foi recebida com sucesso. Estamos ansiosos para conhecê-lo melhor e entender se a mentoria é o programa certo para você.
        </p>

        
      </div>
    </section>
  );
};

export default Hero;
