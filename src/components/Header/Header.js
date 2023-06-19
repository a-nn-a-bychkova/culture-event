import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
        color: '#0a5b81',
        fontSize: { xs: '16px', md: '18px' },
        lineHeight: '24px',
        padding: '0px 0px 20px',
      }}
    >
      <Box>Juli 10, 2023 19:30</Box>
      <Box>
        Großersaal
        <br />
        Caritas-Pirckheimer-Haus
        <br />
        Königstraße 64
        <br /> Nürnberg
      </Box>
    </Box>
  );
};

export default Header;
