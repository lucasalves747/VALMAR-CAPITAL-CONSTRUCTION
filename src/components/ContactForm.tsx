import { useEffect } from "react";
import heroImage from "@/assets/hero-background.jpg";

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
        className="max-w-2xl mx-auto text-center space-y-10 sm:space-y-12"
        style={{
          color: "#fff",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          padding: "32px 5%",
        }}
      >
        {/* Badge */}
        <span className="inline-block px-3 sm:px-4 py-1 bg-gold-light text-text-primary text-xs sm:text-sm font-medium rounded-full">
          Vagas Limitadas
        </span>

        {/* Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Pronto Para Começar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary">
            Agende uma reunião estratégica sem compromisso
          </p>
        </div>

        {/* GHL Form */}
        <div
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://link.salee.ai/widget/form/IweIQMot55bGIom9NrkA"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "12px",
            }}
            id="inline-IweIQMot55bGIom9NrkA"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Capital Construction"
            data-height="492"
            data-layout-iframe-id="inline-IweIQMot55bGIom9NrkA"
            data-form-id="IweIQMot55bGIom9NrkA"
            title="Capital Construction"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
