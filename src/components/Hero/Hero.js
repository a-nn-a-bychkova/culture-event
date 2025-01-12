import Poster from '../../images/Erlangen-14-02-25-poster-gross-website.PNG';

import Context from '../../contexts/context';
import Address from '../Address';
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  const { language } = useContext(Context);

  return (
    <Box xs={{ maxWidth: '1200px' }}>
      <Box
        sx={{
          display: 'flex',
          zIndex: '1',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <img alt="image" src={Poster} width="100%" />
        {/* {language === 'de' ? (
          <img alt="image" src={PosterDe} width="100%" />
        ) : (
          <img alt="image" src={PosterUkr} width="100%" />
        )} */}
        {/* {language === 'de' ? (
        <Typography
          sx={{
            typography: { xs: 'h4', sm: 'h2', md: 'h1' },
            position: 'absolute',
            top: { xs: '30%' },
            left: '50%',
            marginLeft: { xs: '-110px', sm: '-190px', md: '-302px' },
            marginTop: { xs: '-60px', sm: '-108px', md: '-168px' },
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            lineHeight: '170px',
            textShadow: '#9c9c9c 0 3px',
          }}
          gutterBottom
        >
          <div>Benefizkonzert</div> <div>für die Ukraine</div>
        </Typography>
      ) : (
        <Typography
          sx={{
            typography: { xs: 'h4', sm: 'h2', md: 'h1' },
            position: 'absolute',
            top: { xs: '20%', sm: '25%' },
            left: '50%',
            marginLeft: { xs: '-100px', sm: '-176px', md: '-280px' },
            marginTop: { xs: '-42px', sm: '-77px', md: '-112px' },
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            lineHeight: '170px',
            textShadow: '#9c9c9c 0 3px',
            width: { xs: '200px', sm: '352px', md: '560px' },
          }}
          gutterBottom
        >
          <div>Благодійний концерт</div>
        </Typography>
      )} */}
      </Box>
      {/* <Box
        sx={{
          zIndex: '2',
          position: 'absolute',
          right: { xs: '5%', lg: '12%', xl: '28%' },
          top: { xs: '12%', md: '14%', lg: '12%', xl: '7%' },
        }}
      >
        <Address />
      </Box> */}
    </Box>
  );
};

export default Hero;
