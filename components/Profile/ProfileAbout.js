import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import AddCardIcon from '@mui/icons-material/AddCard';

// @mui
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import {
  Modal,
  Link,
  Card,
  Typography,
  CardHeader,
  Stack,
  IconButton,
  Box,
  Button,
  Paper,
  ListItem,
  TextField,
  InputAdornment,
  Chip,
  Autocomplete,
} from '@mui/material';
// components
import { FormProvider, RHFTextField } from '../hook-form';
import Iconify from '../Iconify';
import useAuth from '../../hooks/useAuth';
import NgoEditPopup from '../../sections/@dashboard/ngo/create/NgoEditModel';
import RHFAutocomplete from '../hook-form/RHFAutocomplete';

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileAbout.propTypes = {
  profile: PropTypes.object,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const TagItem = styled('div')(({ theme }) => ({
  // border: '1px solid lightgrey',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  borderRadius: '20px',
  background: 'white',
  fontSize: '12px',
  padding: '3px 10px',
  margin: '5px 5px',
  minWidth: '35px',
  textAlign: 'center',
}));

export default function ProfileAbout({ profile }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [tagValues, setTagValues] = useState([]);
  const [tagList, setTagList] = useState(profile?.tags);

  const isNgo = user?.userType?.ngo;

  const tags = [
    'Pets',
    'Animals',
    'Medical',
    'Personal',
    'Impaactful Ideas',
    'Social',
    'Environment',
    'Education',
    'Women and Children',
    'Others',
  ];

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
  }

  function randomColor() {
    const color1 = randHex();
    const color2 = randHex();
    const color3 = randHex();
    return color1 + color2 + color3;
  }

  const handleChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleAddTag = () => {
    tagList.push(tagValue);
    setTagValue('');
  };

  const handleDeleteTag = (i) => {
    tagList.splice(i, 1);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="About"
        action={
          isNgo && (
            <IconButton aria-label="settings" onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          )
        }
      />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{profile?.bio || profile?.about}</Typography>
        <Stack direction="row">
          <IconStyle icon={'eva:pin-fill'} />
          <Typography variant="body2">
            Live at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {profile?.address?.city}
              {profile?.address?.city ? ',' : ''} {profile?.address?.country}
            </Link>
          </Typography>
        </Stack>

        {profile?.email && (
          <Stack direction="row">
            <IconStyle icon={'eva:email-fill'} />
            <Link component="span" variant="subtitle2" color="text.primary">
              {profile?.email}
            </Link>
          </Stack>
        )}
        {profile?.tags && (
          <Stack direction="row">
            <IconStyle icon="eva:pricetags-fill" />
            {profile?.tags?.length < 1 && <Typography variant="caption">No tags.Click on edit to add</Typography>}
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {profile?.tags?.map((data, index) => (
                <TagItem key={index} sx={{ textTransform: 'capitalize', background: `#${randomColor()}` }}>
                  {data}
                </TagItem>
              ))}
            </Box>
          </Stack>
        )}
      </Stack>

      <NgoEditPopup open={open} handleClose={handleClose} profile={profile}>
        <Stack sx={{ borderRadius: 1, my: 1, py: 1 }}>
          <Box sx={{ width: '100%', my: 1 }}>
            <RHFAutocomplete name="tags" options={tags} />
          </Box>
        </Stack>
      </NgoEditPopup>
    </Card>
  );
}
