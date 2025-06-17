import { createTheme } from '@mui/material/styles';

const colors = {
  white: '#FFFFFF',
  primaryPink: '#fcacff',
  hoverPink: '#cb7bce',
  primaryBlue: '#4b52f2',
  hoverBlue: '#383fcf',
  errorRed: '#C0392B',
  linkHover: '#ca6eff',
};

const baseTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(180deg, #000000, #0f0f10, #352c5e, #4b38ab)',
          color: colors.white,
          fontWeight: 600,
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.white,
          },
        },
        notchedOutline: {
          borderColor: colors.white,
        },
        input: {
          color: colors.white,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.white,
          textDecoration: 'none',
          '&:hover': {
            color: colors.linkHover,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.errorRed,
          fontWeight: '600',
        },
      },
    },
  },
});

const themeLogin = createTheme(baseTheme, {
  palette: {
    primary: {
      main: colors.primaryPink,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#641766',
          '&:hover': {
            backgroundColor: colors.hoverPink,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primaryPink,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.errorRed,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primaryPink,
          '&:hover': {
            color: colors.hoverPink,
          },
        },
      },
    },
  },
});

const themeRegistration = createTheme(baseTheme, {
  palette: {
    primary: {
      main: colors.primaryBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          fontWeight: '600',
          '&:hover': {
            backgroundColor: colors.hoverBlue,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primaryBlue,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.errorRed,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primaryBlue,
          '&:hover': {
            color: '#3C8B9D',
          },
        },
      },
    },
  },
});

export { themeLogin, themeRegistration };
export default baseTheme;
export { colors };