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
import { v4 as uuidv4 } from 'uuid';
import annaFoto from '../../images/Anna.jpg';
import olenaFoto from '../../images/Olena.jpg';
import schirinFoto from '../../images/schirin.png';
import yevhenFoto from '../../images/yevhen.png';
import nazarFoto from '../../images/nazar.png';
import demianFoto from '../../images/Demian.jpg';
import nataliiahrabarskaFoto from '../../images/Natalia.jpg';
import tarasFoto from '../../images/taras.png';
import svitlanaFoto from '../../images/Svit.jpg';

const participantsListDe = [
  {
    id: uuidv4(),
    name: 'Anna Bychkova',
    foto: annaFoto,
    description:
      'Mezzosopran, Absolventin der Universität der Künste Charkiw, arbeitet derzeit als Chorsängerin am Staatstheater Nürnberg, Initiatorin des Projektes „Ukrainischer Lebensmut”',
  },
  {
    id: uuidv4(),
    name: 'Olena Vasylenko',
    foto: olenaFoto,
    description:
      'Klavier. Absolventin der Nationalen Universität der Künste Charkiw, bis Kriegsausbruch Korrepetitorin der Gesangsklasse an der Charkiwer Oper, Korrepetitorin des Ensembles Oper Plus, Mitorganisatorin des Projekts "Ukrainischer Lebensmut',
  },
  {
    id: uuidv4(),
    name: 'Nataliia Hrabarska',
    foto: nataliiahrabarskaFoto,
    description:
      ' Mezzosopran, Bandura. Lauereatin ukrainischer und internationaler Wettbewerbe, Doktorandin an der Nationalen Musikakademie in Lviv. Mitorganisatorin des Projektes „Ukrainischer Lebensmut” und Teamleiterin der Anlaufstelle „Ukraine-Treff Erlangen“ des Vereins der Ukrainer in Franken e.V.',
  },
  {
    id: uuidv4(),
    name: 'Svitlana Mykhailenko',
    foto: svitlanaFoto,
    description:
      'Poesieauswahl, Übersetzung. Leitung des „Deutschen Theaters Kyiv“ sowie der ukrainischen Improvisationsgruppe am Staatstheater Nürnberg, künstlerische Leitung „Galerie Ukraine“',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Schirin Hudajbergenova',
  //   foto: schirinFoto,
  //   description:
  //     'Sopran, abgeschlossenes Studium Musikhochschule Stuttgart. Als Solistin regelmäßig in großen Konzert- und Oratoriumprojekten tätig. Festes Mitglied im Chor des Staatstheaters Nürnberg.',
  // },

  {
    id: uuidv4(),
    name: 'Yevhen Petronelli',
    foto: yevhenFoto,
    description:
      ' Bariton, Absolvent der Nationalen Musikakademie der Ukraine Tschaikowski und der R. Glier Kiewer Musikakademie, früher - Sänger des Lyatoshinsky Ensembles für klassische Musik, nahm an vielen künstlerischen Projekten und Aufnahmen teil,  derzeit - Chormitglied der Nürnberger Oper.',
  },
  {
    id: uuidv4(),
    name: 'Demian Matushevskyi',
    foto: demianFoto,
    description:
      'Bassbariton. Absolvent der Nationalen Musikakademie der Ukraine in Kyjiw. Solist des Staatstheaters Nürnberg.',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Taras Konoshenko',
  //   foto: tarasFoto,
  //   description:
  //     'Bass, geboren in Kiew, erhielt seine Ausbildung in den Fächern Klavier, Chorleitung, Opern- und Konzertgesang in Kiew und setzte sie anschließend an der Münchner Musikhochschule sowie als Mitglied des Jungen Ensembles der Bayerischen Staatsoper fort, der Solist am Staatstheater Nürnberg',
  // },
];

const participantsListUkr = [
  // { id: uuidv4(), name: 'Олег Чухліб', description: 'ренесансна лютня, теорба' },
  {
    id: uuidv4(),
    name: 'Анна Бичкова',
    foto: annaFoto,
    description: 'мецо-сопрано',
  },
  {
    id: uuidv4(),
    name: 'Олена Василенко',
    foto: olenaFoto,
    description: 'фортепіано',
  },

  {
    id: uuidv4(),
    name: 'Наталія Грабарська',
    foto: nataliiahrabarskaFoto,
    description: 'бандура, мецо-сопарно',
  },
  {
    id: uuidv4(),
    name: 'Світлана Михайленко',
    foto: svitlanaFoto,
    description: 'поезія',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Ширін Худайбергенова',
  //   foto: schirinFoto,
  //   description: 'сопрано',
  // },
  {
    id: uuidv4(),
    name: "Дем'ян Матушевський",
    foto: demianFoto,
    description: 'бас-баритон',
  },
  {
    id: uuidv4(),
    name: 'Євген Петронеллі',
    foto: yevhenFoto,
    description: 'баритон',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Тарас Коношенко',
  //   foto: tarasFoto,
  //   description: 'бас',
  // },
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
            Our Team
          </Typography>
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
        </ThemeProvider>
      )}

      <ImageList>
        {participantsListDe.map(({ id, name, description, foto }) => (
          <ImageListItem key={id}>
            <img srcSet={foto} src={foto} alt={name} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Team;
