import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/lei-da-meia-entrada", label: "Lei da Meia-entrada" },
  { to: "/chaves-publicas", label: "Chaves públicas" },
  { to: "/faq", label: "FAQ" },
  { to: "/noticias", label: "Notícias" },
  { to: "/termos", label: "Termos de Uso e Política de Privacidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-16">
      <div className="h-1.5 bg-gold" />
      <div className="bg-footer">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center">
          <p className="text-3xl font-extrabold text-brand-foreground sm:text-4xl">
            meiaentrada.org.br
          </p>
          <ul className="mt-8 flex flex-col items-start gap-4 text-lg text-footer-foreground sm:items-center">
            {links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-opacity hover:opacity-75">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base text-footer-foreground">
            @Meiaentrada.org.br - Todos os Direitos Reservados 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
