import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTitle } from "@/components/page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Perguntas frequentes sobre a CIE, a validação do QR Code e o direito à meia-entrada.",
      },
      { property: "og:title", content: "FAQ — meiaentrada.org.br" },
      {
        property: "og:description",
        content: "Dúvidas frequentes sobre validação de CIE e meia-entrada.",
      },
    ],
  }),
  component: FaqPage,
});

const faq = [
  {
    q: "O que é a CIE?",
    a: "É a Carteira de Identificação Estudantil, documento padronizado nacionalmente que comprova o vínculo do estudante com a instituição de ensino.",
  },
  {
    q: "Como validar uma carteirinha?",
    a: "Basta ler o QR Code impresso no documento. A leitura abre esta página de validação, que exibe os dados do estudante e o certificado de atributo.",
  },
  {
    q: "O que significa 'Documento válido!'?",
    a: "Significa que a assinatura digital do certificado de atributo foi verificada com a chave pública da entidade emissora e que o documento está dentro do prazo de validade.",
  },
  {
    q: "Preciso apresentar outro documento além da CIE?",
    a: "Sim. O estabelecimento pode solicitar um documento oficial com foto para confirmar a identidade do portador.",
  },
  {
    q: "Quantos ingressos com desconto estão disponíveis?",
    a: "A lei garante meia-entrada em até 40% dos ingressos disponíveis para cada evento.",
  },
];

function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <PageTitle title="FAQ" subtitle="(perguntas frequentes)" />
        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base font-bold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-foreground/90">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <SiteFooter />
    </div>
  );
}
