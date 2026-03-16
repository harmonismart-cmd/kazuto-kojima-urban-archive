import { Link, useRoute } from "wouter";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Concept", href: "/concept" },
  { label: "Framework", href: "/framework" },
  { label: "Indicators", href: "/indicators" },
  { label: "Projects", href: "/projects" },
  { label: "Essays", href: "/essays" },
];

export function Nav() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          HAMO Archive
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [isActive] = useRoute(href === "/" ? "/" : `${href}*`);
  return (
    <Link
      href={href}
      className={`text-sm transition-colors ${
        isActive
          ? "text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer text-muted-foreground hover:text-foreground text-sm">
          Menu
        </summary>
        <div className="absolute right-0 top-6 bg-background border border-border shadow-sm py-2 min-w-32 z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
