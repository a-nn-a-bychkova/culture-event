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
    date: 'Sa, 25. Mai 2024',
    time: '19:00',
    concertTitle:
      'Ukrainische Melodien & Poesie. Eine Reise durch Zeit und Raum',
    adressTitle: '',
    address: 'Schwabach, Königsplatz 33A',
    addressLink: 'https://maps.app.goo.gl/KNb9bdKYtRv2HTww9',
    ticket: 'Eintritt frei, Spenden willkommen',
    dauer: '2 St. 30 Min.',
    fbevent: 'https://fb.me/e/1ha0IOUbT',
    participants:
      'Svitlana Mykhailenko (Sprecher), Maximilian Franke (Sprecher), Schirin Hidajbergenova (Sopran), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Demian Matushevskzj (Bassbariton), Nazar Totovytskyi (Giege), Olena Vasylenko (Klavier)',
    details:
      'Das Projekt "Ukrainische Melodien & Poesie: eine Reise durch Zeit und Raum" ist eine einzigartige Fusion ukrainischer Poesie (auf Ukrainisch und Deutsch) und Musik, eine Auswahl der bedeutendsten Komponisten der Ukraine.Initiatoren sind „GALERIE UKRAINE“ und „UKRAINISCHER LEBENSMUT“, die sich zusammengefunden haben, um ukrainische Kultur zu verbreiten.',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Сб, 25 травня 2024',
    time: '19:00',
    concertTitle: 'Ukrainische Melodien & Poesie. Подорож скрізь час і простір',
    adressTitle: '',
    address: 'Schwabach, Königsplatz 33A',
    addressLink: 'https://maps.app.goo.gl/KNb9bdKYtRv2HTww9',
    ticket: 'Eintritt frei, Spenden willkommen',
    dauer: '2 St. 30 Min.',
    fbevent: 'https://fb.me/e/1ha0IOUbT',
    participants:
      " Світлана Михайленко (текст), Максіміл'ян Франке (текст), Ширін Худайбергенова (сопрано), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Дем'ян Матушевский (басбаритон), Назар Тотовицький(скрипка), Олена Василенко (фортепіано)",
    details:
      'Проєкт "Ukrainische Melodien & Poesie: подорож скрізь час і простір" це унікальне сплетіння української поезії (українською та німецькою мовами) та музики. Ініціатори - проєкти „GALERIE UKRAINE“ та „UKRAINISCHER LEBENSMUT“, що знайшли один одного в ідеї популярізації української культури.',
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
