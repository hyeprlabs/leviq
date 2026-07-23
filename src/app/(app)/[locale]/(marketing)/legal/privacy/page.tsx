import { useLocale, useTranslations } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | LevIQ",
  description: "Datenschutzrichtlinie und Informationen zur Datenverarbeitung",
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

function PrivacyDE() {
  const t = useTranslations("Legal.privacy");

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Verantwortlicher für die Datenverarbeitung</h2>
        <p className="text-sm">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
          anderer Datenschutzgesetze ist:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5<br />
            82031 Grünwald<br />
            Deutschland
          </p>
          <p className="mt-3">
            <strong>E-Mail:</strong> o.seeberger@outlook.com
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Umfang der Datenverarbeitung</h2>
        <p className="text-sm">
          Wir verarbeiten personenbezogene Daten nur dann, wenn dies zur
          Erbringung unserer Dienstleistungen erforderlich ist oder eine
          rechtliche Grundlage vorliegt. Dies umfasst insbesondere:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>Daten aus Kontaktanfragen (Name, E-Mail, Nachricht)</li>
          <li>
            Rechnungs- und Zahlungsdaten, die über Stripe verarbeitet werden
          </li>
          <li>
            Nutzungsdaten zur Verbesserung unserer Dienstleistungen (via PostHog)
          </li>
          <li>
            Geschäftskommunikationsdaten, die über Attio und Resend verarbeitet
            werden
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Zweck und Rechtsgrundlage</h2>
        <p className="text-sm">
          Die Verarbeitung von Daten erfolgt auf Basis folgender Rechtsgrundlagen:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Art. 6 Abs. 1 Buchst. b DSGVO:</strong> Erfüllung von
            Vertragsverpflichtungen (Erbringung von Consulting-Services,
            Vertragsabwicklung)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 Buchst. f DSGVO:</strong> Berechtigte
            Interessen (Verbesserung von Diensten, Sicherheit, analytische
            Auswertungen)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 Buchst. c DSGVO:</strong> Einhaltung
            rechtlicher Verpflichtungen
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Empfänger der Daten</h2>
        <p className="text-sm">
          Ihre Daten werden an folgende Verarbeiter und Dienstleister
          weitergegeben:
        </p>

        <div className="space-y-4 text-sm">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Vercel Inc. (Hosting)</p>
            <p className="text-xs mt-1">Frankfurt, Deutschland</p>
            <p className="mt-2">
              Speichert Server-Logs und Hosting-Daten. Vercel ist ein zertifizierter
              Datenverarbeiter mit Sitz in den USA und verfügt über
              Standardvertragsklauseln (Standard Contractual Clauses).
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Stripe Payments Europe Ltd.</p>
            <p className="text-xs mt-1">Dublin, Irland</p>
            <p className="mt-2">
              Verarbeitet Zahlungsinformationen, Rechnungsdaten und
              Abonnement-Verwaltung. Stripe verfügt über ein umfassendes
              Datenschutzprogramm und ist zertifiziert unter PCI DSS.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">PostHog Inc. (Analytics)</p>
            <p className="text-xs mt-1">San Francisco, USA</p>
            <p className="mt-2">
              Erfasst anonyme Nutzungsmetriken zur Verbesserung unserer Services.
              PostHog bietet vollständige Datenschutzkompliance und Datenhoheit.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Attio</p>
            <p className="text-xs mt-1">Enterprise CRM & Workspace Management</p>
            <p className="mt-2">
              Speichert Geschäftskontakte und Projektinformationen für interne
              Verwaltung.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Resend (E-Mail-Service)</p>
            <p className="text-xs mt-1">E-Mail-Versand</p>
            <p className="mt-2">
              Versand von transaktionalen E-Mails wie Bestätigungen und
              Benachrichtigungen.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Cookies und Tracking</h2>
        <p className="text-sm">
          Diese Website verwendet ausschließlich technisch notwendige Cookies und
          PostHog Analytics:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Technische Cookies:</strong> Zur Aufrechterhaltung Ihrer
            Sitzung und Authentifizierung
          </li>
          <li>
            <strong>PostHog Analytics:</strong> Erfassung anonymisierter
            Nutzungsdaten (Seitenaufrufe, Klicks, Browser-Informationen) zur
            Optimierung unserer Dienste
          </li>
        </ul>
        <p className="text-sm mt-3">
          Diese Cookies sind für die Funktionalität notwendig und können nicht
          deaktiviert werden. PostHog-Daten werden pseudonymisiert und nicht mit
          anderen Quellen verknüpft.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Speicherdauer</h2>
        <p className="text-sm">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für
          die Erfüllung des Zwecks notwendig ist:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Kontaktdaten:</strong> Gelöscht nach Abschluss der Anfrage
            oder auf Anfrage
          </li>
          <li>
            <strong>Zahlungsdaten:</strong> Gemäß Aufbewahrungspflichten (bis zu
            10 Jahre für Rechnungen)
          </li>
          <li>
            <strong>Analytics-Daten:</strong> Gelöscht nach 12 Monaten
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Rechte der betroffenen Personen</h2>
        <p className="text-sm">
          Sie haben folgende Rechte gemäß DSGVO:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Auskunftsrecht:</strong> Recht auf Auskunft über verarbeitete
            Daten (Art. 15 DSGVO)
          </li>
          <li>
            <strong>Berichtigungsrecht:</strong> Recht auf Korrektur fehlerhafter
            Daten (Art. 16 DSGVO)
          </li>
          <li>
            <strong>Löschungsrecht:</strong> Recht auf Löschung („Recht auf
            Vergessenwerden") (Art. 17 DSGVO)
          </li>
          <li>
            <strong>Einschränkungsrecht:</strong> Recht auf Einschränkung der
            Verarbeitung (Art. 18 DSGVO)
          </li>
          <li>
            <strong>Datenportabilität:</strong> Recht auf Datenübertragung (Art.
            20 DSGVO)
          </li>
          <li>
            <strong>Widerspruchsrecht:</strong> Recht auf Widerspruch gegen die
            Verarbeitung (Art. 21 DSGVO)
          </li>
        </ul>
        <p className="text-sm mt-3">
          Zur Geltendmachung dieser Rechte kontaktieren Sie uns unter
          o.seeberger@outlook.com.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Datensicherheit</h2>
        <p className="text-sm">
          Wir implementieren angemessene technische und organisatorische
          Maßnahmen zum Schutz Ihrer Daten:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
          <li>
            Sicherheit von Datenverarbeitern gemäß ihrer Datenschutzrichtlinien
          </li>
          <li>Minimale Datenerfassung (Datensparsamkeit)</li>
          <li>Regelmäßige Sicherheitsüberprüfungen</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Datenübermittlung in Drittländer</h2>
        <p className="text-sm">
          Einige Verarbeiter (Vercel, PostHog, Stripe) haben Sitz außerhalb der
          EU. Diese Übermittlungen erfolgen auf Basis von Standardvertragsklauseln
          (Standard Contractual Clauses) oder anderen geeigneten Garantien gemäß
          DSGVO Art. 44 ff.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Änderungen dieser Datenschutzerklärung</h2>
        <p className="text-sm">
          Wir können diese Datenschutzerklärung jederzeit aktualisieren. Die
          jeweils aktuelle Fassung ist auf dieser Website verfügbar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">11. Kontakt und Beschwerderecht</h2>
        <p className="text-sm">
          Für Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte
          kontaktieren Sie bitte:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            o.seeberger@outlook.com
            <br />
            +49 159 050 90 161
          </p>
        </div>
        <p className="text-sm mt-3">
          Sie haben außerdem das Recht, eine Beschwerde bei einer
          Datenschutzbehörde einzureichen. Die zuständige Behörde für Bayern ist:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            Bayerisches Landesamt für Datenschutzaufsicht
            <br />
            Promenade 18<br />
            91522 Ansbach
          </p>
        </div>
      </section>
    </div>
  );
}

