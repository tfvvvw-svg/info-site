import { Link } from "react-router-dom";

const stats = [
  { value: "200+", label: "Teams on board" },
  { value: "99.9%", label: "Uptime" },
  { value: "40+", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];

const features = [
  {
    n: "01",
    title: "One clear workspace",
    text: "Everything your team needs lives in a single, organized place. No scattered tools, no lost context.",
    points: ["Shared projects", "Live status", "Single source of truth"],
  },
  {
    n: "02",
    title: "Built for real workflows",
    text: "Set up a flow that matches how your team actually works, then let it run. Change it whenever you need.",
    points: ["Flexible stages", "Custom fields", "Simple automation"],
  },
  {
    n: "03",
    title: "Insights that matter",
    text: "Clear reports show where time goes and what moves the work forward, without drowning you in dashboards.",
    points: ["Progress tracking", "Time overview", "Clean exports"],
  },
];

const steps = [
  {
    n: "01",
    title: "Listen",
    text: "We start with a short conversation about your goals, your team and the problem you are trying to solve.",
  },
  {
    n: "02",
    title: "Design",
    text: "We shape a focused plan and a clean interface around what actually matters — nothing more, nothing less.",
  },
  {
    n: "03",
    title: "Build",
    text: "We develop in small, working increments so you can see progress early and give feedback as we go.",
  },
  {
    n: "04",
    title: "Grow",
    text: "After launch we stay close, refine details and help you scale smoothly as your needs change.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A calmer way to build software</p>
            <h1>
              Focus on the work that <span className="accent">matters.</span>
            </h1>
            <p className="hero-lead">
              NOVA is a simple platform and a partner team that helps growing
              businesses plan, build and ship better digital products — without
              the usual chaos.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                See our services
              </Link>
            </div>
            <p className="hero-note">No contracts. No hidden fees. 24h response.</p>
          </div>

          <div className="hero-panel">
            <p className="panel-label">WHAT WE DO</p>
            <p className="panel-title">Plan · Build · Scale</p>
            <ul className="panel-list">
              <li>Product strategy</li>
              <li>Web &amp; mobile apps</li>
              <li>Design systems</li>
              <li>Ongoing support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <p className="trust-label">TRUSTED BY TEAMS AT</p>
          <div className="trust-logos">
            <span>Northwind</span>
            <span>Hexlab</span>
            <span>Fermata</span>
            <span>Brightline</span>
            <span>Atlas&nbsp;&amp;&nbsp;Co</span>
          </div>
        </div>
      </section>

      <section className="stats-sec">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-sec">
        <div className="container">
          <div className="sec-head">
            <p className="eyebrow">Why teams choose NOVA</p>
            <h2>Everything you need, nothing you don't.</h2>
            <p className="sec-lead">
              We keep the product focused so your team can stay focused too.
            </p>
          </div>

          <div className="features">
            {features.map((f) => (
              <article className="feature-card" key={f.n}>
                <span className="num">{f.n}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <ul className="feature-points">
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-sec dark">
        <div className="container">
          <div className="sec-head light">
            <p className="eyebrow">How we work</p>
            <h2>From idea to launch, step by step.</h2>
          </div>

          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="num light">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-sec">
        <div className="container">
          <p className="quote-text">
            “Good software shouldn't make you work harder.
            <br />
            It should make the work feel <span className="accent">effortless.</span>”
          </p>
        </div>
      </section>

      <section className="cta-sec">
        <div className="container cta-box">
          <h2>Ready to build something better?</h2>
          <p>
            Tell us what you want to achieve and we'll show you the simplest
            path to get there.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}