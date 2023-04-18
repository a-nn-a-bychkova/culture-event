import s from './Hero.module.css';
import hero from '../../images/hero.JPG';

const Hero = () => {
  return (
    <div className={s.Container}>
      {/* <img src={hero} alt="Our photo" className={s.Img} /> */}
      <div className={s.HeroText}>
        Benefizkonzert
        <br />
        für die Ukraine
      </div>
    </div>
  );
};

export default Hero;
