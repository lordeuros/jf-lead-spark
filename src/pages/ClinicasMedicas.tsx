import {
  Activity,
  ArrowRight,
  BadgeCheck,
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
  Star,
  Stethoscope,
  TimerReset,
  TrendingUp,
  Users } from
"lucide-react";
import logo from "@/assets/avelon-med-logo.png";
import doctorHero from "@/assets/doctor-hero.jpg";
import PartnersCarousel from "@/components/PartnersCarousel";

const WHATSAPP_URL =
"https://wa.me/5532999999999?text=Olá! Quero uma estratégia de marketing digital para minha clínica ou empresa da área da saúde.";

const navItems = [
{ label: "Soluções", href: "#solucoes" },
{ label: "Especialidades", href: "#especialidades" },
{ label: "Processo", href: "#processo" },
{ label: "Resultados", href: "#resultados" },
{ label: "Contato", href: "#contato-clinicas" }];


const services = [
{
  icon: Search,
  title: "Google Ads para consultas e procedimentos",
  description:
  "Campanhas segmentadas para captar pacientes com intenção real de atendimento na sua especialidade."
},
{
  icon: ClipboardPlus,
  title: "Sites e landing pages para saúde",
  description:
  "Páginas profissionais com estrutura de confiança, autoridade médica e foco em conversão."
},
{
  icon: CalendarCheck,
  title: "Captação e pré-triagem via WhatsApp",
  description:
  "Jornadas mais rápidas para transformar interesse em agendamento com menos perda de leads."
},
{
  icon: MapPin,
  title: "SEO local e Google Meu Negócio",
  description:
  "Presença forte nas buscas da sua região para consultas, exames, clínicas e especialidades."
},
{
  icon: Activity,
  title: "Posicionamento e autoridade digital",
  description:
  "Comunicação profissional para reforçar credibilidade, percepção premium e diferenciação."
},
{
  icon: TrendingUp,
  title: "Otimização contínua de campanhas",
  description:
  "Análise, ajustes e evolução da operação para gerar mais pacientes qualificados com previsibilidade."
}];


const audiences = [
"Clínicas médicas multiespecialidades",
"Consultórios particulares",
"Centros de diagnóstico e exames",
"Clínicas odontológicas e estéticas",
"Empresas da área da saúde",
"Profissionais liberais da saúde"];


const specialties = [
"Dermatologia",
"Ortopedia",
"Cardiologia",
"Ginecologia",
"Pediatria",
"Endocrinologia",
"Psiquiatria",
"Odontologia"];


const pillars = [
{
  icon: ShieldCheck,
  title: "Percepção de confiança",
  text: "Design, copy e estrutura pensados para transmitir segurança e profissionalismo desde o primeiro acesso."
},
{
  icon: Users,
  title: "Pacientes mais qualificados",
  text: "Atração segmentada para especialidades, serviços e regiões com maior potencial de conversão."
},
{
  icon: TimerReset,
  title: "Resposta mais rápida",
  text: "Fluxos via WhatsApp e páginas objetivas para reduzir atrito no contato e no agendamento."
},
{
  icon: BadgeCheck,
  title: "Estratégia consistente",
  text: "Planejamento, acompanhamento e otimização contínua para sustentar crescimento com mais previsibilidade."
}];


const processSteps = [
"Diagnóstico da presença digital atual da clínica ou operação de saúde",
"Definição de oferta, diferenciais, especialidades e público-alvo",
"Criação da página, campanhas e ativos de conversão",
"Integração com WhatsApp, formulários e rotina comercial",
"Otimização recorrente com base em dados e qualidade dos contatos"];


const numbers = [
{ value: "+43%", label: "mais contatos qualificados em projetos otimizados" },
{ value: "5.0 ★", label: "percepção média de atendimento e confiança" },
{ value: "24h", label: "prazo inicial para diagnóstico estratégico" }];


const testimonials = [
{
  name: "Dra. Camila Andrade",
  role: "Clínica de Dermatologia",
  text: "A página ficou muito mais profissional e os contatos passaram a chegar com mais contexto e intenção real de agendamento."
},
{
  name: "Dr. Renato Moura",
  role: "Clínica Ortopédica",
  text: "Melhoramos a imagem da clínica no digital e passamos a receber pacientes mais alinhados com o nosso perfil de atendimento."
},
{
  name: "Centro Vitae Saúde",
  role: "Clínica Multidisciplinar",
  text: "A Avelon Med organizou nossa captação com clareza. Hoje temos campanhas, landing page e WhatsApp trabalhando juntos."
}];


