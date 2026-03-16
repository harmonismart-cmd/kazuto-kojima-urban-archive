import { Link } from "wouter";
import { frameworks } from "../data";

interface Props {
  params: { id: string };
}

export default function FrameworkDetail({ params }: Props) {
  const fw = frameworks.find((f) => f.id === params.id);

  if (!fw) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-muted-foreground">Framework not found.</p>
        <Link href="/framework" className="text-sm hover:underline mt-2 block">← Back to Frameworks</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/framework" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest">
          ← Frameworks
        </Link>
      </div>

      <div className="border-b border-border pb-12 mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <p className="text-xs font-mono text-muted-foreground">{fw.year}</p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Framework</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-5 leading-none">{fw.title}</h1>
        <p className="text-lg text-muted-foreground font-light max-w-xl">{fw.tagline}</p>
      </div>

      <div className="space-y-16 max-w-3xl">
        <Section label="Concept" content={fw.concept} />
        <Section label="Framework" content={fw.framework} />
        {fw.diagram && <DiagramPlaceholder title={fw.title} />}
        <Section label="Application" content={fw.application} />
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

function DiagramPlaceholder({ title }: { title: string }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <div className="md:pt-1">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Diagram</p>
      </div>
      <div className="md:col-span-3">
        <div className="border border-dashed border-border rounded-sm p-8 flex items-center justify-center bg-secondary/30">
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Diagram</p>
            <p className="text-sm text-muted-foreground">{title} — Structural Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}
