import s from './About.module.css';
import Context from '../../contexts/context';
import { useContext, useEffect } from 'react';

const About = () => {
  const { language } = useContext(Context);
  return (
    <div className={s.Container}>
      {language === 'de' ? (
        <div>
          Im Kammersaal der Hochschule für die Musik in Nürnberg wird am diesen
          Abend viel ukrainische Musik zu hören sein. Wir wollen, dass sie auf
          der ganzen Welt gehört wird und der Zuhörer die Möglichkeit hat, sie
          live zu erfahren, deshalb haben wir unser Projekt ins Leben gerufen.
          <br />
          Im Konzert wird die Bandura (ein einzigartiges traditionelles
          ukrainisches Instrument) sowie die Barockgitarre, die Renaissancelaute
          und die Theorbe klingen . Vokalwerke werden von Solisten aus der
          Nürnberger Oper, begleitet von einem Klavier, aufgeführt.
          <br />
          Während des Konzerts wird die Spenden für die Reparatur der Nationalen
          Universität der Künste Charkiw I. P. Kotljarewskyj gesammellt, die
          aufgrund des Kriegs schwer beschädigt wurde.
        </div>
      ) : (
        <>
          У малій залі Нюрнбергської консерваторії в цей чудовий вечір звучатиме
          багато прекрасної української музики, бо ми хочемо, щоб вона лунала по
          всьому світу. Ми хочемо, щоб ви мали змогу почути українську музику
          наживо, саме тому ми створили наш проєкт.
          <br />У концерті Ви почуєте українську бандуру, а також такі
          старовинні інструменти, як барокова гітара, ренесансна лютня та
          теорба. Вокальна музика охопить твори, написані харківськими та іншими
          українськими, та західно-європейськими композиторами, вони звучатимуть
          у виконанні співаків з Нюрнбергської опери у супроводі фортепіано.{' '}
          <br />
          Під час концерту буде проводитись благодійний збір на ремонт
          Харківського університету мистецтв ім. І.П.Котляревського, який сильно
          постраждав під час війни.
          <br />
          Ви маєте можливіть більш детально ознайомитись з учасниками та
          програмою нижче.
        </>
      )}
    </div>
  );
};

export default About;
