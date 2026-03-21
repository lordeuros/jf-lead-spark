import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5532999999999?text=Olá! Gostaria de saber mais sobre os serviços da Digital JF.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-pulse-gold transition-transform duration-200 hover:scale-110 active:scale-95"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-primary-foreground" />
  </a>
);

export default WhatsAppFloat;
