import type { HeroSplitSection as HeroSplitConfig } from "@marketing-skeleton/schema";

export function HeroSplit({ section }: { section: HeroSplitConfig }) {
  const { eyebrow, heading, description, primaryCta, secondaryCta } = section.props;

  return (
    <section className="section-wrap hero-section" aria-labelledby={section.id + "-heading"}>
      <div>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 id={section.id + "-heading"}>{heading}</h1>
        <p className="hero-copy">{description}</p>
        <div className="hero-actions">
          <a className="button-link button-primary" href={primaryCta.href}>
            {primaryCta.label} <span aria-hidden="true">↗</span>
          </a>
          {secondaryCta ? (
            <a className="button-link button-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
      <div className="hero-visual" aria-label="Example website building blocks">
        <div className="window-top" aria-hidden="true">
          <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
        </div>
        <div className="visual-grid" aria-hidden="true">
          <div className="visual-tile visual-tile-accent"><strong>01</strong><span>Reusable sections</span></div>
          <div className="visual-tile"><strong>02</strong><span>Validated content</span></div>
          <div className="visual-tile"><strong>03</strong><span>Theme tokens</span></div>
          <div className="visual-tile"><strong>04</strong><span>Client exports</span></div>
        </div>
        <div className="visual-caption"><span>WEBSITE FOUNDATION</span><span>READY TO COMPOSE</span></div>
      </div>
    </section>
  );
}
