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
