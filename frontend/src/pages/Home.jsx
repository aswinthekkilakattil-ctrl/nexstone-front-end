import "../Home.css";   // ðŸ‘ˆ THIS links the CSS
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import AIChatWidget from "../components/AIChatWidget";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import { Link } from "react-router-dom";

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

const API = import.meta.env.VITE_API_BASE;

const fallbackNews = [
  {
    id: "curated-1",
    title: "AI Agents Are Reshaping Software Workflows in 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/ai",
    source: "Curated",
    publishedAt: "2026-02-18T00:00:00.000Z",
  },
  {
    id: "curated-2",
    title: "Cloud-Native Architecture Trends Every Startup Should Track",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/cloud",
    source: "Curated",
    publishedAt: "2026-02-17T00:00:00.000Z",
  },
  {
    id: "curated-3",
    title: "Generative AI in Product Design: Practical Patterns That Work",
    image:
      "https://images.unsplash.com/photo-1677442135968-6f26f58f96bd?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/machinelearning",
    source: "Curated",
    publishedAt: "2026-02-16T00:00:00.000Z",
  },
  {
    id: "curated-4",
    title: "Modern Frontend Stacks in 2026: Performance, DX, and Scale",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/webdev",
    source: "Curated",
    publishedAt: "2026-02-15T00:00:00.000Z",
  },
  {
    id: "curated-5",
    title: "Open Source AI Tooling Is Moving Faster Than Enterprise Roadmaps",
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/opensource",
    source: "Curated",
    publishedAt: "2026-02-14T00:00:00.000Z",
  },
  {
    id: "curated-6",
    title: "Cybersecurity for AI Products: New Threat Models Teams Must Address",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/security",
    source: "Curated",
    publishedAt: "2026-02-13T00:00:00.000Z",
  },
  {
    id: "curated-7",
    title: "Vector Databases and Retrieval Patterns for Production Apps",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/database",
    source: "Curated",
    publishedAt: "2026-02-12T00:00:00.000Z",
  },
  {
    id: "curated-8",
    title: "Designing AI Interfaces That Users Can Actually Trust",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
    url: "https://dev.to/t/design",
    source: "Curated",
    publishedAt: "2026-02-11T00:00:00.000Z",
  },
];

const formatNewsDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const shuffle = (items) => {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

const NEWS_COUNT = 6;
const backupNewsImages = fallbackNews.map((item) => item.image);

const validateImage = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok) => {
      if (settled) return;
      settled = true;
      resolve(ok);
    };

    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;
    setTimeout(() => finish(false), 5000);
  });


  function Home() {
  // ---------------- STATES ----------------
  const [counts, setCounts] = useState({
    projects: 0,
    retention: 0,
    industries: 0,
    support: 0,
  });

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [newsPool, setNewsPool] = useState(fallbackNews);
  const [newsItems, setNewsItems] = useState(fallbackNews.slice(0, NEWS_COUNT));
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState("");
  const [newsLastUpdated, setNewsLastUpdated] = useState(new Date());
  const [brokenNewsImages, setBrokenNewsImages] = useState([]);

  // ---------------- STATS ANIMATION ----------------
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

      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // ---------------- FORM HANDLERS ----------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API}/grow-with-us/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message);
      setFormData({ full_name: "", phone: "", email: "" });

    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    let inFlightController = null;

    const cardStyles = ["news-style-wide", "news-style-tall", "news-style-compact"];

    const fetchNews = async (isInitial = false) => {
      if (isInitial) setNewsLoading(true);
      setNewsError("");

      try {
        inFlightController = new AbortController();

        const endpoints = [
          "https://dev.to/api/articles?tag=ai&per_page=14",
          "https://dev.to/api/articles?tag=technology&per_page=14",
          "https://dev.to/api/articles?tag=machinelearning&per_page=14",
          "https://dev.to/api/articles?tag=cloud&per_page=14",
        ];

        const results = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(endpoint, { signal: inFlightController.signal }).then((res) => {
              if (!res.ok) throw new Error("Unable to fetch news");
              return res.json();
            })
          )
        );

        const normalized = results
          .flat()
          .map((item) => ({
            id: item.id,
            title: item.title,
            image: item.cover_image || item.social_image || "",
            url: item.url,
            source: "DEV Community",
            publishedAt: item.published_at,
            description: item.description || "",
          }))
          .filter((item) => item.image && item.title && item.url && item.publishedAt);

        const unique = Array.from(
          new Map(normalized.map((item) => [item.url, item])).values()
        )
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .slice(0, 20);

        if (isMounted && unique.length > 0) {
          const validated = await Promise.all(
            unique.map(async (item) => ((await validateImage(item.image)) ? item : null))
          );

          const validItems = validated.filter(Boolean);

          const randomized = shuffle(
            validItems.length > 0 ? validItems : fallbackNews
          ).map((item, idx) => ({
            ...item,
            backupImage: backupNewsImages[idx % backupNewsImages.length],
            styleClass: cardStyles[Math.floor(Math.random() * cardStyles.length)],
          }));
          setBrokenNewsImages([]);
          setNewsPool(randomized);
          setNewsLastUpdated(new Date());
        } else if (isMounted) {
          setNewsError("Showing curated feed");
        }
      } catch (err) {
        if (isMounted && err.name !== "AbortError") {
          const randomizedFallback = shuffle(fallbackNews)
            .slice(0, NEWS_COUNT)
            .map((item, idx) => ({
            ...item,
            backupImage: backupNewsImages[idx % backupNewsImages.length],
            styleClass: cardStyles[Math.floor(Math.random() * cardStyles.length)],
            }));
          setBrokenNewsImages([]);
          setNewsPool(randomizedFallback);
          setNewsError("Showing curated feed");
        }
      } finally {
        if (isMounted) setNewsLoading(false);
      }
    };

    fetchNews(true);
    const intervalId = setInterval(() => fetchNews(false), 60000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      if (inFlightController) inFlightController.abort();
    };
  }, []);

  useEffect(() => {
    const nextItems = newsPool
      .filter((item) => !brokenNewsImages.includes(item.image))
      .slice(0, NEWS_COUNT);

    if (nextItems.length >= NEWS_COUNT) {
      setNewsItems(nextItems);
      return;
    }

    const fallback = shuffle(fallbackNews).filter(
      (item) =>
        !brokenNewsImages.includes(item.image) &&
        !nextItems.some((news) => news.url === item.url)
    );

    const normalizedFallback = fallback.map((item, idx) => ({
      ...item,
      backupImage: backupNewsImages[idx % backupNewsImages.length],
    }));

    setNewsItems([...nextItems, ...normalizedFallback].slice(0, NEWS_COUNT));
  }, [newsPool, brokenNewsImages]);

  const handleNewsImageError = (imageUrl) => {
    setBrokenNewsImages((prev) =>
      prev.includes(imageUrl) ? prev : [...prev, imageUrl]
    );
  };

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
    

      <main>
        <section className="hero" id="hero">
          <div className="bg-shape bg-shape-a" />
          <div className="bg-shape bg-shape-b" />
          <div className="hero-grid">
            <div className="hero-copy">
              <h2 className="text-[#2F3A4F] text-xs md:text-base font-semibold tracking-wide">
  Nexston Corporations Pvt Ltd
