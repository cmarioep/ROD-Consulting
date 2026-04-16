export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-image-wrap reveal">
          <img src="/about.png" alt="Equipo ROD Consulting" loading="lazy" />
          <div className="about-image-badge"><strong>10+</strong>Años liderando<br />proyectos eléctricos</div>
        </div>
        <div className="about-content">
          <div className="section-label reveal">Quiénes somos</div>
          <h2 className="section-title reveal reveal-delay-1">Ingeniería al nivel<br />del siglo XXI</h2>
          <p className="section-desc reveal reveal-delay-2">
            En ROD Consulting combinamos rigor técnico, innovación y compromiso ambiental para ejecutar proyectos eléctricos que superan expectativas.
          </p>
          <div className="about-pillars">
            <div className="about-pillar reveal reveal-delay-2">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">Que hacemos</div>
                <p className="pillar-text">
                  Diseñamos y construimos instalaciones eléctricas adaptadas a las necesidades particulares de cada proyecto residencial, comercial e industrial.
                </p>
              </div>
            </div>
            <div className="about-pillar reveal reveal-delay-3">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">Nuestro compromiso</div>
                <p className="pillar-text">
                  Soluciones eficientes con uso racional de la energía, priorizando el cuidado de los recursos económicos, humanos y naturales.
                </p>
              </div>
            </div>
            <div className="about-pillar reveal reveal-delay-4">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="pillar-title">Nuestro equipo</div>
                <p className="pillar-text">
                  Profesionales altamente calificados que comprometen toda su capacidad creativa y operativa para alcanzar las metas de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
