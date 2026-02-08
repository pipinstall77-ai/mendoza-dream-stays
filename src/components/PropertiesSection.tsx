import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { properties } from '@/data/properties';

const PropertiesSection = () => {
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
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              description={property.description}
              image={property.image}
              guests={property.guests}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              amenities={property.amenities}
              price={property.price}
              featured={property.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
