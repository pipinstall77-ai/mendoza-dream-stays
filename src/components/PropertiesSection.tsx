import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import heroDomos from '@/assets/hero-domos.jpg';
import domoInterior from '@/assets/domo-interior.jpg';
import departamentoCiudad from '@/assets/departamento-ciudad.jpg';

const PropertiesSection = () => {
  const properties = [
    {
      title: 'Domo Aurora',
      location: 'Cordillera de los Andes, Mendoza',
      description:
        'Sumérgete en la naturaleza desde este espectacular domo geodésico. Vistas panorámicas de las montañas, cielo estrellado y todo el confort moderno.',
      image: heroDomos,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['WiFi', 'Kitchen', 'Parking', 'AC'],
      price: 'USD 180',
      featured: true,
    },
    {
      title: 'Domo Cóndor',
      location: 'Cordillera de los Andes, Mendoza',
      description:
        'Experiencia única de glamping con jacuzzi privado y desayuno incluido. Perfecto para parejas y viajes románticos.',
      image: domoInterior,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['WiFi', 'Kitchen', 'Parking'],
      price: 'USD 150',
      featured: false,
    },
    {
      title: 'Departamento Centro',
      location: 'Centro, Ciudad de Mendoza',
      description:
        'Elegante departamento en pleno corazón de Mendoza. A pasos de restaurantes, bodegas y principales atracciones turísticas.',
      image: departamentoCiudad,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['WiFi', 'Kitchen', 'AC', 'Parking'],
      price: 'USD 120',
      featured: false,
    },
  ];

  return (
    <section id="propiedades" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
            Nuestras Propiedades
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiencias Únicas de Hospedaje
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Desde domos de ensueño en la montaña hasta un moderno departamento en la ciudad, 
            encuentra el alojamiento perfecto para tu aventura en Mendoza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
