import { useEffect, useContext, useState } from 'react';
import ModalGalleryView from '../ModalGalleryView';
import Context from '../../contexts/context';
import { generatePath } from 'react-router-dom';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import s from './GalleryView.module.css';
import About from '../../components/About/About';
import Concerts from '../../components/Concerts/Conserts';
import Hero from '../../components/Hero/Hero';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

import img0 from '../../images/common-1.jpg';
import img1 from '../../images/common-2.jpg';
import img2 from '../../images/common-3.jpg';
import img3 from '../../images/dach-april-oben.jpg';
import img4 from '../../images/dach-april-oben-2.jpg';

const postsList = [
  {
    text: '3',
    img: img3,
  },
  {
    text: '4',
    img: img4,
  },
  {
    text: '0',
    img: img0,
  },
  {
    text: '1',
    img: img1,
  },
  {
    text: '2',
    img: img2,
  },
];

export default function GalerieView(props) {
  const { language } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState();

  // useEffect(() => {
  //   document.addEventListener('click', onClickOpenModal);
  //   return () => {
  //     document.removeEventListener('click', onClickOpenModal);
  //   };
  // }, []);

  const onClickOpenModal = event => {
    if (event.target.nodeName === 'IMG') {
      setSelectedPicture(
        postsList.find(post => post.text === event.target.alt),
      );
      event.target.alt && setIsModalOpen(prev => !prev);
    }
    if (
      event.target.nodeName !== 'IMG' &&
      event.target.nodeName !== 'svg' &&
      event.target.nodeName !== 'line'
    ) {
      setIsModalOpen(prev => !prev);
    }
  };

  return (
    <Box>
      {postsList && (
        <ul className={s.List}>
          {postsList.map(post => {
            return (
              <li className={s.Item} key={post.text}>
                <img src={post.img} alt={post.text} className={s.Img} />
              </li>
            );
          })}
        </ul>
      )}
      {isModalOpen && (
        <ModalGalleryView
          selectedPicture={selectedPicture}
          postsList={postsList}
          setIsModalOpen={setIsModalOpen}
          setSelectedPicture={setSelectedPicture}
        />
      )}
      <Typography
        align="center"
        sx={{
          fontFamily: 'Times New Roman',
          fontSize: { xs: '12px', s: '16px', md: '18px' },
          color: ' #495961',
        }}
      >
        Foto: Ingo Schweiger{' '}
      </Typography>
    </Box>
  );
}
