import Context from '../../contexts/context';
import { useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ConcertsListDe = [
  {
    id: uuidv4(),
    date: 'So, 29. Oktober 2023',
    time: '15:00',
    title: 'Kulturladen Zeltnerschloss',
    address: 'Gleißhammerstr. 6, Nürnberg',
    ticket: 'Eintritt 5 Euro',
    dauer: 'ca. 1 St. 15 Min.',
  },
  {
    id: uuidv4(),
    date: 'Sa, 11. November 2023',
    time: '17:00',
    title: 'Gemeinschaftshaus Langwasser',
    address: 'Glogauer Str. 50, Nürnberg',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
  },
  {
    id: uuidv4(),
    date: 'So, 12. November 2023',
    time: '16:00',
    title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
    address: 'Killermannstr. 26, Regensburg',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
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

const Concerts = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);

  return (
    <Box
      sx={{
        maxWidth: { lg: '1200px', marginLeft: 'auto', marginRight: 'auto' },
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Times New Roman',
            paddingTop: '16px',
            color: '#0a5b81',
            fontWeight: 'bold',
          }}
        >
          {language === 'de' ? 'Konzerte' : 'Концерти'}
        </Typography>
      </ThemeProvider>{' '}
      <List
        sx={{
          color: '#0a5b81',
        }}
      >
        {language === 'de' ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
            }}
          >
            {ConcertsListDe.map(concert => (
              <ListItem
                key={concert.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  // marginRight: 'auto',
                  padding: '8px 0px',
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
                  {concert.date} {concert.time}
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
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
            }}
          >
            {ConcertsListUkr.map(concert => (
              <ListItem
                key={concert.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  // marginRight: 'auto',
                  padding: '8px 0px',
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
                  {concert.date} {concert.time}
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
  );
};

export default Concerts;
