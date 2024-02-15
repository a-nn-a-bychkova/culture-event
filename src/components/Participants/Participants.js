import Context from '../../contexts/context';
import { useContext } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';

const participantsListDe = [
  // {
  //   id: uuidv4(),
  //   name: 'Oleg Czuchlieb',
  //   instrument: 'Renaissance Laute, Teorbe',
  // },
  { id: uuidv4(), name: 'Schirin Hudajbergenova', instrument: 'Sopran' },
  { id: uuidv4(), name: 'Anna Bychkova', instrument: 'Mezzosopran' },
  {
    id: uuidv4(),
    name: 'Nataliia Hrabarska',
    instrument: 'Bandura, Mezzosopran',
  },
  { id: uuidv4(), name: 'Yevhen Petronelli', instrument: 'Bariton' },
  // { id: uuidv4(), name: 'Svetlana Kitashkina', instrument: 'Klavier' },
  { id: uuidv4(), name: 'Olena Vasylenko', instrument: 'Klavier' },
  // { id: uuidv4(), name: 'Anastasiia Krasnikova', instrument: 'Klavier' },
  // { id: uuidv4(), name: 'Olga Dörr', instrument: 'Klavier' },
  // { id: uuidv4(), name: 'Olha Filatova', instrument: 'Klavier' },
  // { id: uuidv4(), name: 'Ruslan Zinevych', instrument: 'Tenor' },
  // { id: uuidv4(), name: 'Olexandr Forkushak', instrument: 'Bariton' },
  // { id: uuidv4(), name: 'Taras Konoshenko', instrument: 'Bass' },
];

const participantsListUkr = [
  // { id: uuidv4(), name: 'Олег Чухліб', instrument: 'ренесансна лютня, теорба' },
  { id: uuidv4(), name: 'Ширін Худайбергенова', instrument: 'сопрано' },
  { id: uuidv4(), name: 'Анна Бичкова', instrument: 'мецо-сопрано' },
  {
    id: uuidv4(),
    name: 'Наталія Грабарська',
    instrument: 'бандура, мецо-сопарно',
  },
  { id: uuidv4(), name: 'Євген Петронеллі', instrument: 'баритон' },
  // { id: uuidv4(), name: 'Світлана Кіташкіна', instrument: 'фортепіано' },
  { id: uuidv4(), name: 'Олена Василенко', instrument: 'фортепіано' },
  // { id: uuidv4(), name: 'Анастасія Краснікова', instrument: 'фортепіано' },
  // { id: uuidv4(), name: 'Ольга Філатова', instrument: 'фортепіано' },

  // { id: uuidv4(), name: 'Руслан Зіневич', instrument: 'тенор' },
  // { id: uuidv4(), name: 'Олександр Форкушак', instrument: 'баритон' },
  // { id: uuidv4(), name: 'Тарас Коношенко', instrument: 'бас' },
  // { id: uuidv4(), name: 'Ольга Комарова', instrument: 'ведуча' },
];

