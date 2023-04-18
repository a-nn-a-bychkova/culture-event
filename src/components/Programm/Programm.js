import s from './Programm.module.css';
import Context from '../../contexts/context';
import { useContext } from 'react';

const musicalPiecesDe = [
  {
    id: '1',
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    performer: 'Oleg Czuchlieb',
  },
  {
    id: '2',
    author: 'V.Kalinin',
    title: 'Alte Laute',
    performer: 'Snezhana Podorovska',
  },
  {
    id: '3',
    author: 'Bearbeitung von L.Yazhinsky',
    title: 'Oh am Hain an der Donau',
    performer: 'Snezhana Podorovska',
  },

  {
    id: '4',
    author: 'V.Drobjazgina',
    title: 'All goes away',
    additionalInfo: 'cycle on Shechenko texts "Rainbow"',
    performer: 'Anna Bychkova, Olena Vasylenko',
  },
  {
    id: '5',
    author: 'M.Skoryk',
    title: 'Melody',
    performer: 'Anna Bychkova, Olena Vasylenko',
  },
  {
    id: '6',
    author: 'Dankevich',
    title: 'Заснув твій друг',
    additionalInfo: 'from oper "Bokhdan Khmelnitsky"',
    performer: 'Anna Bychkova, Olena Vasylenko',
  },
  {
    id: '7',
    author: 'Yanivsky',
    title: 'Kraninchin',
    performer: 'Anna Bychkova, Olena Vasylenko',
  },
  {
    id: '8',
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    time: '4.00',
    performer: 'Oleg Czuchlieb',
  },
  {
    id: '9',
    author: 'V. Bellini',
    title: 'Oh!Quante volte',
    additionalInfo: 'from oper "I Capuleti e i Montecchi"',
    performer: 'Schirin Hudajbergenova, Olena Vasylenko',
  },
  {
    id: '10',
    author: 'Maiboroda',
    title: 'Пісня про рушник',
    performer: 'Anna Bychkova, Olena Vasylenkob',
  },
  {
    id: '11',
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    performer: 'Oleg Czuchlieb',
  },

  {
    id: '12',
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    parts: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    time: '4.00',
    performer: 'Oleg Czuchlieb',
  },
  {
    id: '13',
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    performer: 'Oleg Czuchlieb',
  },
  {
    id: '14',
    author: 'J. S. Bach',
    title: 'Prelude in C',
    performer: 'Snezhana Podorovska',
  },
];

const musicalPiecesUkr = [
  {
    id: '1',
    author: 'Р. Турковський',
    title: '5 українських народних пісень',
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',
    performer: 'Олег Чухліб',
  },
  {
    id: '2',
    author: 'В. Калінін',
    title: 'Старовинна лютня',
    performer: 'Сніжана Подоровська',
  },
  {
    id: '3',
    author: 'Обробка Яжинського',
    title: 'Ой за гаєм',
    performer: 'Сніжана Подоровська',
  },

  {
    id: '4',
    author: 'В.Дробязгіна',
    title: 'Все йде все минає',
    additionalInfo: 'з циклу на слова Шевченка "Кольорова стрічка',
    performer: 'Анна Бичкова, Олена Василенко',
  },
  {
    id: '5',
    author: 'М.Скорик',
    title: 'Мелодія',
    performer: 'Анна Бичкова, Олена Василенко',
  },
  {
    id: '6',
    author: 'Dankevich',
    title: 'Заснув твій друг',
    additionalInfo: 'з опери "Богдан Хмельницький"',
    performer: 'Анна Бичкова, Олена Василенко',
  },
  {
    id: '7',
    author: 'Янівський',
    title: 'Журавочка',
    performer: 'Анна Бичкова, Олена Василенко',
  },
  {
    id: '8',
    author: 'Р. Турковський',
    title: '5 пісень',
    additionalInfo: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',

    performer: 'Олег Чухліб',
  },
  {
    id: '9',
    author: 'В.Белліні',
    title: 'Oh!Quante volte',
    additionalInfo: 'з опери "Капулеті і Монтекі"',
    performer: 'Ширін Хедайбергерова, Олена Василенко',
  },
  {
    id: '10',
    author: 'Maiboroda',
    title: 'Пісня про рушник',
    performer: 'Анна Бичкова, Олена Василенко',
  },
  {
    id: '11',
    author: 'Р. Турковський',
    title: '5 пісень',
    performer: 'Олег Чухліб',
  },

  {
    id: '12',
    author: 'Р. Турковський',
    title: '5 пісень',
    parts: 'Пущу коня, Метелиця, Гречаники, Козачок, Тетяна',

    performer: 'Олег Чухліб',
  },
  {
    id: '13',
    author: 'Р. Турковський',
    title: '5 пісень',
    performer: 'Олег Чухліб',
  },
  {
    id: '14',
    author: 'Бах',
    title: 'Прелюдія До-мажор',
    performer: 'Сніжана Подоровська',
  },
];

const Programm = () => {
  const { language } = useContext(Context);
  return (
    <div className={s.Container}>
      <div className={s.BoldText}>
        {' '}
        {language === 'de' ? 'Programm' : 'Програма'}
      </div>
      <ul className={s.ProgrammList}>
        {language === 'de'
          ? musicalPiecesDe.map(piece => (
              <li key={piece.id} className={s.ProgramItem}>
                <div className={s.AuthorName}>{piece.author}</div>
                <div className={s.PieceTitle}>{piece.title} </div>
                {piece.additionalInfo && (
                  <div className={s.AdditionalInfo}>{piece.additionalInfo}</div>
                )}
                <div className={s.Performer}>{piece.performer}</div>
              </li>
            ))
          : musicalPiecesUkr.map(piece => (
              <li key={piece.id} className={s.ProgramItem}>
                <div className={s.AuthorName}>{piece.author}</div>
                <div className={s.PieceTitle}>{piece.title} </div>
                {piece.additionalInfo && (
                  <div className={s.AdditionalInfo}>{piece.additionalInfo}</div>
                )}
                <div className={s.Performer}>{piece.performer}</div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Programm;
