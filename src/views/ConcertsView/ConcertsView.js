import { useEffect, useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';
import Link from '@mui/material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Button,
  Divider,
} from '@mui/material';

import { v4 as uuidv4 } from 'uuid';
import AlarmIcon from '@mui/icons-material/Alarm';
import Programm from '../../components/Programm/Programm';
const ConcertsListDe = [
  {
    id: uuidv4(),
    date: 'Fr, 14. Februar 2025',
    // time: '17:00',
    concertTitle: 'Benefizkonzert für die Ukraine',
    adressTitle: 'Erlanger Musikinstitut',
    address: 'Rathsberger Str. 1, 91054 Erlangen',
    addressLink: 'https://maps.app.goo.gl/vfcPWy5Xzi7kwLXS8',
    ticket: 'Spenden ab 10 Euro',
    dauer: '1 St.',
    eventLink: '',
    // participants:
    //   ' Nataliia Hrabarska (Mezzosopran, Bandura), Natalka Totovytska (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran)',
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
    // participants:
    //   'Svitlana Mykhailenko (Poesieauswahl, Übersetzung), Nataliia Hrabarska (Mezzosopran, Bandura), Nazar Totovytski (Geige), Olena Vasylenko (Klavier), Anna Bychkova (Mezzosopran), Yevhen Petronelli (Bariton), Demian Matushevski (Bassbariton)',
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
    // time: '17:00',
    concertTitle: 'Благодійний концерт на підтримку України',
    adressTitle: 'Erlanger Musikinstitut',
    address: 'Rathsberger Str. 1, 91054 Erlangen',
    addressLink: 'https://maps.app.goo.gl/vfcPWy5Xzi7kwLXS8',
    ticket: 'Донати від 10 євро',
    dauer: '1 St.',
    eventLink: '',
    // participants:
    //   'Наталія Грабарська (бандура, мецо-сопрано), Наталка Тотовицька (скрипка), Олена Василенко (фортепіано), Анна Бичкова (мецо-сопрано)',
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
    // participants:
    //   'Світлана Михайленко (вибір поезії, переклад), Наталія Грабарська (мецо-сопрано, бандура), Назар Тотовицький (скрипка), Олена Василенко (фортепіано), Анна Бичкова (мецо-сопрано), Євген Петронеллі (баритон), Дем’ян Матушевський (бас-баритон)',
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
export default function HomeView(props) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);

  const { setShowDetails, showDetails } = useContext(Context);

  return (
    <Box
      sx={{
        padding: {
          xs: '0px 16px 16px 22px',
          sm: '0px 40px 40px 46px',
          lg: '0px 10px 10px 16px',
        },

        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: '1200px' },
        }}
      >
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
                flexDirection: { xs: 'column' },
                justifyContent: 'end',
              }}
            >
              {ConcertsListDe.map(concert => (
                <ListItem
                  key={concert.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '34px',
                    paddingLeft: '0px',
                    paddingBottom: '0px',
                    border: 0.5,
                    borderRadius: '16px',
                    padding: '14px',
                    boxShadow: 4,
                    marginBottom: '10px',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'block',
                      fontFamily: 'Times New Roman',
                      fontSize: '22px',
                      lineHeight: { sm: '24px' },
                      marginRight: 'auto',
                      fontWeight: 'bold',
                    }}
                  >
                    {concert.date}{' '}
                    <Box sx={{ paddingTop: '6px', paddingBottom: '6px' }}>
                      <AlarmIcon sx={{ height: '14px' }} />
                      {concert.time}
                    </Box>
                  </Typography>
                  {concert.eventLink ? (
                    <Link
                      href={concert.eventLink}
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
                        {concert.concertTitle}
                      </Typography>
                    </Link>
                  ) : (
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
                  )}
                  <Link
                    href={concert.addressLink}
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
                      {concert.address}
                    </Typography>
                  </Link>
                  {concert.participants && (
                    <>
                      {' '}
                      <Typography
                        sx={{
                          fontFamily: 'Times New Roman',
                          paddingTop: '10px',
                          fontSize: { sm: '16px', md: '18px' },
                          lineHeight: { sm: '24px' },
                          fontWeight: 'bold',
                          marginRight: 'auto',
                        }}
                      >
                        Teilnehmer:innen
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
                        {concert.participants}
                      </Typography>{' '}
                    </>
                  )}
                  {concert.details && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        marginRight: 'auto',
                        fontStyle: 'normal',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Times New Roman',
                          paddingTop: '10px',
                          fontSize: { sm: '16px', md: '18px' },
                          lineHeight: { sm: '24px' },
                          fontWeight: 'bold',
                          marginRight: 'auto',
                        }}
                      >
                        Programm
                      </Typography>{' '}
                      {concert.details}
                    </Typography>
                  )}
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
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      letterSpacing: 4,
                      marginRight: 'auto',
                      paddingTop: '16px',
                    }}
                  >
                    {concert.ticket}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Times New Roman',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      fontStyle: 'normal',
                      marginRight: 'auto',
                      paddingBottom: '10px',
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
                flexDirection: { xs: 'column' },
                justifyContent: 'end',
              }}
            >
              {ConcertsListUkr.map(concert => (
                <ListItem
                  key={concert.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '34px',
                    paddingLeft: '0px',
                    paddingBottom: '0px',
                    border: 0.5,
                    borderRadius: '16px',
                    padding: '14px',
                    boxShadow: 4,
                    marginBottom: '10px',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'block',
                      fontFamily: 'Times New Roman',
                      fontSize: '22px',
                      lineHeight: { sm: '24px' },
                      marginRight: 'auto',
                      fontWeight: 'bold',
                    }}
                  >
                    {concert.date}{' '}
                    <Box sx={{ paddingTop: '6px', paddingBottom: '6px' }}>
                      <AlarmIcon sx={{ height: '14px' }} />
                      {concert.time}
                    </Box>
                  </Typography>
                  {concert.eventLink ? (
                    <Link
                      href={concert.eventLink}
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
                        {concert.concertTitle}
                      </Typography>
                    </Link>
                  ) : (
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
                  )}

                  <Link
                    href={concert.addressLink}
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
                      {concert.address}
                    </Typography>
                  </Link>

                  {concert.participants && (
                    <>
                      {' '}
                      <Typography
                        sx={{
                          fontFamily: 'Times New Roman',
                          paddingTop: '10px',
                          fontSize: { sm: '16px', md: '18px' },
                          lineHeight: { sm: '24px' },
                          fontWeight: 'bold',
                          marginRight: 'auto',
                        }}
                      >
                        Teilnehmer:innen
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
                        {concert.participants}
                      </Typography>{' '}
                    </>
                  )}
                  {concert.details && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        marginRight: 'auto',
                        fontStyle: 'normal',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Times New Roman',
                          paddingTop: '10px',
                          fontSize: { sm: '16px', md: '18px' },
                          lineHeight: { sm: '24px' },
                          fontWeight: 'bold',
                          marginRight: 'auto',
                        }}
                      >
                        Програма
                      </Typography>{' '}
                      {concert.details}
                    </Typography>
                  )}
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
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      letterSpacing: 4,
                      marginRight: 'auto',
                      paddingTop: '16px',
                    }}
                  >
                    {concert.ticket}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Times New Roman',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      fontStyle: 'normal',
                      marginRight: 'auto',
                      paddingBottom: '10px',
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
    </Box>
  );
}
