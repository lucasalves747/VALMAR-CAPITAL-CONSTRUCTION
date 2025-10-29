import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" border-t border-soft-gray" style={{backgroundColor:"#1B365D",color:"#fff"}}>
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-7 h-7 text-navy" />
              <span className="text-lg font-bold ">Capital Construction</span>
            </div>
            <p className="text-sm text-text-secondary">
              Construindo patrimônio com transparência
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          {/* Menu */}
          <div>
            <h4 className="font-semibold  mb-4">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a href="#value" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#process" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold  mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-navy transition-colors text-sm">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail className="w-4 h-4 text-gold" />
                contato@capitalconstruction.com
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4 text-gold" />
                +55 (11) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-gold" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-soft-gray text-center">
          <p className="text-sm text-text-tertiary">
            © 2025 Capital Construction. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
