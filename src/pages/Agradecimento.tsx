import Agradecimentos from "@/components/Agradecimento";
import PassoPasso from "@/components/Passo_passo"
import NavBar from "@/components/nav_agradecimento"
import Foot from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
    <NavBar/>
    <main>
    <Agradecimentos/>
    <PassoPasso/>
    </main>
    <Foot/>
    </div>
  );
};

export default Index;
