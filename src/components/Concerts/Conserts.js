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
    date: 'Sa, 26. Oktober 2024',
    time: '19:30',
    concertTitle: 'Benefizkonzert für die Ukraine',
    adressTitle: '',
    address: 'Kammermusiksaal, Veilhofstraße 34, 90489 Nürnberg',
    addressLink: 'https://maps.app.goo.gl/yNqCeLyJcdXEQiMC8',
    ticket: 'Eintritt frei, Spenden willkommen',
    dauer: '1 St. 30 Min.',
    fbevent: 'https://fb.me/e/6YWVATgKz',
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
    fbevent: 'https://fb.me/e/fYUpujNIB',
    participants:
      ' Nataliia Hrabarska (Mezzosopran, Bandura), Natalka Totovytska (Geige), Olena Vasylenko (Klavier)',
    details:
      'Das Projekt „Ukrainischer Lebensmut“ bietet den Zuhörer:innen die Möglichkeit, die ukrainische Musik live zu genießen. Die Banduristin und die Sängerin - Nataliia Hrabarska, die Geigerin - Natalka Totovytska und die Pianistin - Olena Vasylenko werden die Schönheit ihrer einheimischen Musik mit deutschem Publikum teilen',
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
    fbevent: 'https://fb.me/e/6YWVATgKz',
    participants:
      "Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Дем'ян Матушевский (бас-баритон), Софія Петішкіна (барокова скрипка), Олена Василенко (фортепіано)",
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
    fbevent: 'https://fb.me/e/fYUpujNIB',
    participants:
      'Наталія Грабарська (бандура, мецо-сопрано), Наталка Тотовицька (скрипка), Олена Василенко (фортепіано)',
    details:
      'Бандуристка та співачка – Наталія Грабарська, скрипалька –  Наталка Тотовицький та піаністка – Олена Василенко поділяться красою рідної музики з німецьким глядачем.',
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
