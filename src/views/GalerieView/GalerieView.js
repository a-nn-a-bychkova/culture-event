import { useEffect, useContext } from 'react';

import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import About from '../../components/About/About';
import Concerts from '../../components/Concerts/Conserts';
import Hero from '../../components/Hero/Hero';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

export default function GalerieView(props) {
  const { language } = useContext(Context);

  return <div>GalerieView</div>;
}
