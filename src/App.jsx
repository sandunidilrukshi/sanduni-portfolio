
import { useEffect, useState } from 'react';
import './App.css';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
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
      <section
  id="home"
  className="hero-section"
  aria-labelledby="hero-heading"
>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
  <span className="hero-status-dot" />
  PERSONAL PORTFOLIO
</div>

<p className="hero-intro">Hello, I'm</p>

<h1 id="hero-heading">
  Sanduni
  <span>Dilrukshika.</span>
</h1>

<p className="hero-tagline">
  Building Secure &amp; Reliable Networks.
</p>

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
                href="https://www.linkedin.com/in/sanduni-dilrukshika-b897a5385/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-profile-card" aria-label="my profile">
            <div className="profile-card-top">
              <span>MY PROFILE</span>
              <span className="profile-card-index">01 / 04</span>
            </div>

            <div className="profile-photo">
  <img
    src="/images/sanduni-profile.png"
    alt="Portrait of Sanduni"
  />
</div>

            <div className="profile-card-name">
  <h2>Sanduni Dilrukshika</h2>
  <p>ICT Undergraduate | Network Technology</p>
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

function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2 id="about-heading">
            About <span>Me.</span>
          </h2>
          <p>
            A little about my academic journey, technical interests,
            and approach to learning.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <span className="about-small-label">MY INTRODUCTION</span>

            <h3>
              Interested in building technology that is
              <span> reliable, secure, and meaningful.</span>
            </h3>

            <p>
              I am a third-year ICT undergraduate at the University of
              Sri Jayewardenepura, with a focus on Network Technology.
              My academic journey has developed my interest in computer
              networks, network infrastructure, and the role of security
              in modern digital environments.
            </p>

            <p>
              I enjoy learning through practical work, exploring network
              configurations, troubleshooting connectivity, and developing
              technical projects. I aim to strengthen my knowledge by
              applying concepts to realistic networking and cybersecurity
              scenarios.
            </p>

            <p>
              I am continuously working to improve my technical abilities,
              problem-solving skills, and understanding of secure network
              design.
            </p>

            <a className="about-text-link" href="#projects">
              Explore my technical work <span aria-hidden="true">↗</span>
            </a>
          </div>

          <aside className="about-highlight-card">
            <div className="about-card-top">
              <span>PROFILE OVERVIEW</span>
              <span aria-hidden="true">✳</span>
            </div>

            <div className="about-highlight-item">
              <span className="about-highlight-number">01</span>
              <div>
                <h4>Academic Background</h4>
                <p>ICT Undergraduate</p>
              </div>
            </div>

            <div className="about-highlight-item">
              <span className="about-highlight-number">02</span>
              <div>
                <h4>Specialization</h4>
                <p>Network Technology</p>
              </div>
            </div>

            <div className="about-highlight-item">
              <span className="about-highlight-number">03</span>
              <div>
                <h4>Technical Interests</h4>
                <p>Networking &amp; Cybersecurity</p>
              </div>
            </div>

            <div className="about-highlight-item">
              <span className="about-highlight-number">04</span>
              <div>
                <h4>Learning Approach</h4>
                <p>Practical, project-based learning</p>
              </div>
            </div>

            <div className="about-card-bottom">
              <span>CURIOUS BY NATURE</span>
              <span>ALWAYS LEARNING</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


