import Link from 'next/link';

export function EditorialPage({ eyebrow, title, description, children }) {
  return (
    <article>
      <header className="bg-muted py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>
      </header>
      <div className="section-container py-12 md:py-16">
        <div className="max-w-3xl space-y-8 leading-relaxed">{children}</div>
      </div>
    </article>
  );
}

export function EditorialSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export function EditorialLink({ href, children }) {
  return <Link href={href} className="font-semibold text-primary underline underline-offset-4">{children}</Link>;
}
