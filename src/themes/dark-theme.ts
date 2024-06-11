import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom darkTheme for this app
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default darkTheme;