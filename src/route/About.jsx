import { Link } from "react-router-dom";

const values = [
  {
    n: "01",
    title: "Simplicity",
    text: "We remove the unnecessary so the important work can stand out. If a feature doesn't help, it doesn't ship.",
  },
  {
    n: "02",
    title: "Quality",
    text: "We build carefully and test honestly. Small, polished details matter more to us than impressive launches.",
  },
  {
    n: "03",
    title: "Honesty",
    text: "We tell you what will work and what won't — clearly, early, and without jargon.",
  },
  {
    n: "04",
    title: "Progress",
    text: "We improve steadily with every release, because good products are never truly finished.",
  },
];

const timeline = [
  { year: "2021", text: "Two founders start building internal tools for their own team." },
  { year: "2022", text: "The first external clients ask to use the platform." },
  { year: "2023", text: "NOVA becomes a dedicated product and services studio." },
  { year: "2024", text: "The team grows to help more businesses ship faster." },
  { year: "2025", text: "200+ teams now rely on NOVA every day." },
  { year: "2026", text: "The next chapter begins — new tools, new markets." },
];

export default function About() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Our story</p>
          <h1>Software that respects your time.</h1>
          <p className="intro-lead">
            We are a small team of designers and engineers who believe
            technology should remove complexity — not add to it. Since 2021
            we've helped growing businesses plan, build and scale simple
            digital products that people actually enjoy using.
          </p>
        </div>
      </section>

      <section className="mission-sec">
        <div className="container mission-grid">
          <div className="mission-stat">
            <p className="num">WHO WE ARE</p>
            <p className="big-number">6</p>
            <p>people. One shared belief: software should feel simple.</p>
          </div>
          <div className="mission-copy">
            <h2>Our mission</h2>
            <p>
              Most tools make work more complicated. We go the other way. Our
              mission is to give teams back their time by building products
              that are clear, reliable and easy to maintain.
            </p>
            <p>
              Whether it's a website, a web app or a longer product journey, we
              treat every project as a long-term partnership.
            </p>
          </div>
        </div>
      </section>

      <section className="values-sec">
        <div className="container">
          <div className="sec-head">
            <p className="eyebrow">What we stand for</p>
            <h2>Four principles guide every decision.</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div className="value-card" key={v.n}>
                <span className="num">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-sec dark">
        <div className="container">
          <div className="sec-head light">
            <p className="eyebrow">Our journey</p>
            <h2>A short history of doing good work.</h2>
          </div>
          <div className="timeline">
            {timeline.map((t) => (
              <div className="timeline-item" key={t.year}>
                <span className="timeline-year">{t.year}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="container cta-box">
          <h2>Want to work with a team like ours?</h2>
          <p>We're always happy to talk about your next project — no pressure.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}