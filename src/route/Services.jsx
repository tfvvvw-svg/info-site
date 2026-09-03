import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "Web Development",
    text: "Fast, reliable websites and web apps built with clean code that is easy to maintain and scale.",
    details: ["Custom websites", "Web applications", "Integrations", "Performance & SEO"],
  },
  {
    n: "02",
    title: "Product Design",
    text: "Clean, understandable interfaces designed around how people actually use your product.",
    details: ["UX research", "UI design", "Design systems", "Prototyping"],
  },
  {
    n: "03",
    title: "Product Strategy",
    text: "Focused planning that helps you decide what to build, why, and in what order.",
    details: ["Discovery sessions", "Roadmaps", "Technical audits", "MVP planning"],
  },
  {
    n: "04",
    title: "Support & Growth",
    text: "Ongoing help to keep your product healthy, improve it over time, and scale smoothly.",
    details: ["Maintenance", "Iterative improvements", "Analytics", "Team training"],
  },
];

const process = [
  { n: "01", title: "Discovery", text: "We understand your goals, users and constraints." },
  { n: "02", title: "Planning", text: "We agree on a clear scope and a realistic timeline." },
  { n: "03", title: "Build", text: "We deliver in working increments with open communication." },
  { n: "04", title: "Launch & learn", text: "We ship, measure and keep improving together." },
];

export default function Services() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h1>Services built around outcomes.</h1>
          <p className="intro-lead">
            We don't sell hours — we help you reach a result. Whether you need
            a brand-new product or a refresh of an existing one, we bring the
            right mix of strategy, design and engineering to the table.
          </p>
        </div>
      </section>

      <section className="services-list-sec">
        <div className="container">
          {services.map((s) => (
            <article className="service-row" key={s.n}>
              <span className="num">{s.n}</span>
              <div className="service-main">
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
              <ul className="service-details">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process dark">
        <div className="container">
          <div className="sec-head light">
            <p className="eyebrow">How it works</p>
            <h2>A clear, predictable process.</h2>
            <p className="sec-lead light">
              You'll always know what's happening and what comes next.
            </p>
          </div>
          <div className="process-grid">
            {process.map((p) => (
              <div className="process-item" key={p.n}>
                <span className="num light">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="container cta-box">
          <h2>Not sure which service you need?</h2>
          <p>Start with a short conversation. We'll help you figure it out.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}