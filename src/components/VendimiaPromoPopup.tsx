import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wine, Calendar, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vendimiaImage from '@/assets/vendimia-promo.jpg';

const VendimiaPromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar popup después de un breve delay
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('vendimia-popup-seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('vendimia-popup-seen', 'true');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="relative w-full max-w-lg bg-background rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={vendimiaImage}
                alt="Fiesta de la Vendimia 2026"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-gold text-foreground px-3 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
                <Percent className="w-4 h-4" />
                OFERTA ESPECIAL
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gold/20">
                  <Wine className="w-8 h-8 text-gold" />
                </div>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                ¡Fiesta de la Vendimia 2026!
              </h2>
              
              <p className="text-gold font-semibold text-lg mb-3">
                Hasta 25% OFF en tu estadía
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Viví la experiencia única de la vendimia mendocina. Reservá ahora tu alojamiento 
                en nuestros <strong className="text-foreground">domos de lujo</strong> o 
                <strong className="text-foreground"> departamento en ciudad</strong> y disfrutá 
                de descuentos exclusivos.
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Válido del 1 al 15 de Marzo 2026</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleClose}
                  asChild
                >
                  <a href="#propiedades">
                    Ver Propiedades
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleClose}
                >
                  Quizás Luego
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                * Sujeto a disponibilidad. No acumulable con otras promociones.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VendimiaPromoPopup;
