import { useEffect, useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';
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
    date: 'So, 29.10.2023',
    time: '15:00',
    title: 'Kulturladen Zeltnerschloss',
    address: 'Gleißhammerstr. 6, Nürnberg',
    ticket: 'Eintritt 5 Euro',
    dauer: 'ca. 1 St. 15 Min.',
    participants:
      'Schirin Hudajbergenova (Sopran), Anna Bychkova (Mezzosopran), Nataliia Hrabarska (Bandura, Mezzosopran), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier)',
    info: '',
  },
  {
    id: uuidv4(),
    date: 'Sa, 11.11.2023',
    time: '17:00',
    title: 'Gemeinschaftshaus Langwasser',
    address: 'Glogauer Str. 50, Nürnberg',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
    participants:
      'Nataliia Hrabarska (Bandura, Mezzosopran), Maryna Kitashkina (Barockgitarre), Oleg Czuchlieb (Renaissance Laute, Theorbe), Svitlana Kitashkina, Anastasiia Krasnikova, Maryna Pavlenko, Olena Vasylenko (Klavier)',
    info: '',
  },
  {
    id: uuidv4(),
    date: 'So, 12.11.2023',
    time: '16:00',
    title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
    address: 'Killermannstr. 26, Regensburg',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
    participants:
      'Maryna Chernoshtan (Soprano), Anna Bychkova (Mezzosopran), Nataliia Hrabarska (Bandura, Mezzosopran), Anastasiia Gavaza (Mezzosopran), Olexandr Forkushak (Bariton), Olena Vasylenko (Klavier)',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Нд, 29 жовтня 2023',
    time: '15:00',
    title: 'Kulturladen Zeltnerschloss',
    address: 'Gleißhammerstr. 6, Nürnberg',
    ticket: 'Вхід - 5 євро',
    dauer: '1 год. 15 хв.',
  },
  {
    id: uuidv4(),
    date: 'Сб, 11 листопада 2023',
    time: '17:00',
    title: 'Gemeinschaftshaus Langwasser',
    address: 'Glogauer Str. 50, Nürnberg',
    ticket: 'Вхід вільний (донати)',
    dauer: '2 год. з перервою',
  },
  {
    id: uuidv4(),
    date: 'Нд, 12 листопада 2023',
    time: '16:00',
    title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
    address: 'Killermannstr. 26, Regensburg',
    ticket: 'Вхід вільний (донати)',
    dauer: '2 год. з перервою',
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
          backgroundColor: '#0a5b81',
          width: '100%',
          height: '1px',
        }}
      ></Box>
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
              fontSize: '22px',
              paddingTop: { xs: '16px', sm: '16px', md: '0px' },
              color: '#0a5b81',
              fontWeight: 'bold',
            }}
          >
            {language === 'de' ? 'Konzerte' : 'Концерти'}
          </Typography>
        </ThemeProvider>{' '}
        <List
          sx={{
            padding: '0px',
            color: '#0a5b81',
          }}
        >
          {language === 'de' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
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
                    <Box>
                      <AlarmIcon sx={{ height: '14px' }} />
                      {concert.time}
                    </Box>
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
                    {concert.title}
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
                      display: { md: 'none' },
                      backgroundColor: '#0a5b81',
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
                    {concert.title}
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
    </Box>
  );
}
