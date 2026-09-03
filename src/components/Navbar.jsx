import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <NavLink to="/" className="brand">
          NOVA<span className="dot">.</span>
        </NavLink>

        <div className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn btn-primary nav-cta">
          Start a project
        </Link>
      </nav>
    </header>
  );
}