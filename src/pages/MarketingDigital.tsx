import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Facebook,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  MessageCircle,
  Monitor,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import logo from "@/assets/avelon-med-logo.png";
import mktStrategyMockup from "@/assets/mkt-strategy-mockup.jpg";
import mktMethodAv3 from "@/assets/mkt-method-av3.jpg";
import partnerHomeAngels from "@/assets/partner-homeangels.png";
import partnerClinicaVida from "@/assets/partner-clinica-vida.png";
import partnerOdontoplus from "@/assets/partner-odontoplus.png";
import partnerImoveisPrime from "@/assets/partner-imoveis-prime.png";
import partnerStudioFit from "@/assets/partner-studio-fit.png";
import partnerAdvocaciaMendes from "@/assets/partner-advocacia-mendes.png";

const WHATSAPP_URL =
  "https://wa.me/5532987157197?text=Olá! Quero uma estratégia de marketing digital para minha empresa.";

const navItems = [
  { label: "Serviços", href: "#servicos-mkt" },
  { label: "Método", href: "#metodo-mkt" },
  { label: "Diferenciais", href: "#diferenciais-mkt" },
  { label: "Contato", href: "#contato-mkt" },
  { label: "Clínicas Médicas", href: "/" },
];

const services = [
  {
    icon: Monitor,
    title: "Criação de sites",
    description:
      "Sites profissionais com design estratégico, responsivos, rápidos e otimizados para converter visitantes em clientes reais.",
  },
  {
    icon: Target,
    title: "Gestão de tráfego pago",
    description:
      "Campanhas em Google Ads e Meta Ads com segmentação precisa, controle de orçamento e foco em retorno sobre investimento.",
  },
  {
    icon: Search,
    title: "SEO — Otimização para buscadores",
    description:
      "Posicionamento orgânico no Google para que sua empresa seja encontrada por quem realmente precisa do que você oferece.",
  },
  {
    icon: Globe,
    title: "Posicionamento digital",
    description:
      "Estratégia de marca, presença online consistente e comunicação que transmite autoridade no seu mercado.",
  },
  {
    icon: BarChart3,
    title: "Análise de dados e performance",
    description:
      "Relatórios claros, métricas que importam e decisões baseadas em dados para escalar com segurança.",
  },
  {
    icon: Layers,
    title: "Landing pages de alta conversão",
    description:
      "Páginas focadas em uma única ação, com copy estratégica e estrutura pensada para gerar resultados mensuráveis.",
  },
];

const methodSteps = [
  {
    step: "Diagnóstico estratégico",
    desc: "Analisamos seu mercado, concorrência, presença digital atual e identificamos as oportunidades mais relevantes.",
  },
  {
    step: "Planejamento sob medida",
    desc: "Definimos canais, mensagens, metas e cronograma com base no perfil do seu negócio e nos seus objetivos.",
  },
  {
    step: "Execução e lançamento",
    desc: "Colocamos a operação no ar — site, campanhas, SEO e fluxos de conversão — com agilidade e padrão profissional.",
  },
  {
    step: "Otimização contínua",
    desc: "Monitoramos resultados, ajustamos campanhas e evoluímos a estratégia para sustentar o crescimento mês a mês.",
  },
];

const differentials = [
  {
    icon: ShieldCheck,
    title: "Estratégia antes de tudo",
    text: "Não começamos por anúncios. Começamos entendendo seu negócio, seu público e o que faz sentido para gerar resultado real.",
  },
  {
    icon: TrendingUp,
    title: "Foco em performance",
    text: "Cada ação é pensada para gerar retorno mensurável. Não vendemos curtidas — entregamos clientes e oportunidades.",
  },
  {
    icon: Zap,
    title: "Execução ágil e profissional",
    text: "Do diagnóstico ao lançamento em tempo recorde, sem comprometer qualidade nem deixar detalhes para trás.",
  },
  {
    icon: BadgeCheck,
    title: "Parceria de longo prazo",
    text: "Acompanhamento contínuo, transparência nos resultados e evolução constante — não somos fornecedores, somos parceiros.",
  },
];

const numbers = [
  { value: "+120", label: "projetos digitais entregues com resultado" },
  { value: "5.0★", label: "avaliação média de satisfação dos clientes" },
  { value: "48h", label: "para diagnóstico estratégico inicial" },
];

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "CEO — Distribuidora Nacional",
    text: "A Avelon estruturou toda nossa presença digital do zero. Em 3 meses, nosso site se tornou o principal canal de captação de novos clientes.",
  },
  {
    name: "Fernanda Lima",
    role: "Diretora — Escritório de Advocacia",
    text: "Profissionalismo e estratégia de verdade. Os resultados em SEO e tráfego pago superaram o que agências anteriores entregaram em um ano.",
  },
  {
    name: "Roberto Alves",
    role: "Fundador — Rede de Franquias",
    text: "A equipe entende de negócio, não só de marketing. Isso faz toda a diferença na qualidade da estratégia e nos resultados.",
  },
];