function PrivacyEN() {
  const t = useTranslations("Legal.privacy");

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Responsible Party</h2>
        <p className="text-sm">
          The responsible party for data processing under the General Data
          Protection Regulation (GDPR) is:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5<br />
            82031 Grünwald<br />
            Germany
          </p>
          <p className="mt-3">
            <strong>Email:</strong> o.seeberger@outlook.com
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Scope of Data Processing</h2>
        <p className="text-sm">
          We process personal data only when necessary to provide our services
          or when a legal basis exists. This includes in particular:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>Data from contact inquiries (name, email, message)</li>
          <li>Billing and payment data processed via Stripe</li>
          <li>
            Usage data to improve our services (via PostHog analytics)
          </li>
          <li>
            Business communication data processed via Attio and Resend
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Purpose and Legal Basis</h2>
        <p className="text-sm">
          Data processing is based on the following legal grounds:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Art. 6 (1) (b) GDPR:</strong> Performance of contractual
            obligations (provision of consulting services, contract execution)
          </li>
          <li>
            <strong>Art. 6 (1) (f) GDPR:</strong> Legitimate interests
            (service improvement, security, analytics)
          </li>
          <li>
            <strong>Art. 6 (1) (c) GDPR:</strong> Compliance with legal
            obligations
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Recipients of Data</h2>
        <p className="text-sm">
          Your data is shared with the following processors and service
          providers:
        </p>

        <div className="space-y-4 text-sm">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Vercel Inc. (Hosting)</p>
            <p className="text-xs mt-1">Frankfurt, Germany</p>
            <p className="mt-2">
              Stores server logs and hosting data. Vercel is a certified data
              processor with headquarters in the USA and has Standard Contractual
              Clauses in place.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Stripe Payments Europe Ltd.</p>
            <p className="text-xs mt-1">Dublin, Ireland</p>
            <p className="mt-2">
              Processes payment information, billing data, and subscription
              management. Stripe has comprehensive data protection programs and is
              certified under PCI DSS.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">PostHog Inc. (Analytics)</p>
            <p className="text-xs mt-1">San Francisco, USA</p>
            <p className="mt-2">
              Captures anonymous usage metrics to improve our services. PostHog
              offers complete data protection compliance and data sovereignty.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Attio</p>
            <p className="text-xs mt-1">Enterprise CRM & Workspace Management</p>
            <p className="mt-2">
              Stores business contacts and project information for internal
              management.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold">Resend (Email Service)</p>
            <p className="text-xs mt-1">Email Delivery</p>
            <p className="mt-2">
              Sends transactional emails such as confirmations and
              notifications.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Cookies and Tracking</h2>
        <p className="text-sm">
          This website uses only technically necessary cookies and PostHog
          Analytics:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Technical Cookies:</strong> To maintain your session and
            authentication
          </li>
          <li>
            <strong>PostHog Analytics:</strong> Collection of anonymized usage
            data (page views, clicks, browser information) to optimize our
            services
          </li>
        </ul>
        <p className="text-sm mt-3">
          These cookies are necessary for functionality and cannot be disabled.
          PostHog data is pseudonymized and not linked with other sources.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Storage Duration</h2>
        <p className="text-sm">
          Personal data is retained only as long as necessary to fulfill the
          purpose:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Contact Data:</strong> Deleted after inquiry completion or
            upon request
          </li>
          <li>
            <strong>Payment Data:</strong> According to retention requirements
            (up to 10 years for invoices)
          </li>
          <li>
            <strong>Analytics Data:</strong> Deleted after 12 months
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Your Rights</h2>
        <p className="text-sm">
          You have the following rights under the GDPR:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>
            <strong>Right of Access:</strong> Right to access processed data
            (Art. 15 GDPR)
          </li>
          <li>
            <strong>Right of Rectification:</strong> Right to correct inaccurate
            data (Art. 16 GDPR)
          </li>
          <li>
            <strong>Right to Erasure:</strong> Right to deletion ("right to be
            forgotten") (Art. 17 GDPR)
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> Right to restrict
            processing (Art. 18 GDPR)
          </li>
          <li>
            <strong>Data Portability:</strong> Right to data transfer (Art. 20
            GDPR)
          </li>
          <li>
            <strong>Right to Object:</strong> Right to object to processing
            (Art. 21 GDPR)
          </li>
        </ul>
        <p className="text-sm mt-3">
          To exercise these rights, please contact us at o.seeberger@outlook.com.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Data Security</h2>
        <p className="text-sm">
          We implement appropriate technical and organizational measures to
          protect your data:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>SSL/TLS encryption for all data transmissions</li>
          <li>
            Processor security according to their data protection policies
          </li>
          <li>Minimal data collection (data minimization)</li>
          <li>Regular security reviews</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Data Transfers to Third Countries</h2>
        <p className="text-sm">
          Some processors (Vercel, PostHog, Stripe) are located outside the EU.
          These transfers are based on Standard Contractual Clauses or other
          appropriate safeguards under GDPR Art. 44 et seq.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Changes to This Privacy Policy</h2>
        <p className="text-sm">
          We may update this privacy policy at any time. The current version is
          available on this website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">11. Contact and Right to Complain</h2>
        <p className="text-sm">
          For questions about data protection or to exercise your rights, please
          contact:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            o.seeberger@outlook.com
            <br />
            +49 159 050 90 161
          </p>
        </div>
        <p className="text-sm mt-3">
          You also have the right to lodge a complaint with a data protection
          authority. The competent authority for Bavaria is:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <p>
            Bavarian State Office for Data Protection
            <br />
            Promenade 18<br />
            91522 Ansbach<br />
            Germany
          </p>
        </div>
      </section>
    </div>
  );
}

export default function PrivacyPage() {
  const locale = useLocale();
  const isGerman = locale === "de";
  const t = useTranslations("Legal.privacy");

  const toc = [
    { id: "controller", label: t("toc.0.label") },
    { id: "scope", label: t("toc.1.label") },
    { id: "legal", label: t("toc.2.label") },
    { id: "processors", label: t("toc.3.label") },
    { id: "cookies", label: t("toc.4.label") },
    { id: "retention", label: t("toc.5.label") },
    { id: "rights", label: t("toc.6.label") },
    { id: "thirdCountries", label: t("toc.7.label") },
    { id: "contact", label: t("toc.8.label") },
  ];

  return (
    <LegalPageLayout
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      toc={toc}
    >
      {isGerman ? <PrivacyDE /> : <PrivacyEN />}
    </LegalPageLayout>
  );
}
