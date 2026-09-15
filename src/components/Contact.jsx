export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-inner">
        <p className="hero-kicker">Let's connect</p>
        <h2 className="contact-heading">Have a project in mind, or a question about my work?</h2>
        <p className="contact-description">
          I'm always glad to talk through machine learning, generative AI,
          or a build you're stuck on.
        </p>

        <div className="contact-buttons">
          <a href="mailto:your-email@example.com" className="primary-button">Email me</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="secondary-button">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
