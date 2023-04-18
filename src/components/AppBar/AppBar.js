import { useEffect } from 'react';
import Navigation from '../Navigation';
import s from './AppBar.module.css';
import LangBtnContainer from '../LangBtnContainer';

export default function AppBar() {
  return (
    <header className={s.Header}>
      <Navigation />
      <LangBtnContainer />
    </header>
  );
}
