import type { FeatureGridSection as FeatureGridConfig } from "@marketing-skeleton/schema";

export function FeatureGrid({ section }: { section: FeatureGridConfig }) {
  const { heading, description, items } = section.props;
  return (
    <section className="feature-section" aria-labelledby={section.id + "-heading"}>
      <div className="section-wrap">
        <div className="section-kicker">THE FOUNDATION</div>
        <h2 className="section-heading" id={section.id + "-heading"}>{heading}</h2>
        {description ? <p className="section-description">{description}</p> : null}
        <div className="feature-grid">
          {items.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-label">{item.label ?? String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
