import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import fotoEstudante from "@/assets/foto-estudante.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Validação de CIE — meiaentrada.org.br" },
      {
        name: "description",
        content:
          "Valide a Carteira de Identificação Estudantil (CIE) e confira o certificado de atributo em formato PEM.",
      },
      { property: "og:title", content: "Validação de CIE — meiaentrada.org.br" },
      {
        property: "og:description",
        content: "Consulte a autenticidade de uma Carteira de Identificação Estudantil.",
      },
    ],
  }),
  component: Home,
});

const PEM = `MIID/jCCAuYCAQEwgYCgfjB5pHcwdTELMAkGA1UEBhMCQIIxEzARBgNVBAoMCklDUC1CcmFzaWwxJjAkBgNVBAsMHVVOOSUFPIE5BQ0lPTkFMIERPUyBFU1RVREFOVEVTMSkwJwYDVQQDDCBBZHJpYW5vIEd1c3Rhdm8gQ3J1eiBkZSBPbGl2ZWlyYQIBAaCB2zCB2KSB1TCB0jELMAkGA1UEBhMCQIIxEzARBgNVBAoMCklDUC1CcmFzaWwxFzAVBgNVBAsMDjE0MTIxOTU3MDAwMTA5MRkwFwYDVQQLDBBWaWRlb2NvbmZlcmVuY2lhMRswGQYDVQQLDBJBQyBQBWQUxJRCBCUkFTSUwwVjUxGzAZBgNVBAsMElBlc3NvYSBKdXJpZGljYSBBBMzEYMBYGA1UECwwPQUMgVkFMSUQgQlJBU0lMMMSYwJAYDVQQDDB1VTklBTyBOQUNJT05BTCBET1MgRVNUVURBTlRFUw==`;

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border py-4">
      <p className="text-base font-bold text-foreground">{label}</p>
      <p className="mt-1 text-base text-foreground/90">{value}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-10">
        <h1 className="text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
          Validação de CIE{" "}
          <span className="text-2xl font-bold sm:text-3xl">
            (Carteira de Identificação Estudantil)
          </span>
        </h1>
        <div className="mt-4 h-1.5 w-4/5 bg-brand" />

        <div className="mt-10 rounded-md bg-success-surface px-6 py-6 text-center">
          <p className="text-2xl font-medium text-success">Documento válido!</p>
        </div>

        <p className="mt-6 text-center text-base leading-relaxed text-foreground/90">
          UNE atesta que Adriano Gustavo Cruz de Oliveira é estudante e está regularmente
          matriculado(a) em Direito da instituição Uniao Capixaba de Ensino Superior - Uces
        </p>

        <section className="mt-8">
          <Row label="Nome:" value="Adriano Gustavo Cruz de Oliveira" />
          <Row label="Instituição:" value="Uniao Capixaba de Ensino Superior - Uces" />
          <Row label="Curso:" value="Direito" />
          <Row label="Documento de Identificação:" value="000000001761351" />
          <Row label="Emissor:" value="UNE" />
        </section>

        <div className="mt-8 flex justify-center">
          <img
            src={fotoEstudante.url}
            alt="Foto da estudante na Carteira de Identificação Estudantil"
            width={182}
            height={244}
            className="h-[244px] w-[182px] rounded-sm object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-foreground">
          Certificado de Atributo em formato PEM:
        </h2>
        <div className="mt-4 rounded-sm border border-border p-4 sm:p-6">
          <p className="text-center text-base tracking-wide text-muted-foreground">
            -----BEGIN CERTIFICATE-----
          </p>
          <p className="mt-4 leading-8 break-all text-foreground/90">{PEM}</p>
          <p className="mt-4 text-center text-base tracking-wide text-muted-foreground">
            -----END CERTIFICATE-----
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Dúvidas sobre a validação? Consulte as{" "}
          <Link to="/chaves-publicas" className="font-medium text-brand underline">
            chaves públicas
          </Link>{" "}
          ou o{" "}
          <Link to="/faq" className="font-medium text-brand underline">
            FAQ
          </Link>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
