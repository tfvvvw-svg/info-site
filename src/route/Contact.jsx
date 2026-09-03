const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on the scope. Most projects start with a free discovery call, after which we share a clear fixed-price estimate.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused landing page can take 1–2 weeks, while a full web application usually takes 1–3 months. We agree on the timeline up front.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We love helping early-stage teams turn an idea into a working product with a clear, MVP-first approach.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support and maintenance, so your product stays healthy and keeps improving over time.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h1>Let's talk about your project.</h1>
          <p className="intro-lead">
            Have a question, an idea, or a problem you want to solve? Send us a
            message and we'll get back to you within one business day.
          </p>
        </div>
      </section>


      <section className="contact-sec">
        <div className="container contact-grid">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="What is this about?" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us a little about your project..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Send message
            </button>
          </form>

          <aside className="contact-side">
            <div className="contact-block">
              <p className="num">EMAIL</p>
              <p>
                <a href="mailto:hello@nova.io">hello@nova.io</a>
              </p>
            </div>
            <div className="contact-block">
              <p className="num">SUPPORT</p>
              <p>
                <a href="mailto:support@nova.io">support@nova.io</a>
              </p>
            </div>
            <div className="contact-block">
              <p className="num">RESPONSE TIME</p>
              <p>Usually within 24 hours</p>
            </div>
            <div className="contact-block">
              <p className="num">OFFICE</p>
              <p>Remote-first · Worldwide</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq-sec dark">
        <div className="container">
          <div className="sec-head light">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <p className="num light">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}