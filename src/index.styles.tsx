import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3f0f40',
      light: '#49274b',
      dark: '#340e36',
    },
  },
});
export default globalTheme;
