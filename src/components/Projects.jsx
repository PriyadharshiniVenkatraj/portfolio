const PROJECTS = [
  {
    title: 'Smart Resume Skill Gap Analyzer',
    description:
      "Parses resumes, extracts relevant skills, and compares them against a target job description to surface concrete gaps rather than a generic match score.",
    tech: ['Python', 'TF-IDF', 'Scikit-learn', 'Flask'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Live demo', href: '#' },
    ],
  },
  {
    title: 'Smart Crowd Safety Monitoring',
    description:
      'Tracks crowd density in video feeds using object detection and multi-object tracking, flagging danger thresholds before they become incidents.',
    tech: ['Python', 'YOLO', 'DeepSORT', 'Computer vision'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Details', href: '#' },
    ],
  },
  {
    title: 'RAG Technical Document Assistant',
    description:
      "Lets you ask questions about dense technical PDFs and get grounded answers, using semantic search over local language models instead of an API you don't control.",
    tech: ['LangChain', 'ChromaDB', 'Ollama', 'Qwen'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Network Intrusion Detection System',
    description:
      'Classifies live network traffic to flag likely malicious activity, trained and evaluated on packet-level features rather than raw byte streams.',
    tech: ['Python', 'Scapy', 'Wireshark', 'Random forest'],
    links: [{ label: 'GitHub', href: '#' }],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-grid">
        <div className="section-label">
          <span className="index-mark">Projects</span>
        </div>

        <div className="section-body">
          <div className="project-list">
            {PROJECTS.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-heading">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
