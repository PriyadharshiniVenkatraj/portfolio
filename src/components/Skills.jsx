const SKILLS = [
  { title: 'Programming', items: ['Python', 'C', 'SQL', 'JavaScript'] },
  { title: 'Machine learning', items: ['Scikit-learn', 'Model evaluation', 'Computer vision', 'Data analysis'] },
  { title: 'AI & generative AI', items: ['RAG', 'LLMs', 'LangChain', 'Ollama'] },
  { title: 'Development', items: ['HTML/CSS', 'React', 'Flask', 'Git'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-grid">
        <div className="section-label">
          <span className="index-mark">Skills</span>
        </div>

        <div className="section-body">
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-row" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
