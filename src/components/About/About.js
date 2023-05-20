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
          // variant="body1"
          sx={{
            fontFamily: 'Times New Roman',
            textAlign: 'justify',
            fontSize: { xs: '16px', sm: '24px', lg: '32px' },
            lineHeight: { sm: '32px', lg: '42px' },
          }}
        >
          Im Kammersaal der Hochschule für die Musik in Nürnberg wird am diesen
          Abend viel ukrainische Musik zu hören sein. Wir wollen, dass sie auf
          der ganzen Welt gehört wird und der Zuhörer die Möglichkeit hat, sie
          live zu erfahren, deshalb haben wir unser Projekt ins Leben gerufen.
          <br />
          Im Konzert wird die Bandura (ein einzigartiges traditionelles
          ukrainisches Instrument) sowie die Barockgitarre, die Renaissancelaute
          und die Theorbe klingen. Vokalwerke werden von Solisten aus der
          Nürnberger Oper aufgeführt, begleitet von einem Klavier. Während des
          Konzerts werden die Spenden für die Reparatur der Nationalen
          Universität der Künste Charkiw I. P. Kotljarewskyj gesammellt, die
          aufgrund des Kriegs schwer beschädigt wurde.
        </Box>
      ) : (
        <Typography
          sx={{
            fontFamily: 'Times New Roman',
            textAlign: 'justify',
            fontSize: { xs: '16px', sm: '24px', lg: '32px' },
            lineHeight: { sm: '32px', lg: '42px' },
          }}
        >
          У малій залі Нюрнбергської консерваторії в цей чудовий вечір звучатиме
          багато прекрасної української музики, бо ми хочемо, щоб вона лунала по
          всьому світу. Ми хочемо, щоб ви мали змогу почути українську музику
          наживо, саме тому ми створили наш проєкт.
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
