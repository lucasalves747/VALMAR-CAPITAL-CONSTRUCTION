import { useEffect } from "react";
import heroImage from "@/assets/hero-background.jpg";
import { Button } from "./ui/button";

const ContactForm = () => {
  useEffect(() => {
    // Cria e adiciona o script do GHL dinamicamente
    const script = document.createElement("script");
    script.src = "https://link.salee.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpa o script quando o componente desmontar
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(27,54,93,0) 0%, #1B365D 100%), url(${heroImage})`,
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
        SAIBA MAIS
        </h1>
        <Button
                  
                  className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 text-sm sm:text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                 Clique Aqui
                </Button>
      </div>
    </section>
  );
};

export default ContactForm;
