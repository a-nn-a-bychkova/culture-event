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
      <Box>June 13, 2023 19:30</Box>
      <Box>
        Kammermusiksaal
        <br />
        Hochschule für die Musik
        <br />
        Veilhofstraße 34
        <br /> Nürnberg
      </Box>
    </Box>
  );
};

export default Header;
