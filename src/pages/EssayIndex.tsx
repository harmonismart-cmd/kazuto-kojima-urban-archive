import { Link } from "wouter";
import { essays } from "../data";

export default function EssayIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="border-b border-border pb-10 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Archive</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Essays</h1>
        <p className="text-base text-muted-foreground max-w-xl">
          Writing on urban philosophy, sensibility theory, and methodology.
        </p>
      </div>

      <div className="space-y-0">
        {essays.map((e, i) => (
          <Link key={e.id} href={`/essays/${e.id}`} className="block border-b border-border py-8 hover:bg-accent -mx-6 px-6 transition-colors group">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{e.year}</p>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-xl font-light mb-2 leading-snug group-hover:text-foreground transition-colors">{e.title}</h2>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{e.publication}</p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{e.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
