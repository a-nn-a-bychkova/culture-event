import s from './About.module.css';
import Context from '../../contexts/context';
import { useContext, useEffect } from 'react';

const About = () => {
  const { language } = useContext(Context);
  return (
    <div className={s.Container}>
      {language === 'de' ? (
        <div>
          Hier wird viel TextHier wird viel TextHier wird viel TextHier wird
          viel TextHier wird viel TextHier wird viel TextHier wird viel TextHier
          wird viel TextHier wird viel TextHier wird viel TextHier wird viel
          TextHier wird viel TextHier wird viel TextHier wird viel TextHier wird
          viel TextHier wird viel TextHier wird viel TextHier wird viel TextHier
          wird viel TextHier wird viel TextHier wird viel TextHier wird viel
          TextHier wird viel TextHier wird viel TextHier wird viel TextHier wird
          viel TextHier wird viel TextHier wird viel TextHier wird viel Text
        </div>
      ) : (
        <>
          У малій залі Нюрнбергської консерваторії в цей вечір прозвучить багато
          української музики (і не тільки), бо ми хочемо, щоб вона лунала по
          всьому світу і слухач мав змогу почути її наживо, саме тому ми
          створили наш проєкт.
          <br />
          У концерті Ви почуєте бандуру (унікальний традиційний український
          інструмент), а також такі старовинні інструменти, як барочна гітара та
          лютня. Вокальні твори прозвучать у виконанні солістів з Нюрнбергської
          опери у супроводі фортепіано. <br />
          Під час концерту буде проводитись благодійний збір на ремонт
          Харківського університету мистецтв ім.І.П.Котляревського, який сильно
          постраждав під час війни.
          <br />
          Більш детально ознайомитись з програмою можна нижче.
        </>
      )}
    </div>
  );
};

export default About;
