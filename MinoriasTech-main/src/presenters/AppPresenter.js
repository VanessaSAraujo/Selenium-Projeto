import React, { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import LoginForm from '../views/LoginForm';
import RegistrationForm from '../views/RegistrationForm';

const AppPresenter = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <img
          src="/minoria.png"
          alt="Minoria"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Cadastro'}
        </Typography>
        {isLogin ? (
          <LoginForm />
        ) : (
          <RegistrationForm handleToggleForm={handleToggleForm} />
        )}
        <Box mt={2} textAlign="center">
          {isLogin ? (
            <Link component="button" variant="body2" onClick={handleToggleForm}>
              Não tem conta? Cadastre-se
            </Link>
          ) : (
            <Link component="button" variant="body2" onClick={handleToggleForm}>
              Já possui conta? Entrar
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default AppPresenter;
