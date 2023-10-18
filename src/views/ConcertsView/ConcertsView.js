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
    date: 'So, 29.10.2023',
    time: '15:00',
    title: 'Kulturladen Zeltnerschloss',
    addressText: 'Gleißhammerstraße 6, Nürnberg',
    address:
      'https://www.google.com/maps/place/Glei%C3%9Fhammerstra%C3%9Fe+6,+90480+N%C3%BCrnberg/@49.4474204,11.1069402,17z/data=!3m1!4b1!4m6!3m5!1s0x479f57815b22a9a5:0xead090a74dca17fc!8m2!3d49.4474169!4d11.1095151!16s%2Fg%2F11bw43b2j_?entry=ttu',
    ticket: 'Eintritt 5 Euro',
    dauer: 'ca. 1 St. 15 Min.',
    participants:
      'Schirin Hudajbergenova (Sopran), Anna Bychkova (Mezzosopran), Nataliia Hrabarska (Bandura, Mezzosopran), Yevhen Petronelli (Bariton), Olena Vasylenko (Klavier), Sofia Smirnov (Moderatorin)',
    fbevent: 'https://fb.me/e/1q9uYtk4l',
    details:
      'Musickstücke von M. Skoryk, I. Kyrylina, M. Stetsiun, V. Drobiazgina, V. Ivasiuk, Ukrainisches Volkslieder, A. Kos-Anatolsky, L. Dytschko, R. Schumann, G. Bizet, E. W. Korngold, F. Lehár, L. Delibes',
  },
  {
    id: uuidv4(),
    date: 'Sa, 11.11.2023',
    time: '17:00',
    title: 'Gemeinschaftshaus Langwasser',
    addressText: 'Glogauer Str. 50, Nürnberg',
    address:
      'https://www.google.com/maps/place/Glogauer+Str.+50,+90473+N%C3%BCrnberg/@49.4017105,11.1327548,17z/data=!3m1!4b1!4m6!3m5!1s0x479f598856d89a4f:0x21666b204af31f6d!8m2!3d49.401707!4d11.1353297!16s%2Fg%2F11c4qqh0gz?entry=ttu',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
    participants:
      'Nataliia Hrabarska (Bandura, Mezzosopran), Maryna Kitashkina (Barockgitarre), Oleg Czuchlieb (Renaissance Laute, Theorbe), Svitlana Kitashkina, Anastasiia Krasnikova, Maryna Pavlenko (Klavier)',

    fbevent: 'https://fb.me/e/14o0pWrY3',
    details:
      'Bearbeitungen der Volksmusik, Improvisationen auf Volksthemen, Kompositionen von ukrainischen Komponisten, westeuropäische Musik verschiedener Epochen: vom Barock bis zur Moderne',
  },
  {
    id: uuidv4(),
    date: 'So, 12.11.2023',
    time: '16:00',
    title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
    addressText: 'Killermannstraße 26, Regensburg',
    address:
      'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
    ticket: 'Eintritt frei',
    dauer: 'ca. 2 St. mit der Pause',
    participants:
      'Maryna Chernoshtan (Soprano), Anna Bychkova (Mezzosopran), Nataliia Hrabarska (Bandura, Mezzosopran), Anastasiia Gavaza (Mezzosopran), Olexandr Forkushak (Bariton), Olha Filatova (Klavier), Olena Vasylenko (Klavier)',
  },
];
const ConcertsListUkr = [
  {
    id: uuidv4(),
    date: 'Нд, 29 жовтня 2023',
    time: '15:00',
    title: 'Kulturladen Zeltnerschloss',
    addressText: 'Glogauer Str. 50, Nürnberg',
    address:
      'https://www.google.com/maps/place/Glei%C3%9Fhammerstra%C3%9Fe+6,+90480+N%C3%BCrnberg/@49.4474204,11.1069402,17z/data=!3m1!4b1!4m6!3m5!1s0x479f57815b22a9a5:0xead090a74dca17fc!8m2!3d49.4474169!4d11.1095151!16s%2Fg%2F11bw43b2j_?entry=ttu',
    ticket: 'Вхід - 5 євро',
    dauer: '1 год. 15 хв.',
    fbevent: 'https://fb.me/e/1q9uYtk4l',
    participants:
      'Ширін Худайбергенова (сопрано), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Євген Петронелі (баритон), Олена Василенко (фортепіано), Софія Смірнов (ведуча)',
    details:
      'Українські народні пісні, композиції М. Скорика, І. Кириліної, М. Стецюн, В. Дробязгіної, В. Івасюка, А. Кос-Анатольського, Л. Дичко, Р. Шумана, Ж. Бізе, Л. Деліба, Е. В. Корнгольда, Ф. Легара',
  },
  {
    id: uuidv4(),
    date: 'Сб, 11 листопада 2023',
    time: '17:00',
    title: 'Gemeinschaftshaus Langwasser',
    addressText: 'Killermannstraße 26, Regensburg',
    address:
      'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
    ticket: 'Вхід вільний (донати)',
    dauer: '2 год. з перервою',
    fbevent: 'https://fb.me/e/14o0pWrY3',
    participants:
      'Наталія Грабарська (бандура, мецо-сопрано), Марина Кіташкіна (барокова гітара), Олег Чухліб (ренесансна флейта, теорба), Світлана Кіташкіна, Анастасія Краснікова, Марина Павленко (фортепіано)',
    details:
      'Українська музика, у вигляді обробок народної музики, імпровізацій на народні теми, п’єс та композицій українських митців, західноєвропейська музику різних епох: від бароко до сучасності',
  },
  {
    id: uuidv4(),
    date: 'Нд, 12 листопада 2023',
    time: '16:00',
    title: 'Katolische Pfarrei St. Bonifaz - St. Georg',
    addressText: 'Killermannstraße 26, Regensburg',
    address:
      'https://www.google.com/maps/place/Killermannstra%C3%9Fe+26,+93049+Regensburg/@49.0182726,12.0445809,17z/data=!3m1!4b1!4m6!3m5!1s0x479fc08a2202f841:0xcbe51c612123b922!8m2!3d49.0182691!4d12.0471558!16s%2Fg%2F11c4djbjl5?entry=ttu',
    ticket: 'Вхід вільний (донати)',
    dauer: '2 год. з перервою',
    participants:
      'Марина Черноштан (сопрано), Анна Бичкова (мецо-сопрано), Наталія Грабарська (бандура, мецо-сопрано), Анастасія Гаваза (мецо-сопрано), Олександр Форкушак (баритон), Ольга Філатова (фортепіано), Олена Василенко (фортепіано)',
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
                    href={concert.address}
                    style={{
                      marginRight: 'auto',
                      color: 'inherit',
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
                      {concert.addressText}
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
                flexDirection: { xs: 'column', md: 'row' },
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
                    href={concert.address}
                    style={{
                      marginRight: 'auto',
                      color: 'inherit',
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
                      {concert.addressText}
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
                      display: { md: 'none' },
                      backgroundColor: '#0a5b81',
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
