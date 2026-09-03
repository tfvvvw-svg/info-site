import { Link, NavLink } from "react-router-dom";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/about", label: "Our process" },
      { to: "/services", label: "What we build" },
      { to: "/contact", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <NavLink to="/" className="brand footer-logo">
              NOVA<span className="dot">.</span>
            </NavLink>
            <p>Simple, reliable software for teams that want to move fast.</p>
            <Link to="/contact" className="footer-cta-link">
              Start a project →
            </Link>
          </div>

          <div className="footer-cols">
            {cols.map((col) => (
              <div className="footer-col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:hello@nova.io">hello@nova.io</a>
                </li>
                <li>
                  <a href="mailto:support@nova.io">support@nova.io</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NOVA. All rights reserved.</p>
          <nav className="footer-nav">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}