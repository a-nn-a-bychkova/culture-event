import { useEffect, useContext } from 'react';
// import Context from '../../contexts/context';
import s from './LangBtnContainer.module.css';

export default function LangBtnContainer() {
  // const { language, setLanguage } = useContext(Context);

  const changeLanguage = e => {
    if (e.target.innerText === 'eng') {
      // setLanguage('eng');
      // window.localStorage.setItem('language', 'eng');
    } else if (e.target.innerText === 'укр') {
      // setLanguage('ukr');
      // window.localStorage.setItem('language', 'ukr');
    }
  };

  // useEffect(() => {}, [setLanguage]);
  return (
    <div className={s.ButtonContainer}>
      {/* <div
        onClick={changeLanguage}
        // className={language === 'eng' ? s.ButtonActive : s.Button}
      >
        eng
      </div> */}
      {/* <div
        onClick={changeLanguage}
        className={language === 'ukr' ? s.ButtonActive : s.Button}
      >
        укр
      </div> */}
    </div>
  );
}
