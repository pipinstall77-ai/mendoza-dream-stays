import { motion } from 'framer-motion';
import { MapPin, Users, Bed, Bath, Wifi, Car, Snowflake, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  price: string;
  featured?: boolean;
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  ac: <Snowflake className="w-4 h-4" />,
  kitchen: <ChefHat className="w-4 h-4" />,
};

const PropertyCard = ({
  id,
  title,
  location,
  description,
  image,
  guests,
  bedrooms,
  bathrooms,
  amenities,
  price,
  featured = false,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      {/* Image */}
      <Link to={`/propiedad/${id}`} className="relative overflow-hidden aspect-[4/3] lg:aspect-auto block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-gold text-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Destacado
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 lg:p-8 flex flex-col">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="font-sans text-sm">{location}</span>
        </div>

        <Link to={`/propiedad/${id}`}>
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3 hover:text-gold transition-colors">
            {title}
          </h3>
        </Link>

        <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{guests} huéspedes</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{bedrooms} hab.</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{bathrooms} baño</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-6">
          {amenities.slice(0, 4).map((amenity) => (
            <div
              key={amenity}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-mountain"
              title={amenity}
            >
              {amenityIcons[amenity.toLowerCase()] || <Wifi className="w-4 h-4" />}
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="font-serif text-2xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground text-sm"> /noche</span>
          </div>
          <Link to={`/propiedad/${id}`}>
            <Button variant="gold" size="sm">
              Ver Detalles
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
