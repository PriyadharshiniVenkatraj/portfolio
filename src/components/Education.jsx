const EDUCATION = [
  {
    date: 'Present',
    title: "Integrated Master's in AI & ML",
    org: 'Coimbatore Institute of Technology',
    description:
      'Building depth across artificial intelligence, machine learning, programming, databases, computer vision, and software development.',
  },
]

const ACHIEVEMENTS = [
  {
    title: 'AI & ML',
    description: 'Hands-on experience building machine learning, computer vision, and RAG-based applications.',
  },
  {
    title: 'Google Cloud',
    description: 'Completed hands-on Google Cloud learning activities covering AI, cloud services, and generative AI.',
  },
  {
    title: 'Hackathons',
    description: 'Participated in technical hackathons, working on real-world AI and software problem statements.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-grid">
        <div className="section-label">
          <span className="index-mark">Education</span>
        </div>

        <div className="section-body">
          <div className="timeline">
            {EDUCATION.map((item) => (
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

          <div className="achievement-grid">
            {ACHIEVEMENTS.map((a) => (
              <div className="achievement-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
