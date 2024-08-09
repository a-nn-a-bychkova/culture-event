import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

export default function ImpressumView(props) {
  return (
    <Box>
      {' '}
      <Container
        sx={{
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
            Impressum:
          </Typography>
          <Typography sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            Verantwortliche im Sinne des Pressegesetzes: Frau Anna Bychkova{' '}
          </Typography>
          E-Mail: a.a.bychkova@gmail.com{' '}
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Streitschlichtung
          </Typography>{' '}
          Die Europäische Kommission stellt eine Plattform zur Online-
          Streitbeilegung (OS) bereit:{' '}
          <a href=" http://ec.europa.eu/consumers/">
            http://ec.europa.eu/consumers/
          </a>
          odr Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
          bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Haftung für Inhalte
          </Typography>{' '}
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Haftung für Links
          </Typography>{' '}
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Urheberrecht
          </Typography>{' '}
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </Typography>
      </Container>
    </Box>
  );
}
