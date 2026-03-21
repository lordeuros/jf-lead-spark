import {
  Activity,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardPlus,
  HeartPulse,
  MapPin,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Star,
  Users,
} from "lucide-react";
import logo from "@/assets/digital-jf-logo.png";

const WHATSAPP_URL =
  "https://wa.me/5532999999999?text=Olá! Quero uma estratégia de marketing para minha clínica médica.";

const services = [
  {
    icon: Search,
    title: "Google Ads para consultas",
    description:
      "Campanhas pensadas para atrair pacientes com intenção real de agendamento na sua especialidade.",
  },
  {
    icon: CalendarCheck,
    title: "Captação via WhatsApp",
    description:
      "Fluxos de contato mais rápidos para transformar visitas em marcações com menos atrito.",
  },
  {
    icon: ClipboardPlus,
    title: "Landing pages médicas",
    description:
      "Páginas claras, confiáveis e otimizadas para conversão, com foco em autoridade e agendamento.",
  },
  {
    icon: MapPin,
    title: "SEO local para clínicas",
    description:
      "Mais presença no Google para quem procura atendimento na sua região e na sua especialidade.",
  },
];

const differentiators = [
  "Estratégia voltada para clínicas e consultórios",
  "Comunicação profissional e humanizada",
  "Campanhas com foco em pacientes qualificados",
  "Acompanhamento próximo e ajustes frequentes",
];

const numbers = [
  { value: "+43%", label: "mais contatos qualificados" },
  { value: "4.9★", label: "experiência percebida pelos clientes" },
  { value: "24h", label: "tempo médio para otimização inicial" },
];

const testimonials = [
  {
    name: "Dra. Camila Andrade",
    role: "Clínica de Dermatologia",
    text: "A nova estratégia aumentou muito a procura por consultas particulares e organizou melhor nosso atendimento pelo WhatsApp.",
  },
  {
    name: "Dr. Renato Moura",
    role: "Clínica Ortopédica",
    text: "Finalmente começamos a receber contatos mais qualificados. A página transmite confiança e converte bem melhor.",
  },
];

const ClinicasMedicas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Digital JF"
              className="h-11 w-11 rounded-xl object-cover shadow-md"
            />
            <div>
              <span className="block text-lg font-display font-bold text-primary">
                Digital JF
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-gold">
                Clínicas Médicas
              </span>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="section-padding-lg overflow-hidden bg-background">
          <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <HeartPulse className="h-4 w-4" />
                Marketing especializado para clínicas
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-display font-bold leading-[1.06] text-primary sm:text-5xl lg:text-6xl">
                Mais pacientes certos para sua clínica com uma presença digital
                <span className="text-gold"> clara, confiável e estratégica</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Criamos campanhas, páginas e jornadas de contato pensadas para
                clínicas médicas que precisam gerar agendamentos com mais
                previsibilidade e credibilidade.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  Solicitar estratégia
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicos-medicos"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-primary transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  Ver soluções
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {numbers.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
                    <div className="text-3xl font-display font-bold text-gold">{item.value}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/10 via-transparent to-accent/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_24px_80px_-32px_hsla(var(--primary),0.18)]">
                <div className="rounded-[1.5rem] bg-primary p-8 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/60">
                        Estrutura ideal
                      </p>
                      <h2 className="mt-2 text-2xl font-display font-semibold">
                        Jornada de captação médica
                      </h2>
                    </div>
                    <ShieldCheck className="h-10 w-10 text-gold" />
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Anúncio com intenção de consulta",
                      "Página com especialidade e prova social",
                      "Contato rápido via WhatsApp ou formulário",
                      "Acompanhamento e otimização semanal",
                    ].map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-primary-foreground/85">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-muted p-5">
                    <Stethoscope className="h-6 w-6 text-gold" />
                    <p className="mt-3 text-sm font-semibold text-primary">Especialidades e subnichos</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Dermatologia, ortopedia, ginecologia, cardiologia e mais.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted p-5">
                    <Users className="h-6 w-6 text-gold" />
                    <p className="mt-3 text-sm font-semibold text-primary">Foco em confiança</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Comunicação pensada para transmitir segurança e autoridade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos-medicos" className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Soluções para clínicas
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl">
                Estruturamos sua captação com foco em agenda cheia e percepção premium
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-border/70 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                <Sparkles className="h-4 w-4" />
                Diferenciais
              </span>
              <div className="mt-6 space-y-4">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-muted p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <p className="text-sm leading-7 text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Pensado para saúde
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                Uma página que passa segurança antes mesmo do primeiro contato
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Para clínicas médicas, conversão não é só clique. É confiança,
                clareza, autoridade e facilidade para marcar. Por isso, a página
                precisa ser leve, elegante e objetiva — sem parecer genérica.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-5 text-sm leading-7 text-foreground/85">
                <Activity className="h-5 w-5 flex-shrink-0 text-gold" />
                Estrutura recomendada para clínicas com atendimento particular,
                convênios, especialidades e unidades locais.
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Prova social
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl">
                Credibilidade que ajuda a converter mais
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-sm"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-foreground/85">
                    “{item.text}”
                  </p>
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding-lg bg-background">
          <div className="container mx-auto">
            <div className="rounded-[2rem] border border-gold/20 bg-primary px-8 py-12 text-center text-primary-foreground shadow-[0_24px_80px_-32px_hsla(var(--primary),0.35)] sm:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-light">
                Próximo passo
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">
                Quer uma página e estratégia feitas para clínica médica?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/70">
                Fale com a Digital JF e receba uma direção inicial para aumentar
                seus agendamentos com mais consistência.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  <PhoneCall className="h-4 w-4" />
                  Falar com especialista
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold-light"
                >
                  Voltar para o site principal
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClinicasMedicas;
