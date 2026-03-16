import { Link } from "wouter";
import { concepts } from "../data";

interface Props {
  params: { id: string };
}

export default function ConceptDetail({ params }: Props) {
  const concept = concepts.find((c) => c.id === params.id);

  if (!concept) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Concept not found.</p>
        <Link href="/concept" className="text-sm hover:underline mt-2 block">← Back to Concepts</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/concept" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest">
          ← Concepts
        </Link>
      </div>

      <div className="border-b border-border pb-12 mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <p className="text-xs font-mono text-muted-foreground">{concept.year}</p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Concept</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-5 leading-none">{concept.title}</h1>
        <p className="text-lg text-muted-foreground font-light max-w-xl">{concept.tagline}</p>
      </div>

      <div className="space-y-16 max-w-3xl">
        <Section label="Concept" content={concept.concept} />
        <Section label="Framework" content={concept.framework} />
        <Section label="Application" content={concept.application} />
      </div>
    </div>
  );
}

function Section({ label, content }: { label: string; content: string }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <div className="md:pt-1">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
      <div className="md:col-span-3">
        <p className="text-base leading-relaxed text-foreground">{content}</p>
      </div>
    </div>
  );
}
