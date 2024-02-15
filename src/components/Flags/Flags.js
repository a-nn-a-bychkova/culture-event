import { useContext } from 'react';
import Context from '../../contexts/context';
import { Box } from '@mui/material';

const Flags = () => {
  const { setLanguage } = useContext(Context);
  const handleSetUkr = () => {
    setLanguage('ukr');
  };
  const handleSetDe = () => {
    setLanguage('de');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',
        width: { xs: '60px', md: '80px' },
      }}
    >
      <Box
        sx={{
          display: 'block',
          width: { xs: '25px', md: '30px' },
          height: { xs: '18px', md: '24px' },
        }}
        onClick={handleSetDe}
        id="de"
      >
        <Box
          sx={{
            height: { xs: '6px', md: '8px' },
            backgroundColor: '#1b1818',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '6px', md: '8px' },
            backgroundColor: '#e64848',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '6px', md: '8px' },
            backgroundColor: '#f4f446',
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: 'block',
          width: { xs: '25px', md: '30px' },
          height: { xs: '18px', md: '24px' },
        }}
        onClick={handleSetUkr}
        id="ukr"
      >
        <Box
          sx={{
            height: { xs: '9px', md: '12px' },
            backgroundColor: '#0f3dc9  ',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '9px', md: '12px' },
            backgroundColor: '#f4f446',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Flags;
