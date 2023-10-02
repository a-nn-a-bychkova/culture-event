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
      {/* <Box sx={{ fontWeight: 'bold' }}> Kommendes Konzert</Box> */}
      <Box>Oktober 29, 2023 15:00</Box>
      <Box>
        Kulturladen Zeltnerschloss
        <br />
        Gleißhammerstr. 6
        <br /> Nürnberg
      </Box>
    </Box>
  );
};

export default Header;
