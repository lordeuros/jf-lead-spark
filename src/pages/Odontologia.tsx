import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardPlus,
  Facebook,
  HeartPulse,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  TimerReset,
  TrendingUp,
  Users,
  XCircle,
  Zap,
  Target,
  Award,
  BarChart3,
} from "lucide-react";
import logo from "@/assets/avelon-med-logo.png";
import dentistHero from "@/assets/dentist-hero.png";
import partnerHomeAngels from "@/assets/partner-homeangels.png";
import partnerClinicaVida from "@/assets/partner-clinica-vida.png";
import partnerOdontoplus from "@/assets/partner-odontoplus.png";
import partnerImoveisPrime from "@/assets/partner-imoveis-prime.png";
import partnerStudioFit from "@/assets/partner-studio-fit.png";
import partnerAdvocaciaMendes from "@/assets/partner-advocacia-mendes.png";

const WHATSAPP_URL =
  "https://wa.me/5532999999999?text=Olá! Quero atrair mais pacientes para minha clínica odontológica.";

const navItems = [
  { label: "Soluções", href: "#solucoes-odonto" },
  { label: "Especialidades", href: "#especialidades-odonto" },
  { label: "Resultados", href: "#resultados-odonto" },
  { label: "Método", href: "#metodo-odonto" },
  { label: "Contato", href: "#contato-odonto" },
];

const services = [
  {
    icon: Search,
    title: "Atraia pacientes prontos para agendar no Google",
    description:
      "Campanhas inteligentes que colocam sua clínica no topo quando pacientes buscam por implantes, ortodontia, estética dental e mais. Só paga por quem realmente tem intenção.",
  },
  {
    icon: ClipboardPlus,
    title: "Página que transforma visitante em paciente",
    description:
      "Landing pages profissionais com estrutura de confiança e autoridade que convertem até 3x mais que sites comuns de dentistas.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento direto pelo WhatsApp sem perder leads",
    description:
      "Fluxos automatizados que transformam cliques em agendamentos reais. Menos tempo perdido, mais cadeira ocupada.",
  },
  {
    icon: MapPin,
    title: "Domine as buscas na sua região",
    description:
      "SEO local e Google Meu Negócio otimizados para sua clínica aparecer primeiro quando alguém busca dentista perto de você.",
  },
  {
    icon: Activity,
    title: "Construa autoridade e seja referência",
    description:
      "Posicionamento digital que transmite credibilidade, profissionalismo e faz pacientes escolherem você em vez da concorrência.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento previsível mês após mês",
    description:
      "Otimização contínua baseada em dados reais. Você sabe exatamente quantos pacientes novos esperar a cada semana.",
  },
];

const painPoints = [
  {
    icon: XCircle,
    title: "Depende só de indicação",
    description: "Sem indicação, a agenda fica vazia. Você não tem controle sobre o fluxo de pacientes novos.",
  },
  {
    icon: AlertTriangle,
    title: "Instagram sem retorno financeiro",
    description: "Posta conteúdo, ganha curtidas, mas nenhum paciente novo agenda por lá.",
  },
  {
    icon: TimerReset,
    title: "Agenda instável e imprevisível",
    description: "Meses bons seguidos de meses fracos. Não dá para planejar crescimento assim.",
  },
  {
    icon: Target,
    title: "Investe em tráfego mas não converte",
    description: "Já tentou anúncios e não funcionou? O problema não é o tráfego — é a estratégia.",
  },
];

const specialties = [
  { name: "Implantodontia", benefit: "Pacientes de alto ticket prontos para investir" },
  { name: "Ortodontia", benefit: "Captação contínua para tratamentos longos" },
  { name: "Endodontia", benefit: "Urgências e tratamentos com alta demanda" },
  { name: "Periodontia", benefit: "Pacientes buscando tratamento especializado" },
  { name: "Prótese Dentária", benefit: "Alto valor percebido e ticket elevado" },
  { name: "Estética Dental", benefit: "Lentes, clareamento e alta conversão" },
  { name: "Odontopediatria", benefit: "Mães buscando referência de confiança" },
  { name: "Harmonização Orofacial", benefit: "Mercado em crescimento explosivo" },
];

