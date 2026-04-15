export default function Hero() {
  return (
    <header className="hero" id="home">
      <svg className="hero-circuit" viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg" fill="none">
        <g className="base-path">
          <path d="M100,300 H220 V120 H480 V210 H650" />
          <path d="M100,410 H310 V490 H580 V310 H710" />
          <path d="M210,60 V155 H400 V255 H620 V360" />
        </g>
        <path className="energy-pulse v1" d="M100,300 H220 V120 H480 V210 H650" />
        <path className="energy-pulse v2" d="M100,410 H310 V490 H580 V310 H710" />
        <path className="energy-pulse v3" d="M210,60 V155 H400 V255 H620 V360" />
        <circle className="node" cx="220" cy="300" r="5" />
        <circle className="node n-del-1" cx="480" cy="120" r="5" />
        <circle className="node n-del-2" cx="310" cy="410" r="5" />
        <circle className="node" cx="580" cy="310" r="5" />
        <circle className="node n-del-1" cx="400" cy="255" r="5" />
        <rect x="160" y="282" width="28" height="28" stroke="#6FA030" strokeWidth="1" opacity="0.4" />
        <rect x="444" y="102" width="28" height="28" stroke="#6FA030" strokeWidth="1" opacity="0.4" />
        <path d="M55,205 H148 V245 H55 Z" stroke="#6FA030" strokeWidth="1" opacity="0.4" />
        <circle cx="650" cy="60" r="10" stroke="#6FA030" strokeWidth="1" opacity="0.4" />
        <path d="M630,200 l18,-18 l18,18 l-18,18 Z" stroke="#6FA030" strokeWidth="1" opacity="0.4" />
      </svg>

      <div className="hero-content">
        <div className="hero-tag">Ingeniería Eléctrica &middot; Diseño &middot; Construcción &middot; Consultoría</div>
        <h1 className="hero-title">
          ROD CONSULTING<br />
          <em>Ingeniería</em>
        </h1>
        <p className="hero-subtitle">
          Disenamos y construimos instalaciones electricas de alta precision, sostenibles y adaptadas a cada reto &mdash;
          residencial, comercial e industrial.
        </p>
        <div className="hero-actions">
          <a href="https://wa.link/rftxys" className="btn-primary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.091.534 4.058 1.472 5.78L0 24l6.39-1.447C8.087 23.481 10.003 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.846 0-3.567-.497-5.043-1.367l-.36-.215-3.738.845.905-3.635-.232-.376C2.688 15.432 2.182 13.774 2.182 12c0-5.419 4.399-9.818 9.818-9.818S21.818 6.581 21.818 12 17.419 21.818 12 21.818z" />
            </svg>
            Iniciar proyecto
          </a>
          <a href="#services" className="btn-secondary">
            Ver servicios
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Calidad<br />garantizada</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Proyectos<br />exitosos</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">10+</div>
          <div className="hero-stat-label">Anos de<br />experiencia</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">24/7</div>
          <div className="hero-stat-label">Soporte<br />tecnico</div>
        </div>
      </div>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          <span>
            DISENO ELECTRICO <span className="ticker-dot"></span> CONSTRUCCION <span className="ticker-dot"></span>
            CONSULTORIA TECNICA <span className="ticker-dot"></span> DOMOTICA <span className="ticker-dot"></span> CCTV Y
            SEGURIDAD <span className="ticker-dot"></span> MANTENIMIENTO <span className="ticker-dot"></span> ESTUDIOS ELECTRICOS
            <span className="ticker-dot"></span> ENERGIA SOSTENIBLE <span className="ticker-dot"></span> DISENO ELECTRICO <span
              className="ticker-dot"></span> CONSTRUCCION <span className="ticker-dot"></span> CONSULTORIA TECNICA <span
              className="ticker-dot"></span> DOMOTICA <span className="ticker-dot"></span> CCTV Y SEGURIDAD <span
              className="ticker-dot"></span> MANTENIMIENTO <span className="ticker-dot"></span> ESTUDIOS ELECTRICOS <span
              className="ticker-dot"></span> ENERGIA SOSTENIBLE <span className="ticker-dot"></span>
          </span>
        </div>
      </div>
    </header>
  )
}
