import s from './Participants.module.css';
import Context from '../../contexts/context';
import { useContext } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

const participantsListDe = [
  { id: '1', name: 'Maryna Kitashkina', instrument: 'Barockgitarre' },
  { id: '2', name: 'Oleg Czuchlieb', instrument: 'Renaissance Laute, Teorbe' },
  { id: '3', name: 'Svetlana Kitashkina', instrument: 'Klavier' },
  { id: '4', name: 'Olena Vasylenko', instrument: 'Klavier' },
  { id: '5', name: 'Anastasiia Krasnikova', instrument: 'Klavier' },
  { id: '6', name: 'Kseniia Kuzmenko', instrument: 'Geige' },
  { id: '7', name: 'Schirin Hudajbergenova', instrument: 'Sopran' },
  { id: '8', name: 'Anna Bychkova', instrument: 'Mezzosopran' },
  { id: '9', name: 'Taras Konoshenko', instrument: 'Bass' },
];

const participantsListUkr = [
  { id: '1', name: 'Марина Кіташкіна', instrument: 'барокова гітара' },
  { id: '2', name: 'Олег Чухліб', instrument: 'ренесансна лютня, теорба' },
  { id: '3', name: 'Світлана Кіташкіна', instrument: 'фортепіано' },
  { id: '4', name: 'Олена Василенко', instrument: 'фортепіано' },
  { id: '5', name: 'Анастасія Краснікова', instrument: 'фортепіано' },
  { id: '6', name: 'Ксенія Кузьменко', instrument: 'скрипка' },
  { id: '7', name: 'Ширін Хадайбергенова', instrument: 'сопрано' },
  { id: '8', name: 'Анна Бичкова', instrument: 'мецо-сопрано' },
  { id: '9', name: 'Тарас Коношенко', instrument: 'бас' },
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
        color: '#16729E',
        justifyContent: 'center',
        // backgroundColor: 'rgb(239, 239, 252)',
      }}
    >
      {language === 'de' ? (
        // <Typography
        //   sx={{
        //     fontWeight: 'bold',
        //     fontFamily: 'Times New Roman',
        //     fontSize: { sm: '12px', lg: '32px' },
        //     // lineHeight: '42px',
        //     // paddingBottom: '20px',
        //     textAlign: 'center',
        //   }}
        // >
        //   Teilnehmer*innen
        // </Typography>

        <ThemeProvider theme={theme}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Times New Roman',
              // fontWeight: 'bold',
              textAlign: 'center',
              paddingTop: '30px',
            }}
          >
            Teilnehmer*innen
          </Typography>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Times New Roman',
              textAlign: 'center',
              paddingTop: '30px',
            }}
          >
            Учасники
          </Typography>
        </ThemeProvider>
      )}
      <List>
        {language === 'de'
          ? participantsListDe.map(({ id, name, instrument }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  fontFamily: 'Times New Roman',
                  fontSize: { sm: '24px', lg: '28px' },
                  lineHeight: { sm: '32px', lg: '42px' },
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {name}
                </Box>
                <Box sx={{ marginLeft: '20px', fontFamily: 'Times New Roman' }}>
                  {instrument}
                </Box>
              </ListItem>
            ))
          : participantsListUkr.map(({ id, name, instrument }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',

                  fontFamily: 'Times New Roman',
                  fontSize: { sm: '24px', lg: '28px' },
                  lineHeight: { sm: '32px', lg: '42px' },
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {name}
                </Box>
                <Box>{instrument}</Box>
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default Participants;
