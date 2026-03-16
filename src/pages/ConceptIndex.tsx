import { Link } from "wouter";
import { concepts } from "../data";

export default function ConceptIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="border-b border-border pb-10 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Archive</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Concepts</h1>
        <p className="text-base text-muted-foreground max-w-xl">
          Foundational ideas in urban philosophy developed through research, writing, and practice.
        </p>
      </div>

      <div className="space-y-0">
        {concepts.map((c, i) => (
          <Link key={c.id} href={`/concept/${c.id}`} className="block border-b border-border py-8 hover:bg-accent -mx-6 px-6 transition-colors group">
            <div className="grid md:grid-cols-4 gap-4 items-start">
              <div>
                <p className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{c.year}</p>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-light mb-2 group-hover:text-foreground transition-colors">{c.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{c.tagline}</p>
                <p className="text-sm text-foreground leading-relaxed line-clamp-3">{c.concept}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
