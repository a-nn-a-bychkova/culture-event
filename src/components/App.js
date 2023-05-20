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
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              color: '#16729E',
              fontSize: { xs: '16px', md: '18px' },
              // lineHeight: '24px',
            }}
          >
            <Box onClick={() => handleClick(participantsRef)}>
              {language === 'de' ? 'Teilnehmer*innen' : 'Учасники'}
            </Box>
            <Box
              sx={{ marginLeft: '28px' }}
              onClick={() => handleClick(programmRef)}
            >
              {language === 'de' ? 'Programm' : 'Програма'}
            </Box>
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
            lg: '30px 10px 0px 10px',
          },
          width: { lg: '1200px' },
        }}
      >
        <Grid container sx={{ spacing: { md: 2 } }}>
          <Grid item container md={6}>
            <About />
          </Grid>
          <Grid
            item
            container
            md={6}
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
        }}
      >
        <Typography
          sx={{
            color: '#16729E',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman',
            fontSize: { xs: '24px', sm: '28px', md: '32px' },
            lineHeight: { md: '52px' },
            padding: { xs: '10px', sm: '20px', lg: '60px' },
          }}
        >
          {' '}
          {language === 'de'
            ? 'Herzlich Willkommen zu unserem Konzert!'
            : 'Ласкаво просимо відвідати наш концерт!'}
        </Typography>
      </Container>
      <Divider sx={{ background: '#16729E' }} />
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
            sx={{ color: '#16729E', marginRight: '10px', width: '16px' }}
          />{' '}
          <Link
            to="mailto:ukrainischer.lebensmut@gmail.com"
            style={{
              color: '#16729E',
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
