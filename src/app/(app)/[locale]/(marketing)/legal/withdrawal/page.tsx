import { useLocale } from "next-intl";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata = {
  title: "Widerrufsbelehrung",
  description: "Informationen zu Widerrufs- und Rückgaberechten",
};

function WithdrawalDE() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-600 p-4 rounded">
        <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200">
          Wichtiger Hinweis: LevIQ erbringt ausschließlich B2B-Services
          (Business-to-Business)
        </p>
        <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-2">
          Da LevIQ nur mit Unternehmern, Freiberuflern und anderen
          geschäftstätigen Personen vertraglich arbeitet, finden die gesetzlichen
          Verbraucherschutzvorschriften, einschließlich des Widerrufsrechts nach
          § 355 BGB, keine Anwendung.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Geltungsbereich</h2>
        <p className="text-sm">
          Diese Widerrufsbelehrung ist für B2B-Verträge (Unternehmer zu
          Unternehmer) nicht anwendbar. Die Services von LevIQ sind
          ausschließlich für geschäftstätige Personen bestimmt und fallen nicht
          unter die Verbraucher-Schutzvorschriften.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Wer ist Verbraucher im Sinne des Gesetzes?</h2>
        <p className="text-sm">
          Ein Verbraucher ist eine natürliche Person, die ein Rechtsgeschäft zu
          Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
          beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
        </p>
        <p className="text-sm mt-3">
          <strong>LevIQ arbeitet nicht mit Verbrauchern.</strong> Verträge mit
          LevIQ sind ausschließlich mit Unternehmern, Freiberuflern, Vereinen und
          anderen geschäftstätigen Personen gültig.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Vertragliche Regelungen für Kunden</h2>
        <p className="text-sm">
          Für alle Kunden gelten die Bedingungen der AGB (Allgemeine
          Geschäftsbedingungen). Besonderheiten:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            <strong>Keine Widerrufsfristen:</strong> Da es sich um B2B-Verträge
            handelt, haben Kunden kein Widerrufsrecht
          </li>
          <li>
            <strong>Kündigungsfristen:</strong> Verträge können mit 30 Tagen zum
            Ende eines Kalendermonats gekündigt werden (siehe AGB § 4)
          </li>
          <li>
            <strong>Zahlungsverpflichtung:</strong> Bei monatlichen Retainern ist
            eine Zahlung immer fällig, auch wenn Services nicht in Anspruch
            genommen werden
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Rückforderung von Zahlungen</h2>
        <p className="text-sm">
          Zahlungen für erbrachte Leistungen können nicht rückgefordert werden.
          Sollte der Kunde eine bereits abgerechnete Leistung nicht in Anspruch
          nehmen, kann diese angerechnet werden.
        </p>
        <p className="text-sm mt-3">
          Bei berechtigten Reklamationen zur Qualität erbrachter Leistungen wenden
          Sie sich bitte direkt an:
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
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Zahlungsabwicklung via Stripe</h2>
        <p className="text-sm">
          Zahlungen erfolgen über Stripe. Der Kunde autorisiert wiederkehrende
          Zahlungen. Bei Fragen zur Abrechnung kontaktieren Sie:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>LevIQ: o.seeberger@outlook.com</li>
          <li>
            Stripe Support: <a href="https://support.stripe.com" className="text-blue-600 hover:underline">
              https://support.stripe.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Datenschutz bei Zahlungen</h2>
        <p className="text-sm">
          Zahlungsinformationen werden gemäß unserer Datenschutzerklärung
          verarbeitet. Weitere Informationen zu Stripe finden Sie unter
          https://stripe.com/de/privacy
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Sicherheit und Betrug</h2>
        <p className="text-sm">
          Im Falle von Betrugsverdacht oder unbefugten Transaktionen können Kunden
          Ihre Bank oder Stripe kontaktieren. Dies schließt nicht aus, dass LevIQ
          Maßnahmen einleitet, um betrügerische Aktivitäten zu untersuchen und zu
          verhindern.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Beendigung des Vertrags und Rückforderung</h2>
        <p className="text-sm">
          Bei Beendigung des Vertrags:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            Der Vertrag endet zum Zeitpunkt der Kündigung oder Kündigungsfrist
          </li>
          <li>Bereits gezahlte Gebühren werden nicht rückforderbar</li>
          <li>
            Danach anfallende regelmäßige Zahlungen werden nicht eingezogen
          </li>
          <li>Der Kundenzugang zu Services wird sofort deaktiviert</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Beschwerde und Kontakt</h2>
        <p className="text-sm">
          Für Fragen, Beschwerden oder Unstimmigkeiten wenden Sie sich bitte
          direkt an:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded mt-3">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5
            <br />
            82031 Grünwald, Deutschland
            <br />
            <strong>E-Mail:</strong> o.seeberger@outlook.com
            <br />
            <strong>Telefon:</strong> +49 159 050 90 161
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Rechtliche Hinweise</h2>
        <p className="text-sm">
          Diese Widerrufsbelehrung unterliegt deutschem Recht. Sollten Sie
          trotzdem ein Verbraucherschutzrecht in Anspruch nehmen wollen, können
          Sie Ihre zuständige Verbraucherschutzbehörde kontaktieren. Dies ändert
          nicht die Tatsache, dass LevIQ Services ausschließlich an geschäftstätige
          Personen abgibt.
        </p>
      </section>
    </div>
  );
}

