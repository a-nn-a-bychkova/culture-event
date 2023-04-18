import { useContext, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import MenuBtn from '../MenuBtn';

// import Context from '../../contexts/context';

const Navigation = () => {
  // const { language } = useContext(Context);

  return (
    <nav className={s.Nav}>
      <div>Naviagtion</div>

      {/* <NavLink to="/artknown" exact className={s.LinkLogo}>
        <img src={Logo} alt="ARTKNOWN UNTIST" className={s.Logo} />
      </NavLink> */}
      {/* <MenuBtn className={s.MenuBtn} /> */}
    </nav>
  );
};

export default Navigation;
