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
    date: 'Sa, 24 Februar 2024',
    time: '21:00',
    title: 'Schauspielhaus, 3. Etage Foyer',
    address: 'Nürnberg, Richard-Wagner-Platz, 2',
    addressLink: 'https://maps.app.goo.gl/EbN6SKyRFnqvZcvB9',
    ticket: 'Eintritt frei',
    dauer: '2 St.',
    link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Svitlana Mykhailenko (Sprecher), Maximilian Franke (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Nazar Totovytskyi (Violine)',
    details:
      'Um 21 Uhr findet das Künstlergespräch mit dem Team zur Inszenierung „GEHT SO“ statt. Ab 22. Uhr haben Sie die Möglichkeit, eine einzigartige Fusion ukrainischer Poesie (auf Ukrainisch und Deutsch) und Musik, eine Auswahl der bedeutendsten Komponisten der Ukraine zu erleben.  Initiatoren sind „GALERIE UKRAINE“ und „UKRAINISCHER LEBENSMUT“',
  },
  {
    id: uuidv4(),
    date: 'Mo, 26. Februar 2024',
    time: '20:00',
    title: 'M26',
    address: 'Regensburg, Maximilianstr., 26',
    addressLink: 'https://maps.app.goo.gl/sV3k3gT1EhrYe6CH7',
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
      'Rada Pushkash (Sprecher), Oleksii Guban (Sprecher), Anna Bychkova (Mezzosopran), Natalia Hrabarska (Mezzosopran, Bandura), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Nazar Totovytskyi (Violine)',
    // details:
    //   '',
  },
  // {
  //   id: uuidv4(),
  //   date: 'Sa, 11.11.2023',
  //   time: '17:00',
  //   title: 'Gemeinschaftshaus Langwasser',
  //   addressText: 'Glogauer Str. 50, Nürnberg',
  //   address:
  //     'https://www.google.com/maps/place/Glogauer+Str.+50,+90473+N%C3%BCrnberg/@49.4017105,11.1327548,17z/data=!3m1!4b1!4m6!3m5!1s0x479f598856d89a4f:0x21666b204af31f6d!8m2!3d49.401707!4d11.1353297!16s%2Fg%2F11c4qqh0gz?entry=ttu',
  //   ticket: 'Eintritt frei',
  //   dauer: 'ca. 3 St.',
  //   participants:
  //     'Nataliia Hrabarska (Bandura, Mezzosopran), Maryna Kitashkina (Barockgitarre), Oleg Czuchlieb (Renaissance Laute, Theorbe), Svitlana Kitashkina, Anastasiia Krasnikova, Maryna Pavlenko (Klavier)',

  //   fbevent: 'https://fb.me/e/14o0pWrY3',
  //   details:
  //     'Bearbeitungen der Volksmusik, Improvisationen auf Volksthemen, Kompositionen von ukrainischen Komponisten, westeuropäische Musik verschiedener Epochen: vom Barock bis zur Moderne',
  // },
  // {
  //   id: uuidv4(),
  //   date: 'So, 12.11.2023',
  //   time: '15:00',
  //   title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
  //   addressText: 'Killermannstraße 26, Regensburg',
  //   address:
  //     'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
  //   ticket: 'Eintritt frei',
  //   dauer: 'ca. 2 St. mit der Pause',
  //   participants:
  //     'Maryna Chernoshtan (Soprano), Anna Bychkova (Mezzosopran), Nataliia Hrabarska (Bandura, Mezzosopran), Anastasiia Havaza (Mezzosopran), Anna Filatova (Mezzosopran), Olexandr Forkushak (Bariton), Yevhen Petronelli (Bariton), Olha Filatova (Klavier), Olena Vasylenko (Klavier)',
  //   details:
  //     'Eine wunderbare Möglichkeit, die ukrainische Kultur und ukrainische Musik kennenzulernen.Was Sie erwartet:Konzert von ukrainischen professionellen Opersängern, begleitet am Klavier und Bandura, Möglichkeit für den Austausch mit Ukrainern,Verkauf von Speisen und Getränken,Verkauf ukrainischer Souvenirs,Glücksrad und andere Geschenkverlosungen, Kinderschminken, Tattoo und Kinderbetreuung während des Konzerts.Euch erwartet eine schöne ukrainische und europäische klassische Musik im großen hellen Konzertsaal mit über 100 Sitzplätzen.Spenden sind willkommen und werden ausschließlich für die Ukrainehilfe verwendet.',
  // },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Сб, 24 лютого 2024',
    time: '21:00',
    title: 'Schauspielhaus, 3. Etage Foyer',
    address: 'Nürnberg, Richard-Wagner-Platz, 2',
    addressLink: 'https://maps.app.goo.gl/EbN6SKyRFnqvZcvB9',
    ticket: 'Вхід вільний',
    dauer: '2 год.',
    link: 'https://www.staatstheater-nuernberg.de/spielplan-23-24/galerie-ukraine/24-02-2024/2100',
    participants:
      'Максімілан Франке (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронеллі (баритон), Олена Василенко (фортепіано), Назар Тотовицький (скрипка)',
    details:
      'О 21:00 відбудеться спілкування з командою артистів про постановку «GEHT SO». З 22:00 до уваги глядачів буде представлене унікальне сплетіння української поезії (українською та німецькою мовами) та музики видатних українських композиторів. Ініціатори – „GALERIE UKRAINE“ та „UKRAINISCHER LEBENSMUT“',
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
      'Рада Пушкаш (текст), Олексій Губан (текст), Світлана Михайленко (текст), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано) Євген Петронеллі (баритон), Олена Василенко (фортепіано), Назар Тотовицький (скрипка)',
    // details:
    //   '',
  },

  // {
  //   id: uuidv4(),
  //   date: 'Сб, 11 листопада 2023',
  //   time: '17:00',
  //   title: 'Gemeinschaftshaus Langwasser',
  //   addressText: 'Killermannstraße 26, Regensburg',
  //   address:
  //     'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
  //   ticket: 'Вхід вільний (донати)',
  //   dauer: '3 год.',
  //   fbevent: 'https://fb.me/e/14o0pWrY3',
  //   participants:
  //     'Наталія Грабарська (бандура, мецо-сопрано), Марина Кіташкіна (барокова гітара), Олег Чухліб (ренесансна флейта, теорба), Світлана Кіташкіна, Анастасія Краснікова, Марина Павленко (фортепіано)',
  //   details:
  //     'Українська музика, у вигляді обробок народної музики, імпровізацій на народні теми, п’єс та композицій українських митців, західноєвропейська музику різних епох: від бароко до сучасності',
  // },
  // {
  //   id: uuidv4(),
  //   date: 'Нд, 12 листопада 2023',
  //   time: '15:00',
  //   title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
  //   addressText: 'Killermannstraße 26, Regensburg',
  //   address:
  //     'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
  //   ticket: 'Вхід вільний (донати)',
  //   dauer: '2 год. з перервою',
  //   participants:
  //     'Марина Черноштан (сопрано), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Анастасія Гаваза (мецо-сопрано), Анна Філатова (мецо-сопрано), Олександр Форкушак (баритон), Євген Петронеллі (баритон), Ольга Філатова (фортепіано), Олена Василенко (фортепіано)',
  //   details:
  //     'У вас буде гарна нагода поспілкуватись, відпочити душею та зробити добре діло для України, так як всі зібрані кошти підуть на актуальні потреби наших котиків.Отже, що Вас очікує:концерт класичної вокальної музики у супроводі фортепіано та бандури від надзвичайно талановитих, молодих та запальних артистів;тепленький та смачненький глінтвейн і інші напої;можливість поспілкуватись з земляками;продаж страв та українських солодких смаколиків;розіграш подарунку;продаж сувенірів;колесо фортуни. Діткам можна буде зробити патріотичні тату в ігровій кімнаті. Також буде дитячий аквагрим і колесо фортуни.Концерт проводиться у великому просторому залі з сидячими місцями.Гарний настрій гарантуємо.Донати вітаються! ',
  // },
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
                        {concert.title}
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
                      {concert.title}
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
                        {concert.title}
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
                      {concert.title}
                    </Typography>
                  )}

                  <Link
                    href={concert.Link}
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
