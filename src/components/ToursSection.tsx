import { motion } from 'framer-motion';
import { Wine, Mountain, Droplets, Camera, TreePine, Bike, Users, Clock, CreditCard, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tours = [
  {
    icon: Wine,
    title: 'Tour de Bodegas',
    description: 'Recorre las mejores bodegas de Luján de Cuyo y Valle de Uco. Degustación de vinos premium y almuerzo gourmet.',
    duration: '8 horas',
    price: 'Desde $45.000',
    includes: ['Transporte', 'Guía bilingüe', '4 bodegas', 'Almuerzo'],
  },
  {
    icon: Mountain,
    title: 'Alta Montaña',
    description: 'Visita el Aconcagua, Puente del Inca, Las Cuevas y la frontera con Chile. Paisajes de ensueño.',
    duration: 'Full day',
    price: 'Desde $38.000',
    includes: ['Transporte 4x4', 'Guía', 'Snacks', 'Seguro'],
  },
  {
    icon: Droplets,
    title: 'Rafting en el Mendoza',
    description: 'Aventura de rafting en los rápidos del río Mendoza. Todos los niveles de experiencia.',
    duration: '4 horas',
    price: 'Desde $32.000',
    includes: ['Equipo completo', 'Instructor', 'Traslado', 'Seguro'],
  },
  {
    icon: Camera,
    title: 'City Tour Mendoza',
    description: 'Conoce la ciudad, el Cerro de la Gloria, Parque San Martín y los principales puntos históricos.',
    duration: '4 horas',
    price: 'Desde $18.000',
    includes: ['Transporte', 'Guía', 'Entradas'],
  },
  {
    icon: TreePine,
    title: 'Cabalgata Andina',
    description: 'Paseo a caballo por senderos de montaña con vistas panorámicas de los Andes y asado criollo.',
    duration: '6 horas',
    price: 'Desde $55.000',
    includes: ['Caballo', 'Guía', 'Asado', 'Traslado'],
  },
  {
    icon: Bike,
    title: 'Bike & Wine',
    description: 'Recorre bodegas en bicicleta por caminos rurales de Maipú. Experiencia única y eco-friendly.',
    duration: '5 horas',
    price: 'Desde $28.000',
    includes: ['Bicicleta', 'Casco', 'Mapa', '3 bodegas'],
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
            Desde catas de vino hasta aventuras en la montaña, tenemos la experiencia perfecta para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-mountain/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <tour.icon className="w-7 h-7 text-mountain group-hover:text-gold transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-xl font-bold text-gold">{tour.price}</span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {tour.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tour.description}
                </p>

                <div className="border-t border-border pt-4 mb-4">
                  <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Incluye:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tour.includes.map((item, i) => (
                      <span
                        key={i}
                        className="font-sans text-xs bg-sand px-2.5 py-1 rounded-full text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-mountain hover:bg-mountain/90 text-white">
                  Reservar Tour
                </Button>
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
