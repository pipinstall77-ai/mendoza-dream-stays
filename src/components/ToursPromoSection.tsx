import { motion } from 'framer-motion';
import { Wine, Mountain, Waves, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import tourBodegas from '@/assets/tour-bodegas.jpg';
import tourMontana from '@/assets/tour-montana.jpg';
import tourRafting from '@/assets/tour-rafting.jpg';

const featuredTours = [
  {
    image: tourBodegas,
    title: 'Tour de Bodegas',
    icon: Wine,
    price: 45000,
    rating: 4.9,
  },
  {
    image: tourMontana,
    title: 'Alta Montaña',
    icon: Mountain,
    price: 38000,
    rating: 4.8,
  },
  {
    image: tourRafting,
    title: 'Rafting Aventura',
    icon: Waves,
    price: 32000,
    rating: 4.9,
  },
];

const ToursPromoSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sand/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
              Experiencias Únicas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Descubre Mendoza
              <br />
              <span className="text-gold">con Nuestros Tours</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed text-lg">
              Complementa tu estadía con experiencias inolvidables. Desde catas de vino 
              en bodegas premiadas hasta aventuras en la cordillera de los Andes. 
              Ofrecemos tours exclusivos con guías expertos.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-sand px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="font-sans text-sm font-medium">+400 reseñas 5 estrellas</span>
              </div>
              <div className="flex items-center gap-2 bg-sand px-4 py-2 rounded-full">
                <span className="font-sans text-sm font-medium">Guías bilingües</span>
              </div>
              <div className="flex items-center gap-2 bg-sand px-4 py-2 rounded-full">
                <span className="font-sans text-sm font-medium">Grupos reducidos</span>
              </div>
            </div>

            <Link to="/tours">
              <Button variant="gold" size="lg" className="gap-2">
                Ver Todos los Tours
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Right - Tour Cards */}
          <div className="space-y-4">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="/tours" className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-mountain/20" />
                    <tour.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-gold transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">{tour.rating}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-sans text-xs text-muted-foreground">Desde</span>
                    <p className="font-serif text-xl font-bold text-gold">
                      ${tour.price.toLocaleString()}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursPromoSection;
