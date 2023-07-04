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
        color: '#0a5b81',
      }}
    >
      {language === 'de' ? (
        <Box
          sx={{
            fontFamily: 'Droid Sans',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: { xs: '24px', md: '28px' },
          }}
        >
          Was wissen die Menschen momentan über die Ukraine? Krieg, Leid,
          zerstörte Städte, Geflüchtete? Ja, aber es ist nicht nur so, wir
          würden gerne eine andere Seite vorstellen.
          <br />
          Die Ukraine ist zuerst das Volk, das selbständig und unabhängig sein
          will und eine reiche und große Seele hat, die sich voll und ganz in
          dem vielfältigen musikalischen Kulturerbe äußert. Das ist die Quelle
          von der unzerbrechlichen Lebensmut, Würde und dem Glauben der Ukraine.
          <br />
          Unser Projekt wurde ins Leben gerufen, damit die ukrainische Musik aus
          den Schatten tritt und die Zuhörer eine Gelegenheit haben, sie Live zu
          erfahren. Die Solist*innen aus dem Staatstheater Nürnberg, Studierende
          der Hochschule für Musik Nürnberg und andere Musiker aus der Ukraine
          freuen sich sowohl ukrainische als auch westeuropäische Musikwerke zu
          präsentieren. <br />
          {/* Das Konzert findet am 13 Juni 2023 im Kammermusiksaal der Hochschule
          für Musik Nürnberg statt. Ihre Spenden werden für die Restaurierung
          der Nationalen Universität der Künste Charkiw I.P. Kotljarewskyj
          gesammelt, die aufgrund des Kriegs schwer beschädigt wurde.
          <br /> */}
          Wir laden Sie zu einer kurzen Reise in die friedliche und wunderschöne
          Heimat von uns ein.
        </Box>
      ) : (
        <Box
          sx={{
            fontFamily: 'Droid Sans',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: { xs: '24px', md: '28px' },
          }}
        >
          Що зараз асоціюється у людей з Україною? Війна, страждання, зруйновані
          міста, біженці? Так, на жаль, це наша реальність. Але сьогодні ми
          хотіли б поділитися з вами тим, що насправді робить нашу країну
          неповторною. <br />
          Україна – це перш за все народ, який прагне бути самодостатнім і
          незалежним, з багатою та великою душею, що повною мірою виражається в
          різноманітості нашої музичної спадщини. Вона є одним з джерел
          незламності, гідності українців, їхньої віри та мужності протистояти
          випробуванням життя.
          <br />
          Наш проєкт створено для того, аби надати можливість слухачам наживо
          почути та відчути, а може навіть і відкрити для себе українську
          музику, яка так довго залишалася в тіні для великої аудиторії.
          {/* <br />В камерній залі Hochschule für Musik Nürnberg в цей вечір
          лунатимуть українські та західноєвропейські музичні твори у виконанні
          солістів Staatstheater Nürnberg, студентів Hochschule für Musik та
          інших музикантів з України.
          <br />
          Ваші пожертви будуть надіслані на реставрацію Харківського
          національного університету мистецтв імені І.П. Котляревського, що
          сильно постраждав під час війни. */}
          <br />
          Запрошуємо Вас у невеличку подорож нашою мирною та прекрасною
          Батьківщиною!
        </Box>
      )}
    </Box>
  );
};

export default About;
