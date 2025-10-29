import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImage from "@/assets/hero-background.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    toast.success("Mensagem enviada! Entraremos em contato em até 24h.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(27, 54, 93, 0) 0%, #1B365D 100%), url(${heroImage})`,
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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] sm:rounded-[24px] p-6 sm:p-10 md:p-12 space-y-5 sm:space-y-6 shadow-2xl"
        >
          <div className="space-y-3 sm:space-y-4">
            <Input
              type="text"
              placeholder="Nome Completo *"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-12 sm:h-14 bg-background border-soft-gray rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all text-sm sm:text-base"
            />

            <Input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-12 sm:h-14 bg-background border-soft-gray rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all text-sm sm:text-base"
            />

            <Input
              type="tel"
              placeholder="Telefone *"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="h-12 sm:h-14 bg-background border-soft-gray rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all text-sm sm:text-base"
            />

            <Textarea
              placeholder="Mensagem (opcional)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="min-h-[80px] sm:min-h-[100px] bg-background border-soft-gray rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all resize-none text-sm sm:text-base"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Agendar Reunião Gratuita
          </Button>

          <p className="text-xs sm:text-sm text-text-tertiary">
            Resposta em até 24h • 100% confidencial
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
