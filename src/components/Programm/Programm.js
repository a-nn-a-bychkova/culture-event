import Context from '../../contexts/context';
import { useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const musicalPiecesDe = [
  {
    id: uuidv4(),
    author: 'Bearbeitung von R. Turovsky',
    title: 'Fünf ukrainische Volkslieder',
    additionalInfo:
      '“Ich lasse das Pferd gehen”, “Schneesturm”, “Hretschanyky”, “Kosakchen”, “Tetyana”',
    performer: ['Oleg Czuchlieb'],
  },
  {
    id: uuidv4(),
    author: 'S. Kitashkina',
    title:
      'Improvisation auf die Themen von ukrainischen Wiegenlied "Oi khodyt son“ und Klaras Wiegenlied „Summer Time“ aus der Oper “Porgy and Bess” - G. Gershwin',
    performer: ['Anna Bychkova', 'Svetlana Kitashkina'],
  },
  {
    id: uuidv4(),
    author: 'J. Lapynskyj',
    title: 'Das Bandurakonzert',
    performer: ['Nataliia Hrabarska', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'Bearbeitung von F. Nadenenko',
    title:
      '"Tschornii brovy, karii otschi" ("Schwarze Augenbrauen, braune Auge")',
    performer: ['Ruslan Zinevych'],
  },
  {
    id: uuidv4(),
    author: 'V. Drobjazgina',
    title: '“Vse jde, vse mynaje” (“Alles geht vorbei”)',
    additionalInfo:
      ' aus dem Liederzyklus “Das Farbband” nach dem Text von T. Schewtschenko',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'V. Kosenko',
    title: 'Das Nocturne',
    additionalInfo: 'fis-moll op.9. №3',
    performer: ['Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'M. Lysenko',
    title: 'Ostaps Aria',
    additionalInfo: 'aus der Oper „Taras Bulba“',
    performer: ['Olexandr Forkushak'],
  },

  // {
  //   id: uuidv4(),,
  //   author: 'G. Altschewskyj ',
  //   title: '“Duscha tse kovaliya nizhna” (“Die Seele ist zartes Maiglöckchen”)',
  //   additionalInfo: 'nach dem Text von A. Altschewska',
  //   performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  // },
  // {
  // id: uuidv4(),
  //   author: 'G. Altschewskyj ',
  //   title: '“Tschoho meni tyazhko” (“Warum fällt es mir schwer”)',
  //   additionalInfo: 'nach dem Text von T. Schewtschenko',
  //   performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  // },

  // {
  //   id: uuidv4(),
  //   author: 'K. Dankewitsch',
  //   title: '“Zasnuv tvij druh” (“Dein Freund ist eingeschlafen”) ',
  //   additionalInfo: 'aus der Oper “Bohdan Chmelnyzkyj”',
  //   performer: ['Anna Bychkova', 'Olena Vasylenko'],
  // },
  {
    id: uuidv4(),
    author: 'M. Stetsiun',
    title: '“Vyschywanka” (“Besticktes Trachtenhemd”)',
    additionalInfo: 'auf Text von A. Drahomyretskyi',
    performer: ['Schirin Hudajbergenova', 'Olena Vasylenko'],
  },

  // {
  //   id: uuidv4(),
  //   author: 'Bearbeitung von L. Revutskii',
  //   title: 'Ukrainisches Volkslied “Tschujesch, brate mij” („Hör mein Bruder“)',
  //   additionalInfo: 'nach dem Text von B. Lepki',
  //   performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  // },
  {
    id: uuidv4(),
    author: 'Bearbeitung von F. Nadenenko',
    title: 'Ukrainisches Volkslied “Misyats na nebi” (“Der Mond am Himmel”)',
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'M. Skoryk',
    title: '“Die Melodie”',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  // {
  //   id: uuidv4(),
  //   author: 'M. Lysenko',
  //   title: ' “Hey, lita orel” (“Hej, der Adler fliegt”)',
  //   additionalInfo: 'aus der Oper „Taras Bulba“',
  //   performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  // },

  {
    id: uuidv4(),
    author: 'A.Berg',
    title: ' "Schilflied", “Die Nachtigal”',
    additionalInfo: 'aus dem Liederzyklus “Sieben frühe Lieder”',
    performer: ['Schirin Hudajbergenova', 'Olga Dörr'],
  },
  // {
  //   id: uuidv4(),
  //   author: 'J. Brahms',
  //   title: '“Sapphische Ode”, “Kein Haus, keine Heimat”',
  //   additionalInfo: 'aus dem Liederzyklus “Fünf Lieder”, op.94',
  //   performer: ['Taras Konoschenko, Olena Vasylenko'],
  // },
  {
    id: uuidv4(),
    author: 'R. Strauss',
    title: '“Wie du warst”',
    additionalInfo: 'aus der Oper “Der Rosenkavalier”',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'R. Strauss',
    title: '“Mir ist die Ehre wiederfahren”',
    additionalInfo: 'aus der Oper “Der Rosenkavalier”',
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'G.Verdi',
    title: 'Rigolettos Aria',
    additionalInfo: 'aus der Oper „Rigoletto“',
    performer: ['Olexandr Forkushak'],
  },
  {
    id: uuidv4(),
    author: 'G. Rossini',
    title: '“Una voce poco fa”',
    additionalInfo: 'aus der Oper “Il Barbiere di Siviglia”',
    performer: ['Schirin Hudajbergenova', 'Olga Dörr'],
  },
  {
    id: uuidv4(),
    author: 'M. Ravel',
    title: '"Alborada del gracioso"',
    performer: ['Anastasiia Krasnikova'],
  },
  {
    id: uuidv4(),
    author: 'R. Falvo',
    title: '“Dicitencello vuje”',
    performer: ['Ruslan Zinevych'],
  },

  {
    id: uuidv4(),
    author: 'A. Messager',
    title: '“J’ai deux amants”',
    additionalInfo: 'aus der Oper “L’amour masqué”',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'J. Massenet',
    title: 'Gavotte',
    additionalInfo: 'aus der Oper “Manon”',
    performer: ['Schirin Hudajbergenova', 'Olga Dörr'],
  },
  {
    id: uuidv4(),
    author: 'J. Offenbach',
    title: 'Barcarolle',
    additionalInfo: 'aus der Oper "Les Contes d\'Hoffmann"',
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olga Dörr'],
  },
];

const musicalPiecesUkr = [
  {
    id: uuidv4(),
    author: 'Обробка Р. Турковського',
    title: "П'ять українських пісень",
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    performer: ['Олег Чухліб'],
  },
  {
    id: uuidv4(),
    author: 'С. Кіташкіна',
    title:
      'Імпровізація на теми колискової “Ой ходить сон” та Колискової Клари “Summer Time” з опери “Поргі і Бес” Дж. Гершвіна',
    performer: ['Анна Бичкова', 'Світлана Кіташкіна'],
  },
  {
    id: uuidv4(),
    author: 'Я. Лапинський',
    title: 'Концерт для бандури з фортепіно',
    performer: ['Наталія Грабарська', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Обробка Ф. Надененка',
    title: '"Чорнії брови, карії очі"',
    performer: ['Руслан Зіневич'],
  },
  {
    id: uuidv4(),
    author: 'В. Дробязгина',
    title: '“Все йде, все минає”',
    additionalInfo: 'з вокального циклу “Кольорова стрічка” на сл. Т. Шевченка',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'В. Косенко',
    title: 'Ноктюрн',
    additionalInfo: 'фа-дієз мінор oп.9. №3',
    performer: ['Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'М. Лисенко',
    title: 'Арія Остапа',
    additionalInfo: 'з опери "Тарас Бульба"',
    performer: ['Олександр Форкушак'],
  },
  // {
  //  id: uuidv4(),
  //   author: 'Г. Алчевський',
  //   title: '“Душа се конвалія ніжна”',
  //   additionalInfo: 'сл. Х. Алчевської',
  //   performer: ['Тарас Коношенко', 'Олена Василенко'],
  // },
  // {
  //   id: uuidv4(),
  //   author: 'Г. Алчевський',
  //   title: '“Чого мені тяжко”',
  //   additionalInfo: 'сл. Т. Шевченка',
  //   performer: ['Тарас Коношенко', 'Олена Василенко'],
  // },

  // {
  //   id: uuidv4(),
  //   author: 'К. Данькевич',
  //   title: 'Арія Варвари',
  //   additionalInfo: 'з опери “Богдан Хмельницький”',
  //   performer: ['Анна Бичкова', 'Олена Василенко'],
  // },
  {
    id: uuidv4(),
    author: 'М. Стецюн',
    title: '“Вишиванка”',
    additionalInfo: 'сл. А. Драгомирецький',
    performer: ['Ширін Худайбергенова', 'Олена Василенко'],
  },

  // {
  //   id: uuidv4(),
  //   author: 'у.н.п. в обр. Л. Ревуцького',
  //   title: '“Чуєш брате мій”',
  //   additionalInfo: 'сл. Б. Лепкого',
  //   performer: ['Тарас Коношенко', 'Олена Василенко'],
  // },
  {
    id: uuidv4(),
    author: 'у.н.п. в обр. Ф. Надененка',
    title: '“Місяць на небі”',
    performer: ['Анна Бичкова', 'Ширін Худайбергенова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'М. Скорик',
    title: '“Мелодія”',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  // {
  //  id: uuidv4(),
  //   author: 'М. Лисенко',
  //   title: 'Пісня Тараса',
  //   additionalInfo: 'з опери “Тарас Бульба”',
  //   performer: ['Тарас Коношенко', 'Олена Василенко'],
  // },
  {
    id: uuidv4(),
    author: 'А. Берг',
    title: ' "Schilflied", “Die Nachtigal”',
    additionalInfo: 'з вокального циклу “Сім ранніх пісень”',
    performer: ['Ширін Худайбергенова', 'Ольга Доерр'],
  },
  // {
  //  id: uuidv4(),
  //   author: 'Й. Брамс',
  //   title: '"Сапфічна ода», «Немає дому, немає Батьківщини"',
  //   additionalInfo: 'з вокального циклу “П’ять пісень”, оп.94',
  //   performer: ['Тарас Коношенко', 'Олена Василенко'],
  // },

  {
    id: uuidv4(),
    author: 'Р. Штраус',
    title: 'Арія Октавіана',
    additionalInfo: 'з опери “Кавалер роз”',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },

  {
    id: uuidv4(),
    author: 'Р. Штраус',
    title: 'Дует Софі і Октавіана',
    additionalInfo: 'з опери “Кавалер роз”',
    performer: ['Анна Бичкова', 'Ширін Худайбергенова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Дж. Верді',
    title: 'Арія Ріголетто',
    additionalInfo: 'з опери "Ріголетто"',
    performer: ['Олександр Форкушак'],
  },
  {
    id: uuidv4(),
    author: 'Дж. Россіні',
    title: 'арія Розіни',
    additionalInfo: 'з опери “Сивільський цирюльник”',
    performer: ['Ширін Худайбергенова', 'Ольга Доерр'],
  },

  {
    id: uuidv4(),
    author: 'М. Равель',
    title: '"Alborada del gracioso"',
    performer: ['Анастасія Краснікова'],
  },
  {
    id: uuidv4(),
    author: 'Р. Фальво',
    title: '“Dicitencello vuje”',
    performer: ['Руслан Зіневич'],
  },
  {
    id: uuidv4(),
    author: 'А. Месажер',
    title: '“У мене є два коханця”',
    additionalInfo: 'з опери “Приховане кохання”(“L’amour masqué”)',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Ж. Массне',
    title: 'Гавот',
    additionalInfo: 'з опери "Манон"',
    performer: ['Ширін Худайбергенова', 'Ольга Доерр'],
  },
  {
    id: uuidv4(),
    author: 'Ж. Оффенбах',
    title: 'Баркарола',
    additionalInfo: 'з опери “Казки Гофмана”',
    performer: ['Ширін Худайбергенова', 'Анна Бичкова', 'Ольга Доерр'],
  },
];

const Programm = () => {
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
          {language === 'de' ? 'Programm' : 'Програма'}
        </Typography>
      </ThemeProvider>{' '}
      <List sx={{ color: '#0a5b81' }}>
        {language === 'de' ? (
          <Grid container spacing={12}>
            <Grid item container md={6}>
              {musicalPiecesDe.slice(0, 11).map(piece => (
                <ListItem
                  key={piece.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    {piece.author} {piece.title}
                  </Typography>
                  {piece.additionalInfo && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        fontStyle: 'normal',
                      }}
                    >
                      {piece.additionalInfo}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontStyle: 'italic',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      marginLeft: 'auto',
                      letterSpacing: 4,
                    }}
                  >
                    {piece.performer.length === 1 ? (
                      piece.performer
                    ) : (
                      <List>
                        {piece.performer.map(artist => {
                          return (
                            <ListItem
                              key={artist.id}
                              sx={{
                                display: 'flex',
                                padding: '0px',
                                justifyContent: 'right',
                              }}
                            >
                              {artist}
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                  </Typography>
                </ListItem>
              ))}
            </Grid>

            <Grid item container md={6}>
              {musicalPiecesDe.slice(11).map(piece => (
                <ListItem
                  key={piece.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    {piece.author} {piece.title}
                  </Typography>
                  {piece.additionalInfo && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        fontStyle: 'normal',
                      }}
                    >
                      {piece.additionalInfo}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontStyle: 'italic',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      marginLeft: 'auto',
                      letterSpacing: 4,
                    }}
                  >
                    {piece.performer.length === 1 ? (
                      piece.performer
                    ) : (
                      <List>
                        {piece.performer.map(artist => {
                          return (
                            <ListItem
                              key={artist.id}
                              sx={{
                                display: 'flex',
                                padding: '0px',
                                justifyContent: 'right',
                              }}
                            >
                              {artist}
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                  </Typography>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={12}>
            <Grid item container md={6}>
              {musicalPiecesUkr.slice(0, 11).map(piece => (
                <ListItem
                  key={piece.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    {piece.author} {piece.title}
                  </Typography>
                  {piece.additionalInfo && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        fontStyle: 'normal',
                      }}
                    >
                      {piece.additionalInfo}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontStyle: 'italic',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      marginLeft: 'auto',
                      letterSpacing: 4,
                    }}
                  >
                    {piece.performer.length === 1 ? (
                      piece.performer
                    ) : (
                      <List>
                        {piece.performer.map(artist => {
                          return (
                            <ListItem
                              key={artist.id}
                              sx={{
                                display: 'flex',
                                padding: '0px',
                                justifyContent: 'right',
                              }}
                            >
                              {artist}
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                  </Typography>
                </ListItem>
              ))}
            </Grid>

            <Grid item container md={6}>
              {musicalPiecesUkr.slice(11).map(piece => (
                <ListItem
                  key={piece.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    {piece.author} {piece.title}
                  </Typography>
                  {piece.additionalInfo && (
                    <Typography
                      sx={{
                        fontFamily: 'Times New Roman',
                        fontSize: { sm: '16px', md: '18px' },
                        lineHeight: { sm: '24px' },
                        fontStyle: 'normal',
                      }}
                    >
                      {piece.additionalInfo}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      display: 'flex',
                      fontFamily: 'Times New Roman',
                      fontStyle: 'italic',
                      fontSize: { sm: '16px', md: '18px' },
                      lineHeight: { sm: '24px' },
                      marginLeft: 'auto',
                      letterSpacing: 4,
                    }}
                  >
                    {piece.performer.length === 1 ? (
                      piece.performer
                    ) : (
                      <List>
                        {piece.performer.map(artist => {
                          return (
                            <ListItem
                              key={artist.id}
                              sx={{
                                display: 'flex',
                                padding: '0px',
                                justifyContent: 'right',
                              }}
                            >
                              {artist}
                            </ListItem>
                          );
                        })}
                      </List>
                    )}
                  </Typography>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        )}
      </List>
    </Box>
  );
};

export default Programm;
