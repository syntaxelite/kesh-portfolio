import { site } from "@/data/site";

function displayProfileUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={site.name}>
          <span className="wordmark-mark" aria-hidden="true">{site.mark}</span>
          <span>{site.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">{site.navigation[4].label}<span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{site.hero.eyebrow}</p>
            <h1>{site.hero.title}</h1>
            <p className="hero-description">{site.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{site.hero.primaryAction}<span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#about">{site.hero.secondaryAction}<span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <div className="panel-top"><span className="panel-symbol">{site.mark}</span><span>{site.location}</span></div>
            <div className="panel-visual">
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-center"><span>{site.hero.visualWords.map((word) => <span key={word}>{word}</span>)}</span></div>
              <span className="visual-index">{site.hero.visualIndex}</span>
            </div>
            <div className="panel-bottom"><span>{site.hero.visualFooter}</span><span>↗</span></div>
          </div>
          <div className="hero-location"><span className="location-dot" />{site.location}</div>
        </section>

        <section className="content-section work-section" id="work">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">{site.navigation[1].label}</p>
              <h2>{site.work.title}</h2>
              <p>{site.work.description}</p>
            </div>
            {site.work.projects.length > 0 && (
              <div className="project-grid">
                {site.work.projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <a className="project-link" href={project.href ?? "#work"}>
                      <div className="project-art" style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}>
                        <span className="project-status">{project.status}</span>
                        <span className="project-arrow" aria-hidden="true">↗</span>
                      </div>
                      <div className="project-meta"><div><h3>{project.title}</h3><p>{project.description}</p></div><span>{project.category}</span></div>
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="section-heading">
              <p className="eyebrow">{site.navigation[2].label}</p>
              <h2>{site.about.title}</h2>
            </div>
            <div className="about-copy">
              {site.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a className="text-link" href="#contact">{site.navigation[4].label}<span aria-hidden="true">↗</span></a>
            </div>
            <div className="about-note"><span className="note-mark">{site.mark}</span><span>{site.location}</span><span className="note-rule" /></div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">{site.navigation[3].label}</p>
              <h2>{site.skills.title}</h2>
              <p>{site.skills.description}</p>
            </div>
            {site.skills.items.length ? (
              <div className="skills-list">{site.skills.items.map((item, index) => (
                <article className="skill-row" key={item.name}><span className="skill-number">0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p><span className="skill-arrow" aria-hidden="true">↗</span></article>
              ))}</div>
            ) : <p className="empty-note">{site.skills.empty}</p>}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">{site.navigation[4].label}</p><h2>{site.contact.title}</h2><p>{site.contact.description}</p></div>
            <div className="contact-links">
              {site.contact.email && <a href={`mailto:${site.contact.email}`}>{site.contact.linkLabels.email}<span>{site.contact.email}</span></a>}
              {site.contact.whatsapp && <a href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(site.contact.whatsappMessage)}`} target="_blank" rel="noreferrer">{site.contact.linkLabels.whatsapp}<span>{site.contact.whatsapp}</span></a>}
              {Boolean(site.contact.linkedin) && <a href={site.contact.linkedin} target="_blank" rel="noreferrer">{site.contact.linkLabels.linkedin}<span>{displayProfileUrl(site.contact.linkedin)}</span></a>}
              {site.contact.github && <a href={site.contact.github} target="_blank" rel="noreferrer">{site.contact.linkLabels.github}<span>{displayProfileUrl(site.contact.github)}</span></a>}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark" aria-hidden="true">{site.mark}</span><span>{site.name}</span></a><span>{site.footer}</span><a href="#home">{site.backToTop} ↑</a></footer>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {site.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
    </>
  );
}
