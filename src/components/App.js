import s from './App.module.css';
import Container from './Container';
import AppBar from './AppBar';
import HomepageView from '../views/HomePageView';
import Hero from '../components/Hero';
import Event from '../components/Event';
import About from '../components/About';
import Programm from '../components/Programm';
import Participants from '../components/Participants';
import Aim from '../components/Aim';
import Contacts from '../components/Contacts';
import { useRef, useState } from 'react';

function App() {
  const programmRef = useRef();
  const participantsRef = useRef();
  const aimRef = useRef();
  const contactsRef = useRef();

  const handleClick = ref => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <Container>
      <Event />
      <div className={s.NavContainer}>
        <div
          onClick={() => handleClick(participantsRef)}
          className={s.NavButton}
        >
          Participants
        </div>
        <div onClick={() => handleClick(programmRef)} className={s.NavButton}>
          Programm
        </div>
      </div>
      <Hero />
      <About />

      <div ref={participantsRef}>
        <Participants />
      </div>

      <div ref={programmRef}>
        <Programm />
      </div>

      {/* <div ref={contactsRef}>
        <Contacts />
      </div> */}
    </Container>
  );
}

export default App;
