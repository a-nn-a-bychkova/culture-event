import { useEffect, useRef } from 'react';
import s from './ModalGalleryView.module.css';

export default function ModalGalleryView({
  selectedPicture,
  postsList,
  setIsModalOpen,
  setSelectedPicture,
}) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [selectedPicture]);

  const onKeyPress = e => {
    let i = postsList.indexOf(postsList.find(post => post === selectedPicture));
    if (e.keyCode === 37) {
      i === 0
        ? setSelectedPicture(postsList[postsList.length - 1])
        : setSelectedPicture(postsList[i - 1]);
    } else if (e.keyCode === 39) {
      i < postsList.length - 1
        ? setSelectedPicture(postsList[i + 1])
        : setSelectedPicture(postsList[0]);
    } else if (e.keyCode === 27) {
      setIsModalOpen(false);
    }
  };
  return (
    selectedPicture && (
      <div className={s.Container}>
        <img
          src={selectedPicture.img}
          alt={selectedPicture.text}
          className={s.Img}
        />
      </div>
    )
  );
}
