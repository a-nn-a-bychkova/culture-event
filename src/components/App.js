import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import Hero from '../components/Hero';
import Event from '../components/Event';
import About from '../components/About';
import Programm from '../components/Programm';
import Participants from '../components/Participants';
import Flags from './Flags';
import { useRef } from 'react';
import Context from '../contexts/context';
import { useContext } from 'react';
import {
  BottomNavigation,
  Box,
  Divider,
  ListItem,
  Typography,
} from '@mui/material';
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
            md: '30px 40px',
            lg: '30px 20px 10px 0px',
          },
          width: { lg: '1200px' },
        }}
      >
        <Event />
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
              fontSize: { xs: '16px', sm: '20px', md: '24px' },
              lineHeight: '30px',
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
            lg: '30px 20px 10px 0px',
          },
          width: { lg: '1200px' },
        }}
      >
        <About />

        <div ref={participantsRef}>
          <Participants />
        </div>

        <div ref={programmRef}>
          <Programm />
        </div>
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