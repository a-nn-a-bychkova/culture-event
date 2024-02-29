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
    date: 'Sa, 2. März 2024',
    time: '19:00',
    title: 'St. Sebald Kirche',
    address: 'Erlangen, Egerlandstr. 22',
    addressLink: 'https://maps.app.goo.gl/E5UCcKfdYquX1v1N8',
    ticket: 'Eintritt frei',
    dauer: '1 St. 20  Min.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Rada Pushkash (Sprecher), Maximilian Franke (Sprecher), Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Nazar Totovytskyi (Violine)',
    details:
      'Unser Programm ist dem 2. Jahrestag der groß angelegten Invasion der Ukraine gewidmet.  Nach einer Idee von Svitlana Mykhailenko (Galerie Ukraine) und in der Kollaboration mit den Musiker*innen des Projektes „Ukrainischer Lebensmut“ sind eine einzigartige Kombination von ukrainischer Poesie (auf Ukrainisch und Deutsch) und Musik entstanden. Die Spenden kommen dem Soldaten Avramenko Viacheslav zugute. Der Erlös finanziert seine Prothese.',
  },
  {
    id: uuidv4(),
    date: 'So, 10. März 2024',
    time: '14:00',
    title: 'Die katholische Pfarrkirche St. Bonifaz',
    address: 'Regensburg, Killermannstr., 26',
    addressLink: 'https://maps.app.goo.gl/aPwewuT5ysjRM7Ra8',
    ticket: 'Eintritt frei',
    dauer: '1 St. 20  Min.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Rada Pushkash (Sprecher), Oleksii Guban (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Olena Vasylenko (Klavier)',
    details:
      'Unser Programm ist dem 2. Jahrestag der groß angelegten Invasion der Ukraine gewidmet.  Nach einer Idee von Svitlana Mykhailenko (Galerie Ukraine) und in der Kollaboration mit den Musiker*innen des Projektes „Ukrainischer Lebensmut“ sind eine einzigartige Kombination von ukrainischer Poesie (auf Ukrainisch und Deutsch) und Musik entstanden.',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Сб, 2 березня 2024',
    time: '19:00',
    title: 'St. Sebald Kirche',
    address: 'Erlangen, Egerlandstr. 22',
    addressLink: 'https://maps.app.goo.gl/E5UCcKfdYquX1v1N8',
    ticket: 'Вхід вільний',
    dauer: '1 год. 20 хв.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Рада Пушкаш (текст), Максімілан Франке (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Олена Василенко (фортепіано), Назар Тотовицький (скрипка)',
    details:
      "Наша програма присвячена 2-й річниці широкомасштабного вторгнення в Україну. За ідеєю Світлани Михайленко (галерея «Україна») та у співпраці з музикантами проекту «Українська мужність для життя» створено унікальне поєднання української поезії (українською та німецькою мовами) та музики. Пожертви підуть на користь солдата Авраменка В'ячеслава. Виручені кошти фінансують його протез.",
  },
  {
    id: uuidv4(),
    date: 'Нд, 10 березня 2024',
    time: '14:00',
    title: 'Die katholische Pfarrkirche St. Bonifaz',
    address: 'Regensburg, Killermannstr., 26',
    addressLink: 'https://maps.app.goo.gl/aPwewuT5ysjRM7Ra8',
    ticket: 'Вхід вільний',
    dauer: '1 год. 20 хв.',
    // link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Рада Пушкаш (текст), Олексій Губан (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Олена Василенко (фортепіано)',
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
