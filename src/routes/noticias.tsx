import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTitle } from "@/components/page-title";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Novidades sobre a Lei da Meia-entrada, emissão da CIE e validação de documentos estudantis.",
      },
      { property: "og:title", content: "Notícias — meiaentrada.org.br" },
      {
        property: "og:description",
        content: "Atualizações sobre CIE, meia-entrada e entidades emissoras.",
      },
    ],
  }),
  component: NoticiasPage,
});

const noticias = [
  {
    data: "10/08/2026",
    titulo: "Novo padrão de QR Code entra em vigor para as CIEs",
    resumo:
      "A partir deste mês todas as carteirinhas emitidas passam a trazer o QR Code com certificado de atributo em formato PEM.",
  },
  {
    data: "22/07/2026",
    titulo: "Entidades emissoras publicam chaves públicas atualizadas",
    resumo:
      "As chaves usadas na verificação de assinatura foram renovadas e já estão disponíveis para consulta pública.",
  },
  {
    data: "05/06/2026",
    titulo: "Fiscalização reforça limite de 40% de ingressos com meia-entrada",
    resumo:
      "Órgãos de defesa do consumidor orientam casas de espetáculo sobre o cumprimento da Lei nº 12.933/2013.",
  },
];

function NoticiasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <PageTitle title="Notícias" />
        <div className="mt-8">
          {noticias.map((n) => (
            <article key={n.titulo} className="border-b border-border py-6">
              <p className="text-sm font-medium text-muted-foreground">{n.data}</p>
              <h2 className="mt-2 text-xl font-bold text-brand">{n.titulo}</h2>
              <p className="mt-2 text-base leading-relaxed text-foreground/90">{n.resumo}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
