import { useMemo, useRef } from 'react'

// Layered node graph echoing the subject matter (a neural network)
// rather than existing as pure decoration.
function useNetworkGraph() {
  return useMemo(() => {
    const layers = [
      { x: 40, ys: [90, 210, 330] },
      { x: 175, ys: [40, 140, 240, 340, 420] },
      { x: 310, ys: [100, 220, 340] },
      { x: 400, ys: [190] },
    ]

    const nodes = []
    layers.forEach((layer, li) => {
      layer.ys.forEach((y, ni) => {
        nodes.push({ id: `${li}-${ni}`, x: layer.x, y, layer: li })
      })
    })

    const edges = []
    for (let li = 0; li < layers.length - 1; li++) {
      const current = nodes.filter((n) => n.layer === li)
      const next = nodes.filter((n) => n.layer === li + 1)
      current.forEach((n, i) => {
        const targets = [next[i % next.length], next[(i + 2) % next.length]]
        targets.forEach((t) => edges.push({ a: n, b: t }))
      })
    }

    return { nodes, edges }
  }, [])
}

export default function Hero() {
  const { nodes, edges } = useNetworkGraph()
  const hotSeed = useRef(nodes.map(() => Math.random() < 0.22))

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-kicker">AI &amp; ML Engineer, in training and in practice</p>
          <h1 className="hero-name">
            Priya
            <br />
            Dharshini
          </h1>
          <p className="hero-description">
            I design and build intelligent systems — from retrieval-augmented
            language tools to computer-vision pipelines — turning messy data
            into software that holds up.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">See the work</a>
            <a href="/resume.pdf" className="secondary-button" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-graphic" aria-hidden="true">
          <svg viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg">
            <g>
              {edges.map((e, i) => (
                <line
                  key={i}
                  x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y}
                  className="net-edge"
                  style={{ animationDelay: `${i * 14}ms` }}
                />
              ))}
            </g>
            <g>
              {nodes.map((n, i) => (
                <circle
                  key={n.id}
                  cx={n.x} cy={n.y} r={5.5}
                  className={`net-node ${hotSeed.current[i] ? 'net-node--hot' : ''}`}
                  style={{ animationDelay: `${300 + i * 22}ms` }}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true"><span /></div>
    </section>
  )
}
