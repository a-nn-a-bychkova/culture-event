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
          xs: '10px 16px 10px 16px',
          sm: '10px 40px',
          md: '30px 40px 10px',
          lg: '30px 10px 10px 10px',
        },
        // width: { lg: '1200px' },
        fontFamily: 'Times New Roman',
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
              marginRight: '10px',
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
              marginRight: '10px',
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
            })}
          >
            {language === 'de' ? 'Galerie' : 'Галерея'}
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
