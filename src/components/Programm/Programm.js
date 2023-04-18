import s from './Programm.module.css';
const musicalPieces = [
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
    id: '3',
    author: 'J. S. Bach',
    title: 'Prelude in C',
    performer: 'Snezhana Podorovska',
  },
  {
    id: '4',
    author: 'V.Drobjazgina, lyrics T.Shevchenko',
    title: 'All goes away',
    additionalInfo: 'from cycle Rainbow',
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
    author: 'R.Turovsky',
    title: 'Five ukrainian folk songs',
    performer: 'Oleg Czuchlieb',
  },
];

const Programm = () => {
  return (
    <div className={s.Container}>
      <span className={s.BoldText}>Programm</span>
      <ul className={s.ProgrammList}>
        {musicalPieces.map(piece => (
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
