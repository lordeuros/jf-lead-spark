import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/digital-jf-logo.png";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3 text-primary-foreground">
          <img src={logo} alt="Logo Digital JF" className="h-11 w-11 rounded-xl object-cover shadow-lg" loading="eager" />
          <span className="text-xl font-display font-bold tracking-tight">
            Digital<span className="text-gold"> JF</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-gold-light transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10 animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 text-primary-foreground/80 hover:text-gold-light transition-colors rounded-lg hover:bg-primary-foreground/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
