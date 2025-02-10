import Context from '../../contexts/context';
import { useContext, useState } from 'react';
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
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
import { ExpandMore } from '@mui/icons-material';

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
      'Absolventin der Nationalen Universität der Künste Charkiw, bis Kriegsausbruch Korrepetitorin der Gesangsklasse an der Charkiwer Oper, Korrepetitorin des Ensembles Oper Plus, Mitorganisatorin des Projekts "Ukrainischer Lebensmut"',
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
    description:
      'Випускниця Харківського Університету Мистецтв, наразі артистка хору  Нюрнберзької державної опери, ініціатор проекту «Ukrainischer Lebensmut»',
  },
  {
    id: uuidv4(),
    name: 'Олена Василенко',
    foto: olenaFoto,
    fach: 'фортепіано',
    description:
      'Випускниця Харківського національного університету мистецтв, до початку війни концертмейстер класу співу Харківської опери, концертмейстер ансамблю «Опер плюс», співорганізатор проекту «Ukrainischer Lebensmut»',
  },

  {
    id: uuidv4(),
    name: 'Наталія Грабарська',
    foto: nataliiahrabarskaFoto,
    fach: 'бандура, мецо-сопарно',
    description:
      'Лауерат українських та міжнародних конкурсів, докторант Національної музичної академії у Львові. Співорганізатор проекту «Українська мужність до життя» та керівник команди контактної точки «Ukraine-Treff Erlangen» Об’єднання українців у Франконії',
  },
  {
    id: uuidv4(),
    name: 'Євген Петронеллі',
    foto: yevhenFoto,
    fach: 'баритон',
    description:
      'Закінчив Національну музичну академію України імені П. І. Чайковського та Київську музичну академію імені Р. Глієра, у минулому артист ансамблю класичної музики імені Лятошинського, учасник багатьох мистецьких проектів та записів, нині – артист хору Нюрнберзької опери.',
  },
  {
    id: uuidv4(),
    name: 'Світлана Михайленко',
    foto: svitlanaFoto,
    fach: 'вибір поезії, переклад, ведуча',
    description:
      'Керівниця „Deutsches Theater Kyiv“ та гуртка української імпровізації в Нюрнберзькому державному театрі, художній керівник «Galerie Ukraine»',
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
    description:
      'Закінчив Київську Національну Музичну Академію. Соліст Нюрнберзького державного театру.',
  },

  // {
  //   id: uuidv4(),
  //   name: 'Тарас Коношенко',
  //   foto: tarasFoto,
  //   fach: 'бас',
  // },
  {
    id: uuidv4(),
    name: 'Софія Петішкіна',
    foto: sofiaFoto,
    fach: 'cкрипка',
    description: '',
  },
];

// const Team = () => {
//   let theme = createTheme();
//   theme = responsiveFontSizes(theme);
//   const { language } = useContext(Context);

//   return (
//     <Box
//       sx={{
//         fontFamily: 'Times New Roman',
//         alignItems: 'center',
//         justifyContent: 'center',
//         maxWidth: '1200px',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         color: '#495961',
//       }}
//     >
//       {language === 'de' ? (
//         <ThemeProvider theme={theme}>
//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: 'Times New Roman',
//               paddingTop: { xs: '30px', md: '0px' },
//               paddingBottom: { xs: '8px' },
//               textAlign: 'center',
//               fontWeight: 'bold',
//             }}
//           >
//             Unser Team
//           </Typography>
//           <ImageList
//             sx={{
//               gridTemplateColumns:
//                 'repeat(auto-fill, minmax(280px,1fr))!important',
//             }}
//           >
//             {participantsListDe.map(({ id, name, fach, description, foto }) => (
//               <ImageListItem key={id}>
//                 <img
//                   srcSet={`${foto}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                   src={`${foto}?w=248&fit=crop&auto=format`}
//                   alt={name}
//                   loading="lazy"
//                 />
//                 <ImageListItemBar
//                   title={name}
//                   subtitle={fach}
//                   sx={{
//                     '& .MuiImageListItemBar-title': {
//                       fontFamily: 'Times New Roman',
//                       fontSize: { sx: '18px', sm: '30px' },
//                       marginBottom: { sx: '10px', sm: '18px' },
//                     },
//                     '& .MuiImageListItemBar-subtitle': {
//                       fontSize: { sx: '16px', sm: '20px' },
//                       fontFamily: 'Times New Roman',
//                     },
//                   }}
//                   actionIcon={
//                     <IconButton
//                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                       aria-label={`info about ${name}`}
//                       onClick={() => {
//                         console.log({ description });
//                       }}
//                     >
//                       <InfoIcon />
//                     </IconButton>
//                   }
//                 />
//               </ImageListItem>
//             ))}
//           </ImageList>
//         </ThemeProvider>
//       ) : (
//         <ThemeProvider theme={theme}>
//           <Typography
//             variant="h5"
//             sx={{
//               fontFamily: 'Times New Roman',
//               paddingTop: { xs: '30px', md: '0px' },
//               paddingBottom: { xs: '8px' },
//               textAlign: 'center',
//               fontWeight: 'bold',
//             }}
//           >
//             Наша команда
//           </Typography>
//           <ImageList
//             sx={{
//               gridTemplateColumns:
//                 'repeat(auto-fill, minmax(280px,1fr))!important',
//             }}
//           >
//             {participantsListUkr.map(
//               ({ id, name, fach, description, foto }) => (
//                 <ImageListItem key={id}>
//                   <img
//                     srcSet={`${foto}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                     src={`${foto}?w=248&fit=crop&auto=format`}
//                     alt={name}
//                     loading="lazy"
//                   />
//                   <ImageListItemBar
//                     title={name}
//                     subtitle={fach}
//                     sx={{
//                       '& .MuiImageListItemBar-title': {
//                         fontFamily: 'Times New Roman',
//                         fontSize: { sx: '18px', sm: '30px' },
//                         marginBottom: { sx: '10px', sm: '18px' },
//                       },
//                       '& .MuiImageListItemBar-subtitle': {
//                         fontSize: { sx: '16px', sm: '20px' },
//                         fontFamily: 'Times New Roman',
//                       },
//                     }}

