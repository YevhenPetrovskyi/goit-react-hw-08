import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required!')
    .matches(/^[a-zA-Zа-яА-ЯіїґІЇҐЄє].*$/, 'Name must start with letters'),
  number: Yup.string()
    .min(7)
    .max(18)
    .required('Number is required!')
    .matches(
      /^\+?(\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2})$|^\d{7}$|^\d{10}$|^\+?\d{12}$/,
      'Number must have 7 numbers or 7 numbers and codes'
    ),
});

export const UserLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!')
    .max(18, 'Password must be at most 18 characters!'),
});

export const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-ЯіїґІЇҐЄє].*$/, 'Name must start with letters'),
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!')
    .max(18, 'Password must be at most 18 characters!'),
});
