import { Linkedin, Mail, Globe } from "lucide-react";
import { trackLead, withUtm } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-bg-deep text-bg/70 border-t border-bg/10 py-12">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <a
              href="#topo"
              className="font-display text-2xl tracking-tightish text-bg hover:text-accent transition-colors inline-block"
            >
              Forj<span className="text-accent">age</span>
            </a>
            <p className="text-sm mt-4 max-w-md leading-relaxed text-pretty">
              Ecossistema de loja online empacotado pra lojas físicas
              brasileiras que querem vender online sem virar refém de
              plataforma.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wider2 text-bg/40 mb-4">
              Navegar
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#como-funciona" className="hover:text-bg transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#ecossistema" className="hover:text-bg transition-colors">
                  Ecossistema (4 pilares)
                </a>
              </li>
              <li>
                <a href="#pacotes" className="hover:text-bg transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-bg transition-colors">
                  vs Shopify / Nuvemshop
                </a>
              </li>
              <li>
                <a href="#case" className="hover:text-bg transition-colors">
                  Case Ri Pratas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-bg transition-colors">
                  Perguntas
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider2 text-bg/40 mb-4">
              Falar com o Isaac
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={withUtm("mailto:izack07@gmail.com", { channel: "footer-email", utm_source_fallback: "site" })}
                  onClick={() => trackLead("footer-email")}
                  className="inline-flex items-center gap-2 hover:text-bg transition-colors"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  izack07@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/isaac-silveira-49b09821a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-bg transition-colors"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://izack07-collab.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-bg transition-colors"
                >
                  <Globe className="h-4 w-4" strokeWidth={1.5} />
                  Portfólio (outros projetos)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bg/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bg/40">
          <p>© 2026 Forjage · Isaac Silveira · Desenvolvimento independente</p>
          <p className="font-display italic text-sm">forjage.com.br</p>
        </div>
      </div>
    </footer>
  );
}
