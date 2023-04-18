import s from './Event.module.css';
const Event = () => {
  return (
    <div className={s.Container}>
      <div className={s.BoldText}>June 13, 2023 19:30</div>
      <div>
        Kammersaal
        <br />
        Hochschule für die Musik
        <br />
        Veilhofstraße 34
        <br /> Nürnberg
      </div>
    </div>
  );
};

export default Event;
