import { useEffect, useState } from "react";

const offerings = [
  {
    title: "Product Engineering",
    desc: "From MVP to enterprise scale, we design, build, and ship digital products with measurable business impact.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Automated CI/CD, reliable cloud architecture, and observability-first operations for always-on teams.",
  },
  {
    title: "AI Integration",
    desc: "Practical AI workflows, copilots, and data pipelines that improve speed, quality, and decision-making.",
  },
  {
    title: "Custom Software & ERP",
    desc: "Custom web applications, business software, and ERP systems built to streamline operations and scale your business.",
  },
];

const stats = [
  { key: "projects", end: 30, suffix: "+", label: "Projects Delivered" },
  { key: "retention", end: 96, suffix: "%", label: "Client Retention" },
  { key: "industries", end: 10, suffix: "+", label: "Industries Served" },
  { key: "support", end: 24, suffix: "/7", label: "Support Coverage" },
];

const reasons = [
  "Business-first execution, not just code delivery",
  "Cross-functional squads that move from idea to launch fast",
  "Clear visibility with weekly progress, metrics, and roadmaps",
  "Security, performance, and scalability built in by default",
];

const stacks = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/111111" },
  { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/222222" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
  { name: "Spring", icon: "https://cdn.simpleicons.org/spring/6DB33F" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons:openai.svg" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/191919" },
  {
    name: "Clawbot",
    icon: "https://api.iconify.design/mdi:robot-happy-outline.svg?color=%235b56e8",
  },
  { name: "GoDaddy", icon: "https://cdn.simpleicons.org/godaddy/1BDBDB" },
  { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger/673DE6" },
  { name: "Oracle", icon: "https://api.iconify.design/simple-icons:oracle.svg" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/111111" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    retention: 0,
    industries: 0,
    support: 0,
  });

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();
    let frameId;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.round(stats[0].end * eased),
        retention: Math.round(stats[1].end * eased),
        industries: Math.round(stats[2].end * eased),
        support: Math.round(stats[3].end * eased),
      });

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="startup-page">
      <header className="navbar-wrap">
        <nav className="navbar">
          <a href="#hero" className="brand nexston-brand">
            NE<span>X</span>STON
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setCareersOpen((p) => !p)}
                aria-expanded={careersOpen}
              >
                Careers <span className="caret">v</span>
              </button>
              <div className={`dropdown-menu ${careersOpen ? "show" : ""}`}>
                <a href="#contact">Available Jobs</a>
                <a href="#contact">Internships</a>
              </div>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Login</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta nav-signup">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="bg-shape bg-shape-a" />
          <div className="bg-shape bg-shape-b" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Nexston Corporations Pvt Ltd</p>
              <h1>
                Empowering 
                <br />
                Businesses.
              </h1>
              <p>
              From custom web applications to enterprise ERP and AI-powered solutions, we deliver reliable software that enables sustainable business growth.              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="#provide" className="btn btn-ghost">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glass-board">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="core-node">
                  <span>Realtime Delivery Engine</span>
                </div>
                <div className="floating floating-one">
                  <strong>+38%</strong>
                  <span>Deployment Speed</span>
                </div>
                <div className="floating floating-two">
                  <strong>99.95%</strong>
                  <span>Uptime Goal</span>
                </div>
                <div className="floating floating-three">
                  <strong>AI-Ready</strong>
                  <span>Data + Apps + Ops</span>
                </div>
                <div className="signal signal-a" />
                <div className="signal signal-b" />
              </div>
            </div>
          </div>
        </section>

        <section id="provide" className="section">
          <div className="section-head">
            <p>WHAT WE PROVIDE</p>
            <h2>Services designed for high-growth teams</h2>
          </div>
          <div className="card-grid">
            {offerings.map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section section-split">
          <div>
            <div className="section-head">
              <p>WHO WE ARE</p>
              <h2>A product-minded team of engineers, designers, and builders</h2>
            </div>
            <p className="section-text">
              We are a modern IT startup focused on turning complex ideas into
              reliable digital products. Our teams combine startup agility with
              enterprise discipline so founders and business leaders can scale
              with confidence.
            </p>
          </div>
          <div className="stats-panel">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <h3>
                  {counts[stat.key]}
                  {stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="section">
          <div className="section-head">
            <p>WHY US</p>
            <h2>Execution quality that compounds over time</h2>
          </div>
          <div className="why-list">
            {reasons.map((reason) => (
              <div className="why-item" key={reason}>
                <span className="dot" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-head">
            <p>OUR STACK</p>
            <h2>Technologies We Use to Build Reliable Digital Products</h2>
          </div>
          <p className="stack-subtitle">
            From frontend to cloud infrastructure, we work with proven tools
            and modern platforms to deliver quality at speed.
          </p>
          <div className="stack-cloud">
            {stacks.map((item, index) => (
              <div
                className="stack-chip"
                key={item.name}
                style={{
                  animationDelay: `${(index % 8) * 0.35}s`,
                  animationDuration: `${5 + (index % 6)}s`,
                }}
              >
                <img src={item.icon} alt={`${item.name} logo`} loading="lazy" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="contact" className="grow-section">
        <div className="grow-copy">
          <p className="grow-tag">PARTNERSHIP DESK</p>
          <h2>Grow With Us</h2>
          <p>
            Looking to collaborate, outsource technology solutions, or engage
            with our engineering teams? Share your details and our corporate
            representatives will connect with you.
          </p>
          <ul>
            <li>Enterprise software development and consulting</li>
            <li>Digital engineering and technology partnerships</li>
            <li>Custom solutions tailored to business objectives</li>
          </ul>
        </div>

        <form className="grow-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-glow form-glow-a" />
          <div className="form-glow form-glow-b" />
          <input type="text" placeholder="Full name" aria-label="Full name" />
          <input
            type="tel"
            placeholder="Phone number"
            aria-label="Phone number"
          />
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit" className="btn btn-primary form-submit">
            Submit
          </button>
        </form>
      </section>

      <section className="internship-section" id="internship">
        <div className="internship-star internship-star-a">*</div>
        <div className="internship-star internship-star-b">*</div>
        <div className="internship-star internship-star-c">*</div>
        <div className="internship-inner">
          <p className="internship-kicker">PROGRAM ANNOUNCEMENT</p>
          <h2>Internship Program 2026</h2>
          <p>
            Hands-on projects, mentorship and placement guidance - join the
            next cohort.
          </p>
          <a href="#contact" className="btn internship-btn">
            Apply Now <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-col">
            <h3>Nexston Corporations Pvt Ltd</h3>
            <p>
              Nexston Corporations Pvt Ltd delivers enterprise software
              solutions, digital engineering services, and industry-aligned
              skilling programs focused on practical, real-world learning.
            </p>
          </div>

          <div className="footer-col">
            <h3>Corporate Office</h3>
            <p>
              No. 4/461, 2nd Floor, Suite #697,
              <br />
              Valamkottil Towers, Judgemukku,
              <br />
              Kakkanad, Kochi - 682021
            </p>
            <p>
              Email: support@nexston.in
              <br />
              Phone: +91 8301981869
            </p>
          </div>

          <div className="footer-col">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Facebook">
                Fb
              </a>
              <a href="#" aria-label="X">
                X
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
            <p>
              All certificates issued by Nexston can be verified through our
              official certificate verification portal.
            </p>
            <button type="button" className="verify-btn">
              Verify Certificate
            </button>
          </div>
        </div>
        <div className="site-footer-bottom">
          © 2026 Nexston Corporations Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
