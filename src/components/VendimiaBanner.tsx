import { Wine, Calendar, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vendimiaImage from '@/assets/vendimia-promo.jpg';

const VendimiaBanner = () => {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={vendimiaImage}
              alt="Fiesta de la Vendimia 2026"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10">
            {/* Left side - Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {/* Badge */}
              <div className="flex-shrink-0 p-4 rounded-full bg-gold/20 backdrop-blur-sm">
                <Wine className="w-10 h-10 text-gold" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-gold text-foreground px-3 py-1 rounded-full font-semibold text-sm mb-3">
                  <Percent className="w-4 h-4" />
                  OFERTA ESPECIAL
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  ¡Fiesta de la Vendimia 2026!
                </h2>
                
                <p className="text-gold font-semibold text-lg mb-2">
                  Hasta 25% OFF en tu estadía
                </p>

                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/80">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Válido del 1 al 15 de Marzo 2026</span>
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="gold" 
                size="lg"
                asChild
              >
                <a href="#propiedades">
                  Ver Propiedades
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                asChild
              >
                <a href="#contacto">
                  Reservar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendimiaBanner;
