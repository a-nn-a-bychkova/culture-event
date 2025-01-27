import Context from '../../contexts/context';
import { useContext } from 'react';
import {
  Box,
  List,
  ListItem,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

import { v4 as uuidv4 } from 'uuid';
import annaFoto from '../../images/Anna.jpg';
import olenaFoto from '../../images/Olena.jpg';
import schirinFoto from '../../images/schirin.png';
import yevhenFoto from '../../images/Petronelli-1.jpeg';
import nazarFoto from '../../images/nazar.png';
import demianFoto from '../../images/Demian.jpg';
import nataliiahrabarskaFoto from '../../images/Natalia-1.jpg';
import tarasFoto from '../../images/taras.png';
import svitlanaFoto from '../../images/Svit-1.jpg';
import sofiaFoto from '../../images/Sofia-2.jpg';

const participantsListDe = [
  {
    id: uuidv4(),
    name: 'Anna Bychkova',
    foto: annaFoto,
    fach: 'Mezzosopran',
    description:
      'Absolventin der Universität der Künste Charkiw, arbeitet derzeit als Chorsängerin am Staatstheater Nürnberg, Initiatorin des Projektes „Ukrainischer Lebensmut”',
  },
  {
    id: uuidv4(),
    name: 'Olena Vasylenko',
    foto: olenaFoto,
    fach: 'Klavier',
    description:
      'Absolventin der Nationalen Universität der Künste Charkiw, bis Kriegsausbruch Korrepetitorin der Gesangsklasse an der Charkiwer Oper, Korrepetitorin des Ensembles Oper Plus, Mitorganisatorin des Projekts "Ukrainischer Lebensmut',
  },
  {
    id: uuidv4(),
    name: 'Nataliia Hrabarska',
    foto: nataliiahrabarskaFoto,
    fach: 'Mezzosopran, Bandura',
    description:
      'Lauereatin ukrainischer und internationaler Wettbewerbe, Doktorandin an der Nationalen Musikakademie in Lviv. Mitorganisatorin des Projektes „Ukrainischer Lebensmut” und Teamleiterin der Anlaufstelle „Ukraine-Treff Erlangen“ des Vereins der Ukrainer in Franken e.V.',
  },
  {
    id: uuidv4(),
    name: 'Yevhen Petronelli',
    foto: yevhenFoto,
    fach: 'Bariton',
    description:
      'Absolvent der Nationalen Musikakademie der Ukraine Tschaikowski und der R. Glier Kiewer Musikakademie, früher - Sänger des Lyatoshinsky Ensembles für klassische Musik, nahm an vielen künstlerischen Projekten und Aufnahmen teil,  derzeit - Chormitglied der Nürnberger Oper.',
  },
  {
    id: uuidv4(),
    name: 'Svitlana Mykhailenko',
    foto: svitlanaFoto,
    fach: 'Poesieauswahl, Übersetzung',
    description:
      'Leitung des „Deutschen Theaters Kyiv“ sowie der ukrainischen Improvisationsgruppe am Staatstheater Nürnberg, künstlerische Leitung „Galerie Ukraine“',
  },

  {
    id: uuidv4(),
    name: 'Demian Matushevskyi',
    foto: demianFoto,
    fach: 'Bassbariton',
    description:
      'Absolvent der Nationalen Musikakademie der Ukraine in Kyjiw. Solist des Staatstheaters Nürnberg.',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Schirin Hudajbergenova',
  //   foto: schirinFoto,
  // fach:''Sopran',
  //   description:
  //     'Sopran, abgeschlossenes Studium Musikhochschule Stuttgart. Als Solistin regelmäßig in großen Konzert- und Oratoriumprojekten tätig. Festes Mitglied im Chor des Staatstheaters Nürnberg.',
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Taras Konoshenko',
  //   foto: tarasFoto,
  // fach:'Bass',
  //   description:
  //     'geboren in Kiew, erhielt seine Ausbildung in den Fächern Klavier, Chorleitung, Opern- und Konzertgesang in Kiew und setzte sie anschließend an der Münchner Musikhochschule sowie als Mitglied des Jungen Ensembles der Bayerischen Staatsoper fort, der Solist am Staatstheater Nürnberg',
  // },
  {
    id: uuidv4(),
    name: 'Sofia Petishkina',
    foto: sofiaFoto,
    fach: 'Geige',
    description: '',
  },
];

const participantsListUkr = [
  // { id: uuidv4(), name: 'Олег Чухліб', description: 'ренесансна лютня, теорба' },
  {
    id: uuidv4(),
    name: 'Анна Бичкова',
    foto: annaFoto,
    fach: 'мецо-сопрано',
  },
  {
    id: uuidv4(),
    name: 'Олена Василенко',
    foto: olenaFoto,
    fach: 'фортепіано',
  },

  {
    id: uuidv4(),
    name: 'Наталія Грабарська',
    foto: nataliiahrabarskaFoto,
    fach: 'бандура, мецо-сопарно',
  },
  {
    id: uuidv4(),
    name: 'Євген Петронеллі',
    foto: yevhenFoto,
    fach: 'баритон',
  },
  {
    id: uuidv4(),
    name: 'Світлана Михайленко',
    foto: svitlanaFoto,
    fach: 'поезія',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Ширін Худайбергенова',
  //   foto: schirinFoto,
  //   fach: 'сопрано',
  // },
  {
    id: uuidv4(),
    name: "Дем'ян Матушевський",
    foto: demianFoto,
    fach: 'бас-баритон',
  },

  // {
  //   id: uuidv4(),
  //   name: 'Тарас Коношенко',
  //   foto: tarasFoto,
  //   fach: 'бас',
  // },
  {
    id: uuidv4(),
    name: 'Sofia Petishkina',
    foto: sofiaFoto,
    fach: 'Скрипка',
    description: '',
  },
];

const Team = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);

  return (
    <Box
      sx={{
        fontFamily: 'Times New Roman',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#495961',
      }}
    >
      {language === 'de' ? (
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              paddingTop: { xs: '30px', md: '0px' },
              paddingBottom: { xs: '8px' },
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Unser Team
          </Typography>
          <ImageList>
            {participantsListDe.map(({ id, name, fach, description, foto }) => (
              <ImageListItem key={id}>
                <img
                  srcSet={`${foto}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${foto}?w=248&fit=crop&auto=format`}
                  alt={name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={name}
                  subtitle={fach}
                  sx={{
                    '& .MuiImageListItemBar-title': {
                      fontFamily: 'Times New Roman',
                      fontSize: '30px',
                      marginBottom: '18px',
                    },
                    '& .MuiImageListItemBar-subtitle': {
                      fontSize: '20px',
                      fontFamily: 'Times New Roman',
                    },
                  }}

                  // actionIcon={
                  //   <IconButton
                  //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  //     aria-label={`info about ${name}`}
                  //   >
                  //     <InfoIcon />
                  //   </IconButton>
                  // }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              paddingTop: { xs: '30px', md: '0px' },
              paddingBottom: { xs: '8px' },
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Наша команда
          </Typography>
          <ImageList>
            {participantsListUkr.map(
              ({ id, name, fach, description, foto }) => (
                <ImageListItem key={id}>
                  <img
                    srcSet={`${foto}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${foto}?w=248&fit=crop&auto=format`}
                    alt={name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={name}
                    subtitle={fach}
                    sx={{
                      '& .MuiImageListItemBar-title': {
                        fontFamily: 'Times New Roman',
                        fontSize: '30px',
                        marginBottom: '18px',
                      },
                      '& .MuiImageListItemBar-subtitle': {
                        fontSize: '20px',
                        fontFamily: 'Times New Roman',
                      },
                    }}

                    // actionIcon={
                    //   <IconButton
                    //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    //     aria-label={`info about ${name}`}
                    //   >
                    //     <InfoIcon />
                    //   </IconButton>
                    // }
                  />
                </ImageListItem>
              ),
            )}
          </ImageList>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default Team;
