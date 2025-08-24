import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp number for Clave y Método
  const whatsappNumber = "50684119315";
  const message = "Hola! Me interesa conocer más sobre sus servicios empresariales.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-scale-in">
          <div className="bg-background border border-border rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">¿Necesitas ayuda?</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Chatea con nosotros en WhatsApp y resuelve todas tus dudas sobre cómo crear tu empresa.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chatear en WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="sm"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>
    </>
  );
};

export default WhatsAppChat;