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
import Operacao from "@/components/Operacoes"
import Mentoria from "@/components/Mentoria"
import FormatoAula from "@/components/FormatoAula"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TornadoConciente />
        <ProcessTimeline />
        <Operacao/>
        <ValueProposition />
        <Mentoria/>
        <FormatoAula/>
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
