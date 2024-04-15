import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UserRegisterSchema } from '../../helpers/schemes';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import normalizeName from '../../helpers/normalizeName';
import { Box, Button, TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const normalizedName = normalizeName(name);
    dispatch(register({ name: normalizedName, email, password }))
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

  const formik = useFormik({
    initialValues: INITIAL_FORM_DATA,
    onSubmit: handleSubmit,
    validationSchema: UserRegisterSchema,
  });

  return (
    <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 5 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
          variant="outlined"
          sx={{ mb: 2 }}
        />
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
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
