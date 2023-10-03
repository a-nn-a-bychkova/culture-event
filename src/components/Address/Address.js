import Box from '@mui/material/Box';

const Address = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
        color: 'white',
        fontSize: { xs: '16px', md: '18px' },
        lineHeight: '24px',
        padding: '0px 0px 20px',
      }}
    >
      {/* <Box sx={{ fontWeight: 'bold' }}> Kommendes Konzert</Box> */}
      <Box>Oktober 29, 2023</Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        Kulturladen Zeltnerschloss
        <br />
        Gleißhammerstr. 6
        <br /> Nürnberg
      </Box>
    </Box>
  );
};

export default Address;
