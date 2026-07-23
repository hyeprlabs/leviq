/**
 * Seeds (or updates) the Impressum, Datenschutzerklärung and AGB documents
 * in the `legal-pages` collection.
 *
 * Every fact that only the business owner can supply (legal name, address,
 * payment processor, ...) is left as a bracketed placeholder, e.g.
 * "[Vollständiger Name]". Fill these in via the Payload admin UI under
 * "Legal Pages" before going live — do not publish with placeholders intact.
 *
 * Run with: pnpm seed:legal
 */
import { getPayload } from "payload";
import config from "@payload-config";
import {
  convertMarkdownToLexical,
  editorConfigFactory,
} from "@payloadcms/richtext-lexical";

const impressumMarkdown = `
## Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)

**[Vollständiger Name des Inhabers / Firma]**
LevIQ

[Straße und Hausnummer]
[Postleitzahl] [Ort]
Deutschland

## Kontakt

E-Mail: [E-Mail-Adresse einfügen]
Telefon: [Telefonnummer einfügen] (optional)

## Umsatzsteuer

Gemäß § 19 UStG wird keine Umsatzsteuer berechnet, da LevIQ als Kleinunternehmer im Sinne des Umsatzsteuergesetzes geführt wird.

## Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)

[Vollständiger Name]
Anschrift wie oben

## EU-Streitschlichtung

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter [https://ec.europa.eu/consumers/odr/](https://ec.europa.eu/consumers/odr/). Unsere E-Mail-Adresse finden Sie oben.

Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Da sich unser Leistungsangebot ausschließlich an Unternehmer im Sinne des § 14 BGB richtet, ist ein Verbraucherschlichtungsverfahren zudem regelmäßig nicht einschlägig.

## Haftung für Inhalte

Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

## Haftung für Links

Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

## Urheberrecht

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
`.trim();

const datenschutzMarkdown = `
## 1. Verantwortlicher

Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

**[Vollständiger Name des Inhabers]**, LevIQ

[Straße und Hausnummer], [Postleitzahl] [Ort], Deutschland

E-Mail: [E-Mail-Adresse einfügen]

## 2. Allgemeines zur Datenverarbeitung

Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) oder auf Grundlage unseres berechtigten Interesses an einem sicheren und funktionsfähigen Webangebot (Art. 6 Abs. 1 lit. f DSGVO).

## 3. Bereitstellung der Website und Erstellung von Server-Logfiles

Beim Aufrufen dieser Website erhebt unser Hosting-Anbieter automatisch Informationen in Form von Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version, verwendetes Betriebssystem sowie die zuvor besuchte Seite (Referrer-URL).

Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der Gewährleistung eines störungsfreien und sicheren Betriebs der Website (Art. 6 Abs. 1 lit. f DSGVO).

Unsere Website wird bei **Vercel Inc.**, 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Soweit hierbei eine Übermittlung personenbezogener Daten in die USA erfolgt, stützt sich diese auf Standardvertragsklauseln der EU-Kommission bzw. ein vergleichbares Schutzniveau des jeweiligen Anbieters.

## 4. Cookies

Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO), unter anderem:

- ein Cookie zur Speicherung Ihrer Spracheinstellung (Deutsch/Englisch),
- ein Session-Cookie unseres Anmeldedienstes Clerk, sofern Sie sich im geschützten Kundenbereich anmelden.

Diese Website setzt derzeit keine Cookies zu Analyse-, Marketing- oder Tracking-Zwecken ein. [Sofern zusätzliche Analyse- oder Marketing-Tools eingesetzt werden, ist dieser Abschnitt entsprechend zu ergänzen.]

## 5. Registrierung und Kundenbereich

Für den Zugang zu geschützten Bereichen (z. B. Dashboard) nutzen wir den Dienst **Clerk, Inc.**, 660 4th Street, San Francisco, CA 94107, USA, als Auftragsverarbeiter für Registrierung, Anmeldung und Sitzungsverwaltung. Dabei werden u. a. Name, E-Mail-Adresse und technische Anmeldedaten verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen). Die Datenübertragung in die USA erfolgt auf Grundlage von Standardvertragsklauseln.

## 6. Terminbuchung

Für die Buchung von Terminen binden wir den Dienst **Cal.com, Inc.** ein. Bei Nutzung der Terminbuchung werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, gewünschter Termin) an Cal.com übermittelt und dort verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.

## 7. Zahlungsabwicklung

Für die Abwicklung von Zahlungen setzen wir den Zahlungsdienstleister **[Name des Zahlungsdienstleisters einfügen, z. B. Stripe Payments Europe, Ltd.]** ein. Im Rahmen der Zahlungsabwicklung werden die hierfür erforderlichen Daten (z. B. Name, Zahlungsbetrag, Kontoverbindung bzw. Kartendaten) an den Zahlungsdienstleister übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Es gelten ergänzend die Datenschutzhinweise des jeweiligen Zahlungsdienstleisters.

## 8. Empfänger und Auftragsverarbeiter im Überblick

- Hosting: Vercel Inc. (USA)
- Content-Management: Payload CMS (Datenbank innerhalb unserer eigenen Infrastruktur)
- Anmeldedienst: Clerk, Inc. (USA)
- Terminbuchung: Cal.com, Inc.
- Zahlungsabwicklung: [Zahlungsdienstleister einfügen]

Mit allen genannten Dienstleistern, soweit erforderlich, bestehen Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO bzw. Standardvertragsklauseln für Drittlandübermittlungen.

## 9. Speicherdauer

Sofern innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben personenbezogene Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Gesetzliche Aufbewahrungspflichten (z. B. handels- und steuerrechtliche Vorgaben) können eine längere Speicherung erforderlich machen.

## 10. Ihre Rechte als betroffene Person

Sie haben jederzeit das Recht:

- gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,
- gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen,
- gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten Daten zu verlangen,
- gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer Daten zu verlangen,
- gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen Format zu erhalten (Datenübertragbarkeit),
- gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen,
- gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen, und
- sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu beschweren.

## 11. Automatisierte Entscheidungsfindung

Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO findet nicht statt.

## 12. Änderungen dieser Datenschutzerklärung

Wir passen diese Datenschutzerklärung an, sobald sich die Rechtslage, die von uns eingesetzten Dienste oder die Art der Datenverarbeitung ändern. Es gilt jeweils die zuletzt aktualisierte Fassung.
`.trim();

