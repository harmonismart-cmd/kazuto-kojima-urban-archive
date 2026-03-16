import { Link } from "wouter";
import { essays } from "../data";

interface Props {
  params: { id: string };
}

export default function EssayDetail({ params }: Props) {
  const essay = essays.find((e) => e.id === params.id);

  if (!essay) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Essay not found.</p>
        <Link href="/essays" className="text-sm hover:underline mt-2 block">← Back to Essays</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/essays" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest">
          ← Essays
        </Link>
      </div>

      <div className="border-b border-border pb-12 mb-12">
        <div className="flex flex-wrap items-baseline gap-4 mb-4">
          <p className="text-xs font-mono text-muted-foreground">{essay.year}</p>
          <span className="text-border text-xs">·</span>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{essay.publication}</p>
        </div>
        <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl">{essay.title}</h1>
      </div>

      <div className="max-w-3xl">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="md:pt-1">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Abstract</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-base leading-relaxed text-foreground font-editorial italic">{essay.excerpt}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:pt-1">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Note</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full text available upon request. This archive holds structured excerpts and abstracts. For access to complete essays, contact the author directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
