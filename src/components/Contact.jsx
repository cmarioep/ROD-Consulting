import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hola! Soy ${form.name}. Me interesa: ${form.service}. ${form.message}`
    )
    window.open(`https://wa.me/573188737324?text=${text}`, '_blank')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-label reveal">Contacto</div>
          <h2 className="section-title reveal reveal-delay-1">Cuentanos<br />tu proyecto</h2>
          <p className="section-desc reveal reveal-delay-2">
            Estamos listos para atender tu consulta. Uno de nuestros ingenieros te contactara a la brevedad.
          </p>
          <div className="contact-detail reveal reveal-delay-2">
            <div className="contact-detail-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.09 6.09l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="contact-detail-label">Telefono / WhatsApp</div>
              <div className="contact-detail-value"><a href="tel:+573188737324">+57 318 873 7324</a></div>
            </div>
          </div>
          <div className="contact-detail reveal reveal-delay-3">
            <div className="contact-detail-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="contact-detail-label">Correo electronico</div>
              <div className="contact-detail-value">
                <a href="mailto:rafael.vallejo@rodconsulting.co">rafael.vallejo@rodconsulting.co</a>
              </div>
            </div>
          </div>
          <div className="contact-detail reveal reveal-delay-4">
            <div className="contact-detail-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-detail-label">Ubicacion</div>
              <div className="contact-detail-value">Sabaneta, Antioquia - Colombia</div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap reveal reveal-delay-2">
          <div className="form-title">Solicitar cotizacion</div>
          <p className="form-subtitle">Uno de nuestros ingenieros te contactara en menos de 24 horas.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-row">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="Rafael Gomez" required
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Telefono</label>
                <input
                  type="tel" id="phone" name="phone"
                  placeholder="+57 300 000 0000" required
                  value={form.phone} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email" id="email" name="email"
                placeholder="correo@empresa.com" required
                value={form.email} onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="service">Tipo de servicio</label>
              <select id="service" name="service" required value={form.service} onChange={handleChange}>
                <option value="" disabled>Selecciona un servicio</option>
                <option>Diseno electrico</option>
                <option>Construccion de instalaciones</option>
                <option>Consultoria tecnica</option>
                <option>Estudios y mediciones</option>
                <option>Mantenimiento</option>
                <option>Domotica / CCTV / Seguridad</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Descripcion del proyecto</label>
              <textarea
                id="message" name="message"
                placeholder="Cuentanos sobre tu proyecto: tipo de edificacion, alcance, ubicacion..."
                value={form.message} onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar solicitud
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