const agbMarkdown = `
## 1. Geltungsbereich

Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Leistungen im Bereich Webdesign, Softwareentwicklung, Beratung und digitale Strategie zwischen LevIQ ([Vollständiger Name / Rechtsform einfügen], nachfolgend "LevIQ") und ihren Auftraggebern.

Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB. Verbraucherschutzrechtliche Vorschriften, insbesondere zum Fernabsatz und zum Widerrufsrecht, finden daher keine Anwendung. Entgegenstehende oder ergänzende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, LevIQ stimmt ihrer Geltung ausdrücklich schriftlich zu.

## 2. Vertragsgegenstand

Gegenstand der Verträge ist die Erbringung von Leistungen im Bereich Konzeption, Design, Entwicklung und Betreuung digitaler Produkte (z. B. Websites, Webanwendungen) gemäß dem jeweiligen individuellen Angebot bzw. der Auftragsbestätigung. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot.

## 3. Vertragsschluss

Angebote von LevIQ sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich gekennzeichnet. Ein Vertrag kommt durch die schriftliche (auch per E-Mail) Auftragsbestätigung von LevIQ oder durch Beginn der Leistungserbringung zustande.

## 4. Mitwirkungspflichten des Auftraggebers

Der Auftraggeber stellt LevIQ alle für die Leistungserbringung erforderlichen Informationen, Materialien und Zugänge (z. B. Texte, Bildmaterial, Zugangsdaten) rechtzeitig und vollständig zur Verfügung und wirkt in dem für die Projektdurchführung erforderlichen Umfang mit. Verzögerungen, die auf einer verspäteten oder unvollständigen Mitwirkung des Auftraggebers beruhen, verlängern vereinbarte Fristen entsprechend.

## 5. Vergütung und Zahlungsbedingungen

Es gelten die im jeweiligen Angebot genannten Preise zzgl. der gesetzlichen Umsatzsteuer, soweit diese anfällt. Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. Die Zahlungsabwicklung kann über den Zahlungsdienstleister **[Name des Zahlungsdienstleisters einfügen]** erfolgen.

Bei Zahlungsverzug ist LevIQ berechtigt, Verzugszinsen in gesetzlicher Höhe (§ 288 BGB) geltend zu machen und die Leistungserbringung bis zum Ausgleich offener Forderungen zurückzuhalten.

## 6. Liefer- und Leistungszeiten

Liefer- und Leistungstermine werden im jeweiligen Angebot vereinbart und stehen unter dem Vorbehalt der rechtzeitigen und vollständigen Mitwirkung des Auftraggebers gemäß Ziffer 4. Verbindliche Termine bedürfen der ausdrücklichen schriftlichen Vereinbarung.

## 7. Nutzungs- und Urheberrechte

Alle im Rahmen des Projekts von LevIQ erstellten Arbeitsergebnisse (Design, Quellcode, Konzepte) bleiben bis zur vollständigen Bezahlung der vereinbarten Vergütung im Eigentum von LevIQ. Mit vollständiger Zahlung erhält der Auftraggeber die im Angebot vereinbarten, andernfalls die für den vertragsgemäßen Gebrauch erforderlichen einfachen Nutzungsrechte an den Arbeitsergebnissen.

Die Nutzung von Fremdmaterial (z. B. Lizenzsoftware, Schriften, Bildmaterial Dritter) unterliegt den jeweiligen Lizenzbedingungen der Rechteinhaber. LevIQ ist berechtigt, das Projekt als Referenz zu nennen und in üblichem Umfang zu Marketingzwecken zu verwenden, sofern der Auftraggeber dem nicht widerspricht.

## 8. Gewährleistung

Es gelten die gesetzlichen Gewährleistungsrechte, soweit nachfolgend nichts Abweichendes geregelt ist. Offensichtliche Mängel sind unverzüglich nach Abnahme bzw. Übergabe der Leistung in Textform anzuzeigen.

## 9. Haftung

LevIQ haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes, bei Verletzung von Leben, Körper oder Gesundheit sowie bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Bei der Verletzung von Kardinalpflichten ist die Haftung für leichte Fahrlässigkeit auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Eine weitergehende Haftung ist ausgeschlossen.

## 10. Vertraulichkeit

Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen Informationen der jeweils anderen Partei geheim zu halten und nur für Zwecke der Vertragsdurchführung zu verwenden.

## 11. Laufzeit und Kündigung

Bei Dauerschuldverhältnissen (z. B. laufende Betreuung, Wartung) gelten die im jeweiligen Angebot vereinbarten Laufzeiten und Kündigungsfristen. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

## 12. Schlussbestimmungen

Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist, soweit gesetzlich zulässig, der Sitz von LevIQ.

Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
`.trim();

