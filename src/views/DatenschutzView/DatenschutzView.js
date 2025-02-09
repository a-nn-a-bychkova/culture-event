import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';

export default function DatenschutzViewView(props) {
  return (
    <Box>
      <Container
        sx={{
          fontFamily: 'Times New Roman',
          padding: {
            xs: '30px 16px 10px 16px',
            sm: '10px 40px',
            md: '30px 40px',
            lg: '30px 10px 10px 10px',
          },
          width: { lg: '1200px' },
        }}
      >
        <Typography
          align="center"
          sx={{
            fontFamily: 'Times New Roman',
            fontSize: { xs: '12px', s: '16px', md: '18px' },
            padding: '14px',
            color: ' #495961',
            textAlign: 'justify',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Datenschutzerklärung für den Internetauftritt des Ensembles
            „Ukrainischer Lebensmut“
          </Typography>
          Diese Datenschutzerklärung klärt darüber auf, welche Arten
          personenbezogener Daten dieser Webauftritt zu welchen Zwecken und in
          welchem Umfang verarbeitet. Sie gilt für alle von uns durchgeführten
          Verarbeitungen personenbezogener Daten sowie innerhalb externer
          Onlinepräsenzen, wie z.B. unserer Social-Media-Profile. Die hier
          aufgeführten Informationen stellen wir gemäß §12 der
          Datenschutzgrundverordnung (DSGVO) zur Verfügung.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Inhalt
          </Typography>
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              1. Übersicht zu den über die Webseite durchgeführten
              Datenverarbeitungen:
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              2. Verantwortliche Stelle für die Datenverarbeitung{' '}
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              3. Ihre Rechte in Bezug auf die Verarbeitung Ihrer Daten
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              4. Kontaktdaten der zuständigen Aufsichtsbehörde
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              5. Datenerfassung auf unserer Website
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}></ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              6. Präsenzen in sozialen Netzwerken
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              7. Einbindung externer Software auf unserer Webseite
            </ListItem>
          </List>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            1. Übersicht zu den über die Webseite durchgeführten
            Datenverarbeitungen:
          </Typography>{' '}
          <List>
            <Typography sx={{ textDecoration: 'underline' }}>
              Arten der verarbeiteten Daten
            </Typography>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Kontaktdaten (z.B. E-Mail, Telefonnummern)
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
              IP-Adressen)
            </ListItem>
            {/* <ListItem sx={{ padding: '2px 18px' }}>
              {' '}
              Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
              Zugriffszeiten)
            </ListItem> */}
          </List>
          <List>
            <Typography sx={{ textDecoration: 'underline' }}>
              Kategorien betroffener Personen
            </Typography>
            <ListItem sx={{ padding: '2px 18px' }}>- Interessenten</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Kommunikationspartner
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              {' '}
              - Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)
            </ListItem>
          </List>
          <List>
            <Typography sx={{ textDecoration: 'underline' }}>
              Zwecke der Verarbeitung
            </Typography>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Kontaktanfragen und Kommunikation
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Verwaltung und Beantwortung von Anfragen
            </ListItem>
          </List>
          Rechtsgrundlage für die Datenverarbeitung über diese Webseite ist Art.
          6 abs. 1 lit. f DSGVO. Rechtsgrundlage für die Nutzung der Sozialen
          Medien ist unser berechtigtes Interesse gemäß Art. 6 abs. 1 lit. f
          DSGVO an einer effektiven und modernen Information und Kommunikation
          mit Interessierten. Sofern Sie um Ihre Zustimmung zu einer
          Datenverarbeitung gebeten werden (z. B. durch Betätigung einer
          Schaltfläche oder Ähnliches), ist die Rechtsgrundlage für die
          Datenverarbeitung Ihre Einwilligung gemäß Art. 6 abs. 1 lit. a DSGVO.{' '}
          <br />
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            2. Verantwortliche Stelle für die Datenverarbeitung
          </Typography>{' '}
          Anna Bychkova; <br />
          E-Mail: a.a.bychkova@gmail.com
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            3. Ihre Rechte in Bezug auf die Verarbeitung Ihrer Daten
          </Typography>{' '}
          Nach der Datenschutz-Grundverordnung stehen Ihnen beim
          Verantwortlichen für die Datenerhebung und in Bezug auf extern
          eingebundene Software bei Drittanbietern folgende Rechte zu:
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Werden Ihre personenbezogenen Daten verarbeitet, so haben Sie
              das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten
              zu erhalten (Art. 15 DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Sollten unrichtige personenbezogene Daten verarbeitet werden,
              steht Ihnen ein Recht auf Berichtigung zu (Art. 16 DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Liegen die gesetzlichen Voraussetzungen vor, so können Sie die
              Löschung oder Einschränkung der Verarbeitung verlangen, sowie
              Widerspruch gegen die Verarbeitung einlegen (Art. 17, 18 und 21
              DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Wenn Sie in die Datenverarbeitung eingewilligt haben oder ein
              Vertrag zur Datenverarbeitung besteht und die Datenverarbeitung
              mithilfe automatisierter Verfahren durchgeführt wird, steht Ihnen
              gegebenenfalls ein Recht auf Datenübertragbarkeit zu (Art. 20
              DSGVO).
            </ListItem>
          </List>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            4. Kontaktdaten der zuständigen Aufsichtsbehörde
          </Typography>{' '}
          Die unabhängige Aufsicht für die Einhaltung der
          Datenschutzbestimmungen auf dieser Webseite liegt bei:
          <br />
          Postadresse: Postfach 22 12 19, 80502 München
          <br />
          E-Mail: poststelle@datenschutz-bayern.de <br />
          Telefon: 089 212672-0 <br />
          Faxen: 089 212672-50
          <br /> Besucheradresse: Wagmüllerstraße 18, 80538 München (Bitte nur
          nach vorheriger Terminabsprache) <br />
          Diese ist zugleich auch Beschwerdestelle.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            5. Datenerfassung auf unserer Website
          </Typography>{' '}
          Unsere Webseite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Daten eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und
          an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die Verschlüsselung
          aktiv ist, können die Daten, die Sie über die Webseite an uns
          übermitteln, nicht von Dritten mitgelesen werden.
          <br />
          Der Zugriff auf unsere Webseite wird automatisch protokolliert; online
          zur Verfügung gestellte personenbezogene Daten werden nur für die im
          konkreten Fall mitgeteilten Zwecke erhoben, verarbeitet und genutzt.
          Darüberhinausgehende Erhebung, Verarbeitung oder Nutzung erfolgen nur
          dann, wenn dies
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - für einen weiteren Zweck erfolgt, der in direktem Zusammenhang
              mit dem ursprünglichen Zweck steht, zu dem die personenbezogenen
              Daten erhoben wurden,
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - aufgrund rechtlicher Verpflichtung oder behördlicher oder
              gerichtlicher Anordnung erforderlich ist,
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - zur Begründung oder zum Schutz rechtlicher Ansprüche oder zur
              Abwehr von Klagen erforderlich ist,
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - der Verhinderung von Missbrauch oder sonstiger ungesetzlicher
              Aktivitäten dient, z. B. vorsätzlicher Angriffe auf unsere
              Systeme.
            </ListItem>
          </List>
          Wenn Sie diese Webseite aufrufen, wird der Aufruf vom Host der
          Webseite aufgezeichnet:
          <Typography sx={{ fontWeight: 'bold' }}>
            Hetzner Online GmbH
          </Typography>{' '}
          Industriestr. 25
          <br />
          91710 Gunzenhausen <br />
          Tel.: 09831 505-0 <br />
          E-Mail: info@hetzner.com <br />
          Registergericht Ansbach, HRB 6089 <br />
          USt-Id Nr. DE 812871812 <br />
          Geschäftsführer: Martin Hetzner, <br /> Stephan Konvickova, Günther
          Müller
          <br />
          Dieses Log enthält Ihre IP-Adresse, welche Sie indirekt über Ihren
          Internetanbieter identifiziert. Die Aufzeichnung dieser Daten ist
          gesetzlich verpflichtend und für die Sicherheit notwendig. Es gibt
          keine Möglichkeit zum Opt-Out, die Daten werden aber niemals für
          andere Zwecke verwendet.
          <br />
          Ohne diese Datenverarbeitung könnten wir den Service nicht bieten.
          Ihre Daten werden ausschließlich zur Verbesserung der Webseite
          verwendet.
          <br />
          Folgende Daten werden gespeichert
          <br />
          Server-Logs
          <br />
          Diese werden aus Sicherheitsgründen für 48 Stunden vorgehalten
          (anschließend gelöscht) und beinhalten folgende Daten:
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>- angefragte Seite</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>- Referrer URL</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Datum und Uhrzeit der Serveranfrage
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Status der Serverabfrage
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - übertragende Datenmenge
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>- IP-Adresse</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - User-Agent (Browser &amp; Betriebssystem)
            </ListItem>
          </List>
          Sie werden nicht mit anderen Datenquellen zusammengeführt und nur
          geprüft, wenn Anhaltspunkte für eine rechtswidrige Nutzung vorliegen.
          <br />
          Diese Daten sind für die Hetzner Online GmbH nicht zuordenbar. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Grundlage für die Datenverarbeitung ist § 6 Nr. 5
          DSG-EKD, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
          oder vorvertraglicher Maßnahmen gestattet.
          <br /> Umgang mit Cookies:
          <br />
          Beim Besuch dieser Homepage werden auf dem vom Besucher verwendeten
          Geräten (PC, Notebook, Smartphone, …) die nachfolgend aufgelisteten
          Cookies (siehe{' '}
          <Link href="https://de.wikipedia.org/wiki/HTTP- Cookie">
            https://de.wikipedia.org/wiki/HTTP- Cookie
          </Link>
          ) gesetzt:
          <br />
          Die genannten Sitzungs-Cookies werden mit dem Beenden des Browsers
          automatisch gelöscht, also beim nächsten Aufruf der Homepage nicht
          mehr an diese übermittelt. Wenn der Browser entsprechend eingestellt
          ist, werden alle Cookies außer Ausgewählten beim Beenden gelöscht. Wie
          diese Einstellungen vorgenommen werden, wird auf den Homepages der
          Browser-Hersteller erläutert. Die Cookies, die unser Webseiten-System
          setzt, werden nicht zur Identifizierung oder statistischer Erfassung
          von Besuchern genutzt.
          <br />
          Rechtsgrundlage:
          <br />
          §6 Ziffer 2 DSG-EKD i.V.m. Art. 4 Nr. 11 DSGVO insbesondere
          Erwägungsgrund 32 und der Anforderung, dass das DSG-EKD im Einklang
          mit der DSGVO sein muss (Art. 91 DSGVO) bei den Cookies, die sich
          automatisch mit dem Schließen des Browsers löschen.
          <br />§ 6 Ziffer 2 DSG-EKD i.V.m. § 25 TDDDG aufgrund der expliziten
          Einwilligung am Beginn des Besuchs der Homepage.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            6. Präsenzen in sozialen Netzwerken
          </Typography>{' '}
          Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke
          (Facebook, Instagram, YouTube) und verarbeiten in diesem Rahmen Daten
          der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren oder um
          Informationen über uns anzubieten.
          <br />
          Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
          Raumes der Europäischen Union verarbeitet werden können. Hierdurch
          können sich für die Nutzer Risiken ergeben, weil so z.B. die
          Durchsetzung der Rechte der Nutzer erschwert werden könnte.
          <br />
          Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im
          Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können
          z.B. anhand des Nutzungsverhaltens und sich daraus ergebender
          Interessen der Nutzer Nutzungsprofile erstellt werden. Die
          Nutzungsprofile können wiederum verwendet werden, um z.B.
          Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die
          mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
          werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert,
          in denen das Nutzungsverhalten und die Interessen der Nutzer
          gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
          unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
          (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
          sind und bei diesen eingeloggt sind).
          <br /> Für eine detaillierte Darstellung der jeweiligen
          Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out)
          verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber
          der jeweiligen Netzwerke.
          <br />
          Auch im Fall von Auskunftsanfragen und der Geltendmachung von
          Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten
          bei den Anbietern geltend gemacht werden können. Nur die Anbieter
          haben jeweils Zugriff auf die Daten der Nutzer und können direkt
          entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
          dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
          <br />
          Da es sich um reine Verlinkungen und nicht um eine Einbindung handelt,
          sind diese datenschutzrechtlich irrelevant, solange diese nicht
          aufgerufen werden. Ein Aufruf der sozialen Netzwerke findet erst
          statt, wenn Sie diese Links explizit anklicken bzw. aktivieren.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Facebook
          </Typography>{' '}
          Sie finden unsere Präsenz bei Facebook unter{' '}
          <Link href="https://www.facebook.com/ukrainischer.lebensmut/">
            https://www.facebook.com/ukrainischer.lebensmut/
          </Link>
          Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
          Dublin 2, Irland, Mutterunternehmen: Facebook, 1 Hacker Way, Menlo
          Park, CA 94025, USA;
          <br />
          Website:{' '}
          <Link href="https://www.facebook.com;">
            https://www.facebook.com;
          </Link>
          <br />
          Datenschutzerklärung:{' '}
          <Link href="https://www.facebook.com/about/privacy">
            https://www.facebook.com/about/privacy;
          </Link>
          <br />
          Widerspruchsmöglichkeit (Opt-Out): Einstellungen für Werbeanzeigen:
          <Link href="https://www.facebook.com/settings?tab=ads">
            https://www.facebook.com/settings?tab=ads
          </Link>
          .
          <br />
          Wir sind gemeinsam mit Facebook Irland Ltd. für die Erhebung (jedoch
          nicht die weitere Verarbeitung) von Daten der Besucher unserer
          Facebook-Seite verantwortlich. Zu diesen Daten gehören Informationen
          zu den Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie
          interagieren, oder die von ihnen vorgenommenen Handlungen (siehe unter
          „Von dir und anderen getätigte und bereitgestellte Dinge“ in der
          Facebook-Datenrichtlinie:{' '}
          <Link href="https://www.facebook.com/policy">
            https://www.facebook.com/policy
          </Link>
          ), sowie Informationen über die von den Nutzern genutzten Geräte (z.
          B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen,
          Cookie-Daten; siehe unter „Geräteinformationen“ in der
          Facebook-Datenrichtlinie-erklärung:{' '}
          <Link href="https://www.facebook.com/policy">
            https://www.facebook.com/policy
          </Link>
          ). Wie in der Facebook-Datenrichtlinie unter „Wie verwenden wir diese
          Informationen?“ erläutert, erhebt und verwendet Facebook Informationen
          auch, um Analysedienste, so genannte „Seiten-Insights“, für
          Seitenbetreiber bereitzustellen, damit diese Erkenntnisse darüber
          erhalten, wie Personen mit ihren Seiten und mit den mit ihnen
          verbundenen Inhalten interagieren. Wir haben mit Facebook eine
          spezielle Vereinbarung abgeschlossen („Informationen zu
          Seiten-Insights“,
          <Link href="https://www.facebook.com/legal/terms/page_controller_addendum">
            https://www.facebook.com/legal/terms/page_controller_addendum
          </Link>
          ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
          Facebook beachten muss und in der Facebook sich bereit erklärt hat,
          die Betroffenenrechte zu erfüllen (d. h. Nutzer können z. B. Auskünfte
          oder Löschungsanfragen direkt an Facebook richten). Die Rechte der
          Nutzer (insbesondere auf Auskunft, Löschung, Widerspruch und
          Beschwerde bei zuständiger Aufsichtsbehörde), werden durch die
          Vereinbarungen mit Facebook nicht eingeschränkt. Weitere Hinweise
          finden sich in den „Informationen zu Seiten-Insights“ (
          <Link href="https://www.facebook.com/legal/terms/information_about_page_insights_data">
            https://www.facebook.com/legal/terms/information_about_page_insights_data
          </Link>
          ).
          <br />
          Verarbeitete Datenarten: Bestandsdaten (z.B. Namen, Adressen),
          Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B.
          Eingaben in Onlineformularen), Nutzungsdaten (z.B. besuchte Webseiten,
          Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
          (z.B. Geräte- Informationen, IP-Adressen).
          <br />
          Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
          Onlinediensten).
          <br />
          Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation, Tracking
          (z.B. interessens- /verhaltensbezogenes Profiling, Nutzung von
          Cookies), Remarketing, Reichweitenmessung (z.B. Zugriffsstatistiken,
          Erkennung wiederkehrender Besucher). <br />
          Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
          DSGVO).
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Instagram
          </Typography>{' '}
          Sie finden unsere Präsenz bei Instagram unter{' '}
          <Link href="https://www.instagram.com/ukrainischer.lebensmut/">
            https://www.instagram.com/ukrainischer.lebensmut/
          </Link>
          <br />
          Wir betreiben unser Instagram-Profil in gemeinsamer Verantwortung mit
          Instagram: Soziales Netzwerk; Dienstanbieter: Instagram Inc., 1601
          Willow Road, Menlo Park, CA, 94025, USA, Mutterunternehmen: Facebook,
          1 Hacker Way, Menlo Park, CA 94025, USA; Website:
          <Link href="https://www.instagram.com">
            https://www.instagram.com
          </Link>
          ; Datenschutzerklärung:
          <Link href="https://instagram.com/about/legal/privacy">
            https://instagram.com/about/legal/privacy
          </Link>
          . <br />
          Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
          Onlinediensten). <br />
          Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation, Tracking
          (z.B. interessens- /verhaltensbezogenes Profiling, Nutzung von
          Cookies), Remarketing, Reichweitenmessung (z.B. Zugriffsstatistiken,
          Erkennung wiederkehrender Besucher).
          <br /> Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
          lit. f. DSGVO).
          <br />
          Arten von Daten, die Instagram erhebt:
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Informationen, die für Profilerstellung und Betrieb notwendig
              sind, z. B. E-Mail-Adresse, Telefonnummer oder Alter{' '}
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              <Typography
                style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
              >
                - Nutzerverhalten: Seitennutzung, „like“-Buttons, Beiträge und
                Fotos sowie Nachrichten an andere Nutzer. In einigen Produkten
                von Instagram können Ende-zu-Ende-verschlüsselte Nachrichten
                verwendet werden.{' '}
                <Link href="https://www.facebook.com/help/messenger-app/786613221989782/?helpref=uf_share">
                  Mehr erfahren.
                </Link>
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Analyse der Freunde und Follower sowie deren Nutzerverhalten.
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Informationen über Telefon, den Computer oder das Tablet, auf
              dem du unsere Produkte genutzt werdenz. B. die Art des Geräts und
              die Version unserer App.
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              <Typography
                style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
              >
                {' '}
                - Informationen von Instagram-
                <Link href="https://privacycenter.instagram.com/policy/?annotations[0]=Definition-Partner">
                  Partnern
                </Link>{' '}
                über Verhalten innerhalb und außerhalb der Produkte, u.a.
                besuchte Websites, verwendete Apps oder Online-Spiele.
              </Typography>
            </ListItem>
          </List>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Youtube
          </Typography>{' '}
          Sie finden unseren YouTube Account unter der
          <Link
            href="https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCE
          fBsCGvRCJymBmPfsB0nPQ%3Fcbrd%3D1&amp;gl=DE&amp;m=0&amp;pc=yt&amp;cm=2&amp;hl=de&amp;src=1"
          >
            Web-ID
          </Link>{' '}
          <br />
          Diesen betreiben wir in gemeinsamer Verantwortung (§26 DSGVO) mit:
          <br />
          Google Ireland Limited
          <br />
          Gordon House, Barrow Street
          <br />
          Dublin 4<br />
          Irland
          <br />
          Impressum:
          <Link href="https://www.youtube.com/t/impressum?hl=de&amp;gl=DE">
            https://www.youtube.com/t/impressum?hl=de&amp;gl=DE
          </Link>
          .
          <br />
          Das Mutterunternehmen dieses in Irland ansässigen Unternehmens ist:
          <br />
          Google LLC
          <br />
          1600 Amphitheatre Parkway
          <br />
          Mountain View
          <br />
          CA 94043, USA
          <br />
          Da uns nicht alle einzelnen Datenverarbeitungsvorgänge sowie deren
          Umfang im Detail bekannt sind, verweisen wir innerhalb dieser
          Datenschutzerklärung bei bestimmten Punkten auf die Datenrichtlinie
          von Google, welche hier abgerufen werden kann.
          <br />
          Zudem weisen wir ausdrücklich darauf hin, dass Ihre Daten neben Irland
          auch in die USA und somit in ein unsicheres Drittland übermittelt
          werden können. Für die USA bestehen derzeit weder ein
          Angemessenheitsbeschlusses der EU noch sonst geeignete Garantien. Der
          Schutz Ihrer Daten kann im Zielland USA nicht gewährleistet werden. In
          den USA besteht aktuell kein, der EU gleichwertiges Datenschutzniveau.
          Daher geht die Übermittlung mit entsprechenden Risiken einher.
          Insbesondere bestehen keine Garantien im Hinblick auf das Unterbleiben
          von Zugriffen auf Ihre übermittelten Daten durch staatliche Stellen.
          So kann es z.B. nicht ausgeschlossen werden, dass US-Behörden auf
          Grundlage von Abschnitt 702 des Foreign Intelligence Surveillance Act
          (kurz FISA; zu Deutsch etwa „Gesetz zur Überwachung in der
          Auslandsaufklärung“, ein Gesetz, das die Auslandsaufklärung und
          Spionageabwehr der Vereinigten Staaten regelt) auf Ihre Daten
          zugreifen. Wir weisen Sie in diesem Zusammenhang ausdrücklich darauf
          hin, dass Ihnen als EU-Bürger insoweit keine effektive
          Rechtsschutzmöglichkeit gegen die Verarbeitung Ihrer Daten durch
          US-Behörden auf Grundlage des FISA zur Verfügung steht. Wenn Sie
          unseren YouTube Kanal dennoch nutzen, so tun Sie dies in Kenntnis
          dieser Risiken, die Sie dadurch auch bewusst in Kauf nehmen. <br />
          Rechtsgrundlage der Verarbeitung <br />
          Bei jeder innerhalb dieser Datenschutzerklärung beschriebenen
          Verarbeitung, teilen wir Ihnen stets die entsprechende
          Rechtsgrundlage, auf der die Verarbeitung vorgenommen wird, mit. Man
          unterscheidet hierbei folgende Fallgruppen, bei denen eine
          Verarbeitung rechtmäßig ist: <br />
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Sie haben uns eine Einwilligung zu der Verarbeitung der Sie
              betreffenden personenbezogenen Daten für einen oder mehrere
              bestimmte Zwecke erteilt (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Zwischen Ihnen und uns besteht ein Vertrag, für dessen Erfüllung
              die Verarbeitung erfolgt oder die Verarbeitung ist zur
              Durchführung vorvertraglicher Maßnahmen, die auf Anfrage
              Ihrerseits erfolgen, erforderlich (Art. 6 Abs. 1 S. 1 lit. b
              DSGVO)
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Die Erfüllung einer rechtlichen Verpflichtung, derer wir
              unterliegen, erfordert die Verarbeitung (Art. 6 Abs. 1 S. 1 lit. c
              DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Der Schutz lebenswichtiger Interessen Ihrerseits oder einer
              anderen natürlichen Person erfordern eine Verarbeitung (Art. 6
              Abs. 1 S. 1 lit. d DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Die Wahrnehmung einer uns übertragenen, im öffentlichen
              Interesse liegenden Aufgabe oder Ausübung öffentlicher Gewalt
              erfordern eine Verarbeitung (Art. 6 Abs. 1 S. 1 lit. e DSGVO).
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Die Erforderlichkeit der Verarbeitung zur Wahrung unserer
              berechtigten Interessen oder eines Dritten, sofern nicht Ihre
              Interessen oder Grundrechte und Grundfreiheiten, die den Schutz
              personenbezogener Daten erfordern, überwiegen (Art. 6 Abs. 1 S. 1
              lit. f DSGVO).
            </ListItem>
          </List>
          Hinsichtlich der Datenverarbeitung von Google verweisen wir auf die 
          Datenschutzrichtlinie von Google, die Sie unter folgendem Link abrufen
          können{' '}
          <Link href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </Link>{' '}
          sowie auf die rechtlichen Rahmenbedingungen für die Datenübermittlung,
          welche Google auf dieser Seite erläutert:
          <Link href="https://policies.google.com/privacy/frameworks?hl=de">
            https://policies.google.com/privacy/frameworks?hl=de
          </Link>
          .  Des Weiteren verweisen wir auf die „Grundlagen des Datenschutzes in
          Apps von YouTube“:{' '}
          <Link href="https://support.google.com/youtube/answer/10364219">
            hhttps://support.google.com/youtube/answer/10364219
          </Link>{' '}
          <br />
          Speicherung von Daten / Löschung von Daten <br />
          Innerhalb der in unserer Datenschutzerklärung beschriebenen
          Verarbeitungen, teilen wir Ihnen stets die entsprechende Speicherdauer
          bzw. die Zeitpunkte der Löschung oder Sperrung der Daten mit. Wird
          keine ausdrückliche Speicherdauer definiert, erfolgt eine Löschung
          bzw. Sperrung der Daten, sobald der Zweck oder die Rechtsgrundlage für
          die Speicherung entfällt.
          <br />
          Eine Speicherung kann über die definierten Zeiten hinaus erfolgen,
          wenn gesetzliche Vorschriften, denen wir unterliegen (z.B. § 147 AO, §
          247 HGB) eine andere Speicherdauer vorsehen. Im Anschluss an die
          Speicherdauer werden die personenbezogenen Daten gelöscht bzw.
          gesperrt, es sei denn eine weitere Speicherung ist durch uns auf Grund
          einer Rechtsgrundlage erforderlich. Zudem ist eine Speicherung über
          die angegebene Zeit hinaus im Falle einer (drohenden)
          Rechtsstreitigkeit mit Ihnen oder eines sonstigen Rechtsverfahrens
          möglich. Hinsichtlich der Datenverarbeitung von Google verweisen wir
          auf die Datenschutzrichtlinie von Google, die Sie unter folgendem Link
          abrufen können{' '}
          <Link href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </Link>
          , insbesondere auf den Punkt „Aufbewahrung Ihrer Informationen“, den
          Sie hier abrufen können:
          <Link href="https://policies.google.com/privacy?hl=de#inforetaining">
            https://policies.google.com/privacy?hl=de#inforetaining
          </Link>{' '}
          sowie auf die rechtlichen Rahmenbedingungen für die Datenübermittlung,
          welche Google auf dieser Seite erläutert:{' '}
          <Link href="https://policies.google.com/privacy/frameworks?hl=de">
            https://policies.google.com/privacy/frameworks?hl=de
          </Link>
          . Des Weiteren verweisen wir auf die „Grundlagen des Datenschutzes in
          Apps von YouTube“:{' '}
          <Link href="https://support.google.com/youtube/answer/10364219">
            https://support.google.com/youtube/answer/10364219
          </Link>{' '}
          <br />
          Erhebung von personenbezogenen Daten
          <br />
          Ausschließliche informatorische Nutzung unseres YouTube-Kanals (Ohne
          Log-in) Sie können unsere Seite auch dann aufrufen, wenn Sie kein
          YouTube- bzw. Google-Profil besitzen bzw. bei Aufruf nicht in dieses
          eingeloggt sind, wobei hier einige Funktion (wie z.B. der
          Kommentierung von Beiträgen, das „Mag-ich“-Kennzeichnen von Videos
          sowie das Abonnieren von Kanälen) nicht genutzt werden können. Wir
          erfassen hierbei keine Daten von Ihnen. Allerdings weisen wir darauf
          hin, dass Daten seitens Google erfasst werden. Es werden mindestens
          jene personenbezogenen Daten erhoben, die Ihr Browser an den Server
          von Google übermittelt. Dies sind in der Regel Daten, die technisch
          erforderlich sind, um Ihnen die Website unter Gewährleistung einer
          sicheren und stabilen Anzeige zur Ansicht bereitzustellen. Hierbei
          handelt es sich - unserer Kenntnis nach - mindestens um folgende
          Informationen, die sich aus einer Logfile-Zeile ergeben:
          <br />
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Internetprotokoll-Adresse (IP-Adresse){' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Uhrzeit und Datum des jeweiligen Zugriffs{' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Zeitzonendifferenz zur Greenwich Mean Time (GMT)
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Die konkret aufgerufene Seite{' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Status des Zugriffs / Hypertext Transfer Protocol (http)
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Datenmenge, die jeweils übertragen wurde{' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              {' '}
              - Website, von welcher der Zugriff auf unsere Website erfolgt
              (Referrer-URL){' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              - Verwendeter Internet-Browser (inkl. Sprache und Version){' '}
            </ListItem>{' '}
            <ListItem sx={{ padding: '2px 18px' }}>
              {' '}
              - Verwendetes Betriebssystem
            </ListItem>
          </List>
          Hinsichtlich weiterer Informationen verweisen wir auf die
          Datenschutzrichtlinie von Google, die Sie unter folgendem Link abrufen
          können{' '}
          <Link href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </Link>
          . Des Weiteren verweisen wir auf die „Grundlagen des Datenschutzes in
          Apps von YouTube“:{' '}
          <Link href="https://support.google.com/youtube/answer/10364219">
            https://support.google.com/youtube/answer/10364219
          </Link>
          .
          <br />
          Zudem werden beim Besuch unseres Profils seitens Google sog. Cookies
          auf Ihrem genutzten Endgerät abgelegt, welche Google das Erstellen von
          Nutzerprofilen durch Ihre Präferenzen so-wie Interessen ermöglicht,
          sodass Ihnen hierauf zielgerichtete Werbung (innerhalb als auch
          au-ßerhalb von YouTube) angezeigt werden kann. Bzgl. des Verwaltens
          der Datenschutzeinstel-lungen für Werbeanzeigen und sonstigen Punkten
          in diesem Zusammenhang verweisen wir auf den entsprechenden Unterpunkt
          „Werbeanzeigen in YouTube-Videos“ innerhalb der Daten-
          schutzeinstellungen:
          <Link href="https://support.google.com/youtube/answer/3181017">
            https://support.google.com/youtube/answer/3181017
          </Link>
          .
          <br />
          Weitere Informationen können Sie der Unterseite „So verwendet Google
          Cookies“ entnehmen, welche Sie unter dem folgenden Link erreichen:
          <br />
          <Link href="https://policies.google.com/technologies/cookies?hl=de">
            https://policies.google.com/technologies/cookies?hl=de
          </Link>
          . Wir weisen darauf hin, dass Sie die Speicherung von Cookies
          jederzeit durch eine entsprechende Einstellung Ihres Browsers un-
          terbinden können. Weitere Informationen in diesem Zusammenhang haben
          wir hinsichtlich der gängigsten Browser nachfolgend zusammengestellt,
          weisen Sie jedoch darauf hin, dass hier-durch die Funktionsfähigkeit
          unseres YouTube-Kanals eingeschränkt werden kann.
          <br />
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Mozilla Firefox:
              <Link
                href="https://support.mozilla.org/de/kb/verbesserter-schutz-
              aktivitatenverfolgung-desktop"
              >
                https://support.mozilla.org/de/kb/verbesserter-schutz-
                aktivitatenverfolgung-desktop
              </Link>
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Microsoft Edge:{' '}
              <Link
                href="https://support.microsoft.com/de-de/help/17442/windows-internet-
              explorer-delete-manage-cookies"
              ></Link>
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Google Chrome:
              <Link href="https://support.google.com/chrome/answer/95647">
                https://support.google.com/chrome/answer/95647
              </Link>
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              {' '}
              <Link href="https://help.opera.com/de/latest/web-preferences/#cookies">
                https://help.opera.com/de/latest/web-preferences/#cookies
              </Link>
              - Opera:
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Safari:{' '}
              <Link href="https://support.apple.com/de-de/guide/safari/sfri11471/mac">
                https://support.apple.com/de-de/guide/safari/sfri11471/mac
              </Link>
            </ListItem>
          </List>
          Ausschließliche informatorische Nutzung unseres YouTube-Kanals (Mit
          Log-in)
          <br /> Wenn Sie unseren YouTube-Kanal aufrufen und dabei in Ihr Konto
          eingeloggt sind, werden ggf. zusätzlich zu den in Ziffer 6.1.
          genannten Daten, weitergehende personenbezogene Daten seitens Google
          erhoben. Hinsichtlich weiterer Informationen verweisen wir auf die
          Datenschutzrichtlinie von Google, die Sie unter folgendem Link abrufen
          können{' '}
          <Link href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </Link>
          . Des Weiteren verweisen wir auf die „Grundla-gen des Datenschutzes in
          Apps von YouTube“:{' '}
          <Link href="https://support.google.com/youtube/answer/10364219">
            https://support.google.com/youtube/answer/10364219
          </Link>
          . <br />
          Nutzung besonderer Funktionen unseres YouTube-Kanals <br />
          Kontaktaufnahme: Nehmen Sie mit uns Kontakt über die innerhalb unseres
          Kanals bzw. Impressums angegebene E-Mail-Adresse auf, so wird Ihre
          E-Mailadresse zusammen mit sonst ggf. von Ihnen freiwillig angegebenen
          Daten (z.B. Name, Telefonnummer usw.) von uns gespei-chert und
          verarbeitet, um Ihre Anfrage zu bearbeiten. Dies geschieht auf
          Grundlage un-seres berechtigten Interesseses nach Art. 6 Abs. 1 lit. f
          DSGVO.
          <br /> Kommentierung eines Videos: Nehmen Sie einen Kommentar unter
          einem von uns hochgeladenen Video vor, so erhalten wir keine
          weitergehenden Informationen und personenbezogene Daten, außer denen,
          die innerhalb Ihres Profils öffentlich einsehbar sind.
          <br />
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            7. Einbindung externer Software auf unserer Webseite
          </Typography>{' '}
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Google Maps
          </Typography>
          Google Maps Unsere Website nutzt den Kartendienst <b>Google Maps</b>,
          betrieben von <b>Google Ireland Limited</b>, Gordon House, Barrow
          Street, Dublin 4, Irland („Google“). <br />
          Bei der Nutzung von Google Maps werden folgende Daten verarbeitet:
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>- Ihre IP-Adresse</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Standortdaten (sofern Sie diese in Ihren Geräteeinstellungen
              freigegeben haben)
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Nutzungsdaten der Kartenfunktion
            </ListItem>
          </List>
          Diese Daten können an einen Google-Server in den USA übertragen und
          dort gespeichert werden. <br />
          Die Nutzung von Google Maps erfolgt, um Ihnen interaktive Karten
          bereitzustellen und Ihnen eine einfache Anfahrtsbeschreibung zu
          ermöglichen.
          <br /> Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse), da wir ein Interesse an einer
          nutzerfreundlichen Darstellung unseres Standorts haben. Falls eine
          Einwilligung erforderlich ist (z. B. durch eine Cookie-Einwilligung),
          erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
          <br />
          Datenübermittlung in die USA: <br />
          Google verarbeitet Ihre Daten möglicherweise in den USA. Die USA
          werden vom Europäischen Gerichtshof als Land mit einem unzureichenden
          Datenschutzniveau eingestuft. Google hat sich jedoch dazu
          verpflichtet, die europäischen Datenschutzstandards einzuhalten (z. B.
          durch Standardvertragsklauseln). Wenn Sie nicht möchten, dass Google
          über unsere Website Daten verarbeitet, können Sie JavaScript in Ihrem
          Browser deaktivieren. In diesem Fall wird Google Maps nicht angezeigt.
          <br />
          Mehr Informationen zur Datenverarbeitung durch Google finden Sie in
          der Datenschutzerklärung von Google:
          <Link href="https://policies.google.com/privacy?hl=de">
            https://policies.google.com/privacy?hl=de
          </Link>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Eventbrite
          </Typography>{' '}
          Wir nutzen für die Abwicklung von Ticketreservierungen den Dienst
          &quot;Eventbrite&quot; der Eventbrite Inc., 535 Mission Street, San
          Francisco, CA 94105, USA. Eventbrite ermöglicht es uns, Ihnen die
          Möglichkeit zur Buchung unserer Veranstaltungen bereitzustellen.
          <br /> Im Rahmen der Ticketbuchung über Eventbrite werden folgende
          personenbezogene Daten erhoben und verarbeitet:
          <br />
          <List>
            <ListItem sx={{ padding: '2px 18px' }}>- Name</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>- E-Mail-Adresse</ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - Zahlungsinformationen
            </ListItem>
            <ListItem sx={{ padding: '2px 18px' }}>
              - IP-Adresse - weitere buchungsrelevante Daten
            </ListItem>
          </List>
          Die Verarbeitung dieser Daten erfolgt zum Zweck der Durchführung und
          Abwicklung von Ticketbuchungen für unsere Veranstaltungen. Die
          Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
          b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). <br /> Bitte
          beachten Sie, dass durch die Nutzung von Eventbrite eine Übermittlung
          Ihrer personenbezogenen Daten in die USA stattfinden kann. Die USA
          werden vom Europäischen Gerichtshof als ein Land mit einem
          unzureichenden Datenschutzniveau gemäß EU-Standards eingestuft.
          Eventbrite verpflichtet sich jedoch, die europäischen
          Datenschutzstandards einzuhalten.
          <br />
          Eventbrite ist eine Gesellschaft nach dem Recht des US-Bundesstaates
          Delaware mit Hauptsitz in 95 Third Street, 2nd Floor, San Francisco,
          California, 94103 USA, Reg. 4742147, („Eventbrite“, „wir“, „uns“ oder
          „unser(e)“). Für Benutzer, die im Europäischen Wirtschaftsraum („EWR“)
          oder in der Schweiz ansässig sind, fungiert Eventbrite Inc. in Bezug
          auf die über die Services erfassten personenbezogenen Daten (wie
          nachfolgend definiert) als verantwortliche Partei. Eventbrites
          Vertretung in der EU zum Zwecke der europäischen
          Datenschutzgesetzgebung ist Eventbrite Operations (IE) Limited mit
          Sitz in 97 South Mall Cork, T12 XV54, Irland.
          <br />
          Eventbrite ist unter der oben angegebenen Adresse oder unter{' '}
          <Link to="mailto:ukrainischer.lebensmut@gmail.com">
            privacy@eventbrite.com erreichbar.
          </Link>
          <br />
          Informationen zum Datenschutz des Anbieters finden Sie unter{' '}
          <Link href="https://www.eventbrite.de/help/de/articles/460838/datenschutzrichtlinien-von-eventbrite/">
            https://www.eventbrite.de/help/de/articles/460838/datenschutzrichtlinien-von-eventbrite/
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
