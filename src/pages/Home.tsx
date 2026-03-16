import { Link } from "wouter";
import { siteData, concepts, frameworks, projects, essays } from "../data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Urban Archive</p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground leading-none mb-6">
          {siteData.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl font-light">
          {siteData.tagline}
        </p>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-border">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">About</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-foreground">
              {siteData.about}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Concepts */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-border">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Concepts</h2>
          <Link href="/concept" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {concepts.map((c) => (
            <Link key={c.id} href={`/concept/${c.id}`} className="bg-background p-6 hover:bg-accent transition-colors group">
              <p className="text-xs text-muted-foreground mb-3 font-mono">{c.year}</p>
              <h3 className="text-xl font-light mb-2 group-hover:text-foreground transition-colors">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Frameworks */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-border">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Frameworks</h2>
          <Link href="/framework" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-px bg-border">
          {frameworks.map((f) => (
            <Link key={f.id} href={`/framework/${f.id}`} className="bg-background flex items-baseline gap-6 p-5 hover:bg-accent transition-colors group">
              <span className="text-xs font-mono text-muted-foreground w-10 shrink-0">{f.year}</span>
              <div className="flex-1">
                <h3 className="text-base font-medium mb-1 group-hover:text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.tagline}</p>
              </div>
              <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-border">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Projects</h2>
          <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} className="bg-background p-6 hover:bg-accent transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-xs text-muted-foreground font-mono">{p.year}</p>
                <span className="text-border">·</span>
                <p className="text-xs text-muted-foreground">{p.type}</p>
              </div>
              <h3 className="text-xl font-light mb-2 group-hover:text-foreground transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.location}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Essays */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Essays</h2>
          <Link href="/essays" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-px bg-border">
          {essays.slice(0, 3).map((e) => (
            <Link key={e.id} href={`/essays/${e.id}`} className="bg-background flex gap-6 p-5 hover:bg-accent transition-colors group">
              <span className="text-xs font-mono text-muted-foreground w-10 shrink-0 pt-0.5">{e.year}</span>
              <div className="flex-1">
                <h3 className="text-base font-medium mb-1 leading-snug group-hover:text-foreground">{e.title}</h3>
                <p className="text-xs text-muted-foreground">{e.publication}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
