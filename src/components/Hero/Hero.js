import s from './Hero.module.css';
import hero from '../../images/hero.JPG';

const Hero = () => {
  return (
    <div className={s.Container}>
      {/* <img src={hero} alt="Our photo" className={s.Img} /> */}
      <div className={s.HeroText}>
        <div className={s.Benefizkonzert}>Benefizkonzert</div>
        <div className={s.Ukraine}>für die Ukraine</div>
      </div>
    </div>
  );
};

export default Hero;
