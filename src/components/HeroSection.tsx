import { MessageCircle, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center bg-navy overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />

    <div className="container mx-auto relative z-10 section-padding pt-32 md:pt-40">
      <div className="max-w-3xl">
        <span
          className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Agência de Marketing Digital · Juiz de Fora
        </span>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.08] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Atraia mais clientes com estratégias digitais que{" "}
          <span className="text-gold">funcionam</span>
        </h1>
        <p
          className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Transformamos a presença online do seu negócio em Juiz de Fora com
          tráfego pago, sites profissionais e automações que geram resultados
          reais.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-primary transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground/90 transition-all duration-200 hover:border-gold hover:text-gold"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </div>

    <a
      href="#servicos"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce"
      aria-label="Rolar para baixo"
    >
      <ArrowDown className="h-6 w-6" />
    </a>
  </section>
);

export default HeroSection;
