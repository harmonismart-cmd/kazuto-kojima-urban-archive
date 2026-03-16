export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Kazuto Kojima Urban Archive</p>
          <p className="text-xs text-muted-foreground mt-1">HAMO — Urban Philosophy, Frameworks, Projects</p>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kazuto Kojima</p>
      </div>
    </footer>
  );
}
