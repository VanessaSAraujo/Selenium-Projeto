import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useLoginValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', 
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const fields = {
    email: register('email', {
      required: 'O campo de e-mail não pode ficar em branco',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Digite um e-mail válido',
      },
    }),
    password: register('password', {
      required: 'O campo de senha não pode ficar em branco',
      minLength: {
        value: 8,
        message: 'A senha deve ter ao menos 8 caracteres e no máximo 15',
      },
    }),
  };

  return {
    fields,
    errors,
    onSubmit: handleSubmit,
    showPassword,
    toggleShowPassword,
  };
};

export default useLoginValidation;
