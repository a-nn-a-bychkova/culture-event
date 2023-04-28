import s from './Participants.module.css';
import Context from '../../contexts/context';
import { useContext } from 'react';

const participantsListDe = [
  'Maryna Kitashkina, Barockgitarre ',
  'Oleg Czuchlieb, renaissanse Laute',
  'Svetlana Kitashkina, Klavier',
  'Olena Vasylenko, Klavier',
  'Anastasiia, Klavier',
  'Anastasiia, Geige',
  'Schirin Hudajbergenova, Sopran',
  'Anna Bychkova, Mezzosopran',
  'Taras Konoshenko, Bass',
];
const participantsListUkr = [
  'Марина Кіташкіна, барочна гітара ',
  'Олег Чухліб, ренесансна лютня',
  'Світлана Кіташкіна, фортепіано',
  'Олена Василенко, фортепіано',
  'Ананстасія, фортепіано',
  'Анастасія, скрипка',
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
          <span className={s.BoldText}>Tailnehmer*innen</span>
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
