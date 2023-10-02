import hero from '../../images/hochschule-common-foto.JPG';
import nextPosterDe from '../../images/29-10-2023-de.png';
import Context from '../../contexts/context';
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  const { language } = useContext(Context);

  return (
    <Box
      sx={{
        zIndex: '-1',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <img alt="image" src={hero} width="100%" />

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
  );
};

export default Hero;
