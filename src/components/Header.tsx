import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-navy" />
          <span className="text-xl font-bold text-navy">Capital Construction</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#value" className="text-navy transition-colors">
            Por Quê
          </a>
          <a href="#process" className="text-navy transition-colors">
            Como Funciona
          </a>
          <a href="#portfolio" className="text-navy transition-colors">
            Projetos
          </a>
          <a href="#faq" className="text-navy transition-colors">
            FAQ
          </a>
        </nav>
        
        {/* CTA */}
        <Button 
          onClick={scrollToContact}
          variant="outline"
          className="border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
        >
          Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
