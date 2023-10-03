import { useEffect, useContext } from 'react';

import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import About from '../../components/About/About';
import Concerts from '../../components/Concerts/Conserts';
import Hero from '../../components/Hero/Hero';

export default function HomeView(props) {
  const { language } = useContext(Context);

  return (
    <>
      <Hero />{' '}
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
            {/* <Participants /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
