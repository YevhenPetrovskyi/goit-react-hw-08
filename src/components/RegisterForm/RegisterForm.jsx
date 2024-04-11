import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UserRegisterSchema } from '../../helpers/schemes';
import { apiRegisterUser } from '../../redux/auth/operation';
import { toast } from 'react-hot-toast';

import css from './RegisterForm.module.css';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiRegisterUser(values))
      .unwrap()
      .then(() => {
        toast.success('Welcome!');
        resetForm();
      })
      .catch((err) => {
        if (err === 400) {
          toast.error('The user with this email is already registered.');
        } else {
          toast.error('Something went wrong. Error: ', err);
        }
      });
  };
  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span className={css.labelText}>User name:</span>
          <Field
            className={css.formInput}
            placeholder="Alex Mihalich"
            type="text"
            name="name"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Email:</span>
          <Field
            className={css.formInput}
            placeholder="alex@patron.com"
            type="text"
            name="email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Password:</span>
          <Field
            className={css.formInput}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </label>

        <button
          className={css.submitBtn}
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
