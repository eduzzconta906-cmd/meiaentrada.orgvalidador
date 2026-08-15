import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTitle } from "@/components/page-title";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso e Política de Privacidade — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Condições de uso do serviço de validação de CIE e tratamento de dados pessoais conforme a LGPD.",
      },
      {
        property: "og:title",
        content: "Termos de Uso e Política de Privacidade — meiaentrada.org.br",
      },
      {
        property: "og:description",
        content: "Regras de uso da plataforma e política de privacidade.",
      },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <PageTitle title="Termos de Uso" subtitle="e Política de Privacidade" />

        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-bold text-brand">1. Objeto</h2>
            <p className="mt-3">
              Esta plataforma permite a consulta pública da autenticidade de Carteiras de
              Identificação Estudantil emitidas pelas entidades estudantis reconhecidas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">2. Uso permitido</h2>
            <p className="mt-3">
              A consulta deve ser feita exclusivamente para verificar o direito à meia-entrada. É
              vedada a coleta automatizada ou o uso comercial dos dados exibidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">3. Dados pessoais</h2>
            <p className="mt-3">
              Os dados apresentados na validação limitam-se ao necessário para comprovar o vínculo
              estudantil, em conformidade com a Lei nº 13.709/2018 (LGPD). Não há armazenamento de
              informações do visitante que realiza a consulta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">4. Responsabilidade</h2>
            <p className="mt-3">
              As informações exibidas são de responsabilidade da entidade emissora do documento,
              que responde pela sua exatidão e atualização.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand">5. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre estes termos podem ser encaminhadas à entidade emissora indicada no
              campo “Emissor” da validação.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
