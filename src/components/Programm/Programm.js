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
    author: 'M. Skoryk (1938-2020)',
    title: '"Die Melodie"',
    performer: ['Nataliia Hrabarska'],
  },
  {
    id: uuidv4(),
    author: 'I. Kyrylina (1953-2017)',
    title: '"Leletscha dolia" ("Storches Schicksal")',
    additionalInfo: 'nach dem Text von V. Tsiliy (1939)',
    performer: ['Nataliia Hrabarska'],
  },
  {
    id: uuidv4(),
    author: 'R. Schumann (1810-1856)',
    title: '"Widmung"',
    additionalInfo:
      'nach dem Text von F. Rückert (1788-1866) aus dem Liederzyklus "Myrten" op.25 (1840)',
    performer: ['Nataliia Hrabarska'],
  },

  {
    id: uuidv4(),
    author: 'M. Stetsiun (1942)',
    title: '“Vyschywanka” (“Besticktes Hemd”)',
    additionalInfo: 'nach dem Text von A. Drahomyretskyi (1941-2011)',
    performer: ['Schirin Hudajbergenova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'L. Dytschko (L. Dychko - eng.) (1939)',
    title: '"Na tchovni" ("Auf dem Boot")',
    additionalInfo: 'auf dem Text von L. Ukrainka (1871-1913)',
    performer: ['Schirin Hudajbergenova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'Bearbeitung von F. Nadenenko (1902-1963)',
    title: "Ukrainisches Volkslied “Misyats' na nebi” (“Der Mond am Himmel”)",
    performer: ['Schirin Hudajbergenova', 'Anna Bychkova', 'Olena Vasylenko'],
  },

  {
    id: uuidv4(),
    author: 'V. Drobiazgina (1947-2017)',
    title: '“Tschom, tschom, zemle moja” ("Warum meine Erde")',
    additionalInfo:
      'nach dem Text von K. Malytska (1872-1947) aus dem Liederzyklus “Das Farbband”(1980)',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'V. Ivasiuk (1949-1979)',
    title: '"Ballada pro Malvy"',
    additionalInfo: 'nach dem Text von B. Gura (1914-2018)',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'G. Bizet (1838-1875)',
    title: 'Habanera',
    additionalInfo: 'aus der Oper "Carmen"',
    performer: ['Anna Bychkova', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'A. Kos-Anatolsky (1909-1983)',
    title: '"Oj ty divtschyno"',
    additionalInfo: 'nach dem Text von I. Franko (1856-1916)',
    performer: ['Yevhen Petronelli', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'E. W. Korngold (1897-1957)',
    title: '"Mein Sehnen, mein Wähnen"',
    additionalInfo: 'aus der Oper "Die tote Stadt"',
    performer: ['Yevhen Petronelli', 'Olena Vasylenko'],
  },
  {
    id: uuidv4(),
    author: 'F. Lehár (1870-1948)',
    title: '"Lippen schweigen"',
    additionalInfo: 'aus der Operette "Die lustige Witwe"',
    performer: [
      'Schirin Hudajbergenova',
      'Yevhen Petronelli',
      'Olena Vasylenko',
    ],
  },
  {
    id: uuidv4(),
    author: 'L. Delibes (1836-1891)',
    title: 'Duet von Malika und Lakmé',
    additionalInfo: 'aus der Oper "Lakmé"',
    performer: [
      'Schirin Hudajbergenova',
      'Nataliia Hrabarska',
      'Olena Vasylenko',
    ],
  },
];

const musicalPiecesUkr = [
  {
    id: uuidv4(),
    author: 'М. Скорик (1938-2020)',
    title: 'Мелодія',
    performer: ['Наталія Грабарська'],
  },
  {
    id: uuidv4(),
    author: 'І. Кириліна (1953-2017)',
    title: '"Лелеча доля"',
    additionalInfo: 'на сл. В. Цілого (1939)',
    performer: ['Наталія Грабарська'],
  },
  {
    id: uuidv4(),
    author: 'Р. Шуман (1810-1856)',
    title: '"Присвята"',
    additionalInfo:
      'на сл. Ф. Рюкерта (1788-1866) з вокального циклу "Мирти" oп.25 (1840)',
    performer: ['Наталія Грабарська', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'М. Стецюн (1942)',
    title: '“Вишиванка”',
    additionalInfo: 'на сл. А. Драгомирецького (1941-2011)',
    performer: ['Ширін Худайбергенова', 'Олена Василенко'],
  },

  {
    id: uuidv4(),
    author: 'Л. Дичко (1939)',
    title: '"На човні"',
    additionalInfo: 'на сл. Л. Українки (1871-1913)',
    performer: ['Ширін Худайбергенова', 'Олена Василенко'],
  },

  {
    id: uuidv4(),
    author: 'у.н.п. в обр. Ф. Надененка (1902-1963)',
    title: '“Місяць на небі”',
    performer: ['Анна Бичкова', 'Ширін Худайбергенова', 'Олена Василенко'],
  },

  {
    id: uuidv4(),
    author: 'В. Дробязгіна (1947-2017)',
    title: '"Чом, чом, земле моя"',
    additionalInfo:
      'на сл. К. Малицької (1872-1947) з вокального циклу “Кольорова стрічка”(1980)',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'В. Iвасюк (1949-1979)',
    title: '"Пісня буде поміж нас"',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Ж. Бізе (1838-1875)',
    title: 'Хабанера',
    additionalInfo: 'з опери "Кармен"',
    performer: ['Анна Бичкова', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'A. Кос-Анатольський (1909-1983)',
    title: '"Ой ти, дівчино, з горіха зерня"',
    additionalInfo: 'на сл. І. Франка (1856-1916)',
    performer: ['Євген Петронеллі', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Е. В. Корнгольд (1897-1957)',
    title: '"Mein Sehnen, mein Wähnen"',
    additionalInfo: 'з опери "Завмерле місто"',
    performer: ['Євген Петронеллі', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Ф. Легар (1870-1948)',
    title: '"Lippen schweigen"',
    additionalInfo: 'з оперетти "Весела вдова"',
    performer: ['Ширін Худайбергенова', 'Євген Петронеллі', 'Олена Василенко'],
  },
  {
    id: uuidv4(),
    author: 'Л. Деліб (1836-1891)',
    title: 'Дует Маліки і Лакме',
    additionalInfo: 'з опери "Лакме"',
    performer: [
      'Ширін Худайбергенова',
      'Наталія Грабарська',
      'Олена Василенко',
    ],
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
              {musicalPiecesDe.slice(0, 7).map(piece => (
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
              {musicalPiecesDe.slice(7).map(piece => (
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
              {musicalPiecesUkr.slice(0, 7).map(piece => (
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
              {musicalPiecesUkr.slice(7).map(piece => (
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
