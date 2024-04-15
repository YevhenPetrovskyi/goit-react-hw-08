import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { UserLoginSchema } from '../../helpers/schemes';

import { toast } from 'react-hot-toast';
import { Box, Button, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const INITIAL_FORM_DATA = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
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

  const formik = useFormik({
    initialValues: INITIAL_FORM_DATA,
    onSubmit: handleSubmit,
    validationSchema: UserLoginSchema,
  });

  return (
    <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 5 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          variant="outlined"
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <Button
                onClick={() => setShowPassword((prevState) => !prevState)}
                variant="text"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
            ),
          }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
