import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useAuth } from '../../store/AuthStore';

import { CostumerRegistration } from './style';

import ButtonRegister from '../../components/Button/BtnDarkRed';
import BtnOutline from '../../components/Button/BtnDarkBlue';
import Headline from '../../components/Typografy/Headline';

import signupService from '../../services/signupService';
import signinService from '../../services/signinService';
import { routes } from '../../constants';

const initialValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigátorio'),
  name: Yup.string().min(4, 'Digite seu nome completo').required('Campo inválido'),
  password: Yup.string()
    .min(4, 'A senha deve conter no mínimo 4 digitos.')
    .max(8, 'A senha deve conter no maximo 8 digitos.')
    .required('Senha Obrigatoria'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senhas diferentes')
    .required('Confirmar senha é obrigatorio'),
});

const SignUp = () => {
  const history = useHistory();
  const { setUser } = useAuth();

  const handleClickBack = () => {
    history.push(`${routes.signin}`);
  };

  const onSubmit = async (values) => {
    try {
      await signupService(values);

      const { email, password } = values;

      const response = await signinService({ password, email });

      setUser(response.data);

      history.push(`${routes.home}`);
    } catch (e) {
      toast.error('Erro ao logar, tente novamente!');
    }
  };
  return (
    <CostumerRegistration>
      <BtnOutline onClick={handleClickBack} outline />

      <Formik validateOnMount validationSchema={SignupSchema} onSubmit={onSubmit} initialValues={initialValues}>
        {({ errors, touched, isValid }) => (
          <Form className="form">
            <Headline text="Criar cadastro" style={{ marginBottom: '16' }} />

            <Field className="inputForm" placeholder="Nome Completo" name="name" autoComplete="username" />
            {errors.name && touched.name && <ErrorMessage component="span" name="name" />}

            <Field className="inputForm" placeholder="E-mail" name="email" autoComplete="email" />
            {errors.email && touched.email && <ErrorMessage component="span" name="email" />}

            <Field
              className="inputForm"
              type="password"
              placeholder="Senha"
              name="password"
              autoComplete="current-password"
            />
            {errors.password && touched.password && <ErrorMessage component="span" name="password" />}

            <Field
              className="inputForm"
              type="password"
              placeholder="Confirme sua senha"
              name="confirmPassword"
              autoComplete="new-password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage component="span" name="confirmPassword" />
            )}

            <ButtonRegister type="submit" disabled={!isValid}>
              Continuar
            </ButtonRegister>
          </Form>
        )}
      </Formik>
    </CostumerRegistration>
  );
};
export default SignUp;
