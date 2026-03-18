import heroDomos from '@/assets/hero-domos.jpg';
import domoInterior from '@/assets/domo-interior.jpg';
import deptoCocina1 from '@/assets/depto-cocina-1.jpg';
import deptoLiving1 from '@/assets/depto-living-1.jpg';
import deptoLiving2 from '@/assets/depto-living-2.jpg';
import deptoCocina2 from '@/assets/depto-cocina-2.jpg';
import deptoCocina3 from '@/assets/depto-cocina-3.jpg';
import deptoCocina4 from '@/assets/depto-cocina-4.jpg';
import deptoBano from '@/assets/depto-bano.jpg';
import deptoDormitorio1 from '@/assets/depto-dormitorio-1.jpg';
import deptoDormitorio2 from '@/assets/depto-dormitorio-2.jpg';

export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  amenitiesDetailed: { name: string; description: string }[];
  price: string;
  priceARS: number;
  featured: boolean;
  highlights: string[];
}

export const properties: Property[] = [
  {
    id: 'domo-aurora',
    title: 'Domo Aurora',
    location: 'Cordillera de los Andes, Mendoza',
    description:
      'Sumérgete en la naturaleza desde este espectacular domo geodésico. Vistas panorámicas de las montañas, cielo estrellado y todo el confort moderno.',
    longDescription: `
      Descubre una experiencia única de hospedaje en nuestro Domo Aurora, ubicado en un entorno privilegiado de la Cordillera de los Andes. 
      
      Este domo geodésico de diseño moderno ofrece una conexión incomparable con la naturaleza, permitiéndote despertar con vistas panorámicas de las montañas nevadas y dormir bajo un cielo repleto de estrellas.
      
      El espacio interior está cuidadosamente diseñado para combinar el lujo con la rusticidad, contando con calefacción, una cama king size con ropa de cama premium, y un baño completo con agua caliente. La cocina está totalmente equipada para que puedas preparar tus comidas mientras disfrutas del paisaje.
      
      Ideal para parejas o familias pequeñas que buscan desconectarse de la rutina y reconectarse con la naturaleza.
    `,
    image: heroDomos,
    gallery: [heroDomos, domoInterior, heroDomos, domoInterior],
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Kitchen', 'Parking', 'AC'],
    amenitiesDetailed: [
      { name: 'WiFi de alta velocidad', description: 'Conexión estable para trabajo remoto' },
      { name: 'Cocina equipada', description: 'Heladera, anafe, utensilios y vajilla completa' },
      { name: 'Estacionamiento privado', description: 'Lugar seguro para tu vehículo' },
      { name: 'Calefacción', description: 'Sistema de calefacción para noches frías' },
      { name: 'Ropa de cama premium', description: 'Sábanas de algodón egipcio' },
      { name: 'Parrilla', description: 'Asador para disfrutar al aire libre' },
    ],
    price: 'USD 180',
    priceARS: 85000,
    featured: true,
    highlights: [
      'Vistas panorámicas de la cordillera',
      'Cielo estrellado sin contaminación lumínica',
      'A 45 min de bodegas reconocidas',
      'Experiencia de glamping de lujo',
    ],
  },
  {
    id: 'domo-condor',
    title: 'Domo Cóndor',
    location: 'Cordillera de los Andes, Mendoza',
    description:
      'Experiencia única de glamping con jacuzzi privado y desayuno incluido. Perfecto para parejas y viajes románticos.',
    longDescription: `
      El Domo Cóndor es nuestra joya para escapadas románticas. Diseñado especialmente para parejas, este refugio íntimo combina la aventura del glamping con comodidades de primer nivel.
      
      Lo más destacado es su jacuzzi privado con vista a las montañas, donde podrás relajarte bajo las estrellas después de un día explorando la región. El desayuno gourmet está incluido y se sirve directamente en tu domo.
      
      El interior presenta un diseño minimalista pero acogedor, con una cama matrimonial con dosel, iluminación romántica y un sistema de sonido Bluetooth para ambientar tu estadía.
      
      La ubicación ofrece total privacidad mientras mantienes fácil acceso a los principales atractivos de Mendoza.
    `,
    image: domoInterior,
    gallery: [domoInterior, heroDomos, domoInterior, heroDomos],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    amenitiesDetailed: [
      { name: 'Jacuzzi privado', description: 'Con vista a las montañas' },
      { name: 'Desayuno incluido', description: 'Servicio gourmet en el domo' },
      { name: 'WiFi', description: 'Conexión para mantenerte conectado' },
      { name: 'Cocina kitchenette', description: 'Equipamiento básico' },
      { name: 'Bluetooth speaker', description: 'Sistema de sonido ambiental' },
      { name: 'Calefacción', description: 'Para noches de montaña' },
    ],
    price: 'USD 150',
    priceARS: 78000,
    featured: false,
    highlights: [
      'Jacuzzi privado con vista',
      'Desayuno gourmet incluido',
      'Ideal para parejas',
      'Total privacidad',
    ],
  },
  {
    id: 'departamento-centro',
    title: 'Departamento Centro',
    location: 'Centro, Ciudad de Mendoza',
    description:
      'Elegante departamento en pleno corazón de Mendoza. A pasos de restaurantes, bodegas y principales atracciones turísticas.',
    longDescription: `
      Ubicado en el corazón de la Ciudad de Mendoza, este elegante departamento es la base perfecta para explorar todo lo que la región tiene para ofrecer.
      
      Con 2 dormitorios amplios, un living comedor luminoso y una cocina totalmente equipada, es ideal para familias o grupos de amigos que buscan comodidad y ubicación privilegiada.
      
      A solo pasos encontrarás la famosa Avenida Arístides Villanueva con sus restaurantes y bares, el Parque General San Martín, y fácil acceso a las principales bodegas de la región.
      
      El edificio cuenta con seguridad 24hs, cochera cubierta y todos los servicios necesarios para una estadía sin preocupaciones.
    `,
    image: departamentoCiudad,
    gallery: [departamentoCiudad, departamentoCiudad, departamentoCiudad, departamentoCiudad],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['WiFi', 'Kitchen', 'AC', 'Parking'],
    amenitiesDetailed: [
      { name: 'WiFi de alta velocidad', description: 'Fibra óptica para trabajo remoto' },
      { name: 'Cocina completa', description: 'Horno, microondas, heladera grande' },
      { name: 'Aire acondicionado', description: 'Split en todos los ambientes' },
      { name: 'Cochera cubierta', description: 'Estacionamiento seguro' },
      { name: 'Smart TV', description: 'Con Netflix y streaming' },
      { name: 'Lavarropas', description: 'Equipamiento completo' },
    ],
    price: 'USD 120',
    priceARS: 65000,
    featured: false,
    highlights: [
      'Ubicación céntrica privilegiada',
      'A pasos de Av. Arístides Villanueva',
      'Cerca de bodegas y tours',
      'Seguridad 24hs',
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
