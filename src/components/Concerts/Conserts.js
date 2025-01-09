import Context from '../../contexts/context';
import { useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import {
  Box,
  IconButton,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import Link from '@mui/material/Link';
import { v4 as uuidv4 } from 'uuid';

const ConcertsListDe = [
  {
    id: uuidv4(),
    date: 'Fr, 14. Februar 2025',
    time: '17:00',
    concertTitle: 'Im Herzen der Liebe',
    adressTitle: 'Erlanger Musikinstitut',
    address: 'Rathsberger Str. 1, 91054 Erlangen',
    addressLink: 'https://maps.app.goo.gl/vfcPWy5Xzi7kwLXS8',
    ticket: 'Spenden ab 10 Euro',
    dauer: '1 St.',
    eventLink: '',
    participants:
      ' Nataliia Hrabarska (Mezzosopran, Bandura), Natalka Totovytska (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran), Yevhen Petronelli (Bariton)',
    details:
      'Am 14. Februar steht die Konzertreihe im Zeichen der Liebe – jener Kraft, die uns miteinander verbindet und selbst in schweren Zeiten Hoffnung schenkt. Mit Musik und Poesie laden wir ein, die vielen Facetten der Liebe zu entdecken und einen besonderen Abend gemeinsam zu genießen.',
    eventbrite: '',
  },
  {
    id: uuidv4(),
    date: 'Mo, 24. Februar 2025',
    time: '21:00',
    concertTitle: 'Galerie Ukraine',
    adressTitle: 'Kammerspiele Staatstheater Nürnberg',
    address: 'Richard-Wagner-Platz 2-10, 90443 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/NafYR7hcYBNaXTpGA',
    ticket: '',
    dauer: '1 St.',
    eventLink:
      'https://www.staatstheater-nuernberg.de/spielplan-24-25/galerie-ukraine/24-02-2025/2100',
    participants:
      'Svitlana Mykhailenko (Poesieauswahl, Übersetzung), Nataliia Hrabarska (Mezzosopran, Bandura), Natalka Totovytska (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran), Yevhen Petronelli (Bariton), Demian Matushevski (Bassbariton)',
    details: 'Texte, Lieder und Gespräche über den Krieg',
    eventbrite: '',
  },
  {
    id: uuidv4(),
    date: 'Sa, 29. März 2025',
    time: '16:00',
    concertTitle: 'Ukrainischer Lebensmut',
    adressTitle: 'Kammermusiksaal',
    address: 'Veilhofstraße 34, 90489 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/74bbWY55NayBaaoWA',
    ticket: '',
    dauer: '1 St.',
    eventLink: '',
    // participants:
    //   'Svitlana Mykhailenko (Poesieauswahl, Übersetzung), Nataliia Hrabarska (Mezzosopran, Bandura), Nazar Totovytski (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran), Yevhen Petronelli (Bariton), Demian Matushevski (Bassbariton)',
    details: '',
    eventbrite: '',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Пт, 14 лютого 2025',
    time: '17:00',
    concertTitle: 'Im Herzen der Liebe',
    adressTitle: 'Erlanger Musikinstitut',
    address: 'Rathsberger Str. 1, 91054 Erlangen',
    addressLink: 'https://maps.app.goo.gl/vfcPWy5Xzi7kwLXS8',
    ticket: 'Донати від 10 євро',
    dauer: '1 St.',
    eventLink: '',
    participants:
      'Наталія Грабарська (бандура, мецо-сопрано), Наталка Тотовицька (скрипка), Олена Василенко (фортепіано), Анна Бичкова (мецо-сопрано), Євген Петронеллі (баритон)',
    details:
      '14 лютого концертна програма стане оспівуванням любові — тієї сили, що єднає серця і дарує надію навіть у найскладніші часи. У супроводі музики та поезії ми запрошуємо вас поринути у багатогранний світ почуттів і провести цей особливий вечір разом.',
    eventbrite: '',
  },
  {
    id: uuidv4(),
    date: 'Пн, 24 лютого 2025',
    time: '21:00',
    concertTitle: 'Galerie Ukraine',
    adressTitle: 'Kammerspiele Staatstheater Nürnberg',
    address: 'Richard-Wagner-Platz 2-10, 90443 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/NafYR7hcYBNaXTpGA',
    ticket: '',
    dauer: '1 St.',
    eventLink:
      'https://www.staatstheater-nuernberg.de/spielplan-24-25/galerie-ukraine/24-02-2025/2100',
    participants:
      'Світлана Михайленко (вибір поезії, переклад), Наталія Грабарська (мецо-сопрано, бандура), Наталка Тотовицька (скрипка), Олена Василенко (фортепіано), Анна Бичкова (мецо-сопрано), Євген Петронеллі (баритон), Дем’ян Матушевський (бас-баритон)',
    details: 'Тескти, пісні і розмови про війну',
    eventbrite: '',
  },
  {
    id: uuidv4(),
    date: 'Сб, 29 березня 2025',
    time: '16:00',
    concertTitle: 'Ukrainischer Lebensmut',
    adressTitle: 'Kammermusiksaal',
    address: 'Veilhofstraße 34, 90489 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/74bbWY55NayBaaoWA',
    ticket: '',
    dauer: '1 St.',
    eventLink: '',
    // participants:
    //   'Svitlana Mykhailenko (Poesieauswahl, Übersetzung), Nataliia Hrabarska (Mezzosopran, Bandura), Nazar Totovytski (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran), Yevhen Petronelli (Bariton), Demian Matushevski (Bassbariton)',
    details: '',
    eventbrite: '',
  },
];

const Concerts = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);

  return (
    <Box
      sx={{
        maxWidth: { lg: '1200px' },
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Times New Roman',
            paddingTop: { xs: '16px', sm: '16px', md: '0px' },
            color: '#495961',
            fontWeight: 'bold',
          }}
        >
          {language === 'de' ? 'Konzerte' : 'Концерти'}
        </Typography>
      </ThemeProvider>{' '}
      <List
        sx={{
          padding: '0px',
          color: '#495961',
        }}
      >
        {language === 'de' ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'column' },
              justifyContent: 'end',
            }}
          >
            {ConcertsListDe.map(concert => (
              <ListItem
                key={concert.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '20px',
                  paddingLeft: '0px',
                  paddingBottom: '0px',
                }}
              >
                <Typography
                  sx={{
                    display: 'block',
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    marginRight: 'auto',
                    fontWeight: 'bold',
                  }}
                >
                  {concert.date} <AlarmIcon sx={{ height: '14px' }} />
                  {concert.time}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    marginRight: 'auto',
                    fontStyle: 'normal',
                  }}
                >
                  {concert.concertTitle}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    fontStyle: 'normal',
                    marginRight: 'auto',
                  }}
                >
                  {concert.address}
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    letterSpacing: 4,
                    marginRight: 'auto',
                  }}
                >
                  {concert.ticket}
                </Typography>
                {concert.eventbrite && (
                  <Link
                    href={concert.eventbrite}
                    style={{
                      marginRight: 'auto',
                      color: 'inherit',
                      textDecorationColor: 'inherit',
                    }}
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        fontFamily: 'Times New Roman',
                        fontStyle: 'italic',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                      }}
                    >
                      Platzreservierung
                    </Typography>
                  </Link>
                )}
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    fontStyle: 'normal',
                    marginRight: 'auto',
                  }}
                >
                  {concert.dauer}
                </Typography>
              </ListItem>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'column' },
              justifyContent: 'end',
            }}
          >
            {ConcertsListUkr.map(concert => (
              <ListItem
                key={concert.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '20px',
                  paddingLeft: '0px',
                  paddingBottom: '0px',
                }}
              >
                <Typography
                  sx={{
                    display: 'block',
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    marginRight: 'auto',
                    fontWeight: 'bold',
                  }}
                >
                  {concert.date} <AlarmIcon sx={{ height: '14px' }} />
                  {concert.time}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    marginRight: 'auto',
                    fontStyle: 'normal',
                  }}
                >
                  {concert.concertTitle}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    fontStyle: 'normal',
                    marginRight: 'auto',
                  }}
                >
                  {concert.address}
                </Typography>

                <Typography
                  sx={{
                    display: 'flex',
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    letterSpacing: 4,
                    marginRight: 'auto',
                  }}
                >
                  {concert.ticket}
                </Typography>
                {concert.eventbrite && (
                  <Link
                    href={concert.eventbrite}
                    style={{
                      marginRight: 'auto',
                      color: 'inherit',
                      textDecorationColor: 'inherit',
                    }}
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        fontFamily: 'Times New Roman',
                        fontStyle: 'italic',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                      }}
                    >
                      Реєстрація на подію
                    </Typography>
                  </Link>
                )}
                <Typography
                  sx={{
                    fontFamily: 'Times New Roman',
                    fontSize: { sm: '16px', md: '18px' },
                    lineHeight: { sm: '24px' },
                    fontStyle: 'normal',
                    marginRight: 'auto',
                  }}
                >
                  {concert.dauer}
                </Typography>
              </ListItem>
            ))}
          </Box>
        )}
      </List>
    </Box>
  );
};

export default Concerts;
