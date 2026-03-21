import { useState } from "react";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Preencha nome e telefone.");
      return;
    }
    const text = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. ${form.message}`;
    window.open(
      `https://wa.me/5532999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="section-padding-lg bg-muted" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={visible ? "animate-fade-up" : "opacity-0"}>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Contato</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-navy leading-tight mb-6">
              Vamos conversar sobre o seu negócio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
              Responderemos em até 2 horas comerciais.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                <span>Juiz de Fora - MG, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span>(32) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span>contato@digitaljf.com.br</span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-card rounded-2xl p-8 shadow-sm border border-border/50 space-y-5 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                placeholder="Seu nome"
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                placeholder="(32) 99999-9999"
                maxLength={20}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
                placeholder="Como podemos ajudar?"
                maxLength={500}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-navy py-3.5 text-primary-foreground font-semibold transition-all duration-200 hover:bg-navy-light active:scale-[0.98]"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
