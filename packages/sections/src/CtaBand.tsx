import type { CtaBandSection as CtaBandConfig } from "@marketing-skeleton/schema";

export function CtaBand({ section }: { section: CtaBandConfig }) {
  const { heading, description, cta } = section.props;
  return (
    <section className="cta-section" aria-labelledby={section.id + "-heading"}>
      <div className="cta-panel">
        <div>
          <h2 id={section.id + "-heading"}>{heading}</h2>
          <p>{description}</p>
        </div>
        <a className="button-link" href={cta.href}>{cta.label} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