</h2>

              <h1 className="font-semibold">
  Empowering <br />
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
              <div className="art-stage">
                <section
                  className="news-pulse"
                  aria-label="Realtime AI and technology news"
                >
                  <div className="news-pulse-head">
                    <div>
                      <p>AI + TECH PULSE</p>
                      <h3>Realtime Headlines</h3>
                    </div>
                  </div>

                  {newsLoading && (
                    <div className="news-status">Fetching latest headlines...</div>
                  )}
                  {newsError && !newsLoading && (
                    <div className="news-status">{newsError}</div>
                  )}
                  {!newsLoading && (
                    <div className="news-status">
                      Updated {newsLastUpdated.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  )}

                  <div className="news-grid">
                    {newsItems.map((item, index) => (
                      <a
                        className={`news-card ${item.styleClass || ""}`}
                        href={item.url}
                        key={item.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          onError={(e) => {
                            if (item.backupImage && e.currentTarget.src !== item.backupImage) {
                              e.currentTarget.src = item.backupImage;
                              return;
                            }
                            handleNewsImageError(item.image);
                          }}
                        />
                        <div className="news-card-copy">
                          <span>{item.source}</span>
                          <h4>{item.title}</h4>
                          {item.description && (
                            <small>{item.description}</small>
                          )}
                          <p>{formatNewsDate(item.publishedAt)}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                </section>
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
<p className="grow-tag text-xs md:text-base">
  PARTNERSHIP DESK
</p>
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

      <form className="grow-form" onSubmit={handleSubmit}>
        <div className="form-glow form-glow-a" />
        <div className="form-glow form-glow-b" />

        {message && (
          <div className="text-green-600 text-sm bg-green-50 p-2 rounded">
            {message}
          </div>
        )}

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          name="full_name"
          placeholder="Full name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary form-submit disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
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
          <a href="/dashboard" className="btn internship-btn">
            Apply Now <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>
            <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">

 

</div>




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
            <div className="social-links flex gap-4 text-xl">
  <a
    href="https://www.instagram.com/nexston.corps/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/nexston.corps/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-blue-600 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/Nexston_corps"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="hover:text-black transition"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.linkedin.com/company/nexston-corporations-pvt-ltd/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-blue-700 transition"
  >
    <FaLinkedinIn />
  </a>
</div>

            <p>
              All certificates issued by Nexston can be verified through our
              official certificate verification portal.
            </p>
            <Link to="/verify-certificate">
  <button type="button" className="verify-btn">
    Verify Certificate
  </button>
</Link>
          </div>
        </div>
        <div className="site-footer-bottom">
          Â© 2026 Nexston Corporations Pvt Ltd. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;
