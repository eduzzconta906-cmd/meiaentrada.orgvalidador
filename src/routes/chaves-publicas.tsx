import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTitle } from "@/components/page-title";

export const Route = createFileRoute("/chaves-publicas")({
  head: () => ({
    meta: [
      { title: "Chaves públicas — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Chaves públicas e certificados das entidades emissoras usados para validar a CIE.",
      },
      { property: "og:title", content: "Chaves públicas — meiaentrada.org.br" },
      {
        property: "og:description",
        content: "Baixe as chaves públicas das entidades emissoras da CIE.",
      },
    ],
  }),
  component: ChavesPage,
});

const emissores = [
  { sigla: "UNE", nome: "União Nacional dos Estudantes", validade: "12/2027" },
  { sigla: "UBES", nome: "União Brasileira dos Estudantes Secundaristas", validade: "08/2027" },
  { sigla: "ANPG", nome: "Associação Nacional de Pós-Graduandos", validade: "03/2028" },
];

function ChavesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <PageTitle title="Chaves públicas" subtitle="(entidades emissoras)" />

        <p className="mt-8 text-base leading-relaxed text-foreground/90">
          As chaves abaixo permitem verificar a assinatura digital dos certificados de atributo
          emitidos para as Carteiras de Identificação Estudantil.
        </p>

        <div className="mt-8">
          {emissores.map((e) => (
            <div key={e.sigla} className="border-b border-border py-5">
              <p className="text-base font-bold text-foreground">{e.sigla}</p>
              <p className="mt-1 text-base text-foreground/90">{e.nome}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Validade da chave: {e.validade}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-sm border border-border p-4 sm:p-6">
          <p className="text-center text-base tracking-wide text-muted-foreground">
            -----BEGIN PUBLIC KEY-----
          </p>
          <p className="mt-4 leading-8 break-all text-foreground/90">
            MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1cVQ3Ln9tFZ8kQKdX2m0pGhLwqTnRr4bYvS7cE1uJd
            0oPz9WmHbAsXeNvQK3lRUyTgIfCzMh6ODnVpXsLqEwYBrJkNtZFuMc7SxQiGaHdVoBLrn2ePuTKyWJXdA8qMbC
          </p>
          <p className="mt-4 text-center text-base tracking-wide text-muted-foreground">
            -----END PUBLIC KEY-----
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
