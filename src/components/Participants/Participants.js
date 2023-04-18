import s from './Participants.module.css';
import Context from '../../contexts/context';
import { useContext } from 'react';

const participantsListDe = [
  'Maryna Kitashkina, Barockgitarre ',
  'Oleg Czuchlieb, renaissanse Laute',
  'Svetlana Kitashkina, Klavier',
  'Olena Vasylenko, Klavier',
  'Schirin Hudajbergenova, Sopran',
  'Anna Bychkova, Mezzosopran',
  'Taras Konoshenko, Bass',
];
const participantsListUkr = [
  'Марина Кіташкінаб барочна гітара ',
  'Олег Чухліб, ренесансна лютня',
  'Світлана Кіташкіна, фортепіано',
  'Олена Василенко, фортепіано',
  'Ширін Хадайбергенова, сопрано',
  'Анна Бичкова, мецо-сопрано',
  'Тарас Коношенко, бас',
];

const Participants = () => {
  const { language } = useContext(Context);
  return (
    <div className={s.Container}>
      <ul className={s.ParticipantsList}>
        {language === 'de' ? (
          <span className={s.BoldText}>Participants</span>
        ) : (
          <span className={s.BoldText}>Учасники</span>
        )}
        {language === 'de'
          ? participantsListDe.map(participant => (
              <li key={participant}>{participant}</li>
            ))
          : participantsListUkr.map(participant => (
              <li key={participant}>{participant}</li>
            ))}
      </ul>
    </div>
  );
};

export default Participants;
