import Context from '../../contexts/context';
import { useContext } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';

const musicalPiecesDe = [
  {
    id: '1',
    author: 'Bearbeitung von R. Turovsky',
    title: 'Fünf ukrainische Volkslieder',
    additionalInfo:
      '“Ich lasse das Pferd gehen”, “Schneesturm”, “Hretschanyky”, “Kosakchen”, “Tetyana”',
    performer: ['Oleg Czuchlieb'],
  },

  {
    id: '2',
    author: 'F. Corbetta',
    title: '“Prelude”',
    performer: ['Maryna Kitashkina'],
  },
  {
    id: '3',
    author: 'F. Le Cocq',
    title: 'Chaconne',
    performer: ['Maryna Kitashkina', 'Oleg Czuchlieb'],
  },
  {
    id: '4',
    author: 'H. Purcell',
    title: '“Not all my torments”',
    performer: ['Schirin Hudajbergenova', 'Oleg Czuchlieb'],
  },
  {
    id: '5',
    author: 'H. Purcell',
    title: '“Sweeter than roses”',
    additionalInfo: 'aus der Semioper “Pausanius, the Betrayer of his Country”',
    performer: ['Schirin Hudajbergenova', 'Oleg Czuchlieb'],
  },
  {
    id: '6',
    author: 'S. Kitashkina',
    title:
      'Improvisation auf die Themen von ukrainischen Wiegenlied "Oi khodyt son“ und Klaras Wiegenlied „Summer Time“ aus der Oper “Porgy and Bess” - G. Gershwin',
    performer: ['Anna Bychkova', 'Svetlana Kitashkina'],
  },

  {
    id: '7',
    author: 'G. Altschewskyj ',
    title: '“Duscha tse kovaliya nizhna” (“Die Seele ist zartes Maiglöckchen”)',
    additionalInfo: 'nach dem Text von A. Altschewska',
    performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  },
  {
    id: '8',
    author: 'G. Altschewskyj ',
    title: '“Tschoho meni tyazhko” (“Warum fällt es mir schwer”)',
    additionalInfo: 'nach dem Text von T. Schewtschenko',
    performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  },
  {
    id: '9',
    author: 'V. Drobjazgina',
    title: '“Vse jde, vse mynaje” (“Alles geht vorbei”)',
    additionalInfo:
      ' aus dem Liederzyklus “Das Farbband” nach dem Text von T. Schewtschenko',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '10',
    author: 'K. Dankewitsch',
    title: '“Zasnuv tvij druh” (“Dein Freund ist eingeschlafen”) ',
    additionalInfo: 'aus der Oper “Bohdan Chmelnyzkyj”',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '11',
    author: 'M. Stetsiun',
    title: '“Vyschywanka” (“Besticktes Trachtenhemd”)',
    additionalInfo: 'auf Text von A. Drahomyretskyi',
    performer: ['Schirin Hudajbergenova', 'Olena Vasylenko'],
  },
  {
    id: '12',
    author: 'A. Schtoharenko',
    title: '“Schumlyat bory” (“Die Wälder rauschen”)',
    additionalInfo: 'auf Text von T. Odudko',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '13',
    author: 'Bearbeitung von L. Revutskii',
    title: 'Ukrainisches Volkslied “Tschujesch, brate mij” („Hör mein Bruder“)',
    additionalInfo: 'nach dem Text von B. Lepki',
    performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  },
  {
    id: '14',
    author: 'Bearbeitung von F. Nadenenko',
    title: 'Ukrainisches Volkslied “Misyats na nebi” (“Der Mond am Himmel”)',
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '15',
    author: 'M. Lysenko',
    title: ' “Hey, lita orel” (“Hej, der Adler fliegt”)',
    additionalInfo: 'aus der Oper „Taras Bulba“',
    performer: ['Taras Konoschenko', 'Olena Vasylenko'],
  },
  {
    id: '16',
    author: 'R.Strauss',
    title: '"Schlechtes Wetter"',
    additionalInfo: 'op. 69',
    performer: ['Schirin Hudajbergenova', 'Olena Vasylenko'],
  },
  {
    id: '17',
    author: 'J. Brahms',
    title: '“Sapphische Ode”, “Kein Haus, keine Heimat”',
    additionalInfo: 'aus dem Liederzyklus “Fünf Lieder”, op.94',
    performer: ['Taras Konoschenko, Olena Vasylenko'],
  },
  {
    id: '19',
    author: 'R. Strauss',
    title: '“Wie du warst”',
    additionalInfo: 'aus der Oper “Der Rosenkavalier”',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '20',
    author: 'R. Strauss',
    title: '“Mir ist die Ehre wiederfahren”',
    additionalInfo: 'aus der Oper “Der Rosenkavalier”',
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: '21',
    author: 'M. Skoryk',
    title: '“Die Melodie”',
    performer: ['Anastasiia Krasnikova', 'Kseniia Kuzmenko'],
  },
];

