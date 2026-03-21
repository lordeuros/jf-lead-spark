import { useScrollReveal } from "./useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="sobre" className="section-padding-lg bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className={`text-gold text-sm font-semibold tracking-widest uppercase ${visible ? "animate-fade-up" : "opacity-0"}`}>
            Sobre a Digital JF
          </span>
          <h2
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy leading-tight mb-8 ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Sua parceira de crescimento em Juiz de Fora
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed mb-6 ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            A <strong className="text-navy">Digital JF</strong> nasceu com o propósito de ajudar negócios locais de
            Juiz de Fora e região a conquistarem mais clientes através do marketing digital.
            Nossa abordagem é prática, orientada a dados e focada em uma única métrica:
            o crescimento real do seu faturamento.
          </p>
          <p
            className={`text-lg text-muted-foreground leading-relaxed ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Combinamos tráfego pago, presença digital profissional e automações inteligentes
            para criar um ecossistema completo que atrai, converte e fideliza clientes.
            Não vendemos apenas serviços — entregamos resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
