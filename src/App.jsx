import { useState, useEffect } from 'react'

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
  {
    tag: 'Academic · IoT',
    name: 'Smart Irrigation System',
    desc: 'An Arduino-based automated irrigation system using soil moisture sensors, with a real-time monitoring dashboard and water usage analytics for efficient farming.',
    stack: ['Arduino', 'C++', 'Node.js', 'MQTT'],
  },
  {
    tag: 'Healthcare · Appointment system',
    name: 'ShifaLink',
    desc: 'A healthcare appointment booking app connecting patients with doctors — featuring slot management, booking confirmations, patient history, and a clean scheduling interface.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
]

const skillGroups = [
  { label: 'Frontend', items: ['React', 'Flutter', 'Vite', 'HTML / CSS', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
  { label: 'Cloud & DevOps', items: ['AWS EC2', 'Nginx', 'PM2', 'Certbot', 'Jenkins', 'Docker', 'Git'] },
  { label: 'Other', items: ['DevSecOps', 'Arduino / IoT', 'WebSockets', 'System Design'] },
]

const timeline = [
  {
    year: '2026',
    title: 'BCA Graduate',
    desc: 'Completed Bachelor of Computer Applications (2023–2026), building a strong foundation in programming, databases, and system design.',
  },
  {
    year: '2025',
    title: 'Bus Booking Platform — Client Project',
    desc: 'Architected a real-time booking system with live GPS, WebSocket crew alerts, and a multi-app ecosystem for a commercial client.',
  },
  {
    year: '2024',
    title: 'Shipped Aqooi to Production',
    desc: 'Deployed a full-stack application end-to-end on AWS EC2 — Nginx reverse proxy, PM2 process management, SSL via Certbot.',
  },
  {
    year: '2024',
    title: 'Built & Launched Aloy',
    desc: 'Created a gamified ed-tech platform for Kashmir\'s K-10 students with quiz battles, streaks, and focus timers.',
  },
  {
    year: '2023',
    title: 'GNIIT Diploma — Cloud & Software Engineering',
    desc: 'Completed a 2-year GNIIT diploma in Cloud and Software Engineering, gaining hands-on skills in cloud architecture, DevOps, and full-stack development.',
  },
  {
    year: '2023',
    title: 'Started Freelancing',
    desc: 'Began taking on client projects, building full-stack web and mobile applications with Flutter, React, and Node.js.',
  },
]

const approaches = [
  {
    icon: '⚡',
    title: 'Ship End-to-End',
    desc: 'I don\'t just write code — I deploy, monitor, and maintain it. From frontend pixels to server hardening, the whole pipeline is mine.',
  },
  {
    icon: '🔒',
    title: 'Security-First',
    desc: 'SSL, environment isolation, and DevSecOps practices baked in from day one — not bolted on as an afterthought.',
  },
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    desc: 'Modular codebases with clear separation of concerns. Code that\'s readable, testable, and built to scale.',
  },
]

const stats = [
  { number: '6+', label: 'Projects Shipped' },
  { number: '3+', label: 'Tech Stacks' },
  { number: 'Full-stack', label: 'to Deploy' },
  { number: 'AWS', label: 'Hardened Infra' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Scroll-reveal observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('section:not(.hero), .stats-bar, footer').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Active section + scroll-to-top */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      const ids = ['about', 'skills', 'projects', 'experience', 'approach', 'contact']
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 200) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <div className="accent-bar" aria-hidden="true" />

      <header className="nav">
        <div className="wrap nav-inner">
          <a className="nav-mark" href="#top">
            aqib<span>.dev</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
            <div className="hero-shape hero-shape-3" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-content">
              <p className="eyebrow anim-fade-up">Full-stack developer · Srinagar, Kashmir</p>
              <h1 className="anim-fade-up anim-delay-1">
                I write the code, <em>then I ship it</em> myself.
              </h1>
              <p className="lede anim-fade-up anim-delay-2">
                Aqib Ayoub Najar — building web and mobile products end to end, from Flutter
                and React interfaces down to the Node.js APIs and AWS servers that run them.
              </p>
              <div className="hero-cta anim-fade-up anim-delay-3">
                <a className="btn btn-primary" href="#projects">View projects</a>
                <a className="btn btn-ghost" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="terminal anim-slide-in-right" aria-hidden="true">
              <div className="terminal-bar">
                <span /><span /><span />
              </div>
              <div className="terminal-body">
                <div className="terminal-line tl-1"><span className="prompt">$</span> ssh aqib@ec2</div>
                <div className="terminal-line tl-2">&gt; pulling latest build...</div>
                <div className="terminal-line tl-3">&gt; pm2 restart app <span className="ok">✓</span></div>
                <div className="terminal-line tl-4">&gt; nginx -s reload <span className="ok">✓</span></div>
                <div className="terminal-line tl-5">&gt; certbot renew <span className="ok">✓</span></div>
                <div className="terminal-line tl-6">&gt; deployed<span className="cursor" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div className="stats-bar">
          <div className="wrap stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 01 · About ── */}
        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>About</h2>
              <span className="section-num">01</span>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  I'm a recent BCA graduate (2023–2026) and GNIIT-certified full-stack developer
                  working across Flutter, React, and the Node / Express / Prisma / PostgreSQL stack.
                  My 2-year diploma in Cloud &amp; Software Engineering shaped the way I think about
                  infrastructure — AWS handles everything after the code is written, and I handle AWS.
                </p>
                <p>
                  Most of what I build goes all the way to production myself — provisioning
                  the server, configuring Nginx, keeping processes alive with PM2, and
                  locking things down with SSL. That end-to-end habit comes from a genuine
                  interest in cloud computing and DevSecOps.
                </p>
                <p>
                  Outside of client and personal projects, I tinker with hardware —
                  Arduino-based IoT builds — and take on academic projects that push me into
                  problems I wouldn't otherwise touch. I believe the best engineers are the ones
                  who stay curious.
                </p>
              </div>
              <dl className="facts">
                <div className="fact">
                  <dt>Based in</dt>
                  <dd>Srinagar, Jammu &amp; Kashmir, India</dd>
                </div>
                <div className="fact">
                  <dt>Education</dt>
                  <dd>BCA (2023–2026) · GNIIT Diploma in Cloud &amp; Software Engineering (2023)</dd>
                </div>
                <div className="fact">
                  <dt>Currently</dt>
                  <dd>Building a real-time bus booking platform</dd>
                </div>
                <div className="fact">
                  <dt>Deploy stack</dt>
                  <dd>EC2 · Nginx · PM2 · Certbot</dd>
                </div>
                <div className="fact">
                  <dt>Interests</dt>
                  <dd>Cloud architecture · DevSecOps · IoT</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── 02 · Skills ── */}
        <section id="skills" className="alt-bg">
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

        {/* ── 03 · Projects ── */}
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

        {/* ── 04 · Experience ── */}
        <section id="experience" className="alt-bg">
          <div className="wrap">
            <div className="section-head">
              <h2>Experience</h2>
              <span className="section-num">04</span>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-marker">
                    <span className="timeline-dot" />
                    {i < timeline.length - 1 && <span className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 · My Approach ── */}
        <section id="approach">
          <div className="wrap">
            <div className="section-head">
              <h2>My Approach</h2>
              <span className="section-num">05</span>
            </div>
            <div className="approach-grid">
              {approaches.map((item) => (
                <div className="approach-card" key={item.title}>
                  <span className="approach-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
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
              <a href="mailto:aqibayoub321@gmail.com">aqibayoub321@gmail.com</a>
              <a href="https://github.com/Aqib-Ayoub" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/aqib-ayoub-800a30183/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <p className="footnote">© {new Date().getFullYear()} Aqib Ayoub Najar. Built with React &amp; shipped on AWS.</p>
        </div>
      </footer>

      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
