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
import logo from "@/assets/avelon-marketing-logo-white.jpg.asset.json";
import mktStrategyMockup from "@/assets/mkt2-hero-mockup-cropped.png.asset.json";
import mktInstagramMockup from "@/assets/mkt2-instagram-mockup.png.asset.json";
import mktMethodAv3 from "@/assets/mkt2-av3-method.png.asset.json";
import googleClients from "@/assets/avelon-google-clients.png.asset.json";
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
];

const services = [
  {
    icon: Instagram,
    title: "Social Media — Instagram",
    description:
      "Cuidamos do seu Instagram do início ao fim: criação de conteúdo, design de posts e stories, copy persuasiva e interação com sua audiência para transformar seguidores em clientes.",
  },
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

const channels = [
  { name: "Instagram", label: "Criamos conteúdo e gestão profissional do seu perfil", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="igGradient" cx="0" cy="1" r="1.4">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="75%" stopColor="#F56040" />
          <stop offset="100%" stopColor="#C13584" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGradient)" />
      <path d="M12 6.5c3.1 0 5.5 2.4 5.5 5.5s-2.4 5.5-5.5 5.5-5.5-2.4-5.5-5.5 2.4-5.5 5.5-5.5zm0 9c1.9 0 3.5-1.6 3.5-3.5S13.9 8.5 12 8.5 8.5 10.1 8.5 12s1.6 3.5 3.5 3.5zm5.8-7.3c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2zM17.4 3H6.6C4.6 3 3 4.6 3 6.6v10.8C3 19.4 4.6 21 6.6 21h10.8c2 0 3.6-1.6 3.6-3.6V6.6C21 4.6 19.4 3 17.4 3zm.6 14.4c0 .5-.4.9-.9.9H6.9c-.5 0-.9-.4-.9-.9V6.6c0-.5.4-.9.9-.9h10.8c.5 0 .9.4.9.9v10.8z" fill="white" />
    </svg>
  ) },
  { name: "Google", label: "Campanhas e posicionamento para quem busca no Google", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  ) },
  { name: "WhatsApp", label: "Automação e atendimento que converte leads em agendamentos", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1C5.92 1 1 5.92 1 12c0 2.12.55 4.1 1.52 5.83L1 23l5.34-1.4A10.96 10.96 0 0012 23c6.08 0 11-4.92 11-11S18.08 1 12 1zm0 20c-1.85 0-3.56-.56-4.98-1.52l-.36-.23-3.18.83.85-3.1-.22-.36A9.02 9.02 0 013 12a9 9 0 119 9z" fill="#25D366" />
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.29-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.16.2 2.1 3.2 5.08 4.48.7.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.08-.12-.28-.2-.58-.35z" fill="#25D366" />
    </svg>
  ) },
];

const testimonials = [
  {
    name: "Lucas",
    role: "Mentoria para Concursos",
    text: "A Avelon estruturou toda nossa presença digital do zero. Em 3 meses, nosso site se tornou o principal canal de captação de novos clientes.",
  },
  {
    name: "Fernanda",
    role: "Fábrica de Sorvetes",
    text: "Profissionalismo e estratégia de verdade. Os resultados em SEO e tráfego pago superaram o que agências anteriores entregaram em um ano.",
  },
  {
    name: "Roberto Alves",
    role: "Médico Especialista em Emagrecimento",
    text: "A equipe entende de negócio, não só de marketing. Isso faz toda a diferença na qualidade da estratégia e nos resultados.",
  },
];

