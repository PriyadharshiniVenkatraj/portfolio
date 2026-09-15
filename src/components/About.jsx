export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-grid">
        <div className="section-label">
          <span className="index-mark">About</span>
        </div>

        <div className="section-body">
          <p className="lede">
            I'm an Integrated Master's student in Artificial Intelligence and
            Machine Learning at Coimbatore Institute of Technology, most
            interested in the point where language models meet real,
            unglamorous data problems.
          </p>
          <p>
            My work moves between machine learning, generative AI, and
            retrieval-augmented generation, with computer vision and
            software engineering close behind. I learn fastest by
            shipping — picking a real problem, building toward it, and
            rebuilding the parts that don't hold up.
          </p>

          <div className="about-details">
            <div className="detail-card">
              <h3>Focus areas</h3>
              <p>Machine learning · Generative AI · Retrieval-augmented generation · Software engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
