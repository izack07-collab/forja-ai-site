/**
 * src/lib/analytics.ts  🔵 NOVO  (run 2026-06-02-033706 · frente F5.a)
 * --------------------------------------------------------------------
 * Camada unica de tracking do site institucional Forjage.
 *
 * POR QUE EXISTE: o site vende o "Pilar 4 — atribuicao de trafego pago"
 * mas hoje nao mede absolutamente nada (0 Pixel, 0 GA4/GTM, 0 UTM —
 * Iris raio-x §8). Furo de credibilidade no primeiro lead que abre o
 * DevTools. Forjage tem que comer a propria comida: medir a si mesmo.
 *
 * O QUE FAZ:
 *   - track(): dispara evento pro Meta Pixel (se carregado) — client-side.
 *   - trackLead(): atalho semantico pro evento de conversao (clicou em
 *     "Falar comigo" / mailto / wa.me futuro).
 *   - withUtm(): anexa utm_* + ref a uma URL de CTA (mailto/wa.me) pra
 *     o destino saber a origem do lead.
 *
 * NAO FAZ: CAPI server-side. O backend Forjage ainda nao existe (Iris §7:
 * sem pg_net, sem Edge proprio). CAPI entra quando o backend subir — ver
 * nota no fim deste arquivo e na proposta F5. Pixel client + Plausible +
 * UTM e o minimo viavel HOJE.
 *
 * CONFIG (env Vite — valores reais o Isaac preenche, ficam fora do git):
 *   VITE_META_PIXEL_ID      -> id do Pixel. Sem ele, Pixel nao carrega.
 *   VITE_PLAUSIBLE_DOMAIN   -> dominio no Plausible (ex: forjage.com.br).
 *   (loaders ficam no index.html, condicionais — ver site-index-DEPOIS.html)
 *
 * Fail-safe: se o Pixel nao foi carregado (env ausente / bloqueador), as
 * funcoes viram no-op silencioso. Nunca quebram a pagina.
 */

// ----- tipos -----

type FbqArgs =
  | ["init", string]
  | ["track", string, Record<string, unknown>?]
  | ["trackCustom", string, Record<string, unknown>?];

declare global {
  interface Window {
    fbq?: (...args: FbqArgs) => void;
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

// ----- Meta Pixel -----

/**
 * Dispara um evento padrao do Meta Pixel (client-side).
 * Eventos padrao uteis aqui: "PageView" (auto no index), "Lead", "Contact".
 */
export function track(event: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return; // Pixel nao carregado -> no-op
  window.fbq("track", event, params);
}

/**
 * Conversao principal do site: o visitante sinalizou intencao de falar
 * (submit do form de contato, clique no mailto/wa.me, botao flutuante).
 * Dispara Pixel "Lead" + evento Plausible "Lead" (goal configuravel la).
 *
 * @param origem rotulo curto da origem do clique: "form" | "whatsapp-float"
 *               | "footer-email" | "hero-cta" etc. Vira prop de segmentacao.
 */
export function trackLead(origem: string): void {
  track("Lead", { origem });
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible("Lead", { props: { origem } });
  }
}

// ----- UTM nos CTAs -----

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Le os utm_* da URL atual (quem chegou no site via anuncio/IG carrega eles).
 */
function currentUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of UTM_KEYS) {
    const v = sp.get(k);
    if (v) out[k] = v;
  }
  return out;
}

/**
 * Anexa os utm_* da sessao + um marcador de canal interno a uma URL de CTA.
 * Funciona pra wa.me (querystring) e mailto (querystring tambem e valida).
 * Mantem o que ja existir na URL (ex: ?text=... do wa.me, ?subject=... do mailto).
 *
 * Ex.:
 *   withUtm("https://wa.me/55XXments", { utm_source_fallback: "site", channel: "whatsapp-float" })
 *   withUtm("mailto:contato@forjage.com.br?subject=...", { channel: "footer-email" })
 */
export function withUtm(
  baseUrl: string,
  opts?: { utm_source_fallback?: string; channel?: string }
): string {
  const utms = currentUtms();
  // Se a sessao nao tem utm_source (acesso direto), marca origem do proprio site.
  if (!utms.utm_source && opts?.utm_source_fallback) {
    utms.utm_source = opts.utm_source_fallback;
  }
  const params = new URLSearchParams(utms);
  if (opts?.channel) params.set("forjage_cta", opts.channel);

  const extra = params.toString();
  if (!extra) return baseUrl;

  // mailto e http: ambos aceitam ?a=b&c=d; respeita querystring pre-existente.
  const sep = baseUrl.includes("?") ? "&" : "?";
  return baseUrl + sep + extra;
}

/**
 * ----------------------------------------------------------------------
 * ROADMAP — CAPI server-side (NAO implementar agora)
 * ----------------------------------------------------------------------
 * Quando o backend Forjage existir (Edge Function + projeto Supabase
 * proprio), espelhar o evento "Lead" via Conversions API:
 *   - gerar um event_id unico no client, passar o MESMO id pro Pixel
 *     (fbq 3o arg {eventID}) e pro POST server -> Meta deduplica.
 *   - POST /events da Graph API com action_source:"website",
 *     event_source_url, user_data hasheada (em/ph SHA256 lowercase trim),
 *     fbp/fbc dos cookies.
 * Sem CAPI, Pixel-only perde ~20-35% de conversao (Iris §6). Aceitavel no
 * MVP do site institucional; obrigatorio no pacote que se vende ao cliente.
 */
