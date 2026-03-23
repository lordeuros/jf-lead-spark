import partnerHomeAngels from "@/assets/partner-homeangels.png";
import partnerClinicaVida from "@/assets/partner-clinica-vida.png";
import partnerOdontoplus from "@/assets/partner-odontoplus.png";
import partnerImoveisPrime from "@/assets/partner-imoveis-prime.png";
import partnerStudioFit from "@/assets/partner-studio-fit.png";
import partnerAdvocaciaMendes from "@/assets/partner-advocacia-mendes.png";

const partners = [
  { name: "Home Angels", logo: partnerHomeAngels },
  { name: "Clínica Vida", logo: partnerClinicaVida },
  { name: "OdontoPlus", logo: partnerOdontoplus },
  { name: "Imóveis Prime", logo: partnerImoveisPrime },
  { name: "Studio Fit", logo: partnerStudioFit },
  { name: "Advocacia Mendes", logo: partnerAdvocaciaMendes },
];

interface PartnersCarouselProps {
  variant?: "default" | "medical";
}

const PartnersCarousel = ({ variant = "default" }: PartnersCarouselProps) => {
  const doubled = [...partners, ...partners];

  return (
    <section className={`py-12 md:py-16 overflow-hidden ${variant === "medical" ? "bg-muted" : "bg-card"}`}>
      <div className="container mx-auto mb-8">
        <p className={`text-center text-sm font-semibold uppercase tracking-[0.24em] ${variant === "medical" ? "text-gold" : "text-primary/50"}`}>
          Empresas que confiam em nós
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r ${variant === "medical" ? "from-muted to-transparent" : "from-card to-transparent"}`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l ${variant === "medical" ? "from-muted to-transparent" : "from-card to-transparent"}`} />

        <div className="flex animate-scroll-left gap-16 items-center">
          {doubled.map((partner, i) => (
            <img
              key={`${partner.name}-${i}`}
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="h-12 w-auto max-w-[140px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
