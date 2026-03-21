import { useScrollReveal } from "./useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Clínica Odontológica Sorrir+",
    category: "Google Ads + Site",
    result: "+280% de agendamentos em 90 dias",
    color: "from-navy to-navy-light",
  },
  {
    title: "Restaurante Sabor da Serra",
    category: "Meta Ads + Google Meu Negócio",
    result: "Lotação máxima nos fins de semana",
    color: "from-navy-light to-navy",
  },
  {
    title: "Academia Power Fit",
    category: "Site + Automação WhatsApp",
    result: "+150 matrículas em 60 dias",
    color: "from-navy to-navy-light",
  },
  {
    title: "Escritório ContabilizaJF",
    category: "SEO + Branding",
    result: "1ª página do Google em 4 meses",
    color: "from-navy-light to-navy",
  },
];

const PortfolioSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding-lg bg-muted" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Portfólio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy">
            Resultados que falam por si
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl bg-gradient-to-br ${p.color} p-8 md:p-10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                visible ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 0.1}s` : undefined }}
            >
              <span className="text-gold/80 text-xs font-semibold tracking-widest uppercase">{p.category}</span>
              <h3 className="mt-2 text-2xl font-display font-bold text-primary-foreground">{p.title}</h3>
              <p className="mt-3 text-primary-foreground/70 text-base">{p.result}</p>
              <ExternalLink className="absolute top-6 right-6 h-5 w-5 text-primary-foreground/30 group-hover:text-gold transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
