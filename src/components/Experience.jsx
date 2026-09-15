const EXPERIENCE = [
  {
    date: '2026',
    title: 'Machine Learning Engineer Intern',
    org: 'Internship',
    description:
      'Worked on machine learning and RAG-based systems — document processing, retrieval, embeddings, and LLM-powered question answering.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-grid">
        <div className="section-label">
          <span className="index-mark">Experience</span>
        </div>

        <div className="section-body">
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.org}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
