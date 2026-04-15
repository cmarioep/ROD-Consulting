import Circuit from './Circuit'

export default function Footer() {
  return (
    <footer className="footer-dark">
      <Circuit />
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/imagotipo--300.png" alt="ROD Consulting" />
          <p>
            Disenamos y construimos instalaciones electricas a la altura de los retos de ingenieria y cuidado del medio
            ambiente del siglo XXI.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Servicios</div>
          <ul className="footer-links">
            <li><a href="#services">Diseno electrico</a></li>
            <li><a href="#services">Construccion</a></li>
            <li><a href="#services">Consultoria</a></li>
            <li><a href="#services">Mantenimiento</a></li>
            <li><a href="#services">Domotica y CCTV</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contacto</div>
          <ul className="footer-links">
            <li><a href="mailto:rafael.vallejo@rodconsulting.co">rafael.vallejo@rodconsulting.co</a></li>
            <li><a href="tel:+573188737324">+57 318 873 7324</a></li>
            <li><a href="https://wa.link/rftxys" target="_blank" rel="noopener">WhatsApp</a></li>
            <li>Sabaneta, Antioquia</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">2026 ROD Consulting Ingenieria Eléctrica. Todos los derechos reservados.</div>
        <div className="footer-copy">
          Desarrollado por <a href="https://www.cmarioep.com" target="_blank" rel="noopener">@cmarioep</a>
        </div>
      </div>
    </footer>
  )
}
