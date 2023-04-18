import { useContext } from 'react';
import s from './Flags.module.css';
import Context from '../../contexts/context';

const Flags = () => {
  const { setLanguage } = useContext(Context);
  const handleSetUkr = () => {
    setLanguage('ukr');
  };
  const handleSetDe = () => {
    setLanguage('de');
  };
  return (
    <div className={s.FlagsContainer}>
      <div className={s.Flag} onClick={handleSetUkr} id="ukr">
        <div className={s.FlagSize}>
          <div className={s.Blue}></div>
          <div className={s.Yellow}></div>
        </div>
      </div>

      <div className={s.Flag} onClick={handleSetDe} id="de">
        <div className={s.FlagSize}>
          <div className={s.Black}></div>
          <div className={s.Red}></div>
          <div className={s.YellowD}></div>
        </div>
      </div>
    </div>
  );
};

export default Flags;
