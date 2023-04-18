import styles from './HomepageView.module.css';
import Hero from '../../components/Hero';
import Event from '../../components/Event';
import Programm from '../../components/Programm';
import Participants from '../../components/Participants';
import Aim from '../../components/Aim';
import Contacts from '../../components/Contacts';

export default function HomepageView() {
  return (
    <div className={styles.container}>
      <Event />
      <Hero />
      <Programm />
      <Participants />
      <Aim />
      <Contacts />
    </div>
  );
}
