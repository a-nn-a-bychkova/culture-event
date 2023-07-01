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
  {
    id: uuidv4(),
    name: 'Oleg Czuchlieb',
    instrument: 'Renaissance Laute, Teorbe',
  },
  { id: uuidv4(), name: 'Nataliia Hrabarska', instrument: 'Bandura' },
  { id: uuidv4(), name: 'Svetlana Kitashkina', instrument: 'Klavier' },
  { id: uuidv4(), name: 'Olena Vasylenko', instrument: 'Klavier' },
  { id: uuidv4(), name: 'Anastasiia Krasnikova', instrument: 'Klavier' },
  { id: uuidv4(), name: 'Olga Dörr', instrument: 'Klavier' },
  { id: uuidv4(), name: 'Schirin Hudajbergenova', instrument: 'Sopran' },
  { id: uuidv4(), name: 'Anna Bychkova', instrument: 'Mezzosopran' },
  { id: uuidv4(), name: 'Ruslan Zinevych', instrument: 'Tenor' },
  { id: uuidv4(), name: 'Olexandr Forkushak', instrument: 'Bariton' },
  // { id: uuidv4(), name: 'Taras Konoshenko', instrument: 'Bass' },
  { id: uuidv4(), name: 'Olga Komarova', instrument: 'Moderatorin' },
];

const participantsListUkr = [
  { id: uuidv4(), name: 'Олег Чухліб', instrument: 'ренесансна лютня, теорба' },
  { id: uuidv4(), name: 'Наталія Грабарська', instrument: 'бандура' },
  { id: uuidv4(), name: 'Світлана Кіташкіна', instrument: 'фортепіано' },
  { id: uuidv4(), name: 'Олена Василенко', instrument: 'фортепіано' },
  { id: uuidv4(), name: 'Анастасія Краснікова', instrument: 'фортепіано' },
  { id: uuidv4(), name: 'Ольга Доерр', instrument: 'фортепіано' },
  { id: uuidv4(), name: 'Ширін Худайбергенова', instrument: 'сопрано' },
  { id: uuidv4(), name: 'Анна Бичкова', instrument: 'мецо-сопрано' },
  { id: uuidv4(), name: 'Руслан Зіневич', instrument: 'тенор' },
  { id: uuidv4(), name: 'Олександр Форкушак', instrument: 'баритон' },
  // { id: uuidv4(), name: 'Тарас Коношенко', instrument: 'бас' },
  { id: uuidv4(), name: 'Ольга Комарова', instrument: 'ведуча' },
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
        color: '#0a5b81',
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
                    // fontSize: { sm: '16px' },
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
                    marginLeft: '16px',
                    fontFamily: 'Times New Roman',
                    // fontSize: { sm: '16px' },
                  }}
                >
                  {instrument}
                </Box>
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default Participants;
