import Box from '@mui/material/Box';

const Event = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
        color: '#16729E',
        fontSize: { xs: '18px', md: '22px', lg: '24px' },
        lineHeight: '30px',
        padding: '0px 0px 20px',
      }}
    >
      <Box>June 13, 2023 19:30</Box>
      <Box>
        Kammersaal
        <br />
        Hochschule für die Musik
        <br />
        Veilhofstraße 34
        <br /> Nürnberg
      </Box>
    </Box>
  );
};

export default Event;
