import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import miamiProject from "@/assets/project-miami.jpg";
import austinProject from "@/assets/project-austin.jpg";
import orlandoProject from "@/assets/project-orlando.jpg";

const projects = [
  {
    image: miamiProject,
    location: "Miami, Florida",
    title: "Modern Residential Complex",
    roi: "18-22%",
    timeline: "18 meses",
    minInvestment: "$50k",
    status: "85% captado",
    progress: 85,
    badge: "Aberto"
  },
  {
    image: austinProject,
    location: "Austin, Texas",
    title: "Commercial Office Development",
    roi: "20-25%",
    timeline: "24 meses",
    minInvestment: "$75k",
    status: "65% captado",
    progress: 65,
    badge: "Últimas vagas"
  },
  {
    image: orlandoProject,
    location: "Orlando, Florida",
    title: "Mixed-Use Complex",
    roi: "22-28%",
    timeline: "20 meses",
    minInvestment: "$60k",
    status: "92% captado",
    progress: 92,
    badge: "Últimas vagas"
  }
];

const PortfolioShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-20 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-text-primary text-center mb-16">
          Operações Abertas para Investimento
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 glass-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 glass-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>

          {/* Project Card */}
          <div className="relative overflow-hidden rounded-[24px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
            {/* Background Image */}
            <div className="relative h-[520px]">
              <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-4 py-2 bg-gold/90 backdrop-blur-md text-white text-sm font-medium rounded-full">
                {projects[currentIndex].badge}
              </span>
            </div>
            
            {/* Glass Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 glass-premium border-t border-white/90 rounded-b-[24px] p-8">
              {/* Location */}
              <div className="flex items-center gap-2 text-text-secondary mb-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium">{projects[currentIndex].location}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {projects[currentIndex].title}
              </h3>
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-xs text-text-tertiary">ROI Esperado</span>
                  <p className="text-sm font-semibold text-text-primary">{projects[currentIndex].roi}</p>
                </div>
                <div>
                  <span className="text-xs text-text-tertiary">Prazo</span>
                  <p className="text-sm font-semibold text-text-primary">{projects[currentIndex].timeline}</p>
                </div>
                <div>
                  <span className="text-xs text-text-tertiary">Investimento Min</span>
                  <p className="text-sm font-semibold text-text-primary">{projects[currentIndex].minInvestment}</p>
                </div>
                <div>
                  <span className="text-xs text-text-tertiary">Status</span>
                  <p className="text-sm font-semibold text-text-primary">{projects[currentIndex].status}</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1.5 bg-soft-gray rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                    style={{ width: `${projects[currentIndex].progress}%` }}
                  />
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                variant="outline"
                className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
              >
                Ver Detalhes
              </Button>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-soft-gray'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
