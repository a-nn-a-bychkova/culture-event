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
    date: 'So, 10. März 2024',
    time: '13:00',
    concertTitle: 'Frühlingskonzert',
    adressTitle: '',
    address: 'Regensburg, Killermannstr. 26',
    addressLink: 'https://maps.app.goo.gl/WuXJM2JwcTq9uFse9',
    ticket: 'Eintritt frei, Spenden willkommen',
    dauer: '2 St. 20 Min.',
    fbevent: 'https://fb.me/e/4fdvT7nrN',
    participants:
      'Rada Pushkash (Sprecher), Oleksii Guban (Sprecher), Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier)',
    details:
      'Unser Programm ist dem 2. Jahrestag der groß angelegten Invasion der Ukraine gewidmet.  Nach einer Idee von Svitlana Mykhailenko (Galerie Ukraine) und in der Kollaboration mit den Musiker*innen des Projektes „Ukrainischer Lebensmut“ sind eine einzigartige Kombination von ukrainischer Poesie (auf Ukrainisch und Deutsch) und Musik entstanden.',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Нд, 10 березня 2024',
    time: '13:00',
    concertTitle: 'Весняний концерт',
    address: 'Regensburg, Killermannstr. 26',
    addressLink: 'https://maps.app.goo.gl/WuXJM2JwcTq9uFse9',
    ticket: 'Вхід вільний',
    dauer: '2 год. 20 хв.',
    fbevent: 'https://fb.me/e/4fdvT7nrN',
    participants:
      "Рада Пушкаш (текст),  Олексій Губан (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Дем'ян Матушевский (басбаритон), Олена Василенко (фортепіано)",
    details:
      'Наша програма присвячена 2-й річниці широкомасштабного вторгнення в Україну. За ідеєю Світлани Михайленко (галерея «Україна») та у співпраці з музикантами проекту «Українська мужність для життя» створено унікальне поєднання української поезії (українською та німецькою мовами) та музики.',
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
