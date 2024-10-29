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
        color: '#495961',
        maxWidth: { lg: '600px' },
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {language === 'de' ? (
        <Box
          sx={{
            fontFamily: 'Droid Sans',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: { xs: '24px', md: '32px' },
          }}
        >
          Das Projekt „Ukrainischer Lebensmut“ vereint professionelle Musiker
          mit dem Ziel, die ukrainische Kultur zu verbreiten und das Publikum
          mit der Schönheit der ukrainischen Musik und Poesie sowie mit der
          Geschichte unseres Landes vertraut zu machen.
          <br />
          Die Konzerte, die im Rahmen des Projekts veranstaltet werden, bieten
          die Möglichkeit, in die lebendigen Klänge der Bandura, des Gesangs,
          der Geige und des Klaviers einzutauchen, herausragende ukrainische
          Musiker und Dichter kennenzulernen und die Einzigartigkeit und Energie
          der ukrainischen Seele zu spüren.
          <br />
          „Ukrainischer Lebensmut“ erzählt nicht nur die Geschichten
          bemerkenswerter Menschen und Orte der Ukraine, sondern hilft auch
          denjenigen, die heute für ihre Freiheit kämpfen. Die aus den Konzerten
          gesammelten Mittel werden zur Unterstützung der ukrainischen
          Verteidiger verwendet.
          <br />
          Das Projekt zielt darauf ab, die kulturelle Verbindung zwischen der
          Ukraine und Westeuropa zu stärken, ukrainische Werte zu teilen und
          diejenigen zu unterstützen, die sich mit dem ukrainischen Land
          verbunden fühlen, egal wo sie sich befinden.
        </Box>
      ) : (
        <Box
          sx={{
            fontFamily: 'Droid Sans',
            textAlign: 'justify',
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: { xs: '24px', md: '32px' },
          }}
        >
          Проєкт “Ukrainischer Lebensmut” - це професійні музиканти, що
          обʼєднались з метою поширювати українську культуру та знайомити
          аудиторію з красою української музики та поезії, з історією нашої
          країни.
          <br />
          Концерти, створені проєктом — це можливість зануритися в живі звуки
          бандури, співу, скрипки та фортепіано, відкрити для себе видатних
          українських музикантів і поетів, а також відчути унікальність та
          енергію української душі.
          <br />
          “Ukrainischer Lebensmut” не лише розповідає історії видатних людей та
          місць України, а й допомагає тим, хто бореться за її свободу сьогодні.
          Кошти, зібрані з концертів, спрямовуються на підтримку українських
          захисників.
          <br />
          Проєкт має на меті зміцнити культурний зв’язок між Україною та
          західною Європою, поділитися українськими цінностями та підтримати
          тих, хто відчуває зв’язок з українською землею, де б вони не були.
        </Box>
      )}
    </Box>
  );
};

export default About;