//                     // actionIcon={
//                     //   <IconButton
//                     //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                     //     aria-label={`info about ${name}`}
//                     //   >
//                     //     <InfoIcon />
//                     //   </IconButton>
//                     // }
//                   />
//                 </ImageListItem>
//               ),
//             )}
//           </ImageList>
//         </ThemeProvider>
//       )}
//     </Box>
//   );
//   return (
//     <Box
//       sx={{
//         fontFamily: 'Times New Roman',
//         alignItems: 'center',
//         justifyContent: 'center',
//         maxWidth: '1200px',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         color: '#495961',
//       }}
//     >
//       <ThemeProvider theme={theme}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontFamily: 'Times New Roman',
//             paddingTop: { xs: '30px', md: '0px' },
//             paddingBottom: { xs: '8px' },
//             textAlign: 'center',
//             fontWeight: 'bold',
//           }}
//         >
//           Unser Team
//         </Typography>
//       </ThemeProvider>
//     </Box>
//   );
// };

const Team = () => {
  const { language } = useContext(Context);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {' '}
      {language === 'de' ? (
        <div>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              paddingTop: '10px',
              paddingBottom: { xs: '8px' },
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Unser Team
          </Typography>
          <List
            sx={{
              display: 'grid',
              // justifyContent: 'space-between',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
                xl: '1fr 1fr 1fr 1fr ',
              },
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {participantsListDe.map(({ id, name, fach, description, foto }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  padding: '0',
                  marginBottom: '12px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  maxWidth: {
                    xs: '290px',
                    sm: '300px',
                    md: '290px',
                    lg: '345px',
                  },
                }}
              >
                <Card sx={{ maxWidth: 'auto' }}>
                  <Collapse
                    in={expanded}
                    timeout="auto"
                    unmountOnExit
                    sx={{ height: '210px' }}
                  >
                    <CardContent
                      sx={{
                        position: 'absolute',
                        color: 'white',
                        zIndex: '2',
                        background: 'rgba(60, 60, 60, 0.5)',
                      }}
                    >
                      <Typography sx={{ marginBottom: 2 }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </Collapse>

                  <CardMedia
                    component="img"
                    image={foto}
                    alt={name}
                    sx={{ position: 'relative' }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      background: 'rgba(60, 60, 60, 0.5)',
                      color: 'white',
                      position: 'absolute',
                      bottom: '0',
                    }}
                  >
                    <CardHeader
                      title={name}
                      subheader={
                        <Typography sx={{ color: 'white' }}>{fach}</Typography>
                      }
                    />{' '}
                    <CardActions disableSpacing>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                  </Box>
                </Card>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <div>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Times New Roman',
              paddingTop: '10px',
              paddingBottom: { xs: '8px' },
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Наша команда
          </Typography>
          <List
            sx={{
              display: 'grid',
              // justifyContent: 'space-between',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
                xl: '1fr 1fr 1fr 1fr ',
              },
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {participantsListUkr.map(
              ({ id, name, fach, description, foto }) => (
                <ListItem
                  key={id}
                  sx={{
                    display: 'flex',
                    padding: '0',
                    marginBottom: '12px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: {
                      xs: '290px',
                      sm: '300px',
                      md: '290px',
                      lg: '345px',
                    },
                  }}
                >
                  <Card sx={{ maxWidth: 'auto' }}>
                    <Collapse
                      in={expanded}
                      timeout="auto"
                      unmountOnExit
                      sx={{ height: '210px' }}
                    >
                      <CardContent
                        sx={{
                          position: 'absolute',
                          color: 'white',
                          zIndex: '2',
                          background: 'rgba(60, 60, 60, 0.5)',
                        }}
                      >
                        <Typography sx={{ marginBottom: 2 }}>
                          {description}
                        </Typography>
                      </CardContent>
                    </Collapse>

                    <CardMedia
                      component="img"
                      image={foto}
                      alt={name}
                      sx={{ position: 'relative' }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        background: 'rgba(60, 60, 60, 0.5)',
                        color: 'white',
                        position: 'absolute',
                        bottom: '0',
                      }}
                    >
                      <CardHeader
                        title={name}
                        subheader={
                          <Typography sx={{ color: 'white' }}>
                            {fach}
                          </Typography>
                        }
                      />{' '}
                      <CardActions disableSpacing>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                    </Box>
                  </Card>
                </ListItem>
              ),
            )}
          </List>
        </div>
      )}
    </Box>
  );
};
export default Team;
