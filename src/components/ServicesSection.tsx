import { motion } from 'framer-motion';
import {
  Wifi,
  Car,
  Snowflake,
  Tv,
  Coffee,
  Shirt,
  ShieldCheck,
  Clock,
  Sparkles,
  ChefHat,
  Bath,
  Mountain,
} from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'WiFi Alta Velocidad',
    description: 'Conexión de fibra óptica en todas las propiedades',
  },
  {
    icon: Snowflake,
    title: 'Climatización',
    description: 'Aire acondicionado y calefacción en cada habitación',
  },
  {
    icon: Tv,
    title: 'Smart TV',
    description: 'Streaming con Netflix, Prime Video y más',
  },
  {
    icon: ChefHat,
    title: 'Cocina Equipada',
    description: 'Todo lo necesario para preparar tus comidas',
  },
  {
    icon: Coffee,
    title: 'Desayuno',
    description: 'Opción de desayuno continental incluido',
  },
  {
    icon: Shirt,
    title: 'Ropa de Cama Premium',
    description: 'Sábanas de algodón egipcio y toallas de lujo',
  },
  {
    icon: Car,
    title: 'Estacionamiento',
    description: 'Parking privado y seguro sin cargo adicional',
  },
  {
    icon: Clock,
    title: 'Check-in Flexible',
    description: 'Self check-in 24/7 con código de acceso',
  },
  {
    icon: Sparkles,
    title: 'Limpieza Profesional',
    description: 'Servicio de housekeeping diario disponible',
  },
  {
    icon: Bath,
    title: 'Amenities',
    description: 'Productos de tocador premium incluidos',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad 24/7',
    description: 'Alarma, cámaras y asistencia permanente',
  },
  {
    icon: Mountain,
    title: 'Experiencias',
    description: 'Tours de vino, trekking y actividades locales',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
            Servicios Premium
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Todo lo que Necesitas
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Disfruta de servicios de categoría hotelera en cada una de nuestras propiedades. 
            Tu comodidad es nuestra prioridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-mountain/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-mountain group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