const MarketingDigital2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a] backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-6 py-4">
          <a href="/marketing-digital2" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Avelon Marketing"
              className="h-14 w-14 rounded-lg object-cover shadow-md"
            />
            <div>
              <span className="block text-lg font-display font-bold text-white">
                Avelon Marketing
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-[#F5811F]">
                Marketing Digital
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-[#F5811F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F5811F] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-background">
          <div className="container mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5811F]/20 bg-[#F5811F]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5811F]">
                <Rocket className="h-4 w-4" />
                Marketing digital estratégico
              </span>

              <h1 className="mt-6 max-w-3xl text-3xl font-display font-bold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] sm:text-4xl lg:text-5xl xl:text-[3.6rem]">
                Marketing digital para <span className="text-[#F5811F]">atrair clientes</span> e gerar crescimento
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5811F] px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-[#F5811F]/20"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicos-mkt"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-[#0a0a0a] transition-colors duration-200 hover:border-[#F5811F] hover:text-[#F5811F]"
                >
                  Ver nossos serviços
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {channels.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5811F]/10 text-[#F5811F]">
                        {item.icon}
                      </div>
                      <span className="text-lg font-display font-bold text-[#0a0a0a]">{item.name}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-12 h-40 w-40 rounded-full bg-[#F5811F]/10 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-border/70 bg-[#0a0a0a] overflow-hidden shadow-[0_24px_80px_-32px_rgba(0,0,0,0.18)]">
                <img
                  src={mktStrategyMockup.url}
                  alt="Mockup de celular e notebook exibindo redes sociais e dashboards de marketing"
                  className="w-full rounded-t-[2rem] object-cover"
                  width={1024}
                  height={768}
                />
                <div className="flex flex-col items-center text-center gap-3 px-6 pt-4 pb-6 md:px-8 md:pt-5 md:pb-7">
                  <h2 className="text-xl font-display font-bold text-white sm:text-2xl">
                    Estratégia que gera resultado
                  </h2>
                  <p className="text-white/60 text-sm leading-6 max-w-sm">
                    Não fazemos marketing genérico. Cada projeto é construído com
                    base no seu mercado, seus objetivos e no comportamento do seu
                    cliente.
                  </p>
                  <div className="flex items-center gap-2 text-[#F5811F] text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    Método AV3 — Atrair. Validar. Vender.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media — Featured Service */}
        <section className="py-10 md:py-14 bg-[#0a0a0a] border-y border-[#F5811F]/20">
          <div className="container mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F5811F]/30 bg-[#F5811F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5811F] mb-6">
                <Instagram className="h-4 w-4" />
                Serviço em destaque
              </div>
              <h2 className="text-2xl font-display font-bold text-white sm:text-3xl lg:text-4xl">
                Social Media — Cuidamos do seu <span className="text-[#F5811F]">Instagram</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base leading-7 text-white/70">
                Gestão completa do seu perfil: criação de conteúdo, design de posts,
                stories estratégicos, legenda com copy persuasiva e interação diária
                com sua audiência.
              </p>
              <div className="mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5811F] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero crescer no Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={mktInstagramMockup.url}
                alt="Mockups de celular exibindo perfis de Instagram da Avelon Marketing"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>


        {/* Services */}
        <section id="servicos-mkt" className="py-14 md:py-20 bg-[#0a0a0a] text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5811F]">
                Nossos serviços
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl">
                Tudo que sua empresa precisa para crescer no digital
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Da criação à performance — uma operação digital completa para
                atrair, converter e reter clientes com consistência.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5811F]/10 text-[#F5811F]">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Method - AV3 System */}
        <section id="metodo-mkt" className="py-14 md:py-20 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5811F]">
                Nosso método
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-[#0a0a0a] sm:text-4xl">
                AV3 System — Atrair. Validar. Vender.
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
                Um processo estruturado que transforma presença digital em
                operação de captação previsível. Cada etapa é construída para
                gerar aprendizado, ajuste e evolução contínua.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="rounded-[1.5rem] overflow-hidden border border-[#F5811F]/20 max-w-md mx-auto lg:mx-0">
                <img
                  src={mktMethodAv3.url}
                  alt="Diagrama do método AV3 — Atrair, Validar, Vender"
                  className="w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>

              <div className="space-y-4">
                {methodSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5811F] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a0a0a]">{item.step}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#F5811F]/20 bg-[#F5811F]/5 p-5 text-center">
              <div className="flex items-center justify-center gap-3 text-[#F5811F] font-semibold text-sm">
                <CheckCircle2 className="h-5 w-5" />
                Método validado e aplicado com sucesso em diversos clientes de diferentes nichos
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section id="diferenciais-mkt" className="py-14 md:py-20 bg-[#0a0a0a] text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5811F]">
                Nossos diferenciais
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold text-white sm:text-4xl">
                Por que empresas escolhem a Avelon Marketing
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {differentials.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5811F]/10 text-[#F5811F]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/80">
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
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5811F]">
                Resultados reais
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-[#0a0a0a] sm:text-4xl">
                Empresas que cresceram com a Avelon
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-sm"
                >
                  <div className="flex gap-1 text-[#F5811F]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-foreground/85">
                    "{item.text}"
                  </p>
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="font-semibold text-[#0a0a0a]">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-10 md:py-14 bg-[#0a0a0a] text-white overflow-hidden">
          <div className="container mx-auto mb-8">
            <h2 className="text-center text-2xl font-display font-bold text-white sm:text-3xl">
              Empresas que confiam na Avelon
            </h2>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
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
            <div className="rounded-[2rem] border border-[#F5811F]/20 bg-[#0a0a0a] px-8 py-14 text-center text-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)] sm:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F9C74F]">
                Próximo passo
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">
                Pronto para transformar sua presença digital em resultado?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
                Fale com a Avelon Marketing e receba um diagnóstico estratégico
                gratuito para entender como atrair mais clientes com
                consistência e profissionalismo.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5811F] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-[#F5811F]/20"
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
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-[#F5811F] hover:text-[#F9C74F]"
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
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex flex-col gap-4">
              <a href="/marketing-digital2" className="flex items-center gap-3 text-white">
                <img
                  src={logo.url}
                  alt="Logo Avelon Marketing"
                  className="h-12 w-12 rounded-lg object-cover shadow-lg"
                  loading="lazy"
                />
                <div>
                  <span className="block text-lg font-display font-bold">Avelon Marketing</span>
                  <span className="block text-xs uppercase tracking-[0.24em] text-[#F5811F]">Marketing Digital</span>
                </div>
              </a>
              <p className="text-white/40 text-sm max-w-xs">
                Estratégias digitais para empresas que querem crescer com método e resultado.
              </p>
            </div>
<div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#F5811F]">Redes sociais</span>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/avelonmarketing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#F5811F] hover:text-white transition-all duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/avelonmed/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#F5811F] hover:text-white transition-all duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/avelonmed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#F5811F] hover:text-white transition-all duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#F5811F] transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Avelon Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingDigital2;
