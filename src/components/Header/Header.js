import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Flags from '../Flags/Flags';
import context from '../../contexts/context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { language } = useContext(context);
  return (
    <Container
      sx={{
        padding: {
          xs: '0px 10px 10px 16px',
          sm: '0px 40px 20px 40px',
          md: '0px 40px 20px',
          lg: '0px 50px 10px ',
        },

        fontFamily: 'Times New Roman',
        backgroundColor: 'rgb(222, 226, 225)',
      }}
    >
      ­­
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            color: '#495961',
            fontSize: { xs: '12px', sm: '18px' },
          }}
        >
          <NavLink
            to="/"
            exact
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(40, 40, 49)' : '#495961',
              fontWeight: isActive ? 'bold' : 'normal',
              marginRight: '14px',
            })}
          >
            {language === 'de' ? 'Home' : 'На головну'}
          </NavLink>

          <NavLink
            to="/concerts"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(40, 40, 49)' : '#495961',
              fontWeight: isActive ? 'bold' : 'normal',
              marginRight: '14px',
            })}
          >
            {language === 'de' ? 'Konzerte' : 'Концерти'}
          </NavLink>
          <NavLink
            to="/galerie"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(40, 40, 49)' : '#495961',
              fontWeight: isActive ? 'bold' : 'normal',
              marginRight: '14px',
            })}
          >
            {language === 'de' ? 'Galerie' : 'Галерея'}
          </NavLink>
          <NavLink
            to="/team"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(40, 40, 49)' : '#495961',
              fontWeight: isActive ? 'bold' : 'normal',
              marginRight: '14px',
            })}
          >
            {language === 'de' ? 'Team' : 'Команда'}
          </NavLink>
          {/* <NavLink
            to="/video"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(40, 40, 49)' : '#495961',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            {language === 'de' ? 'Video' : 'Відео'}
          </NavLink> */}
        </Box>
        <Flags />
      </Box>{' '}
    </Container>
  );
};

export default Header;
