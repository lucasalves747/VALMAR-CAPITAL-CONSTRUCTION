import { Button } from "@/components/ui/button";
import logo from "@/assets/367c061d-143e-4c04-b59e-f3a91c753caf.png"; // ajuste o caminho conforme sua pasta

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Capital Construction"
            className="h-60 md:h-60 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#value" className="text-navy transition-colors hover:text-accent">
            Por Quê
          </a>
          <a href="#process" className="text-navy transition-colors hover:text-accent">
            Como Funciona
          </a>
          <a href="#portfolio" className="text-navy transition-colors hover:text-accent">
            Projetos
          </a>
          <a href="#faq" className="text-navy transition-colors hover:text-accent">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <Button
          onClick={scrollToContact}
          variant="outline"
          className="border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 text-sm md:text-base px-3 md:px-5 py-1 md:py-2"
        >
          Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
