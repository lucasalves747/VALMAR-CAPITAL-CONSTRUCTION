import { Button } from "@/components/ui/button";
import logo from "@/assets/367c061d-143e-4c04-b59e-f3a91c753caf.png"; // ajuste o caminho conforme sua pasta

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-soft-gray">
      <div className="max-w-7xl   md:px-20 h-20 flex items-center ">
        {/* Logo */}
        <div className="flex ">
          <img
            src={logo}
            alt="Capital Construction"
            className="h-60 md:h-60 w-auto object-contain"
          />
        </div>


        
      </div>
    </header>
  );
};

export default Header;
