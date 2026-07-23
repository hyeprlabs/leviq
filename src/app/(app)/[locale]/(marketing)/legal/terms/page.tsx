import { useLocale } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB für LevIQ Consulting Services",
};

function TermsDE() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Geltungsbereich und Vertragsparteien</h2>
        <p className="text-sm">
          Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die vertraglichen
          Beziehungen zwischen LevIQ (Oskar Seeberger, nachfolgend
          „Auftragnehmer") und Unternehmen, Organisationen oder anderen
          geschäftstätigen Personen (nachfolgend „Auftraggeber" oder „Kunde").
        </p>
        <p className="text-sm mt-3">
          LevIQ ist ein Einzelunternehmen, das spezialisierte Consulting-Services
          im Bereich Künstliche Intelligenz und digitale Transformation anbietet.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Leistungsumfang</h2>
        <p className="text-sm">
          LevIQ erbringt Consulting-Services im Bereich:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>KI-Chatbot-Entwicklung und -Integration</li>
          <li>SEO und Geo-Services für digitale Sichtbarkeit</li>
          <li>Beratung zu KI-Technologien und deren Anwendung</li>
          <li>Digitale Transformation und Prozessoptimierung</li>
          <li>Weitere aktuelle und trendbezogene Dienstleistungen</li>
        </ul>
        <p className="text-sm mt-3">
          Der genaue Leistungsumfang wird in Einzelaufträgen (Statements of
          Work, Verträgen oder Engagement Letters) festgehalten.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Preise und Zahlungsbedingungen</h2>
        <p className="text-sm">
          Die Preisgestaltung basiert auf einem Basis-Paket mit monatlichem
          Retainer-Modell. Preise werden nach Abstimmung mit dem Kunden
          festgelegt.
        </p>
        <ul className="text-sm list-disc pl-5 space-y-3 mt-3">
          <li>
            <strong>Rechnungsstellung:</strong> Rechnungen werden monatlich
            voraus ausgestellt
          </li>
          <li>
            <strong>Zahlungsart:</strong> Zahlung erfolgt über Stripe. Der Kunde
            autorisiert den regelmäßigen Abzug vom hinterlegten
            Zahlungsinstrument
          </li>
          <li>
            <strong>Zahlungsfrist:</strong> Sofortig nach Rechnungsstellung
            (automatische Abrechnung)
          </li>
          <li>
            <strong>Verzug:</strong> Bei Verzug werden Verzugszinsen in Höhe von
            8% p.a. berechnet
          </li>
          <li>
            <strong>Alle Preise:</strong> Sind netto, zzgl. gesetzlich
            geltender Mehrwertsteuer (sofern anwendbar)
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Vertragslaufzeit und Beendigung</h2>
        <p className="text-sm">
          <strong>Vertragsbeginn:</strong> Der Vertrag beginnt mit der
          Unterzeichnung oder der ersten Rechnungsstellung.
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            <strong>Mindestlaufzeit:</strong> Absprache mit dem Kunden (in der
            Regel Monatsverträge)
          </li>
          <li>
            <strong>Kündigung:</strong> Kann beiderseits mit einer Frist von 30
            Tagen zum Ende eines Kalendermonats erfolgen
          </li>
          <li>
            <strong>Außerordentliche Kündigung:</strong> Aus wichtigem Grund,
            z.B. bei Verletzung wesentlicher Vertragspflichten
          </li>
          <li>
            <strong>Beendigung von Abonnements:</strong> Kann der Kunde jederzeit
            beenden, bestehende Zahlungen bleiben gültig
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Leistungserbringung und -änderungen</h2>
        <p className="text-sm">
          Der Auftragnehmer erbringt Leistungen nach besten Kräften und gemäß
          geltenden Branchenstandards. Die genaue Abwicklung erfolgt nach
          Absprache mit dem Kunden.
        </p>
        <p className="text-sm mt-3">
          LevIQ behält sich das Recht vor, Leistungen anzupassen, um den sich
          ändernden Anforderungen des Kunden oder technologischen Entwicklungen
          gerecht zu werden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Geistiges Eigentum</h2>
        <p className="text-sm">
          Sofern nicht anders vereinbart:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            Der Auftragnehmer behält das Urheberrecht an Methoden, Vorlagen und
            allgemeinen Konzepten
          </li>
          <li>
            Kundenspezifische Lösungen und Inhalte gehen in das Eigentum des
            Kunden über
          </li>
          <li>
            Der Auftragnehmer darf anonymisierte Fallstudien oder Best Practices
            verwenden
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Vertraulichkeit</h2>
        <p className="text-sm">
          Beide Parteien verpflichten sich zur Vertraulichkeit von
          geschäftssensitiven Informationen. Diese Verpflichtung besteht über
          die Dauer des Vertrags hinaus.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Haftung und Haftungsbeschränkung</h2>
        <p className="text-sm">
          <strong>Haftung des Auftragnehmers:</strong>
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            Der Auftragnehmer haftet für Schäden, die durch Vorsatz oder grobe
            Fahrlässigkeit verursacht sind
          </li>
          <li>
            Bei einfacher Fahrlässigkeit ist die Haftung begrenzt auf den
            Zahlbetrag der Dienstleistungen der vorherigen 12 Monate
          </li>
          <li>
            Für Datenverlust oder indirekte Schäden haftet der Auftragnehmer
            nicht
          </li>
        </ul>
        <p className="text-sm mt-3">
          <strong>Datensicherheit:</strong> Der Kunde ist verantwortlich für
          Sicherung seiner eigenen Daten. Der Auftragnehmer übernimmt keine
          Haftung für Datenverlust, der nicht vom Auftragnehmer verursacht wurde.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Datenschutz</h2>
        <p className="text-sm">
          Die Verarbeitung personenbezogener Daten erfolgt gemäß der
          Datenschutzerklärung und unter Einhaltung der DSGVO. Eine separate
          Datenverarbeitungsvereinbarung (DPA) wird auf Anfrage bereitgestellt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Gewährleistung</h2>
        <p className="text-sm">
          Consulting-Leistungen werden erbracht nach bestem Wissen und Gewissen.
          Eine Erfolgsgarantie wird nicht übernommen. Der Erfolg hängt von vielen
          Faktoren ab, einige davon liegen außerhalb der Kontrolle des
          Auftragnehmers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">11. Anwendbares Recht und Gerichtsstand</h2>
        <p className="text-sm">
          Diese Vereinbarung unterliegt deutschem Recht. Gerichtsstand ist
          München, Deutschland, sofern nicht zwingende Gesetze etwas anderes
          vorsehen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">12. Streitbeilegung</h2>
        <p className="text-sm">
          Bei Meinungsverschiedenheiten werden beide Parteien zunächst versuchen,
          eine einvernehmliche Lösung zu finden. Sollte dies nicht gelingen,
          wird das Verfahren den Gerichten des Landes Bayern überlassen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">13. Salvatorische Klausel</h2>
        <p className="text-sm">
          Sollte eine Bestimmung dieser AGB ungültig sein, bleiben die
          Vereinbarungen im Übrigen gültig. Die ungültige Bestimmung wird durch
          eine gültige Bestimmung ersetzt, die dem ursprünglichen Zweck am
          nächsten kommt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">14. Kontakt und Änderungen</h2>
        <p className="text-sm">
          Fragen zu diesen AGB richten Sie bitte an:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded mt-3">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            o.seeberger@outlook.com
            <br />
            +49 159 050 90 161
          </p>
        </div>
        <p className="text-sm mt-3">
          Der Auftragnehmer behält sich das Recht vor, diese AGB jederzeit zu
          ändern. Änderungen werden dem Kunden mitgeteilt. Die Fortsetzung der
          Nutzung der Services gilt als Zustimmung zu den neuen Bedingungen.
        </p>
      </section>
    </div>
  );
}

