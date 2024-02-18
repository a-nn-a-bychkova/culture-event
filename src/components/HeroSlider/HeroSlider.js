import PosterDe from '../../images/24-02-24-staatstheater.png';

import Poster1De from '../../images/26-02-24-regensburg.jpg';

import Poster2De from '../../images/02-03-24-ERLANGEN-social.png';
import Context from '../../contexts/context';
import Address from '../Address';
import { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const HeroSlider = () => {
  const { language } = useContext(Context);
  const SliderImagesDE = [PosterDe, Poster1De, Poster2De];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderImagesDE.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log('next');
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log('prev');
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <Box xs={{ maxWidth: '1200px', height: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1',
            position: 'absolute',
            top: '50%',
            left: '10px',
            color: 'white',
            backgroundColor: 'grey',
            opacity: '0.6',
            width: { sx: '20px', md: '40px' },
            height: { sx: '20px', md: '24px' },
          }}
        >
          <AiOutlineArrowLeft onClick={prevSlide} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1',
            position: 'absolute',
            top: '50%',
            right: '10px',
            color: 'white',
            backgroundColor: 'grey',
            opacity: '0.6',
            width: { sx: '20px', md: '40px' },
            height: { sx: '20px', md: '24px' },
          }}
        >
          <AiOutlineArrowRight onClick={nextSlide} />
        </Box>
        {SliderImagesDE.map((slide, index) => {
          return (
            <Box key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide} alt="slide" width="100%" />
                </div>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
  // return (
  //   <Box xs={{ maxWidth: '1200px' }}>
  //     <Box
  //       sx={{
  //         zIndex: '1',
  //         position: 'relative',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         maxWidth: '1200px',
  //         marginLeft: 'auto',
  //         marginRight: 'auto',
  //       }}
  //     >
  //       {/* {language === 'de' ? (
  //         <img alt="image" src={PosterDe} width="100%" />
  //       ) : (
  //         <img alt="image" src={PosterUkr} width="100%" />
  //       )} */}
  //     </Box>
  //   </Box>
  // );
};

export default HeroSlider;
