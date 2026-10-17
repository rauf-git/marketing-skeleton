import type { CSSProperties } from "react";
import { renderSection } from "@marketing-skeleton/renderer";
import { website } from "./site";

export default function App() {
  const page = website.pages[0];

  if (!page) {
    return <main className="empty-state">No page is configured for this showcase.</main>;
  }

  const themeStyle = {
    "--brand-color": website.theme.colors?.primary ?? "#8b5cf6",
    "--accent-color": website.theme.colors?.accent ?? "#34d399",
  } as CSSProperties;

  return (
    <div className="site-shell" style={themeStyle}>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Marketing Skeleton home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>marketing<span className="brand-light">/skeleton</span></span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#sections">Sections</a>
          <a href="#architecture">Architecture</a>
          <a className="nav-link-strong" href="https://github.com/rauf-git/marketing-skeleton">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        {page.sections.map((section) => (
          <div id={section.type === "features.grid" ? "sections" : undefined} key={section.id}>
            {renderSection(section)}
          </div>
        ))}

        <section className="architecture-note" id="architecture">
          <div className="section-kicker">THE ENGINEERING PRINCIPLE</div>
          <h2>Shared source. Independent client sites.</h2>
          <p>
            The master repository is the source library. Each client project should contain
            a reviewed, tested snapshot of the selected code and assets—never a live dependency
            on this repository.
          </p>
          <div className="architecture-pills">
            <span>React + Vite</span><span>TypeScript</span><span>Zod validation</span><span>Explicit registry</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>marketing<span className="brand-light">/skeleton</span></span>
        </a>
        <span>Phase 1 foundation · Built for independent client projects</span>
      </footer>
    </div>
  );
}
