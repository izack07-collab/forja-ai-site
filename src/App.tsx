import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Tecnologias } from "@/components/sections/Tecnologias";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Ecossistema } from "@/components/sections/Ecossistema";
import { Pacotes } from "@/components/sections/Pacotes";
import { Case } from "@/components/sections/Case";
import { MiniCases } from "@/components/sections/MiniCases";
import { FAQ } from "@/components/sections/FAQ";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Divider } from "@/components/ui/Divider";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Tecnologias />
        <ComoFunciona />
        <Ecossistema />
        <Case />
        <MiniCases />
        <Pacotes />
        <Divider />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
