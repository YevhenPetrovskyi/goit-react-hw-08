import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import normalizeName from '../../helpers/normalizeName';
import { ContactSchema } from '../../helpers/schemes';
import { addContact } from '../../redux/contacts/operations';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    const correctName = normalizeName(name);
    dispatch(addContact({ name: correctName, number }));
    formik.resetForm();
    toast.success('Contact added');
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactSchema,
  });

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          name="name"
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
          id="number"
          label="Number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          onBlur={formik.handleBlur}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Add contact
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
