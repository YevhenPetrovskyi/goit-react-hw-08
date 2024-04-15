import { useFormik } from 'formik';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

import normalizeName from '../../helpers/normalizeName';
import { ContactSchema } from '../../helpers/schemes';

const EditModal = ({ open, handleClose, handleEdit, editName, editNumber }) => {
  const initialValues = {
    name: editName,
    number: editNumber,
  };

  const handleSubmit = ({ name, number }) => {
    const correctName = normalizeName(name);
    if (correctName === editName && number === editNumber) {
      handleClose();
      return;
    }

    handleEdit({ name: correctName, number });
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactSchema,
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit contact</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ mt: 2 }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
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
            Edit contact
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