const numbers = [
  { value: "+43%", label: "mais pacientes em 60 dias com nossas estratégias" },
  { value: "R$27", label: "custo médio por lead qualificado em odontologia" },
  { value: "3x", label: "mais agendamentos comparado a métodos tradicionais" },
];

const caseStudy = {
  title: "Clínica OdontoVita — De agenda vazia a lista de espera",
  before: [
    "3 a 5 pacientes novos por mês via indicação",
    "Instagram com 200 seguidores e zero conversão",
    "Sem presença no Google",
    "Faturamento mensal de R$18.000",
  ],
  after: [
    "22 pacientes novos por mês via digital",
    "Landing page convertendo a 12% dos visitantes",
    "Top 3 no Google para 'implante dentário + cidade'",
    "Faturamento mensal de R$47.000",
  ],
  timeframe: "Resultados alcançados em 90 dias",
};

const testimonials = [
  {
    name: "Dr. Felipe Souza",
    role: "Clínica de Implantodontia",
    text: "Em 2 meses triplicamos os agendamentos de implantes. Hoje tenho fila de espera para avaliações. A Avelon Odonto mudou completamente meu consultório.",
  },
  {
    name: "Dra. Marina Costa",
    role: "Ortodontia e Estética Dental",
    text: "Saí de 4 pacientes novos por mês para 18. O melhor é que são pacientes qualificados, que já chegam querendo o tratamento.",
  },
  {
    name: "Dr. Ricardo Mendes",
    role: "Clínica Odontológica Multidisciplinar",
    text: "Investia R$2.000/mês em Instagram e não via retorno. Com a Avelon, invisto o mesmo e trago 25+ pacientes por mês pelo Google.",
  },
];

const objections = [
  {
    icon: ShieldCheck,
    title: "Funciona para clínicas pequenas?",
    text: "Sim. Nossa estratégia é escalável. Começamos com orçamentos a partir de R$1.500/mês e já geramos resultados significativos.",
  },
  {
    icon: Zap,
    title: "Quanto tempo para ver resultado?",
    text: "Os primeiros agendamentos surgem nos primeiros 15 a 30 dias. Resultados consistentes acontecem a partir de 60 dias.",
  },
  {
    icon: BarChart3,
    title: "E se eu já tentei e não funcionou?",
    text: "90% das clínicas que nos procuram já tentaram antes. O problema geralmente é estratégia, não investimento. Corrigimos isso.",
  },
  {
    icon: BadgeCheck,
    title: "Preciso produzir conteúdo?",
    text: "Não. Nossa estratégia foca em tráfego pago e conversão. Você foca no atendimento, nós cuidamos da captação.",
  },
];

const processSteps = [
  { step: "Diagnóstico gratuito", desc: "Analisamos sua presença digital, concorrência e oportunidades na sua região" },
  { step: "Estratégia personalizada", desc: "Definimos campanhas, palavras-chave e jornada de conversão ideal para sua especialidade" },
  { step: "Lançamento em 7 dias", desc: "Criamos landing page, campanhas e fluxo de WhatsApp em tempo recorde" },
  { step: "Primeiros pacientes", desc: "Em 15 a 30 dias você começa a receber agendamentos de pacientes qualificados" },
  { step: "Escala previsível", desc: "Otimização contínua para crescer com previsibilidade e controle mês após mês" },
];

