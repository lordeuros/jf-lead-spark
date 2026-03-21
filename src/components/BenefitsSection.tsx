import { TrendingUp, DollarSign, Monitor, HeadphonesIcon, Crosshair } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const benefits = [
  { icon: TrendingUp, text: "Mais clientes todos os dias" },
  { icon: DollarSign, text: "Aumento de faturamento" },
  { icon: Monitor, text: "Presença digital profissional" },
  { icon: HeadphonesIcon, text: "Atendimento personalizado" },
  { icon: Crosshair, text: "Estratégias focadas em resultado" },
];

const BenefitsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="bg-navy section-padding-lg overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Por que nos escolher</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-8">
              Resultados que transformam negócios
            </h2>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <div
                  key={b.text}
                  className={`flex items-center gap-4 ${visible ? "animate-fade-up opacity-100" : "opacity-0"}`}
                  style={{ animationDelay: visible ? `${i * 0.1}s` : undefined }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-primary-foreground/85 text-lg">{b.text}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Quero mais clientes
            </a>
          </div>

          <div className={`relative ${visible ? "animate-slide-left opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-light rounded-2xl p-8 text-center">
                <span className="block text-4xl font-display font-bold text-gold">+340%</span>
                <span className="text-primary-foreground/60 text-sm mt-1 block">Aumento em leads</span>
              </div>
              <div className="bg-navy-light rounded-2xl p-8 text-center mt-8">
                <span className="block text-4xl font-display font-bold text-gold">+87</span>
                <span className="text-primary-foreground/60 text-sm mt-1 block">Clientes atendidos</span>
              </div>
              <div className="bg-navy-light rounded-2xl p-8 text-center">
                <span className="block text-4xl font-display font-bold text-gold">4.9★</span>
                <span className="text-primary-foreground/60 text-sm mt-1 block">Avaliação Google</span>
              </div>
              <div className="bg-navy-light rounded-2xl p-8 text-center mt-8">
                <span className="block text-4xl font-display font-bold text-gold">R$2M+</span>
                <span className="text-primary-foreground/60 text-sm mt-1 block">Gerenciados em ads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
