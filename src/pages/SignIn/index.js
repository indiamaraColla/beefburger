import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { CostumerData, DataRegister, LoginPageRegister } from './style';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import signinService from '../../services/signinService';

import ButtonRegister from '../../components/Button/BtnDarkRed';
import BtnOutline from '../../components/Button/BtnDarkBlue';
import Headline from '../../components/Typografy/Headline';

import { useAuth } from '../../store/AuthStore';
import { routes } from '../../constants';

const initialValues = {
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigátorio'),
  password: Yup.string()
    .min(4, 'A senha deve conter no mínimo 4 digitos.')
    .max(8, 'A senha deve conter no maximo 8 digitos.')
    .required('Senha Obrigatoria'),
});

const SignIn = () => {
  const { setUser } = useAuth();

  const history = useHistory();

  const handleClickBack = (e) => {
    e.preventDefault();
    history.push(`${routes.main}`);
  };

  const handleClickRegister = (e) => {
    e.preventDefault();
    history.push(`${routes.signup}`);
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    history.push(`${routes.newpassword}`);
  };

  const onSubmit = async (values) => {
    try {
      const response = await signinService(`${routes.signin}`, values);
      setUser(response.data);
      history.push(`${routes.home}`);
    } catch (e) {
      toast.error('Erro ao logar, tente novamente!');
    }
  };

  return (
    <CostumerData>
      <DataRegister>
        <BtnOutline onClick={handleClickBack} outline />

        <Formik validateOnMount validationSchema={SignupSchema} onSubmit={onSubmit} initialValues={initialValues}>
          {({ errors, touched, isValid }) => (
            <Form className="form">
              <Headline text="Já sou cliente" style={{ marginBottom: '16' }} />

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

              <ButtonRegister type="submit" disabled={!isValid}>
                Continuar
              </ButtonRegister>
            </Form>
          )}
        </Formik>

        <LoginPageRegister>
          <ButtonRegister onClick={handleRecoverPassword} text="Esqueceu sua Senha?" outlineTransparente />
          <ButtonRegister
            onClick={handleClickRegister}
            text="Já fez o seu cadastro? Criar cadastro!!!"
            outlineTransparente
          />
        </LoginPageRegister>
      </DataRegister>
    </CostumerData>
  );
};
export default SignIn;
