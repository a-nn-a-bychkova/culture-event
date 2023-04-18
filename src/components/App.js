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
      <div className={s.NavContainer}>
        <div onClick={() => handleClick(participantsRef)}>participants</div>
        <div onClick={() => handleClick(aimRef)}>Aim</div>
        <div onClick={() => handleClick(programmRef)}>Programm</div>
        <div onClick={() => handleClick(contactsRef)}>contacts</div>
      </div>
      <Event />
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
