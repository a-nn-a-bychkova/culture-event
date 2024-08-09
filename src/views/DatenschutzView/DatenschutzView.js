import { Box, Link, Grid, List, ListItem, Typography } from '@mui/material';

export default function DatenschutzViewView(props) {
  return (
    <Box>
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
        In der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
        welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als
        „Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang
        verarbeiten, wenn Sie unsere Seite besuchen. Die Datenschutzerklärung
        gilt für alle von uns durchgeführten Verarbeitungen personenbezogener
        Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch
        insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
        innerhalb externer Onlinepräsenzen, wie z.B. unserer
        Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
        „Onlineangebot“). <br />
        Die hier aufgeführten Informationen stellen wir gemäß §16 des
        Datenschutzgesetzes der Evangelischen Kirche in Deutschland (nachfolgend
        DSG EKD) zur Verfügung.{' '}
        <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          1) Übersicht zu den über die Webseite durchgeführten
          Datenverarbeitungen:
        </Typography>{' '}
        <List>
          <Typography sx={{ textDecoration: 'underline' }}>
            Arten der verarbeiteten Daten
          </Typography>
          <ListItem sx={{ padding: '2px 18px' }}>
            Kontaktdaten (z.B. E-Mail, Telefonnummern)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            {' '}
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten)
          </ListItem>
        </List>
        <List>
          <Typography sx={{ textDecoration: 'underline' }}>
            Kategorien betroffener Personen
          </Typography>
          <ListItem sx={{ padding: '2px 18px' }}>Interessenten</ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Kommunikationspartner
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            {' '}
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)
          </ListItem>
        </List>
        <List>
          <Typography sx={{ textDecoration: 'underline' }}>
            Zwecke der Verarbeitung
          </Typography>
          <ListItem sx={{ padding: '2px 18px' }}>
            {' '}
            Affiliate-Nachverfolgung
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Büro- und Organisationsverfahren
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Direktmarketing (z.B. per E-Mail oder postalisch)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Interessenbasiertes und verhaltensbezogenes Marketing
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Kontaktanfragen und Kommunikation
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Profiling (Erstellen von Nutzerprofilen)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>Sicherheitsmaßnahmen</ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung
            von Cookies)
          </ListItem>
          <ListItem sx={{ padding: '2px 18px' }}>
            Verwaltung und Beantwortung von Anfragen
          </ListItem>
        </List>
        Rechtsgrundlage für die Datenverarbeitung über diese Webseite ist Art. 6
        abs. 1 lit. f DSGVO. Rechtsgrundlage für die Nutzung der Sozialen Medien
        ist unser berechtigtes Interesse gemäß Art. 6 abs. 1 lit. f DSGVO an
        einer effektiven und modernen Information und Kommunikation mit
        Interessierten. <br />
        Sofern Sie um Ihre Zustimmung zu einer Datenverarbeitung gebeten werden
        (z. B. durch Betätigung einer Schaltfläche oder Ähnliches), ist die
        Rechtsgrundlage für die Datenverarbeitung Ihre Einwilligung gemäß Art. 6
        abs. 1 lit. a DSGVO.{' '}
        <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          2) Verantwortliche Stelle
        </Typography>{' '}
        Verantwortlich für den Betrieb dieser Webseite ist: <br />
        Frau Anna Bychkova; <br />
        E-Mail: a.a.bychkova@gmail.com
        <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          3) Ihre Rechte in Bezug auf die Verarbeitung Ihrer Daten
        </Typography>{' '}
        Nach der Datenschutz-Grundverordnung stehen Ihnen beim Verantwortlichen
        für die Datenerhebung folgende Rechte zu: Werden Ihre personenbezogenen
        Daten verarbeitet, so haben Sie das Recht Auskunft über die zu Ihrer
        Person gespeicherten Daten zu erhalten (Art. 15 DSGVO). Sollten
        unrichtige personenbezogene Daten verarbeitet werden, steht Ihnen ein
        Recht auf Berichtigung zu (Art. 16 DSGVO). Liegen die gesetzlichen
        Voraussetzungen vor, so können Sie die Löschung oder Einschränkung der
        Verarbeitung verlangen sowie Widerspruch gegen die Verarbeitung einlegen
        (Art. 17, 18 und 21 DSGVO). Wenn Sie in die Datenverarbeitung
        eingewilligt haben oder ein Vertrag zur Datenverarbeitung besteht und
        die Datenverarbeitung mithilfe automatisierter Verfahren durchgeführt
        wird, steht Ihnen gegebenenfalls ein Recht auf Datenübertragbarkeit zu
        (Art. 20 DSGVO). Sollten Sie von Ihren oben genannten Rechten Gebrauch
        machen, prüft die Stadt Nürnberg, ob die gesetzlichen Voraussetzungen
        hierfür erfüllt sind.{' '}
        <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          4) Kontaktdaten der zuständigen Aufsichtsbehörde
        </Typography>{' '}
        Die unabhängige Aufsicht für die Einhaltung der Datenschutzbestimmungen
        auf dieser Webseite obliegt folgender Stelle: <br />
        Postadresse: Postfach 22 12 19, 80502 München <br />
        E-Mail: poststelle@datenschutz-bayern.de <br />
        Telefon: 089 212672-0 <br />
        Faxen 089 212672-50
        <br /> Besucheradresse: Wagmüllerstraße 18, 80538 München (Bitte nur
        nach vorheriger Terminabsprache) <br />
        Diese ist zugleich auch der Adressat von Beschwerden oder Meldungen in
        den Belangen des Datenschutzes auf dieser Webseite.
      </Typography>
    </Box>
  );
}
