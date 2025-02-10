import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import Hero from '../components/Hero';
import Header from '../components/Header/Header';

import { Instagram, Facebook, Youtube, Mail, Phone } from 'react-feather';
import { useContext, Suspense, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Context from '../contexts/context';

import s from './App.module.css';
import { Box, Button, Divider, Grid, Tooltip, Typography } from '@mui/material';
import HomeView from '../views/HomeView/HomeView';
import ConcertsView from '../views/ConcertsView';
import GalerieView from '../views/GalerieView';
import VideoView from '../views/VideoView';
import ImpressumView from '../views/ImpressumView';
import DatenschutzView from '../views/DatenschutzView';
import TeamView from '../views/TeamView';

function App() {
  const { language } = useContext(Context);
  const programmRef = useRef();
  const teamRef = useRef();
  const aboutRef = useRef();
  const concertsRef = useRef();

  const handleClick = ref => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <Box>
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/concerts" element={<ConcertsView />} />
        <Route path="/galerie" element={<GalerieView />} />
        <Route path="/team" element={<TeamView />} />
        {/* <Route path="/video" element={<VideoView />} /> */}
        {/* <Route path="/programm-24-02-24" element={<ProgrammView />} /> */}
        <Route path="/impressum" element={<ImpressumView />} />
        <Route path="/datenschutz" element={<DatenschutzView />} />
      </Routes>

      {/* <Box
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
      </Box> */}
      {/* <Container
        sx={{
          width: { lg: '1200px' },
          padding: { xs: '10px', sm: '50px', lg: '60px' },
        }}
      ></Container> */}
      {/* <Container ref={concertsRef}>
        <Concerts />
      </Container> */}
      <Typography
        sx={{
          color: '#495961',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Times New Roman',
          fontSize: { xs: '24px', sm: '28px', md: '32px' },
          padding: '20px',
          lineHeight: { md: '52px' },
        }}
      >
        {' '}
        {language === 'de' ? 'Herzlich Willkommen!' : 'Ласкаво просимо!'}
      </Typography>
      <Divider sx={{ background: '#495961' }} />
      <Container
        sx={{
          padding: {
            xs: '20px',
            sm: '20px',
            md: '30px',
            lg: '30px 0px 40px',
          },
          // width: { lg: '1200px' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <EmailIcon
            sx={{ color: '#495961', marginRight: '10px', width: '16px' }}
          />{' '}
          <Link
            to="mailto:ukrainischer.lebensmut@gmail.com"
            style={{
              color: '#495961',
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              fontSize: { xs: '12px', lg: '24px' },
            }}
          >
            ukrainischer.lebensmut@gmail.com
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/impressum"
            style={{
              color: '#495961',
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              fontSize: { xs: '12px', lg: '24px' },
            }}
          >
            Impressum
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/datenschutz"
            style={{
              color: '#495961',
              textDecoration: 'none',
              fontFamily: 'Times New Roman',
              fontSize: { xs: '12px', lg: '24px' },
            }}
          >
            Datenschutz
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100px',
            justifyContent: 'space-between',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
            color: 'black',
          }}
        >
          <a href="https://www.instagram.com/ukrainischer.lebensmut?igsh=MWM4Zmo3dzVmc2U3ZQ%3D%3D&utm_source=qr">
            <Instagram color="#495961" />
          </a>

          <a href="https://www.youtube.com/channel/UCEfBsCGvRCJymBmPfsB0nPQ">
            <Youtube color="#495961" />
          </a>
          <a href="https://www.facebook.com/ukrainischer.lebensmut/">
            <Facebook color="#495961" />
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
