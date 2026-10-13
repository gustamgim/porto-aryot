import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // You can integrate EmailJS or any backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const CONTACT_INFO = [
    { icon: '📧', label: 'Email', value: 'aryotinton@gmail.com', href: 'mailto:aryotinton@gmail.com' },
    { icon: '📱', label: 'WhatsApp', value: '+62 895-4155-89997', href: 'https://wa.me/62895415589997' },
    { icon: '📍', label: 'Lokasi', value: 'Indonesia', href: '#' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <p className="contact__tagline">
              Saya siap membantu mewujudkan visi visual Anda. Hubungi saya untuk diskusi
              project atau sekadar tanya-tanya.
            </p>

            <div className="contact__items">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact__item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  id={`contact-${item.label.toLowerCase()}`}
                >
                  <span className="contact__item-icon">{item.icon}</span>
                  <div>
                    <span className="contact__item-label">{item.label}</span>
                    <span className="contact__item-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__socials">
              <a href="https://instagram.com/aryot" target="_blank" rel="noopener noreferrer" className="contact__social-btn" id="social-instagram">
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            {submitted && (
              <div className="contact__success">
                ✓ Pesan terkirim! Saya akan segera menghubungi Anda.
              </div>
            )}
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Nama</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Nama Anda"
                required
                autoComplete="name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="email@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Pesan</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                placeholder="Ceritakan project Anda..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit" id="contact-submit">
              Kirim Pesan →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
