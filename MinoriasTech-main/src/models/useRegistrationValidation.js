import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useRegistrationValidation = (defaultValues = {}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  };

  const fields = {
    email: register('email', {
      required: 'O campo de e-mail não pode ficar em branco',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Digite um e-mail correto',
      },
    }),
    password: {
      ...register('password', {
        required: 'O campo de senha não pode ficar em branco',
        minLength: {
          value: 8,
          message: 'A senha deve ter entre 8 e 15 caracteres',
        },
        maxLength: {
          value: 15,
          message: 'A senha deve ter entre 8 e 15 caracteres',
        },
      }),
      showPassword,
      toggleShowPassword,
    },
    confirmPassword: {
      ...register('confirmPassword', {
        required: 'O campo de confirmação de senha não pode ficar em branco',
        validate: (value) => {
          const passwordValue = getValues('password');
          if (value !== passwordValue) {
            return 'As senhas devem ser iguais';
          }
          if (value.length < 8 || value.length > 15) {
            return 'As senhas estão iguais, mas precisam ter entre 8 e 15 caracteres';
          }
          return true;
        },
      }),
      showConfirmPassword,
      toggleShowConfirmPassword,
    },
    // cpf: register('cpf', {
    //   required: 'O campo de CPF não pode ficar em branco',
    //   validate: (value) =>
    //     value.replace(/\D/g, '').length === 11 || 'CPF inválido',
    //   onChange: (e) => {
    //     const formattedValue = formatCPF(e.target.value);
    //     setValue('cpf', formattedValue);
    //   },
    // }),
      cpf: register('cpf', {
      required: 'O campo de CPF não pode ficar em branco',
      validate: (value) => {
        const cpf = value.replace(/\D/g, '');

        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
          return 'CPF inválido';
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf[i]) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[9])) return 'CPF inválido';

        soma = 0;
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf[i]) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[10])) return 'CPF inválido';

        return true;
      },
      onChange: (e) => {
        const formattedValue = formatCPF(e.target.value);
        setValue('cpf', formattedValue);
      },
    }), 

    phone: register('phone', {
      required: 'O campo de telefone não pode ficar em branco',
      validate: (value) => {
        const numericValue = value.replace(/\D/g, '');
        return numericValue.length === 11 || 'Telefone inválido';
      },
      onChange: (e) => {
        const formattedValue = formatPhone(e.target.value);
        setValue('phone', formattedValue, { shouldValidate: true });
      },
    }),
    name: register('name', {
      required: 'O campo de nome não pode ficar em branco',
    }),
  };

  return {
    fields,
    errors,
    onSubmit: handleSubmit,
    getValues,
  };
};

export default useRegistrationValidation;
