const projects = [
  {
    src: 'cliente-carlosnieto.png',
    alt: 'Proyecto comercial Carlos Nieto',
    tag: 'Calos Nieto',
    name: 'Instalacion eléctrica comercial',
    delay: '',
  },

  {
    src: 'residencial-domotica.png',
    alt: 'Domotica',
    tag: 'Domotica',
    name: 'Automatizacion residencial inteligente',
    delay: 'reveal-delay-1',
  },
  {
    src: '/solar.png',
    alt: 'Diseño residencial sostenible',
    tag: 'Diseño residencial sostenible',
    name: 'Innovacion y compromiso ambiental',
    delay: 'reveal-delay-2',
  },

  {
    src: '/cliente-mimos.png',
    alt: 'Proyecto comercial Mimos',
    tag: 'Mimos',
    name: 'Instalacion eléctrica comercial',
    delay: '',
  },
  {
    src: '/bodegasm3.png',
    alt: 'Iluminación de bodegas M3',
    tag: 'M3 Storage',
    name: 'Iluminación y control de acceso',
    delay: 'reveal-delay-1',
  },
  {
    src: '/cctv.png',
    alt: 'Sistema CCTV',
    tag: 'Seguridad',
    name: 'Sistema CCTV y control de acceso',
    delay: 'reveal-delay-2',
  },

]

function GalleryCard({ p }) {
  return (
    <div className={`gallery-card reveal ${p.delay}`}>
      <img src={p.src} alt={p.alt} loading="lazy" />
      <div className="project-overlay">
        <div className="project-tag">{p.tag}</div>
        <div className="project-name">{p.name}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  // Left col: projects[0], projects[1] (top pair) + projects[3] (wide bottom)
  // Right col: projects[2] (tall top) + projects[4], projects[5] (bottom pair)
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-label reveal">Portafolio</div>
          <h2 className="section-title reveal reveal-delay-1">Proyectos<br />recientes</h2>
        </div>
        <a href="https://wa.link/rftxys" className="btn-secondary reveal reveal-delay-2" target="_blank" rel="noopener">
          Hablar sobre tu proyecto
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="projects-gallery">
        {/* Columna izquierda: par superior + imagen ancha */}
        <div className="gallery-col gallery-col-left">
          <div className="gallery-pair">
            <GalleryCard p={projects[0]} />
            <GalleryCard p={projects[1]} />
          </div>
          <GalleryCard p={projects[3]} />
        </div>
        {/* Columna derecha: imagen alta + par inferior */}
        <div className="gallery-col gallery-col-right">
          <GalleryCard p={projects[2]} />
          <div className="gallery-pair">
            <GalleryCard p={projects[4]} />
            <GalleryCard p={projects[5]} />
          </div>
        </div>
      </div>
    </section>
  )
}
