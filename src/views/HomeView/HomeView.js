import { useContext } from 'react';
import Context from '../../contexts/context';
import { Container, Grid, Box } from '@mui/material';
import About from '../../components/About/About';
import Concerts from '../../components/Concerts/Conserts';
import Hero from '../../components/Hero/Hero';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import HeroCarousel from '../../components/HeroCarousel';
import Team from '../../components/Team/Team';

export default function HomeView(props) {
  const { language } = useContext(Context);

  return (
    <Box>
      <Hero />
      {/* <Box
        sx={{
          backgroundColor: 'blue',
          xs: { width: 100, height: '180px' },
          sm: { height: '336px' },
          md: { height: '500px' },
          lg: { height: '674px' },
        }}
      >
     
    <HeroSlider />
      </Box> */}

      <HeroCarousel />
      <Box>
        {' '}
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
            <Grid item container md={6}>
              <About />
            </Grid>
            <Grid
              item
              container
              md={5}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'right' },
                marginLeft: 'auto',
              }}
            >
              <Concerts />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
