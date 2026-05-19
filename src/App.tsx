import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Pacotes } from "@/components/sections/Pacotes";
import { Case } from "@/components/sections/Case";
import { FAQ } from "@/components/sections/FAQ";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <ComoFunciona />
        <Pacotes />
        <Case />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
