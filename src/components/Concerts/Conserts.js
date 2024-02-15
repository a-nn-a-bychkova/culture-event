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
import { v4 as uuidv4 } from 'uuid';

const ConcertsListDe = [
  {
    id: uuidv4(),
    date: 'Sa, 24. Februar 2024',
    time: '21:00',
    title: 'Schauspielhaus, 3. Etage Foyer',
    address: 'Nürnberg, Richard-Wagner-Platz, 2',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St.',
    link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Maximilian Franke (Sprecher), Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Nazar Totovytskyi (Violine)',
  },
  {
    id: uuidv4(),
    date: 'Mo, 26. Februar 2024',
    time: '20:00',
    title: 'M26',
    address: 'Regensburg, Maximilianstr., 26',
    // ticket: 'Eintritt frei',
    dauer: 'ca. 1 St.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Rada Pushkash (Sprecher), Oleksii Guban (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Olena Vasylenko (Klavier)',
    // details:
    //   '',
  },
  {
    id: uuidv4(),
    date: 'Sa, 2. März 2024',
    time: '19:00',
    title: 'St. Sebald Kirche',
    address: 'Erlangen, Egerlandstr. 22',
    addressLink: 'https://maps.app.goo.gl/E5UCcKfdYquX1v1N8',
    ticket: 'Eintritt frei',
    dauer: 'ca. 1 St.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Maximilian Franke (Sprecher), Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Nazar Totovytskyi (Violine)',
    // details:
    //   '',
  },
  // {
  //   id: uuidv4(),
  //   date: 'Mo, 26. Februar 2024',
  //   time: '20:00',
  //   title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
  //   address: 'Killermannstr. 26, Regensburg',
  //   ticket: 'Eintritt frei',
  //   dauer: 'ca. 2 St. mit der Pause',
  // },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Сб, 24 лютого 2024',
    time: '21:00',
    title: 'Schauspielhaus, 3. Etage Foyer',
    address: 'Nürnberg, Richard-Wagner-Platz, 2',
    ticket: 'Вхід вільний',
    dauer: '2 год.',
    link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Максімілан Франке (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано) Євген Петронеллі (баритон), Олена Василенко (фортепіано), Назар Тотовицький (скрипка)',
  },
  {
    id: uuidv4(),
    date: 'Пн, 26 лютого 2024',
    time: '20:00',
    title: 'M26',
    address: 'Regensburg, Maximilianstr., 26',
    addressLink: 'https://maps.app.goo.gl/sV3k3gT1EhrYe6CH7',
    // ticket: 'Вхід вільний',
    dauer: '1 год.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Рада Пушкаш (текст), Олексій Губан (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Олена Василенко (фортепіано)',
  },
  {
    id: uuidv4(),
    date: 'Сб, 2 березня 2024',
    time: '19:00',
    title: 'St. Sebald Kirche',
    address: 'Erlangen, Egerlandstr. 22',
    addressLink: 'https://maps.app.goo.gl/E5UCcKfdYquX1v1N8',
    ticket: 'Вхід вільний',
    dauer: '1 год.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Максімілан Франке (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано) Євген Петронеллі (баритон), Олена Василенко (фортепіано), Назар Тотовицький (скрипка)',
    // details:
    //   '',
  },
  // {
  //   id: uuidv4(),
  //   date: 'Нд, 12 листопада 2023',
  //   time: '15:00',
  //   title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
  //   address: 'Killermannstr. 26, Regensburg',
  //   ticket: 'Вхід вільний (донати)',
  //   dauer: '2 год. з перервою',
  // },
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
  );
};

export default Concerts;