const Participants = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Times New Roman',
        color: '#495961',
      }}
    >
      {language === 'de' ? (
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              textAlign: { md: 'right' },
              paddingTop: { xs: '30px', md: '0px' },
              paddingBottom: { xs: '8px' },
              textAlign: { xs: 'center', md: 'right' },
              fontWeight: 'bold',
            }}
          >
            Teilnehmer*innen
          </Typography>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              textAlign: { md: 'right' },
              paddingTop: { xs: '30px', md: '0px' },
              paddingBottom: { xs: '8px' },
              textAlign: { xs: 'center', md: 'right' },
              fontWeight: 'bold',
            }}
          >
            Учасники
          </Typography>
        </ThemeProvider>
      )}
      <List sx={{ padding: { md: '0px' } }}>
        {language === 'de'
          ? participantsListDe.map(({ id, name, instrument }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  fontFamily: 'Times New Roman',
                  fontSize: { sm: '16px', md: '18px' },
                  lineHeight: { sm: '20px', md: '24px' },
                  justifyContent: { xs: 'center', md: 'right' },
                  padding: { xs: '8px 0px', md: '0px 0px 8px' },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {name}
                </Box>
                <Box
                  sx={{
                    marginLeft: '16px',
                    fontFamily: 'Times New Roman',
                  }}
                >
                  {instrument}
                </Box>
              </ListItem>
            ))
          : participantsListUkr.map(({ id, name, instrument }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  fontFamily: 'Times New Roman',
                  fontSize: { sm: '16px', md: '18px' },
                  lineHeight: { sm: '20px', md: '24px' },
                  justifyContent: { xs: 'center', md: 'right' },
                  padding: { xs: '8px 0px', md: '0px 0px 8px' },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {name}
                </Box>
                <Box
                  sx={{
                    marginLeft: '10px',
                    fontFamily: 'Times New Roman',
                    // fontSize: { sm: '16px' },
                  }}
                >
                  {instrument}
                </Box>
              </ListItem>
            ))}
        {language === 'de' ? (
          <>
            <Box
              sx={{
                fontFamily: 'Times New Roman',
                fontSize: { sm: '16px', md: '18px' },
                lineHeight: { sm: '20px', md: '24px' },
                padding: { xs: '8px 0px', md: '0px 0px 8px' },
              }}
            >
              {/* <Box
                sx={{
                  maxWidth: '320px',
                  textAlign: { xs: 'center', md: 'right' },
                  fontWeight: 'bold',
                }}
              >
                Anastasiia Krasnikova, Olga Dörr, Olena Vasylenko, Olha
                Filatova, Svetlana Kitashkina
                <span
                  style={{
                    marginLeft: '16px',
                    fontFamily: 'Times New Roman',
                    marginTop: 'auto',
                    fontWeight: 'normal',
                  }}
                >
                  Klavier
                </span>
              </Box> */}
            </Box>
            {/* <Box
              sx={{
                fontFamily: 'Times New Roman',
                fontSize: { sm: '16px', md: '18px' },
                lineHeight: { sm: '20px', md: '24px' },
                textAlign: { xs: 'center', md: 'right' },
                fontWeight: 'bold',
              }}
            >
              Olga Komarova
              <span
                style={{
                  marginLeft: '16px',
                  fontFamily: 'Times New Roman',
                  marginTop: 'auto',
                  fontWeight: 'normal',
                }}
              >
                Moderatorin
              </span>
            </Box> */}
          </>
        ) : (
          <>
            <Box
              sx={{
                fontFamily: 'Times New Roman',
                fontSize: { sm: '16px', md: '18px' },
                lineHeight: { xs: '28px' },
                padding: { xs: '8px 0px', md: '0px 0px 8px' },
              }}
            >
              {/* <Box
                sx={{
                  maxWidth: '320px',
                  textAlign: { xs: 'center', md: 'right' },
                  fontWeight: 'bold',
                }}
              >
                Анастасія Краснікова, Ольга Доерр, Олена Василенко, Ольга
                Філатова, Світлана Кіташкіна
                <span
                  style={{
                    marginLeft: '16px',
                    fontFamily: 'Times New Roman',
                    marginTop: 'auto',
                    fontWeight: 'normal',
                  }}
                >
                  фортепіано
                </span>
              </Box> */}
            </Box>
            {/* <Box
              sx={{
                fontFamily: 'Times New Roman',
                fontSize: { sm: '16px', md: '18px' },
                lineHeight: { sm: '20px', md: '24px' },
                textAlign: { xs: 'center', md: 'right' },
                fontWeight: 'bold',
              }}
            >
              Ольга Комарова
              <span
                style={{
                  marginLeft: '16px',
                  fontFamily: 'Times New Roman',
                  marginTop: 'auto',
                  fontWeight: 'normal',
                }}
              >
                ведуча
              </span>
            </Box> */}
          </>
        )}{' '}
      </List>
    </Box>
  );
};

export default Participants;