const MarketingDigital = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-6 py-4">
          <a href="/marketing-digital" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Avelon Marketing"
              className="h-14 w-14 rounded-full object-cover shadow-md"
            />
            <div>
              <span className="block text-lg font-display font-bold text-primary-foreground">
                Avelon Marketing
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-gold">
                Marketing Digital
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
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-background">
          <div className="container mx-auto grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <Rocket className="h-4 w-4" />
                Marketing digital estratégico
              </span>

              <h1 className="mt-6 max-w-3xl text-3xl font-display font-bold leading-[1.08] tracking-[-0.02em] text-primary sm:text-4xl lg:text-5xl xl:text-[3.6rem]">
                Sua empresa precisa de <span className="text-gold">clientes</span>, não apenas de presença online
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                A Avelon Marketing cria estratégias digitais completas para
                empresas que querem atrair mais clientes todos os dias — com
                método, dados e execução profissional.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicos-mkt"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-primary transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  Ver nossos serviços
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

              <div className="relative rounded-[2rem] border border-border/70 bg-primary overflow-hidden shadow-[0_24px_80px_-32px_hsla(var(--primary),0.18)]">
                <img
                  src={mktStrategyMockup}
                  alt="Mockup de celular e notebook exibindo redes sociais e dashboards de marketing"
                  className="w-full rounded-t-[2rem] object-cover"
                  width={1024}
                  height={768}
                />
                <div className="flex flex-col items-center text-center gap-4 p-8 md:p-10">
                  <h2 className="text-2xl font-display font-bold text-primary-foreground sm:text-3xl">
                    Estratégia que gera resultado
                  </h2>
                  <p className="text-primary-foreground/60 text-base leading-7 max-w-sm">
                    Não fazemos marketing genérico. Cada projeto é construído com
                    base no seu mercado, seus objetivos e no comportamento do seu
                    cliente.
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    Método AV3 — Atrair. Validar. Vender.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos-mkt" className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Nossos serviços
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                Tudo que sua empresa precisa para crescer no digital
              </h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/70">
                Da criação à performance — uma operação digital completa para
                atrair, converter e reter clientes com consistência.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/10 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-primary-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/70">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Method - AV3 System */}
        <section id="metodo-mkt" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Nosso método
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                AV3 System — Atrair. Validar. Vender.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Um processo estruturado que transforma presença digital em
                operação de captação previsível. Cada etapa é construída para
                gerar aprendizado, ajuste e evolução contínua.
              </p>

              <div className="mt-8 rounded-[1.5rem] overflow-hidden border border-gold/20">
                <img
                  src={mktMethodAv3}
                  alt="Diagrama do método AV3 — Atrair, Validar, Vender"
                  className="w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-gold/20 bg-gold/5 p-6">
                <div className="flex items-center gap-3 text-gold font-semibold text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  Aplicado com sucesso em mais de 120 projetos
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {methodSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{item.step}</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section id="diferenciais-mkt" className="py-14 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Nossos diferenciais
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold text-primary-foreground sm:text-4xl">
                Por que empresas escolhem a Avelon Marketing
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {differentials.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/10 p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/80">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Resultados reais
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl">
                Empresas que cresceram com a Avelon
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
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
                    "{item.text}"
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

        {/* Partners */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto mb-8">
            <h2 className="text-center text-2xl font-display font-bold text-primary-foreground sm:text-3xl">
              Empresas que confiam na Avelon
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
                  { name: "Advocacia Mendes", logo: partnerAdvocaciaMendes },
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

        {/* Final CTA */}
        <section id="contato-mkt" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="rounded-[2rem] border border-gold/20 bg-primary px-8 py-14 text-center text-primary-foreground shadow-[0_24px_80px_-32px_hsla(var(--primary),0.35)] sm:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-light">
                Próximo passo
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">
                Pronto para transformar sua presença digital em resultado?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/70">
                Fale com a Avelon Marketing e receba um diagnóstico estratégico
                gratuito para entender como atrair mais clientes com
                consistência e profissionalismo.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-gold/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  Falar com especialista
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold-light"
                >
                  Voltar ao topo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
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
              <a href="/marketing-digital" className="flex items-center gap-3 text-primary-foreground">
                <img
                  src={logo}
                  alt="Logo Avelon Marketing"
                  className="h-12 w-12 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
                <div>
                  <span className="block text-lg font-display font-bold">Avelon Marketing</span>
                  <span className="block text-xs uppercase tracking-[0.24em] text-gold">Marketing Digital</span>
                </div>
              </a>
              <p className="text-primary-foreground/40 text-sm max-w-xs">
                Estratégias digitais para empresas que querem crescer com método e resultado.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Links</span>
              <a href="/" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200">
                Clínicas Médicas
              </a>
              <a href="/odonto" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200">
                Odontologia
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Redes sociais</span>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/avelonmed/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/avelonmed/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/avelonmed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary-foreground transition-all duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Avelon Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingDigital;
