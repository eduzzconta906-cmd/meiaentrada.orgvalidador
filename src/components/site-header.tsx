import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/lei-da-meia-entrada", label: "Lei da Meia-entrada" },
  { to: "/chaves-publicas", label: "Chaves públicas" },
  { to: "/faq", label: "FAQ" },
  { to: "/noticias", label: "Notícias" },
  { to: "/termos", label: "Termos de Uso e Política de Privacidade" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1.5 bg-gold" />
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="block" onClick={() => setOpen(false)}>
            <span className="flex flex-col items-center rounded-xl border-2 border-brand-foreground px-5 py-2">
              <span className="mb-1 h-0.5 w-24 bg-brand-foreground/90 sm:w-32" />
              <span className="text-2xl leading-none font-extrabold tracking-tight sm:text-3xl">
                meiaentrada<span className="text-sm font-semibold">.org.br</span>
              </span>
              <span className="mt-1 h-0.5 w-24 bg-brand-foreground/90 sm:w-32" />
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-brand-foreground/40 p-3 transition-colors hover:bg-brand-dark md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            {nav.slice(0, 5).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "underline underline-offset-4" }}
                className="transition-opacity hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="border-t border-brand-foreground/20 px-4 pb-4 md:hidden">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-brand-foreground/10 py-3 text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