const legalPages = [
  {
    slug: "impressum",
    title: "Impressum",
    summary: "Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
    markdown: impressumMarkdown,
  },
  {
    slug: "datenschutz",
    title: "Datenschutzerklärung",
    summary:
      "Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.",
    markdown: datenschutzMarkdown,
  },
  {
    slug: "agb",
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    summary: "Vertragsbedingungen für Leistungen von LevIQ gegenüber Unternehmern.",
    markdown: agbMarkdown,
  },
];

async function run() {
  const payload = await getPayload({ config });
  const editorConfig = await editorConfigFactory.default({
    config: payload.config,
  });

  for (const page of legalPages) {
    const content = convertMarkdownToLexical({
      editorConfig,
      markdown: page.markdown,
    });

    const existing = await payload.find({
      collection: "legal-pages",
      where: { slug: { equals: page.slug } },
      limit: 1,
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "legal-pages",
        id: existing.docs[0].id,
        data: { title: page.title, summary: page.summary, content },
      });
      console.log(`Updated "${page.slug}"`);
    } else {
      await payload.create({
        collection: "legal-pages",
        data: {
          title: page.title,
          slug: page.slug,
          summary: page.summary,
          content,
        },
      });
      console.log(`Created "${page.slug}"`);
    }
  }

  process.exit(0);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
