import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const CTASection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="bg-navy section-padding-lg" ref={ref}>
      <div className="container mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6 ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Quer mais clientes para o{" "}
          <span className="text-gold">seu negócio?</span>
        </h2>
        <p
          className={`text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10 ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.15s" }}
        >
          Fale agora com um especialista e descubra como podemos transformar sua presença digital.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-lg font-bold text-primary transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-xl shadow-gold/25 ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <MessageCircle className="h-6 w-6" />
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
