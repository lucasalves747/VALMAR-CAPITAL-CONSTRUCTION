import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ProcessTimeline from "@/components/ProcessTimeline";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TornadoConciente from "@/components/TornadoConciente"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TornadoConciente />
        <ProcessTimeline />
        <ValueProposition />
        <Testimonials />
        
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
