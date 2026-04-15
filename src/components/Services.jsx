const services = [
  {
    num: '01',
    name: 'Diseno Electrico',
    desc: 'Proyectos residenciales, comerciales e industriales. Planos, memorias de calculo y gestion de permisos ante organismos competentes.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    delay: '',
  },
  {
    num: '02',
    name: 'Construccion de Instalaciones',
    desc: 'Ejecucion de obras electricas con altos estandares de calidad y cumplimiento normativo RETIE/NTC en todo tipo de edificaciones.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    delay: 'reveal-delay-1',
  },
  {
    num: '03',
    name: 'Consultoria Tecnica',
    desc: 'Asesoria experta para toma de decisiones estrategicas, optimizacion de sistemas existentes y evaluacion de proyectos electricos.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    delay: 'reveal-delay-2',
  },
  {
    num: '04',
    name: 'Estudios y Mediciones',
    desc: 'Analisis de calidad de energia, estudios de carga, mediciones de resistencia y termografias para diagnostico y optimizacion.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    delay: 'reveal-delay-1',
  },
  {
    num: '05',
    name: 'Mantenimiento',
    desc: 'Programas de mantenimiento preventivo y correctivo para instalaciones electricas, tableros y equipos, reduciendo tiempos de inactividad.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    delay: 'reveal-delay-2',
  },
  {
    num: '06',
    name: 'Domotica, Comunicaciones y CCTV',
    desc: 'Sistemas inteligentes de automatizacion, redes estructuradas, videovigilancia y control de acceso para maxima seguridad y confort.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    delay: 'reveal-delay-3',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <div className="section-label reveal">Portafolio</div>
          <h2 className="section-title reveal reveal-delay-1">Soluciones electricas<br />integrales</h2>
        </div>
        <p className="section-desc reveal reveal-delay-2" style={{ textAlign: 'right', maxWidth: '300px' }}>
          Tenemos la experiencia y el conocimiento para hacer realidad tu proyecto.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className={`service-card reveal ${s.delay}`}>
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
