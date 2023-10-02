import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import Hero from '../components/Hero';
import Header from './Header';
import About from '../components/About';
import Programm from '../components/Programm';
import Participants from '../components/Participants';
import Flags from './Flags';
import { useRef } from 'react';
import Context from '../contexts/context';
import { useContext } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  const { language } = useContext(Context);
  const programmRef = useRef();
  const participantsRef = useRef();
  const aboutRef = useRef();

  const handleClick = ref => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <Box>
      <Container
        sx={{
          padding: {
            xs: '10px 16px 10px 16px',
            sm: '10px 40px',
            md: '30px 40px 10px',
            lg: '30px 10px 10px 10px',
          },
          width: { lg: '1200px' },
          fontFamily: 'Times New Roman',
        }}
      >
        <Header />
        ­­
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              color: '#0a5b81',
              fontSize: { xs: '12px', sm: '18px' },
            }}
          >
            <Box onClick={() => handleClick(aboutRef)}>
              {language === 'de' ? 'Über uns' : 'Про нас'}
            </Box>
            <Box
              sx={{ marginLeft: { xs: '10px', sm: '22px', md: '28px' } }}
              onClick={() => handleClick(participantsRef)}
            >
              {language === 'de' ? 'Teilnehmer*innen' : 'Учасники'}
            </Box>
            <Box
              sx={{ marginLeft: { xs: '10px', sm: '22px', md: '28px' } }}
              onClick={() => handleClick(programmRef)}
            >
              {language === 'de' ? 'Programm' : 'Програма'}
            </Box>
            {/* <Box
              sx={{ marginLeft: { xs: '10px', sm: '22px', md: '28px' } }}
              onClick={() => handleClick(programmRef)}
            >
              {language === 'de' ? 'Konzerten' : 'Концерти'}
            </Box> */}
            {/* <Box
              sx={{ marginLeft: { xs: '10px', sm: '22px', md: '28px' } }}
              onClick={() => handleClick(programmRef)}
            >
              {language === 'de' ? 'Galerie' : 'Галерея'}
            </Box> */}
          </Box>
          <Flags />
        </Box>
      </Container>
      <Hero />
      <Container
        sx={{
          padding: {
            xs: '30px 16px 10px 16px',
            sm: '10px 40px',
            md: '30px 40px',
            lg: '30px 10px 10px 10px',
          },
          width: { lg: '1200px' },
        }}
      >
        <Grid container sx={{ spacing: { md: 2 } }}>
          <Grid ref={aboutRef} item container md={7}>
            <About />
          </Grid>
          <Grid
            item
            container
            md={5}
            ref={participantsRef}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'right' },
            }}
          >
            <Participants />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          padding: {
            xs: '30px 16px 10px 16px',
            sm: '10px 40px',
            md: '30px 40px',
            lg: '30px 10px 10px 10px',
          },
          bgcolor: '#f9fafa',
        }}
        ref={programmRef}
      >
        <Programm />
      </Box>
      <Container
        sx={{
          width: { lg: '1200px' },
          padding: { xs: '10px', sm: '20px', lg: '60px' },
        }}
      >
        <Typography
          sx={{
            color: '#0a5b81',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
            fontSize: { xs: '24px', sm: '28px', md: '32px' },
            lineHeight: { md: '52px' },
          }}
        >
          {' '}
          {language === 'de'
            ? 'Herzlich Willkommen zu unserem Konzert!'
            : 'Ласкаво просимо відвідати наш концерт!'}
        </Typography>
        <Typography
          sx={{
            color: '#0a5b81',
            textAlign: 'center',
            fontFamily: 'Times New Roman',
            fontSize: { xs: '18px' },
            paddingTop: '10px',
          }}
        >
          {' '}
          {language === 'de'
            ? 'Eintritt 5 Euro. Für Spenden sind wir dankbar.'
            : 'Вхід 5 євро.  Будемо вдячні за донати.'}
        </Typography>
      </Container>
      <Divider sx={{ background: '#0a5b81' }} />
      <Container
        sx={{
          padding: {
            xs: '10px 16px 10px 16px',
            sm: '10px 40px',
            md: '30px 40px',
            lg: '30px 20px 40px 0px',
          },
          width: { lg: '1200px' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <EmailIcon
            sx={{ color: '#0a5b81', marginRight: '10px', width: '16px' }}
          />{' '}
          <Link
            to="mailto:ukrainischer.lebensmut@gmail.com"
            style={{
              color: '#0a5b81',
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              fontSize: { xs: '12px', lg: '24px' },
            }}
          >
            ukrainischer.lebensmut@gmail.com
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
