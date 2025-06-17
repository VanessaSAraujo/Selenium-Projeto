import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import { themeLogin } from '../theme/theme';
import { colors } from '../theme/theme';
import useLoginValidation from '../models/useLoginValidation';

const LoginForm = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const { fields, errors, onSubmit, showPassword, toggleShowPassword } = useLoginValidation();

  const handleFormSubmit = (data) => {
    setShowFeedback(true);
  };

  return (
    <ThemeProvider theme={themeLogin}>
      <Box
        component="form"
        onSubmit={onSubmit(handleFormSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <TextField
          label="E-mail"
          variant="outlined"
          inputProps={{ name: "email" }}
          {...fields.email}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ marginBottom: 2, width: '100%' }}
        />

        <TextField
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          inputProps={{ name: "password", maxLength: 15 }}
          {...fields.password}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ marginBottom: 3, width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                  onClick={toggleShowPassword}
                  edge="end"
                  sx={{
                    color: errors.password ? colors.errorRed : colors.primaryPink, 
                    '&:hover': {
                      color: errors.password ? colors.errorRed : colors.hoverPink, 
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '100%',
            padding: '10px 0',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: 2,
          }}
        >
          Entrar
        </Button>
        <Snackbar
          open={showFeedback}
          autoHideDuration={3000}
          onClose={() => setShowFeedback(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Define posição
        >
          <Alert
            onClose={() => setShowFeedback(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Login feito com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