const ClinicasMedicas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Avelon Med"
              className="h-14 w-14 rounded-full object-cover shadow-md" />
            
            <div>
              <span className="block text-lg font-display font-bold text-primary">
                Avelon Med
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-gold">
                Marketing Médico
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-gold">
              
                {item.label}
              </a>
            )}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]">
            
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-background">
          <div className="container mx-auto grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <HeartPulse className="h-4 w-4" />
                Marketing digital para clínicas e saúde
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-display font-bold leading-[1.04] text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
                Estratégias digitais para <span className="text-gold">Médicos</span> e serviços da área de saúde que precisam crescer com mais autoridade
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                A Avelon Med cria páginas, campanhas e operações de captação para
                negócios da saúde que desejam aumentar agendamentos, fortalecer a
                marca e transmitir confiança em cada ponto de contato.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]">
                  
                  Solicitar estratégia
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-primary transition-colors duration-200 hover:border-gold hover:text-gold">
                  
                  Ver soluções para saúde
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {numbers.map((item) =>
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm">
                  
                    <div className="text-3xl font-display font-bold text-gold">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-border/70 bg-card overflow-hidden shadow-[0_24px_80px_-32px_hsla(var(--primary),0.18)]">
                <img
                  src={doctorHero}
                  alt="Médico profissional de braços cruzados"
                  className="w-full h-auto object-cover"
                  loading="eager" />
                
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                  Atuação ampliada
                </span>
                <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                  Soluções de marketing digital para clínicas e serviços da área da saúde
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Esta página foi desenhada para clínicas médicas, consultórios,
                  centros especializados, operações odontológicas, estéticas e
                  negócios de saúde que precisam crescer sem perder a imagem de
                  excelência e seriedade.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {audiences.map((item) =>
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/10 p-5 text-sm font-medium text-primary-foreground/85 shadow-sm">
                  
                    {item}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Soluções estratégicas
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                Uma operação digital completa para atrair, converter e acompanhar pacientes
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) =>
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-border/70 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                
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
              )}
            </div>
          </div>
        </section>

        <section id="especialidades" className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/10 p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                <Stethoscope className="h-4 w-4" />
                Especialidades e nichos
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary-foreground sm:text-4xl">
                Comunicação adaptada para diferentes áreas da saúde
              </h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/70">
                Cada especialidade exige linguagem, oferta e jornada de contato
                diferentes. A estratégia precisa refletir isso para performar bem.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {specialties.map((item) =>
              <div
                key={item}
                className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/10 p-5 shadow-sm">
                
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-primary-foreground">{item}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="processo" className="section-padding bg-background">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Processo de trabalho
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl lg:text-5xl">
                Uma construção profissional do posicionamento à geração de demanda
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Mais do que anúncios, estruturamos uma jornada digital coerente
                para clínicas e marcas da saúde que desejam previsibilidade e um
                posicionamento mais forte no mercado.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) =>
              <div
                key={step}
                className="flex items-start gap-4 rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm">
                
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-foreground/85">{step}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) =>
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/10 p-7 shadow-sm">
              
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-display font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/70">
                  {item.text}
                </p>
              </article>
            )}
          </div>
        </section>

        <PartnersCarousel variant="medical" />

        <section id="resultados" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Prova social
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary sm:text-4xl">
                Uma apresentação mais profissional ajuda a converter melhor
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) =>
              <article
                key={item.name}
                className="rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-sm">
                
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, index) =>
                  <Star key={index} className="h-4 w-4 fill-current" />
                  )}
                  </div>
                  <p className="mt-5 text-base leading-8 text-foreground/85">
                    “{item.text}”
                  </p>
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="contato-clinicas" className="section-padding-lg bg-background">
          <div className="container mx-auto">
            <div className="rounded-[2rem] border border-gold/20 bg-primary px-8 py-12 text-center text-primary-foreground shadow-[0_24px_80px_-32px_hsla(var(--primary),0.35)] sm:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-light">
                Próximo passo
              </span>
              <h2 className="mt-4 text-3xl font-display font-bold sm:text-4xl lg:text-5xl">Quer atrair mais clientes e uma estratégia profissional para sua clínica ou negócio da saúde?

              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/70">
                Fale com a Avelon Med e receba uma direção inicial para aumentar
                seus agendamentos, fortalecer sua presença digital e melhorar a
                qualidade dos contatos que chegam até sua equipe.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]">
                  
                  <PhoneCall className="h-4 w-4" />
                  Falar com especialista
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/15 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold-light">
                  
                  Voltar para o site principal
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary border-t border-primary-foreground/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/clinicas-medicas" className="flex items-center gap-3 text-primary-foreground">
              <img src={logo} alt="Logo Avelon Med" className="h-12 w-12 rounded-full object-cover shadow-lg" loading="lazy" />
              <div>
                <span className="block text-lg font-display font-bold">Avelon Med</span>
                <span className="block text-xs uppercase tracking-[0.24em] text-gold">Marketing Médico</span>
              </div>
            </a>
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Avelon Med. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default ClinicasMedicas;