const CtaBanner = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const isDark = variant === "dark";
  return (
    <div className={`py-10 ${isDark ? "" : ""}`}>
      <div className="container mx-auto">
        <div className={`rounded-[2rem] px-8 py-10 text-center ${isDark ? "bg-card border border-border/70" : "bg-primary text-primary-foreground"}`}>
          <h3 className={`text-2xl font-display font-bold sm:text-3xl ${isDark ? "text-primary" : ""}`}>
            Sua clínica pode ter mais pacientes a partir de agora
          </h3>
          <p className={`mt-3 text-base mx-auto max-w-2xl ${isDark ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            Receba um diagnóstico gratuito e descubra como atrair pacientes qualificados todos os dias.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
            >
              <MessageCircle className="h-4 w-4" />
              Quero mais pacientes na minha clínica
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full border px-7 py-4 text-base font-semibold transition-colors duration-200 ${isDark ? "border-border hover:border-gold hover:text-gold text-primary" : "border-primary-foreground/15 hover:border-gold hover:text-gold text-primary-foreground"}`}
            >
              Receber diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Odontologia = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-6 py-4">
          <a href="/odontologia" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Avelon Odonto"
              className="h-14 w-14 rounded-full object-cover shadow-md"
            />
            <div>
              <span className="block text-lg font-display font-bold text-primary-foreground">
                Avelon Odonto
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-gold">
                Marketing Odontológico
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary-foreground/70 transition-colors duration-200 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            Quero mais pacientes
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-background">
          <div className="container mx-auto grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <Smile className="h-4 w-4" />
                Marketing digital para dentistas
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-display font-bold leading-[1.04] text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
                Atraia mais <span className="text-gold">pacientes</span> todos
                os dias e pare de depender apenas de indicações
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Clínicas odontológicas que usam nossa estratégia recebem em média
                <strong className="text-foreground"> +43% mais pacientes em 60 dias</strong>.
                Tenha previsibilidade, agenda cheia e crescimento real — sem depender de sorte.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
                >
                  Quero mais pacientes na minha clínica
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-primary transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  Receber diagnóstico gratuito
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {numbers.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm"
                  >
                    <div className="text-3xl font-display font-bold text-gold">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-border/70 bg-card overflow-hidden shadow-[0_24px_80px_-32px_hsla(var(--primary),0.18)]">
                <img
                  src={dentistHero}
                  alt="Dentista profissional sorrindo"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points - Seção de Dor */}
        <section className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Você se identifica?
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">
                Por que sua clínica não está atraindo pacientes?
              </h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/70">
                Se algum desses problemas faz parte da sua rotina, você está perdendo pacientes — e dinheiro — todos os dias.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {painPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-destructive/20 bg-destructive/5 p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-display font-semibold text-gold">
                A boa notícia? Existe um método comprovado para resolver tudo isso.
              </p>
              <a
                href="#solucoes-odonto"
                className="mt-4 inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
              >
                Veja como funciona <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Services - Rewritten as benefits */}
        <section id="solucoes-odonto" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Como vamos lotar sua agenda
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                Tudo que sua clínica precisa para atrair pacientes de forma previsível
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

        {/* CTA Banner */}
        <CtaBanner variant="dark" />

        {/* Specialties with micro-descriptions */}
        <section
          id="especialidades-odonto"
          className="py-14 md:py-20 bg-primary text-primary-foreground"
        >
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/10 p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                <Stethoscope className="h-4 w-4" />
                Especialidades odontológicas
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl">
                Estratégia sob medida para cada especialidade
              </h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/70">
                Cada área exige uma abordagem diferente. Criamos campanhas específicas
                para o perfil de paciente que você quer atrair.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {specialties.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-primary-foreground text-sm leading-tight">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-primary-foreground/50 pl-[52px]">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study - Before/After */}
        <section id="resultados-odonto" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Estudo de caso real
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                {caseStudy.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground">{caseStudy.timeframe}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="rounded-[1.75rem] border border-destructive/20 bg-destructive/5 p-8">
                <h3 className="text-lg font-display font-bold text-destructive mb-4">❌ Antes da Avelon</h3>
                <ul className="space-y-3">
                  {caseStudy.before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="h-5 w-5 shrink-0 text-destructive/60 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-gold/20 bg-gold/5 p-8">
                <h3 className="text-lg font-display font-bold text-gold mb-4">✅ Depois da Avelon</h3>
                <ul className="space-y-3">
                  {caseStudy.after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
              >
                Quero resultados assim na minha clínica
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Resultados reais
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl">
                Clínicas que transformaram seus resultados com a Avelon Odonto
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/10 p-8 shadow-sm"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-primary-foreground/85">
                    "{item.text}"
                  </p>
                  <div className="mt-6 border-t border-primary-foreground/10 pt-5">
                    <p className="font-semibold text-primary-foreground">{item.name}</p>
                    <p className="text-sm text-primary-foreground/60">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner variant="light" />

        {/* Objection Breaking */}
        <section id="metodo-odonto" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Tire suas dúvidas
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                Por que isso funciona para clínicas odontológicas?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Entendemos suas preocupações. Veja por que nosso método é diferente de tudo que você já tentou.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {objections.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Processo simples
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                Do diagnóstico aos primeiros pacientes em 30 dias
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">
                Sem complicação. Você cuida dos pacientes, nós cuidamos de trazer eles até você.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/10 p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{item.step}</p>
                    <p className="mt-1 text-sm leading-7 text-primary-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authority - Quem está por trás */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto rounded-[2rem] border border-border/70 bg-card p-8 md:p-12 shadow-sm">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gold/10">
                  <Award className="h-12 w-12 text-gold" />
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                    Quem está por trás
                  </span>
                  <h2 className="mt-3 text-2xl font-display font-bold text-primary sm:text-3xl">
                    Especialistas em marketing para a área da saúde
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    A Avelon Odonto nasceu da experiência real com clínicas e consultórios
                    odontológicos. Não somos uma agência genérica — entendemos as
                    particularidades do marketing na saúde, as regras do CFO, e sabemos
                    exatamente o que funciona para atrair pacientes qualificados. Já
                    ajudamos dezenas de clínicas a saírem da dependência de indicação
                    para um modelo previsível de captação digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Carousel */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto mb-8">
            <h2 className="text-center text-2xl font-display font-bold text-primary-foreground sm:text-3xl">
              Clínicas e empresas que confiam na Avelon
            </h2>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-primary to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-primary to-transparent" />
            <div
              className="flex animate-scroll-left items-center"
              style={{ width: "max-content" }}
            >
              {[...Array(4)].flatMap((_, setIndex) =>
                [
                  { name: "Home Angels", logo: partnerHomeAngels },
                  { name: "Clínica Vida", logo: partnerClinicaVida },
                  { name: "OdontoPlus", logo: partnerOdontoplus },
                  { name: "Imóveis Prime", logo: partnerImoveisPrime },
                  { name: "Studio Fit", logo: partnerStudioFit },
                  {
                    name: "Advocacia Mendes",
                    logo: partnerAdvocaciaMendes,
                  },
                ].map((partner, i) => (
                  <img
                    key={`${setIndex}-${i}`}
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="h-28 w-auto max-w-[240px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 mx-12"
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Final CTA - Strong urgency */}
        <section id="contato-odonto" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="rounded-[2rem] border border-gold/20 bg-primary px-8 py-14 text-center text-primary-foreground shadow-[0_24px_80px_-32px_hsla(var(--primary),0.35)] sm:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-light">
                Não espere mais
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">
                Clínicas que não investem em captação digital ficam invisíveis
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/70">
                Enquanto você espera, seus concorrentes estão investindo em marketing digital
                e atraindo os pacientes que poderiam ser seus. Não deixe sua clínica
                para trás — comece hoje com um diagnóstico gratuito.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  Quero atrair mais pacientes agora
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold-light"
                >
                  Voltar ao topo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Fale no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex flex-col gap-4">
              <a
                href="/odontologia"
                className="flex items-center gap-3 text-primary-foreground"
              >
                <img
                  src={logo}
                  alt="Logo Avelon Odonto"
                  className="h-12 w-12 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
                <div>
                  <span className="block text-lg font-display font-bold">
                    Avelon Odonto
                  </span>
                  <span className="block text-xs uppercase tracking-[0.24em] text-gold">
                    Marketing Odontológico
                  </span>
                </div>
              </a>
              <p className="text-primary-foreground/40 text-sm max-w-xs">
                Estratégias digitais para clínicas e consultórios odontológicos que querem crescer com previsibilidade.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                Links
              </span>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                Redes sociais
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Avelon Odonto. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Odontologia;
