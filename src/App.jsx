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
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
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
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
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

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function FoundationPreview() {
  return (
    <main id="home">
      <section className="foundation-section">
        <div className="container foundation-grid">
          <div className="foundation-copy">
            <span className="eyebrow">
              PORTFOLIO FOUNDATION
            </span>

            <h1>
              Building a professional
              <span> digital identity.</span>
            </h1>

            <p className="foundation-description">
              A portfolio focused on Network Technology,
              enterprise networking, cybersecurity, and
              practical technical projects.
            </p>

            <div className="foundation-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-secondary" href="#about">
                Discover More
              </a>
            </div>

            <p className="foundation-note">
              DESIGN SYSTEM INITIALIZED
              <span className="status-dot" />
            </p>
          </div>

          <div className="design-card">
            <div className="design-card-header">
              <span>DESIGN SYSTEM</span>
              <span className="live-label">
                <span className="status-dot" />
                ACTIVE
              </span>
            </div>

            <div className="design-card-content">
              <p className="card-label">BRAND COLORS</p>

              <div className="swatch-grid">
                <div className="swatch">
                  <div className="swatch-color swatch-blue" />
                  <span>Deep Blue</span>
                  <code>#0B1F3A</code>
                </div>

                <div className="swatch">
                  <div className="swatch-color swatch-white" />
                  <span>White</span>
                  <code>#FFFFFF</code>
                </div>

                <div className="swatch">
                  <div className="swatch-color swatch-black" />
                  <span>Black</span>
                  <code>#111318</code>
                </div>
              </div>

              <div className="card-divider" />

              <p className="card-label">CORE PRINCIPLES</p>

              <div className="principle-list">
                <div className="principle">
                  <span className="principle-number">01</span>
                  <span>Clean & Professional</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <div className="principle">
                  <span className="principle-number">02</span>
                  <span>Responsive by Design</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <div className="principle">
                  <span className="principle-number">03</span>
                  <span>Built for Technical Work</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </div>

            <div className="design-card-footer">
              <span>VERSION 1.0</span>
              <span>S / PORTFOLIO</span>
            </div>
          </div>
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

        <p>
          Network Technology · Portfolio
        </p>

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
      <FoundationPreview />
      <Footer />
    </div>
  );
}

export default App;