function WithdrawalEN() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-600 p-4 rounded">
        <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200">
          Important Notice: LevIQ provides exclusively B2B services
        </p>
        <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-2">
          Since LevIQ only contracts with entrepreneurs, freelancers, and other
          business-active persons, consumer protection provisions, including
          withdrawal rights under § 355 BGB (German Civil Code), do not apply.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Scope</h2>
        <p className="text-sm">
          This withdrawal notice does not apply to B2B contracts (business to
          business). LevIQ's services are intended exclusively for business-active
          persons and are not subject to consumer protection provisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Who is a Consumer under the Law?</h2>
        <p className="text-sm">
          A consumer is a natural person who concludes a legal transaction for
          purposes that cannot predominantly be attributed to their commercial or
          professional activity (§ 13 BGB).
        </p>
        <p className="text-sm mt-3">
          <strong>LevIQ does not work with consumers.</strong> Contracts with LevIQ
          are valid exclusively with entrepreneurs, freelancers, associations, and
          other business-active persons.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Contractual Terms for Customers</h2>
        <p className="text-sm">
          All customers are subject to the Terms of Service (ToS). Particular
          points:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            <strong>No Withdrawal Periods:</strong> As these are B2B contracts,
            customers have no right of withdrawal
          </li>
          <li>
            <strong>Termination Periods:</strong> Contracts may be terminated with
            30 days' notice at the end of a calendar month (see ToS § 4)
          </li>
          <li>
            <strong>Payment Obligation:</strong> For monthly retainers, payment is
            always due, even if services are not used
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Refund of Payments</h2>
        <p className="text-sm">
          Payments for services rendered cannot be refunded. Should the customer
          not utilize an already invoiced service, it may be credited.
        </p>
        <p className="text-sm mt-3">
          For legitimate complaints regarding the quality of services provided,
          please contact:
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
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Payment Processing via Stripe</h2>
        <p className="text-sm">
          Payments are processed through Stripe. The customer authorizes recurring
          payments. For billing inquiries, please contact:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>LevIQ: o.seeberger@outlook.com</li>
          <li>
            Stripe Support:{" "}
            <a
              href="https://support.stripe.com"
              className="text-blue-600 hover:underline"
            >
              https://support.stripe.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Data Protection in Payments</h2>
        <p className="text-sm">
          Payment information is processed in accordance with our Privacy Policy.
          For more information about Stripe, visit https://stripe.com/privacy
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Security and Fraud</h2>
        <p className="text-sm">
          In case of suspected fraud or unauthorized transactions, customers may
          contact their bank or Stripe. This does not prevent LevIQ from
          investigating and preventing fraudulent activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Contract Termination and Refunds</h2>
        <p className="text-sm">
          Upon contract termination:
        </p>
        <ul className="text-sm list-disc pl-5 space-y-2 mt-3">
          <li>
            The contract ends upon termination or expiration of the notice period
          </li>
          <li>Already paid fees are non-refundable</li>
          <li>Recurring payments after termination will not be charged</li>
          <li>Customer access to services is immediately deactivated</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Complaints and Contact</h2>
        <p className="text-sm">
          For questions, complaints, or discrepancies, please contact:
        </p>
        <div className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded mt-3">
          <p>
            <strong>Oskar Seeberger</strong>
            <br />
            Adalbert-Stifter-Straße 5
            <br />
            82031 Grünwald, Germany
            <br />
            <strong>Email:</strong> o.seeberger@outlook.com
            <br />
            <strong>Phone:</strong> +49 159 050 90 161
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">10. Legal Notes</h2>
        <p className="text-sm">
          This withdrawal notice is governed by German law. Should you wish to
          invoke consumer protection rights regardless, you may contact your
          competent consumer protection authority. This does not change the fact
          that LevIQ provides services exclusively to business-active persons.
        </p>
      </section>
    </div>
  );
}

export default function WithdrawalPage() {
  const locale = useLocale();
  const isGerman = locale === "de";

  return (
    <LegalPageLayout
      title={isGerman ? "Widerrufsbelehrung" : "Right of Withdrawal"}
    >
      {isGerman ? <WithdrawalDE /> : <WithdrawalEN />}
    </LegalPageLayout>
  );
}
