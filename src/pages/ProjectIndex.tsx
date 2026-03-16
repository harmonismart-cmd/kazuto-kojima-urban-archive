import { Link } from "wouter";
import { projects } from "../data";

export default function ProjectIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="border-b border-border pb-10 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Archive</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Projects</h1>
        <p className="text-base text-muted-foreground max-w-xl">
          Built projects applying sensibility frameworks to real places and communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} className="bg-background p-8 hover:bg-accent transition-colors group block">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs font-mono text-muted-foreground">{p.year}</p>
              <span className="text-border">·</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{p.type}</p>
            </div>
            <h2 className="text-2xl font-light mb-2 group-hover:text-foreground transition-colors">{p.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{p.location}</p>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
