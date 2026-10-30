
import { useState } from 'react';
import './App.css';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Sanduni portfolio home"
        >
          <span className="brand-mark">S.</span>
          <span className="brand-name">
            SANDUNI<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel ${menuOpen ? 'is-open' : ''}`}
        >
          <div className="nav-links">
            {navigationLinks.map((link) => (
              <a
                className="nav-link"
                href={link.href}
                key={link.label}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <main id="home">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="hero-status-dot" />
              NETWORK TECHNOLOGY PORTFOLIO
            </div>

            <p className="hero-intro">Hello, I'm Sanduni.</p>

            <h1 id="hero-heading">
              Building Secure
              <span>&amp; Reliable</span>
              Networks.
            </h1>

            <p className="hero-description">
              I'm a third-year ICT undergraduate at the University of
              Sri Jayewardenepura, specializing in Network Technology.
              I'm passionate about enterprise networking, network security,
              and developing practical technology solutions.
            </p>

            <div className="hero-focus">
              <span>Enterprise Networking</span>
              <span>Network Security</span>
              <span>Cybersecurity</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Projects <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-socials" aria-label="Social profiles">
              <a
                href="https://github.com/sandunidilrukshi"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <span className="social-divider" aria-hidden="true">/</span>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-profile-card" aria-label="Technical profile">
            <div className="profile-card-top">
              <span>TECHNICAL PROFILE</span>
              <span className="profile-card-index">01 / 04</span>
            </div>

            <div className="profile-monogram" aria-hidden="true">
              S<span>.</span>
            </div>

            <div className="profile-card-name">
              <h2>Network Technology</h2>
              <p>Learning. Building. Securing.</p>
            </div>

            <div className="profile-card-divider" />

            <p className="profile-label">AREAS OF INTEREST</p>

            <ul className="profile-interest-list">
              <li>
                <span className="interest-number">01</span>
                <span>Enterprise Network Design</span>
                <span aria-hidden="true">↗</span>
              </li>
              <li>
                <span className="interest-number">02</span>
                <span>Network Infrastructure</span>
                <span aria-hidden="true">↗</span>
              </li>
              <li>
                <span className="interest-number">03</span>
                <span>Network Security</span>
                <span aria-hidden="true">↗</span>
              </li>
              <li>
                <span className="interest-number">04</span>
                <span>Cybersecurity Projects</span>
                <span aria-hidden="true">↗</span>
              </li>
            </ul>

            <div className="profile-card-footer">
              <span>ICT UNDERGRADUATE</span>
              <span>S / PORTFOLIO</span>
            </div>
          </aside>
        </div>

        <div className="hero-bottom-line container">
          <span>NETWORKING · SECURITY · TECHNOLOGY</span>
          <a href="#about">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">
          SANDUNI<span>.</span>
        </a>

        <p>Network Technology · Portfolio</p>

        <span className="footer-year">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