const musicalPiecesUkr = [
  {
    id: '1',
    author: 'Обробка Р. Турковського',
    title: "П'ять українських пісень",
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    performer: ['Олег Чухліб'],
  },
  {
    id: '2',
    author: 'Ф. Корбетта',
    title: '“Прелюдія”',
    performer: ['Марина Кіташкіна'],
  },
  {
    id: '3',
    author: 'Ф. ле Кок',
    title: '“Чакона”',
    performer: ['Марина Кіташкіна', 'Олег Чухліб'],
  },
  {
    id: '4',
    author: 'Г. Персел',
    title: '“Не всі мої страждання”',
    performer: ['Ширін Худайбергенова', 'Олег Чухліб'],
  },
  {
    id: '5',
    author: 'Г. Персел',
    title: '“Солодше за рози”',
    additionalInfo: 'з семіопери “Паузаніас, зрадник своєї країни”',
    performer: ['Ширін Худайбергенова', 'Олег Чухліб'],
  },

  {
    id: '6',
    author: 'С. Кіташкіна',
    title:
      'Імпровізація на теми колискової “Ой ходить сон” та Колискової Клари “Summer Time” з опери “Поргі і Бес” Дж. Гершвіна',
    performer: ['Анна Бичкова', 'Світлана Кіташкіна'],
  },

  {
    id: '7',
    author: 'Г. Алчевський',
    title: '“Душа се конвалія ніжна”',
    additionalInfo: 'сл. Х. Алчевської',
    performer: ['Тарас Коношенко', 'Олена Василенко'],
  },
  {
    id: '8',
    author: 'Г. Алчевський',
    title: '“Чого мені тяжко”',
    additionalInfo: 'сл. Т. Шевченка',
    performer: ['Тарас Коношенко', 'Олена Василенко'],
  },
  {
    id: '9',
    author: 'В. Дробязгина',
    title: '“Все йде, все минає”',
    additionalInfo: 'з вокального циклу “Кольорова стрічка” на сл. Т. Шевченка',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: '10',
    author: 'К. Данькевич',
    title: 'Арія Варвари',
    additionalInfo: 'з опери “Богдан Хмельницький”',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: '11',
    author: 'М. Стецюн',
    title: '“Вишиванка”',
    additionalInfo: 'сл. А. Драгомирецький',
    performer: ['Ширін Худайбергенова', 'Олена Василенко'],
  },
  {
    id: '12',
    author: 'А. Штогаренко',
    title: '“Шумлять бори”',
    additionalInfo: 'сл. Т. Одудька',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: '13',
    author: 'у.н.п. в обр. Л. Ревуцького',
    title: '“Чуєш брате мій”',
    additionalInfo: 'сл. Б. Лепкого',
    performer: ['Тарас Коношенко', 'Олена Василенко'],
  },
  {
    id: '14',
    author: 'у.н.п. в обр. Ф. Надененка',
    title: '“Місяць на небі”',
    performer: ['Анна Бичкова', 'Ширін Худайбергенова', 'Олена Василенко'],
  },
  {
    id: '15',
    author: 'М. Лисенко',
    title: 'Пісня Тараса',
    additionalInfo: 'з опери “Тарас Бульба”',
    performer: ['Тарас Коношенко', 'Олена Василенко'],
  },
  {
    id: '16',
    author: 'Р. Штраус',
    title: '"Погана погода"',
    additionalInfo: 'оп.69',
    performer: ['Ширін Худайбергенова', 'Олена Василенко'],
  },
  {
    id: '17-18',
    author: 'Й. Брамс',
    title: '"Сапфічна ода», «Немає дому, немає Батьківщини"',
    additionalInfo: 'з вокального циклу “П’ять пісень”, оп.94',
    performer: ['Тарас Коношенко', 'Олена Василенко'],
  },

  {
    id: '19',
    author: 'Р. Штраус',
    title: 'Арія Октавіана',
    additionalInfo: 'з опери “Кавалер роз”',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },

  {
    id: '20',
    author: 'Р. Штраус',
    title: 'Дует Софі і Октавіана',
    additionalInfo: 'з опери “Кавалер роз”',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: '21',
    author: 'М. Скорик',
    title: '“Мелодія”',
    performer: ['Анастасія Краснікова', 'Ксенія Кузьменко'],
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
