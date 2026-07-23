import { useLocale } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Impressum",
  description: "Rechtliche Informationen und Kontaktdaten von LevIQ",
};

function ImprintDE() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5<br />
            82031 Grünwald<br />
            Deutschland
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Kontaktinformationen</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>E-Mail:</strong>{" "}
            <a
              href="mailto:o.seeberger@outlook.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              o.seeberger@outlook.com
            </a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+4915905090161"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              +49 159 050 90 161
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Geschäftsform</h2>
        <p className="text-sm">
          Einzelunternehmen. LevIQ wird betrieben als Einzelunternehmen von
          Oskar Seeberger.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Umsatzsteuer-Identifikationsnummer</h2>
        <p className="text-sm">
          Als Kleinunternehmer gemäß § 19 Abs. 1 UStG bin ich von der
          Umsatzsteuer befreit und weise daher keine Umsatzsteuer aus.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Berufshaftpflichtversicherung</h2>
        <p className="text-sm">
          Der Versicherer und die Versicherungsnummer werden auf Anfrage zur
          Verfügung gestellt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Diensteanbieter nach TMG</h2>
        <p className="text-sm">
          LevIQ ist ein Beratungsunternehmen für künstliche Intelligenz und
          digitale Lösungen. Wir bieten Consulting-Services, Implementierung
          von KI-Chatbots, SEO/GEO-Dienstleistungen und weitere
          zukunftsorientierte digitale Services an.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Verantwortung für Inhalte</h2>
        <p className="text-sm">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Korrektheit, Vollständigkeit und Aktualität der Inhalte kann ich
          jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7
          Abs. 1 TMG für eigene Inhalte verantwortlich. Gleichzeitig bin ich
          nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Haftung für Links und externe Inhalte
        </h2>
        <p className="text-sm">
          Meine Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Für die Inhalte dieser verlinkten
          Seiten bin ich nicht verantwortlich. Die jeweilige Seite ist
          alleinverantwortlich für ihren Inhalt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Urheberrecht</h2>
        <p className="text-sm">
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
          dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Datenschutz</h2>
        <p className="text-sm">
          Informationen zur Erhebung und Verarbeitung Ihrer Daten finden Sie in
          unserer{" "}
          <a
            href="/datenschutz"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>
    </div>
  );
}

function ImprintEN() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Information pursuant to § 5 TMG</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5<br />
            82031 Grünwald<br />
            Germany
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:o.seeberger@outlook.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              o.seeberger@outlook.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+4915905090161"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              +49 159 050 90 161
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Business Form</h2>
        <p className="text-sm">
          Sole proprietorship. LevIQ is operated as a sole proprietorship by
          Oskar Seeberger.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">VAT Identification</h2>
        <p className="text-sm">
          As a small business under § 19 (1) of the German VAT Act (UStG), I am
          exempt from VAT and therefore do not charge VAT.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Professional Liability Insurance</h2>
        <p className="text-sm">
          Details about our professional liability insurance are available upon
          request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Service Provider</h2>
        <p className="text-sm">
          LevIQ is an artificial intelligence and digital solutions consulting
          company. We offer consulting services, AI chatbot implementation, SEO/GEO
          services, and other forward-thinking digital services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Responsibility for Content</h2>
        <p className="text-sm">
          The contents of this website have been created with the utmost care.
          However, I cannot guarantee the accuracy, completeness, or timeliness
          of the contents. As a service provider, I am responsible for my own
          content in accordance with § 7 (1) TMG. I am not obligated to monitor
          transmitted or stored third-party information or to investigate
          circumstances that indicate illegal activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Liability for Links</h2>
        <p className="text-sm">
          My website contains links to external websites of third parties over
          whose contents I have no control. I am not responsible for the
          contents of these linked pages. Each respective page is solely
          responsible for its own content.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Copyright</h2>
        <p className="text-sm">
          The contents and works published on this website are subject to German
          copyright. Any reproduction, adaptation, distribution, and any form of
          exploitation outside the scope of copyright requires prior written
          consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Data Protection</h2>
        <p className="text-sm">
          For information on the collection and processing of your data, please
          see our{" "}
          <a
            href="/legal/privacy"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default function ImprintPage() {
  const locale = useLocale();
  const isGerman = locale === "de";

  return (
    <LegalPageLayout title={isGerman ? "Impressum" : "Imprint"}>
      {isGerman ? <ImprintDE /> : <ImprintEN />}
    </LegalPageLayout>
  );
}
