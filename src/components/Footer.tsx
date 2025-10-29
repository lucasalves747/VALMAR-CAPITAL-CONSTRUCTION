import { Building2, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/367c061d-143e-4c04-b59e-f3a91c753caf.png"; 
const Footer = () => {
  return (
    <footer
      className="border-t border-soft-gray text-white"
      style={{ backgroundColor: "#1B365D" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-20 py-10 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16  sm:text-left">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <img
            src={logo}
            alt="Capital Construction"
            className="h-60 md:h-60 w-auto object-contain"
          />
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Construindo patrimônio com transparência
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Menu</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#value"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contato</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex sm:justify-start items-center gap-2 text-sm md:text-base text-gray-300">
                <Mail className="w-4 h-4 text-gold" />
                contato@capitalconstruction.com
              </li>
              <li className="flex sm:justify-start items-center gap-2 text-sm md:text-base text-gray-300">
                <Phone className="w-4 h-4 text-gold" />
                +55 (11) 9999-9999
              </li>
              <li className="flex sm:justify-start items-center gap-2 text-sm md:text-base text-gray-300">
                <MapPin className="w-4 h-4 text-gold" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/20 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            © 2025 Capital Construction. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
