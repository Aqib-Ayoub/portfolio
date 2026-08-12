const projects = [
  {
    tag: 'Ed-tech · Flutter + Node',
    name: 'Aloy',
    desc: 'A gamified learning platform for students from KG to grade 10, built for Kashmir. 1v1 quiz battles, streaks, leaderboards and focus timers turn revision into something people come back to.',
    stack: ['Flutter', 'Node.js', 'Prisma', 'PostgreSQL'],
  },
  {
    tag: 'Real-time platform · Client project',
    name: 'Bus Booking Platform',
    desc: 'A RedBus-style booking system with separate passenger, crew and admin apps, sharing one real-time backend for live GPS tracking, seat locking and crew broadcast alerts.',
    stack: ['React', 'Flutter', 'Node.js', 'WebSockets'],
  },
  {
    tag: 'Community platform',
    name: 'MasjidApp',
    desc: 'Mosque management software for three roles — super admin, masjid admin and family head — covering namaz timings, donation tracking, a Qibla compass and Razorpay subscriptions.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Flutter'],
  },
  {
    tag: 'Deployed · aqooi.in',
    name: 'Aqooi',
    desc: 'A full-stack app shipped end to end — built, then deployed and hardened by hand on AWS EC2, with Nginx, PM2 and Certbot keeping it running.',
    stack: ['React', 'Vite', 'Express', 'PostgreSQL', 'AWS EC2'],
  },
]

const skillGroups = [
  { label: 'Frontend', items: ['React', 'Flutter', 'Vite'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB'] },
  { label: 'Cloud & DevOps', items: ['AWS EC2', 'Nginx', 'PM2', 'Certbot', 'Jenkins', 'Docker'] },
  { label: 'Other', items: ['DevSecOps', 'Arduino / embedded'] },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="nav-mark" href="#top">
            aqib<span>.dev</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ borderTop: 'none' }}>
          <div className="wrap" style={{ display: 'contents' }}>
            <div>
              <p className="eyebrow">Full-stack developer · Srinagar, Kashmir</p>
              <h1>
                I write the code, <em>then I ship it</em> myself.
              </h1>
              <p className="lede">
                Aqib Ayoub Najar — building web and mobile products end to end, from Flutter
                and React interfaces down to the Node.js APIs and AWS servers that run them.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#projects">View projects</a>
                <a className="btn btn-ghost" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="terminal" aria-hidden="true">
              <div className="terminal-bar">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-body">
                <div><span className="prompt">$</span> ssh aqib@ec2</div>
                <div>&gt; pulling latest build...</div>
                <div>&gt; pm2 restart app <span className="ok">✓</span></div>
                <div>&gt; nginx -s reload <span className="ok">✓</span></div>
                <div>&gt; certbot renew <span className="ok">✓</span></div>
                <div>&gt; deployed<span className="cursor"></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>About</h2>
              <span className="section-num">01</span>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  I'm a BCA graduate and full-stack developer working across Flutter, and the
                  Node / Express / Prisma / PostgreSQL stack, with AWS handling everything
                  after the code is written.
                </p>
                <p>
                  Most of what I build goes all the way to production myself — provisioning
                  the server, configuring Nginx, keeping processes alive with PM2, and
                  locking things down with SSL. That end-to-end habit comes from a parallel
                  interest in cloud computing and DevSecOps.
                </p>
                <p>
                  Outside of client and personal projects, I tinker with hardware —
                  Arduino-based builds — and take on academic projects that let me dig into
                  problems I wouldn't otherwise touch.
                </p>
              </div>
              <dl className="facts">
                <div className="fact">
                  <dt>Based in</dt>
                  <dd>Srinagar, Jammu &amp; Kashmir, India</dd>
                </div>
                <div className="fact">
                  <dt>Education</dt>
                  <dd>BCA</dd>
                </div>
                <div className="fact">
                  <dt>Currently</dt>
                  <dd>Building a real-time bus booking platform</dd>
                </div>
                <div className="fact">
                  <dt>Deploy stack</dt>
                  <dd>EC2 · Nginx · PM2 · Certbot</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>Skills</h2>
              <span className="section-num">02</span>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <span className="pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2>Projects</h2>
              <span className="section-num">03</span>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <span className="tag">{project.tag}</span>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="project-stack">
                    {project.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <h2>Let's build something.</h2>
              <p className="lede">Open to freelance work and full-stack roles — reach out any time.</p>
            </div>
            <div className="footer-links">
              <a href="mailto:your.email@example.com">your.email@example.com</a>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <p className="footnote">© {new Date().getFullYear()} Aqib Ayoub Najar. Built with React.</p>
        </div>
      </footer>
    </>
  )
}