const skillCategories = [
  {
    number: '01',
    title: 'Networking',
    description:
      'Network infrastructure, switching, routing, and enterprise network configuration.',
    icon: '01',
    skills: [
      'VLAN',
      'Inter-VLAN Routing',
      'STP',
      'EtherChannel',
      'LACP',
      'OSPF',
      'Access Control Lists',
      'DHCP',
      'NAT',
      'SSH',
      
    ],
  },
  {
    number: '02',
    title: 'Cybersecurity',
    description:
      'Network monitoring, access control, and security-focused project concepts.',
    icon: '02',
    skills: [
      'Network Intrusion Detection',
      'NIDS',
      'Zero Trust Concepts',
      'Network Security',
      'Access Control',
      'Security Monitoring',
    ],
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Technologies used to build web applications and practical technical projects.',
    icon: '03',
    skills: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'HTML',
      'CSS',
      'Socket.IO',
    ],
  },
  {
    number: '04',
    title: 'Tools & Databases',
    description:
      'Tools and platforms used during development, network labs, and project work.',
    icon: '04',
    skills: [
      'MongoDB',
      'MongoDB Compass',
      'Git',
      'GitHub',
      'Cisco Packet Tracer',
      'Postman',
      'Visual Studio Code',
    ],
  },
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY TECHNICAL TOOLKIT</span>

          <h2 id="skills-heading">
            Technical <span>Skills.</span>
          </h2>

          <p>
            Technologies, concepts, and tools I have explored through
            academic learning and practical project development.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.number}>
              <div className="skill-card-header">
                <span className="skill-card-number">
                  {category.number}
                </span>

                <span className="skill-card-symbol" aria-hidden="true">
                  {category.icon}
                </span>
              </div>

              <h3>{category.title}</h3>

              <p className="skill-card-description">
                {category.description}
              </p>

              <div
                className="skill-tags"
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span className="skills-note-mark" aria-hidden="true">i</span>
          <p>
            These skills represent technologies and concepts explored
            through my studies and hands-on projects. I continue to
            develop and strengthen my practical knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    number: '01',
    category: 'NETWORK ENGINEERING',
    title: 'LinkLogic',
    description:
      'An interactive network design and troubleshooting simulator for creating network topologies, configuring devices, testing connectivity, and identifying common network configuration issues.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Flow',
      'CSS',
      'Node.js',
    ],
    highlights: [
      'Interactive network topology design',
      'PC, switch, and router configuration',
      'IPv4 addressing and connectivity testing',
      'Network validation and troubleshooting guidance',
      'Topology save, load, import, and export',
    ],
    github: 'https://github.com/sandunidilrukshi/LinkLogic',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '02',
    category: 'ENTERPRISE NETWORKING',
    title: 'Secure Multi-Site Enterprise Network',
    description:
      'A Cisco Packet Tracer enterprise network simulation demonstrating secure network infrastructure and connectivity across multiple network segments.',
    technologies: [
      'Cisco Packet Tracer',
      'VLAN',
      'Inter-VLAN Routing',
      'HSRP',
      'LACP EtherChannel',
      'RSTP',
      'WLC',
    ],
    highlights: [
      'VLAN-based network segmentation',
      'Inter-VLAN routing',
      'HSRP gateway redundancy',
      'LACP EtherChannel and RSTP',
      'Enterprise services and wireless integration',
    ],
    github:
      'https://github.com/sandunidilrukshi/Secure-MultiSite-Enterprise-Network',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '03',
    category: 'CYBERSECURITY',
    title: 'PhishGuard',
    description:
      'An educational phishing-awareness web application that helps users inspect URLs and email text for common phishing indicators and evaluate basic password strength.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Python',
      'Flask',
      'REST API',
    ],
    highlights: [
      'URL analysis for phishing warning indicators',
      'Email text analysis',
      'Basic password strength checking',
      'Recent URL scan history',
      'Frontend and backend integration',
    ],
    github: 'https://github.com/sandunidilrukshi/PhishGuard',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '04',
    category: 'CYBERSECURITY',
    title: 'Network Intrusion Detection System',
    description:
      'A web-based Network Intrusion Detection System project with a dashboard for displaying security alerts and working with stored network log information.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    highlights: [
      'Real-time alert updates using Socket.IO',
      'MongoDB-based log storage',
      'Log search functionality',
      'Log export functionality',
      'Security monitoring dashboard',
    ],
    github: 'https://github.com/sandunidilrukshi/NIDS_project',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '05',
    category: 'ZERO TRUST SECURITY',
    title: 'Zero Trust Network Architecture Simulator',
    description:
      'A simulator exploring Zero Trust Network Architecture through identity-based authentication, device trust scoring, access control, security monitoring, and risk-based decisions.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    highlights: [
      'Identity-based authentication',
      'Device trust scoring',
      'Access control',
      'Security monitoring',
      'Risk-based access decisions',
    ],
    github:
      'https://github.com/sandunidilrukshi/zero-trust-network-architecture-simulator',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '06',
    category: 'NETWORK ANALYSIS',
    title: 'Network Traffic Analysis Using Wireshark',
    description:
      'A practical network traffic analysis project using Wireshark to capture, inspect, and understand common network protocols and packet behaviour.',
    technologies: [
      'Wireshark',
      'Npcap',
      'ICMP',
      'DNS',
      'TCP',
      'UDP',
      'DHCP',
    ],
    highlights: [
      'ICMP Echo Request and Reply inspection',
      'DNS query and response analysis',
      'TCP three-way handshake analysis',
      'DHCP packet inspection',
      'TCP retransmission and protocol statistics',
    ],
    github:
      'https://github.com/sandunidilrukshi/Network-Traffic-Analysis-Using-Wireshark',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '07',
    category: 'NETWORK MONITORING',
    title: 'Network Monitor Dashboard',
    description:
      'A real-time network monitoring dashboard that tracks device availability using ICMP ping and displays online/offline status and response time.',
    technologies: [
      'Node.js',
      'Express.js',
      'React',
      'ICMP',
    ],
    highlights: [
      'Device availability monitoring',
      'Online and offline status display',
      'Response time monitoring',
      'Web-based monitoring dashboard',
    ],
    github:
      'https://github.com/sandunidilrukshi/network-monitor-dashboard',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '08',
    category: 'NETWORK ENGINEERING',
    title: 'Cisco Enterprise VLAN Network',
    description:
      'A Cisco Packet Tracer enterprise networking project focused on VLAN-based network segmentation, inter-VLAN communication, and network access control.',
    technologies: [
      'Cisco Packet Tracer',
      'VLAN',
      'Inter-VLAN Routing',
      'DHCP',
      'ACL',
      'SSH',
      'Port Security',
    ],
    highlights: [
      'Department-based VLAN configuration',
      'Inter-VLAN routing',
      'DHCP configuration',
      'Access Control List implementation',
      'SSH and port security configuration',
    ],
    github:
      'https://github.com/sandunidilrukshi/Cisco-Enterprise-VLAN-Network',
    githubLabel: 'View GitHub Repository',
  },
  {
    number: '09',
    category: 'SOFTWARE DEVELOPMENT',
    title: 'Library Management System',
    description:
      'A full-stack Library Management System project developed using the MERN stack.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
    ],
    highlights: [
      'MERN stack application development',
      'Frontend and backend project structure',
    ],
    github:
      'https://github.com/sandunidilrukshi/Library-Management-System',
    githubLabel: 'View GitHub Repository',
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            SELECTED WORK
          </span>

          <h2 id="projects-heading">
            Projects & <span>Practical Work.</span>
          </h2>

          <p>
            A selection of networking and cybersecurity projects
            that reflect my academic learning and hands-on
            technical exploration.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">
                  PROJECT / {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-details">
                  <h4>Key Areas</h4>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies & Concepts</h4>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-card-footer">
                {project.github ? (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repository in a new tab`}
                  >
                    {project.githubLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">
                    {project.githubLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Project descriptions highlight the concepts and
          implementation areas explored. Please refer to each
          repository for the available source code and project
          documentation.
        </p>
      </div>
    </section>
  );
}
function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-content">
            <span className="section-eyebrow">
              GET IN TOUCH
            </span>

            <h2 id="contact-heading">
              Let's Connect & <span>Collaborate.</span>
            </h2>

            <p className="contact-description">
              I am interested in networking, cybersecurity,
              and technology-related opportunities. Feel free
              to reach out for professional connections,
              internship opportunities, or project discussions.
            </p>

            <a
              className="contact-email-button"
              href="mailto:sandunidilrukshi49@gmail.com"
              aria-label="Send an email to Sanduni Dilrukshi"
            >
              <span className="contact-email-icon" aria-hidden="true">
                @
              </span>

              <span>
                <small>EMAIL ME</small>
                <strong>sandunidilrukshi49@gmail.com</strong>
              </span>

              <span className="contact-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="contact-side">
            <div className="contact-side-heading">
              <span className="contact-side-number">01 / CONNECT</span>
              <h3>Find me online.</h3>
              <p>
                Explore my technical work and professional profile.
              </p>
            </div>

            <div className="contact-social-links">
              <a
                className="contact-social-link"
                href="https://github.com/sandunidilrukshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile in a new tab"
              >
                <span className="social-icon" aria-hidden="true">
                  GH
                </span>

                <span className="social-link-text">
                  <strong>GitHub</strong>
                  <small>Explore my repositories</small>
                </span>

                <span className="social-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="contact-social-link"
                href="https://www.linkedin.com/in/sanduni-dilrukshika-b897a5385/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile in a new tab"
              >
                <span className="social-icon" aria-hidden="true">
                  in
                </span>

                <span className="social-link-text">
                  <strong>LinkedIn</strong>
                  <small>Connect professionally</small>
                </span>

                <span className="social-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div className="contact-availability">
              <span className="availability-dot" aria-hidden="true"></span>
              <p>
                Open to professional connections and
                technology-related opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY ACADEMIC JOURNEY</span>
          <h2 id="education-heading">
            Education<span>.</span>
          </h2>
          <p>
            The academic foundation behind my interest in technology
            and networking.
          </p>
        </div>

        <article className="education-card">
          <div className="education-card-marker" aria-hidden="true">
            <span>01</span>
          </div>

          <div className="education-content">
            <span className="education-status">
              UNDERGRADUATE STUDIES
            </span>

            <h3>University of Sri Jayewardenepura</h3>

            <p className="education-program">
              Information and Communication Technology (ICT)
            </p>

            <div className="education-meta">
              <span>Third-Year Undergraduate</span>
              <span className="education-meta-divider" />
              <span>Focus: Network Technology</span>
            </div>

            <div className="education-focus-block">
              <span>AREA OF FOCUS</span>
              <p>
                Network Technology — developing an academic and practical
                foundation in computer networks, network infrastructure,
                and network security.
              </p>
            </div>
          </div>

          <div className="education-card-side" aria-hidden="true">
            <span>ICT</span>
            <span>NETWORK</span>
            <span>TECHNOLOGY</span>
          </div>
        </article>
      </div>
    </section>
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
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const animatedElements = document.querySelectorAll(
      [
        '.hero-copy',
        '.hero-profile-card',
        '.section-heading',
        '.about-main',
        '.about-highlight-card',
        '.education-card',
        '.skill-card',
        '.skills-note',
        '.project-card',
        '.contact-wrapper',
      ].join(',')
    );

    animatedElements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');

      if (
        element.matches('.skill-card, .project-card')
      ) {
        element.style.setProperty(
          '--reveal-delay',
          `${(index % 4) * 100}ms`
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
  <div className="app-shell">
    <Navbar />
    <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


export default App;
