import { useContext } from 'react';
import s from './Flags.module.css';
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
        width: { xs: '40px', sm: '60px', md: '80px' },
      }}
    >
      <Box
        sx={{
          display: 'block',
          width: { xs: '15px', sm: '25px', md: '30px' },
          height: { xs: '12px', sm: '18px', md: '24px' },
        }}
        onClick={handleSetDe}
        id="de"
      >
        <Box
          sx={{
            height: { xs: '4px', sm: '6px', md: '8px' },
            backgroundColor: 'black',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '4px', sm: '6px', md: '8px' },
            backgroundColor: 'red',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '4px', sm: '6px', md: '8px' },
            backgroundColor: 'yellow',
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: 'block',
          width: { xs: '15px', sm: '25px', md: '30px' },
          height: { xs: '12px', sm: '18px', md: '24px' },
        }}
        onClick={handleSetUkr}
        id="ukr"
      >
        <Box
          sx={{
            height: { xs: '6px', sm: '9px', md: '12px' },
            backgroundColor: 'blue',
          }}
        ></Box>
        <Box
          sx={{
            height: { xs: '6px', sm: '9px', md: '12px' },
            backgroundColor: 'yellow',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Flags;
