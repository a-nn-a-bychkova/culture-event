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
import { Link } from 'react-router-dom';

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
      'Svitlana Mykhailenko (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Taras Konoshenko (Bass), Yevhen Petronelli (Bariton), Demian Matushevskzj (Bassbariton), Sofia Petishkina (Barockgeige), Olena Vasylenko (Klavier)',
    details:
      'Am 26. Oktober 2024 laden ukrainische Künstler*innen Sie zu einem besonderen Konzertabend im Kammermusiksaal der Hochschule für Musik Nürnberg ein. Das Programm präsentiert eine Auswahl von Kammermusik, Vokalmusik und Volksliedern aus der Ukraine, die das Erbe und die Seele des Landes widerspiegeln. Die Musiker*innen bringen dem Publikum Werke von bedeutenden ukrainischen Komponist*innen und Dichter*innen näher, die die Kraft und den Mut einer ganzen Nation verkörpern. Verpassen Sie nicht diese einzigartige Gelegenheit, die reiche kulturelle Tradition der Ukraine zu entdecken und gleichzeitig einen Beitrag zur Unterstützung des Landes zu leisten.',
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
      'Das Projekt „Ukrainischer Lebensmut“ bietet den Zuhörer:innen die Möglichkeit, die ukrainische Musik live zu genießen. Die Banduristin und die Sängerin - Nataliia Hrabarska, die Geigerin - Natalka Totovytska und die Pianistin - Olena Vasylenko werden die Schönheit ihrer einheimischen Musik mit deutschem Publikum teilen. Die Gäste, die ihre Plätze im Voraus reserviert haben, haben bis 14.50 Uhr Vorrang, und in den letzten 10 Minuten vor dem Konzert kann jeder im Saal freie Plätze einnehmen.',
    eventbrite:
      'https://www.eventbrite.com/e/benefizkonzert-fur-die-ukraine-tickets-1050391949597?aff=oddtdtcreator&fbclid=IwY2xjawGDUaVleHRuA2FlbQIxMAABHSkPqWJBJuq9VS3oJ3VHACPtKgoyi8WbQxy654ZApzqCn-0H_W7zsxfaXQ_aem_tKgWile8NfqkOPxQh6dgoA',
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
      "Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Тарас Коношенко (бас) Євген Петронеллі (баритон), Дем'ян Матушевский (бас-баритон), Софія Петішкіна (барокова скрипка), Олена Василенко (фортепіано)",
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
      'Бандуристка та співачка – Наталія Грабарська, скрипалька –  Наталка Тотовицький та піаністка – Олена Василенко поділяться красою рідної музики з німецьким глядачем. Глядачі, що заздалегідь забронюють за собою місце через посилання, яке вказано нижче, будуть мати приорітет в виборі місць до 14:50, після цього часу всі люди зможуть займати вільні місця',
    eventbrite:
      'https://www.eventbrite.com/e/benefizkonzert-fur-die-ukraine-tickets-1050391949597?aff=oddtdtcreator&fbclid=IwY2xjawGDUaVleHRuA2FlbQIxMAABHSkPqWJBJuq9VS3oJ3VHACPtKgoyi8WbQxy654ZApzqCn-0H_W7zsxfaXQ_aem_tKgWile8NfqkOPxQh6dgoA',
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
                      Реєстрація на подію
                    </Typography>
                  </Link>
                )}
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
