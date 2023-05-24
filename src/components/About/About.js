import Context from '../../contexts/context';
import { useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

const About = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { language } = useContext(Context);
  return (
    <Box
      sx={{
        color: '#16729E',
      }}
    >
      {language === 'de' ? (
        <Box
          sx={{
            fontFamily: 'Times New Roman',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '24px', md: '30px' },
          }}
        >
          Was wissen die Menschen momentan über die Ukraine? Krieg, Leid,
          zerstörte Städte, Geflüchtete? Ja, aber es ist nicht nur so, wir
          würden gerne eine andere Seite vorstellen. Die Ukraine ist zuerst das
          Volk, das selbständig und unabhängig sein will und eine reiche und
          große Seele hat, die sich voll und ganz in der vielfältigen
          musikalischen Kulturerbe äußert. Das ist die Quelle von der
          unzerbrechlichen Lebensmut, Würde und dem Glauben der Ukraine.
          <br />
          Unser Projekt wurde ins Leben gerufen, damit die Ukrainische Musik aus
          den Schatten tritt und die Zuhörer eine Gelegenheit haben, sie Live zu
          erfahren. Die Solist*innen aus dem Staatstheater Nürnberg, Studierende
          der Hochschule für Musik und andere Musiker aus der Ukraine freuen
          sich sowohl ukrainische als auch westeuropäische Musikwerke zu
          präsentieren. Das Konzert findet am 13 Juni 2023 im Kammermusiksaal
          der Hochschule für Musik Nürnberg statt. Ihre Spenden werden für die
          Restaurierung der Nationalen Universität der Künste Charkiw I.P.
          Kotljarewskyjgesammelt, die aufgrund des Kriegs schwer beschädigt
          wurde.
          <br />
          Wir laden Sie zu einer kurzen Reise in die friedliche und wunderschöne
          Heimat von uns ein.
        </Box>
      ) : (
        <Typography
          sx={{
            fontFamily: 'Times New Roman',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '24px', md: '30px' },
          }}
        >
          У малій залі Нюрнбергської консерваторії в цей чудовий вечір звучатиме
          багато прекрасної української музики, бо ми хочемо, щоб вона лунала по
          всьому світу. Ми створили наш проєкт, щоб ви мали змогу почути
          українську музику наживо .
          <br />У концерті Ви почуєте українську бандуру, а також такі
          старовинні інструменти, як барокова гітара, ренесансна лютня та
          теорба. Вокальна музика охопить твори, написані харківськими та іншими
          українськими, та західно-європейськими композиторами, вони звучатимуть
          у виконанні співаків з Нюрнбергської опери у супроводі фортепіано.{' '}
          <br />
          Під час концерту буде проводитись благодійний збір на ремонт
          Харківського університету мистецтв ім. І.П.Котляревського, який сильно
          постраждав під час війни.
          <br />
          Ви маєте можливіть більш детально ознайомитись з учасниками та
          програмою нижче.
        </Typography>
      )}
    </Box>
  );
};

export default About;
