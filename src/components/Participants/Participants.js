import s from './Participants.module.css';

const participantsList = [
  'Maryna Kitashkina, Barockgitarre ',
  'Oleg Czuchlieb, renaissanse Laute',
  'Svetlana Kitashkina, Klavier',
  'Olena Vasylenko, Klavier',
  'Schirin Hudajbergenova, Sopran',
  'Anna Bychkova, Mezzosopran',
  'Taras Konoshenko, Bass',
];
const Participants = () => {
  return (
    <div className={s.Container}>
      <ul className={s.ParticipantsList}>
        <span className={s.BoldText}>Participants</span>
        {participantsList.map(participant => (
          <li key={participant}>{participant}</li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