function TermsEN() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Scope and Contracting Parties</h2>
        <p className="text-sm">
          These Terms of Service (ToS) regulate the contractual relationship
          between LevIQ (Oskar Seeberger, hereinafter "Service Provider") and
          companies, organizations, or other business-active persons
          (hereinafter "Client").
        </p>
        <p className="text-sm mt-3">
          LevIQ is a sole proprietorship that specializes in consulting services
          in the field of artificial intelligence and digital transformation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Scope of Services</h2>
        <p className="text-sm">
          LevIQ provides consulting services in the following areas:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2">
          <li>AI Chatbot Development and Integration</li>
          <li>SEO and Geo Services for Digital Visibility</li>
          <li>Consulting on AI Technologies and Applications</li>
          <li>Digital Transformation and Process Optimization</li>
          <li>Other Current and Trend-Related Services</li>
        </ul>
        <p className="text-sm mt-3">
          The exact scope of services is specified in individual engagements
          (Statements of Work, contracts, or engagement letters).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Pricing and Payment Terms</h2>
        <p className="text-sm">
          Pricing is based on a base package with a monthly retainer model.
          Prices are determined after agreement with the client.
        </p>
        <ul className="text-sm list-disc pl-5 space-y-3 mt-3">
          <li>
            <strong>Billing:</strong> Invoices are issued monthly in advance
          </li>
          <li>
            <strong>Payment Method:</strong> Payment is made via Stripe. The
            client authorizes regular deductions from the stored payment method
          </li>
          <li>
            <strong>Payment Terms:</strong> Immediately upon invoice (automatic
            billing)
          </li>
          <li>
            <strong>Late Payment:</strong> In case of non-payment, interest on
            arrears at 8% p.a. applies
          </li>
          <li>
            <strong>All Prices:</strong> Are net, plus applicable value-added
            tax (VAT where applicable)
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Contract Term and Termination</h2>
        <p className="text-sm">
          <strong>Contract Start:</strong> The contract begins with signature or
          first invoice.
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            <strong>Minimum Term:</strong> To be agreed with the client (usually
            monthly contracts)
          </li>
          <li>
            <strong>Termination:</strong> May be terminated by either party with
            30 days' notice at the end of a calendar month
          </li>
          <li>
            <strong>Extraordinary Termination:</strong> For cause, such as
            material breach of contract
          </li>
          <li>
            <strong>Subscription Termination:</strong> Client may terminate at
            any time; existing payments remain valid
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Service Delivery and Changes</h2>
        <p className="text-sm">
          The Service Provider delivers services to the best of their ability
          and in accordance with industry standards. Execution details are agreed
          upon with the client.
        </p>
        <p className="text-sm mt-3">
          LevIQ reserves the right to adapt services to meet changing client
          requirements or technological developments.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Intellectual Property</h2>
        <p className="text-sm">
          Unless otherwise agreed:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            The Service Provider retains copyright in methods, templates, and
            general concepts
          </li>
          <li>
            Client-specific solutions and content become the property of the
            client
          </li>
          <li>
            The Service Provider may use anonymized case studies or best
            practices
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Confidentiality</h2>
        <p className="text-sm">
          Both parties commit to confidentiality of business-sensitive
          information. This obligation extends beyond the contract duration.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Liability and Limitation of Liability</h2>
        <p className="text-sm">
          <strong>Service Provider Liability:</strong>
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            The Service Provider is liable for damages caused by intent or gross
            negligence
          </li>
          <li>
            In case of simple negligence, liability is limited to the amount
            paid for services in the previous 12 months
          </li>
          <li>
            The Service Provider is not liable for data loss or indirect damages
          </li>
        </ul>
        <p className="text-sm mt-3">
          <strong>Data Security:</strong> The client is responsible for backing
          up their own data. The Service Provider assumes no liability for data
          loss not caused by the Service Provider.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Data Protection</h2>
        <p className="text-sm">
          Personal data processing is conducted in accordance with the Privacy
          Policy and GDPR. A separate Data Processing Agreement (DPA) is
          available upon request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Warranty</h2>
        <p className="text-sm">
          Consulting services are provided in good faith to the best of the
          Service Provider's ability. No guarantee of success is given. Success
          depends on many factors, some outside the Service Provider's control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">11. Governing Law and Jurisdiction</h2>
        <p className="text-sm">
          This agreement is governed by German law. Jurisdiction is Munich,
          Germany, unless mandatory law provides otherwise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">12. Dispute Resolution</h2>
        <p className="text-sm">
          In case of disagreement, both parties will first attempt to find an
          amicable solution. If this fails, the matter will be referred to the
          courts of Bavaria.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">13. Severability Clause</h2>
        <p className="text-sm">
          Should any provision of these ToS be invalid, the remaining agreements
          remain valid. The invalid provision will be replaced with a valid one
          that comes closest to the original intent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">14. Contact and Changes</h2>
        <p className="text-sm">
          Questions regarding these ToS should be directed to:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded mt-3">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            o.seeberger@outlook.com
            <br />
            +49 159 050 90 161
          </p>
        </div>
        <p className="text-sm mt-3">
          The Service Provider reserves the right to change these ToS at any
          time. Changes will be notified to the client. Continued use of the
          services constitutes acceptance of the new terms.
        </p>
      </section>
    </div>
  );
}

export default function TermsPage() {
  const locale = useLocale();
  const isGerman = locale === "de";

  return (
    <LegalPageLayout
      title={isGerman ? "Allgemeine Geschäftsbedingungen" : "Terms of Service"}
    >
      {isGerman ? <TermsDE /> : <TermsEN />}
    </LegalPageLayout>
  );
}
