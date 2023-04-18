import s from './Hero.module.css';
import hero from '../../images/hero.JPG';
import Context from '../../contexts/context';
import { useContext, useEffect } from 'react';

const Hero = () => {
  const { language } = useContext(Context);

  return (
    <div className={s.Container}>
      {/* <img src={hero} alt="Our photo" className={s.Img} /> */}
      {language === 'de' ? (
        <div className={s.HeroText}>
          <div className={s.Benefizkonzert}>Benefizkonzert</div>
          <div className={s.Ukraine}>für die Ukraine</div>
        </div>
      ) : (
        <div className={s.HeroText}>
          <div className={s.Benefizkonzert}>Благодійний концерт</div>
        </div>
      )}
    </div>
  );
};

export default Hero;
