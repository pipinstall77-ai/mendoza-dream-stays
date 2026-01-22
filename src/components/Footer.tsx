const Footer = () => {
  return (
    <footer className="bg-earth text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-bold mb-4 block">
              Refugio<span className="text-gold">Mendoza</span>
            </span>
            <p className="font-sans text-sm text-primary-foreground/70 max-w-md">
              Experiencias únicas de hospedaje en Mendoza. Desde domos de lujo en la montaña 
              hasta elegantes departamentos en la ciudad.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
              <li>
                <a href="#propiedades" className="hover:text-gold transition-colors">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#pagos" className="hover:text-gold transition-colors">
                  Métodos de Pago
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-gold transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Política de Cancelación
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-sans text-sm text-primary-foreground/50">
            © 2025 RefugioMendoza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
