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
    date: 'Sa, 26. Oktober 2024',
    time: '19:30',
    concertTitle: 'Benefizkonzert für die Ukraine',
    adressTitle: '',
    address: 'Kammermusiksaal, Veilhofstraße 34, 90489 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/yNqCeLyJcdXEQiMC8',
    ticket: 'Eintritt frei, Spenden willkommen',
    dauer: '1 St. 30 Min.',
    fbevent: '',
    participants:
      'Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Demian Matushevskzj (Bassbariton), Sofia Petishkina (Barockgeige), Olena Vasylenko (Klavier)',
    details:
      'Ukrainische Künstlerinnen und Künstler präsentieren Kammer- und Vokalmusik sowie Volkslieder aus der Heimat',
  },
  {
    id: uuidv4(),
    date: 'So, 10. November 2024',
    time: '15:00',
    concertTitle: 'Benefizkonzert für die Ukraine',
    adressTitle: 'Zeltnerschloss',
    address: 'Gleißhammerstr. 6, 90403 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/DG71nvevPtG7Cong6',
    ticket: 'Spenden ab 10 Euro',
    dauer: '1 St. 30 Min.',
    fbevent: '',
    participants:
      ' Nataliia Hrabarska (Mezzosopran, Bandura), Natalka Totovytska (Geige), Olena Vasylenko (Klavier)',
    details:
      'Das Projekt „Ukrainische Lebensmut“ bietet den Zuhörer:innen die Möglichkeit, die ukrainische Musik live zu genießen. Die Banduristin und die Sängerin - Nataliia Hrabarska, die Geigerin - Natalka Totovytska und die Pianistin - Olena Vasylenko werden die Schönheit ihrer einheimischen Musik mit deutschem Publikum teilen',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Сб, 26 жовтня 2024',
    time: '19:30',
    concertTitle: 'Благодійний концерт на підтримку України',
    adressTitle: '',
    address: 'Kammermusiksaal, Veilhofstraße 34, 90489 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/yNqCeLyJcdXEQiMC8',
    ticket: 'Вхід вільний, донати',
    dauer: '1 St. 30 Min.',
    fbevent: '',
    participants:
      "Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Дем'ян Матушевский (басбаритон), Софія Петішкіна (барокова скрипка), Олена Василенко (фортепіано)",
    details: '',
  },
  {
    id: uuidv4(),
    date: 'Нд, 10 листопада 2024',
    time: '15:00',
    concertTitle: 'Благодійний концерт на підтримку України',
    adressTitle: 'Zeltnerschloss',
    address: 'Gleißhammerstr. 6, 90403 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/DG71nvevPtG7Cong6',
    ticket: 'Донати від 10 євро',
    dauer: '1 St. 30 Min.',
    fbevent: '',
    participants:
      'Наталія Грабарська (бандура, мецо-сопрано), Наталка Тотовицька (скрипка), Олена Василенко (фортепіано)',
    details:
      'Бандуристка та співачка – Наталія Грабарська, скрипалька –  Наталка Тотовицький та піаністка – Олена Василенко поділяться красою рідної музики з німецьким глядачем.',
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
                  {concert.fbevent ? (
                    <Link
                      href={concert.fbevent}
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
                  </Typography>
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

                  <Box
                    sx={{
                      backgroundColor: '#495961',
                      width: '100%',
                      height: '1px',
                    }}
                  ></Box>
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
                  {concert.fbevent ? (
                    <Link
                      href={concert.fbevent}
                      style={{
                        marginRight: 'auto',
                        color: 'inherit',
                        textDecorationColor: 'inherit',
                      }}
                    >
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
                    Учасники
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
                  </Typography>
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
                  {/* <Button onClick={handleClick}>
                  Details <ArrowDropDownIcon />
                </Button> */}
                  <Box
                    sx={{
                      backgroundColor: '#495961',
                      width: '100%',
                      height: '1px',
                    }}
                  ></Box>
                </ListItem>
              ))}
            </Box>
          )}
        </List>
      </Box>
    </Box>
  );
}
