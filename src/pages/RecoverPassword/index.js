import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import recorverdPasswordService from '../../services/recorverdPasswordService';

import { DataRegister, CostumerRegistration } from './style';

import ButtonRegister from '../../components/Button/BtnDarkRed';
import BtnOutline from '../../components/Button/BtnDarkBlue';
import Headline from '../../components/Typografy/Headline';
import { routes } from '../../constants';

const initialValues = {
  email: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido. O email precisa ter @ e .com').required('Email obrigátorio'),
});

const SignUp = () => {
  const history = useHistory();

  const handleClickBack = () => {
    history.push(`${routes.signin}`);
  };

  const onSubmit = async (values) => {
    try {
      await recorverdPasswordService(values);

      toast.success('Verifique seu email');
      history.push(`${routes.signin}`);
    } catch (e) {
      toast.error('Erro ao logar, tente novamente!');
    }
  };

  return (
    <DataRegister>
      <CostumerRegistration>
        <BtnOutline onClick={handleClickBack} outline />

        <Formik validateOnMount validationSchema={SignupSchema} onSubmit={onSubmit} initialValues={initialValues}>
          {({ errors, touched, isValid }) => (
            <Form className="form">
              <Headline text="Digite seu email" />

              <Field className="inputForm" placeholder="E-mail" name="email" autoComplete="email" />
              {errors.email && touched.email && <ErrorMessage component="span" name="email" />}

              <ButtonRegister type="submit" disabled={!isValid} text="Enviar" />
            </Form>
          )}
        </Formik>
      </CostumerRegistration>
    </DataRegister>
  );
};
export default SignUp;
