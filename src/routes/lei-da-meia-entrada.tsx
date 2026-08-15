import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTitle } from "@/components/page-title";

export const Route = createFileRoute("/lei-da-meia-entrada")({
  head: () => ({
    meta: [
      { title: "Lei da Meia-entrada — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Entenda a Lei nº 12.933/2013, quem tem direito à meia-entrada e quais documentos são aceitos.",
      },
      { property: "og:title", content: "Lei da Meia-entrada — meiaentrada.org.br" },
      {
        property: "og:description",
        content: "Regras, beneficiários e documentos aceitos pela Lei da Meia-entrada.",
      },
    ],
  }),
  component: LeiPage,
});

function LeiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <PageTitle title="Lei da Meia-entrada" subtitle="(Lei nº 12.933/2013)" />

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            A Lei nº 12.933/2013 assegura o pagamento de metade do valor do ingresso em espetáculos
            artístico-culturais e esportivos a estudantes, pessoas com deficiência, jovens de baixa
            renda e pessoas com 60 anos ou mais.
          </p>

          <section>
            <h2 className="text-xl font-bold text-brand">Quem tem direito</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Estudantes regularmente matriculados, mediante apresentação da CIE.</li>
              <li>Pessoas com deficiência e um acompanhante, quando necessário.</li>
              <li>Jovens de 15 a 29 anos de baixa renda inscritos no CadÚnico.</li>
              <li>Pessoas idosas, a partir de 60 anos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">Documento de estudante</h2>
            <p className="mt-3">
              A Carteira de Identificação Estudantil (CIE) deve seguir o padrão único nacional, com
              certificação digital e QR Code que permite a validação pública da autenticidade do
              documento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">Limite de ingressos</h2>
            <p className="mt-3">
              O benefício é garantido em até 40% do total de ingressos disponíveis para cada
              sessão, espetáculo ou evento.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
