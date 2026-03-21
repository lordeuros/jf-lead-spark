import { Target, Globe, Search, MapPin, MessageSquare, Palette } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const services = [
  { icon: Target, title: "Gestão de Tráfego Pago", desc: "Campanhas estratégicas no Google Ads e Meta Ads para trazer clientes qualificados todos os dias." },
  { icon: Globe, title: "Criação de Sites Profissionais", desc: "Sites modernos, rápidos e otimizados para converter visitantes em clientes." },
  { icon: Search, title: "SEO", desc: "Posicione seu negócio nas primeiras páginas do Google de forma orgânica e duradoura." },
  { icon: MapPin, title: "Google Meu Negócio", desc: "Destaque sua empresa nas buscas locais e no Google Maps para ser encontrado facilmente." },
  { icon: MessageSquare, title: "Automação de WhatsApp", desc: "Automatize seu atendimento e aumente a conversão com mensagens inteligentes." },
  { icon: Palette, title: "Branding e Identidade Visual", desc: "Construa uma marca forte e memorável que transmita confiança e profissionalismo." },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="servicos" className="bg-muted section-padding-lg" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy">
            Soluções completas para seu negócio crescer
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                visible ? "opacity-100 animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 0.08}s` : undefined }}
            >
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                <s.icon className="h-6 w-6 text-gold group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
