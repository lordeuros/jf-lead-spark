import { Star } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Clínica Sorrir+",
    text: "A Digital JF transformou nossa clínica. Em três meses, triplicamos os agendamentos online. Atendimento impecável e estratégias que realmente funcionam.",
    rating: 5,
  },
  {
    name: "Carolina Mendes",
    role: "Restaurante Sabor da Serra",
    text: "Profissionais sérios e comprometidos. Nossas redes sociais e Google Meu Negócio nunca estiveram tão bons. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Rafael Souza",
    role: "Academia Power Fit",
    text: "O site ficou incrível e a automação de WhatsApp economiza horas do nosso time. Investimento que se pagou no primeiro mês.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding-lg bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-2xl p-8 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg ${
                visible ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: visible ? `${i * 0.1}s` : undefined }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-display font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-navy">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
