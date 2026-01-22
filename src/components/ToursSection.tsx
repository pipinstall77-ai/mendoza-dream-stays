import { motion } from 'framer-motion';
import { Clock, Users, CreditCard, Banknote, MapPin, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import tourBodegas from '@/assets/tour-bodegas.jpg';
import tourMontana from '@/assets/tour-montana.jpg';
import tourRafting from '@/assets/tour-rafting.jpg';
import tourCabalgata from '@/assets/tour-cabalgata.jpg';

const tours = [
  {
    image: tourBodegas,
    title: 'Tour de Bodegas Premium',
    subtitle: 'Luján de Cuyo & Valle de Uco',
    description: 'Recorre las mejores bodegas de Mendoza con degustación de vinos de alta gama y almuerzo gourmet maridaje.',
    duration: '8 horas',
    groupSize: '2-8 personas',
    price: 45000,
    rating: 4.9,
    reviews: 127,
    includes: ['Transporte privado', 'Guía sommelier', '4 bodegas premium', 'Almuerzo maridaje', 'Degustación 12 vinos'],
    highlight: 'Más Popular',
  },
  {
    image: tourMontana,
    title: 'Alta Montaña Expedition',
    subtitle: 'Aconcagua, Puente del Inca & Las Cuevas',
    description: 'Viaja a lo más alto de los Andes. Conoce el Aconcagua, el mítico Puente del Inca y la frontera con Chile.',
    duration: 'Full day',
    groupSize: '2-12 personas',
    price: 38000,
    rating: 4.8,
    reviews: 89,
    includes: ['Transporte 4x4', 'Guía bilingüe', 'Snacks y bebidas', 'Seguro de viaje', 'Paradas fotográficas'],
    highlight: 'Imperdible',
  },
  {
    image: tourRafting,
    title: 'Rafting Aventura',
    subtitle: 'Río Mendoza - Potrerillos',
    description: 'Adrenalina pura navegando los rápidos del río Mendoza. Apto para todos los niveles de experiencia.',
    duration: '4 horas',
    groupSize: '4-10 personas',
    price: 32000,
    rating: 4.9,
    reviews: 156,
    includes: ['Equipo completo', 'Instructor certificado', 'Traslado', 'Seguro', 'Fotos y videos'],
    highlight: 'Aventura',
  },
  {
    image: tourCabalgata,
    title: 'Cabalgata Andina',
    subtitle: 'Cordillera de los Andes',
    description: 'Paseo a caballo por senderos de montaña con vistas panorámicas espectaculares y asado criollo incluido.',
    duration: '6 horas',
    groupSize: '2-8 personas',
    price: 55000,
    rating: 5.0,
    reviews: 64,
    includes: ['Caballo manso', 'Guía gaucho', 'Asado completo', 'Traslado', 'Vino de la casa'],
    highlight: 'Exclusivo',
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
            Experiencias Únicas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tours Turísticos
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Descubre los tesoros de Mendoza con nuestros tours exclusivos. 
            Desde catas de vino hasta aventuras extremas, tenemos la experiencia perfecta para ti.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tour.highlight}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="font-sans text-sm font-semibold">{tour.rating}</span>
                    <span className="font-sans text-xs text-muted-foreground">({tour.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{tour.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                      Incluye:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tour.includes.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="font-sans text-xs bg-sand px-2 py-1 rounded-full text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                      {tour.includes.length > 3 && (
                        <span className="font-sans text-xs text-gold font-medium">
                          +{tour.includes.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="font-sans text-xs text-muted-foreground">Desde</span>
                      <p className="font-serif text-2xl font-bold text-gold">
                        ${tour.price.toLocaleString()}
                        <span className="font-sans text-sm text-muted-foreground font-normal"> /persona</span>
                      </p>
                    </div>
                    <Button className="bg-mountain hover:bg-mountain/90 text-white gap-2">
                      Reservar
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Tours CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mountain rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <Users className="w-12 h-12 mx-auto mb-4 text-gold" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            ¿Vienes en Grupo?
          </h3>
          <p className="font-sans text-white/80 max-w-xl mx-auto mb-6">
            Organizamos tours privados para grupos con descuentos especiales. 
            Ideal para empresas, familias numerosas o grupos de amigos.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mountain">
            Solicitar Cotización Grupal
          </Button>
        </motion.div>

        {/* Payment Methods for Tours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="font-sans text-center text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Métodos de pago para tours:</span> Aceptamos los mismos medios de pago que para alojamientos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5 text-mountain" />
              <span className="font-sans text-sm">Tarjetas hasta 12 cuotas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Banknote className="w-5 h-5 text-mountain" />
              <span className="font-sans text-sm">Mercado Pago</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Banknote className="w-5 h-5 text-mountain" />
              <span className="font-sans text-sm">Transferencia (10% OFF)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;
