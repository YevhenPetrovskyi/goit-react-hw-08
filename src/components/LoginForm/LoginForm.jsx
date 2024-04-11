import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/operation';
import { UserLoginSchema } from '../../helpers/schemes';

import { toast } from 'react-hot-toast';

import css from './LoginForm.module.css';

const INITIAL_FORM_DATA = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiLoginUser(values))
      .unwrap()
      .then(() => {
        toast.success('Welcome!');
        resetForm();
      })
      .catch((err) => {
        if (err === 400) {
          toast.error(
            'The user does not exist or you have entered an incorrect password.'
          );
        } else {
          toast.error('Something went wrong. Error: ', err);
        }
      });
  };

  return (
    <>
      <Formik
        validationSchema={UserLoginSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
