import { useEffect } from "react";
import heroImage from "@/assets/hero-background.jpg";
import { Button } from "./ui/button";

const ContactForm = () => {
  

  return (
   <section
  id="contact"
  className="flex flex-col items-center justify-center py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-20"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(27,54,93,0) 0%, #1B365D 100%), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <Button
    className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-12 text-sm sm:text-base font-semibold bg-gold hover:bg-gold/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
  >
    QUERO ENTRAR NA MENTORIA
  </Button>
</section>

  );
};

export default ContactForm;
