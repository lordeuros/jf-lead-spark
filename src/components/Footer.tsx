import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy border-t border-primary-foreground/10 py-12 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#inicio" className="text-xl font-display font-bold text-primary-foreground">
          Digital<span className="text-gold"> JF</span>
        </a>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary transition-all duration-200">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary transition-all duration-200">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-primary transition-all duration-200">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Digital JF. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
