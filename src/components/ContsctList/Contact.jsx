import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact, editContact } from '../../redux/contacts/operation';
import normalizePhoneNumber from '../../helpers/normalizePhoneNumber';
import toast from 'react-hot-toast';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  ListItem,
  ListItemIcon,
  Menu,
  Typography,
  MenuItem,
} from '@mui/material';
import stringAvatar from '../../helpers/userLogo';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Close modal
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    handleClose();
  };

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .catch((err) => {
        toast.error('Something went wrong. Error: ', err);
      });
    handleCloseDeleteModal();
  };

  //Edit modal
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    handleClose();
  };

  const handleEdit = (contact) => {
    dispatch(editContact({ contact, id }))
      .unwrap()
      .then(() => {
        toast.success('Contact edited');
      })
      .catch((err) => {
        toast.error('Something went wrong. Error: ', err);
      });
    handleCloseEditModal();
  };

  return (
    <ListItem sx={{ width: '300px', padding: 0 }}>
      <Card sx={{ width: '300px' }}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '16px',
          }}
        >
          <Box>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                fontSize: '16px',
              }}
            >
              <PersonIcon />
              {name}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                fontSize: '16px',
              }}
            >
              <PhoneIcon />
              {normalizePhoneNumber(number)}
            </Typography>
          </Box>
          <IconButton
            size="large"
            aria-label="contact"
            aria-haspopup="true"
            aria-controls={id}
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar {...stringAvatar(name)} />
          </IconButton>
          <Menu
            id={id}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{ mt: '55px' }}
          >
            <MenuItem onClick={handleOpenEditModal}>
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              Edit
            </MenuItem>
            <MenuItem onClick={handleOpenDeleteModal}>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              Delete
            </MenuItem>
            <DeleteModal
              open={openDeleteModal}
              handleClose={handleCloseDeleteModal}
              handleDelete={handleDelete}
            />
            <EditModal
              open={openEditModal}
              handleClose={handleCloseEditModal}
              handleEdit={handleEdit}
              editName={name}
              editNumber={number}
            />
          </Menu>
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default Contact;
