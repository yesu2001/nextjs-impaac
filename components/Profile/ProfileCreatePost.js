import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { Button, Card, Stack } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { FormProvider, RHFTextField } from '../hook-form';

function ProfileCreatePost({ profile }) {
  const [fileValue, setFileValue] = React.useState({});
  const defaultValues = {
    postDescription: '',
    postImage: '',
  };

  const validationSchema = Yup.object().shape({
    postDescription: Yup.string().required('Description is required').min(5, 'Enter few words'),
    postImage: Yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const {
    control,
    setValue,
    handleSubmit,
    clearErrors,
    setError,
    formState: { isSubmitting },
  } = methods;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file.name);
      setFileValue(e.target.name, file);
      setValue('postImage', file);
    }
  };

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <Card sx={{ background: '#FAFAFA', p: 4 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(submitForm)}>
        <RHFTextField multiline rows={4} name="postDescription" sx={{ background: 'white' }} />
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button variant="outlined" component="label" startIcon={<AddPhotoAlternateIcon />}>
            Add image/video
            <input
              hidden
              accept="image/*"
              name="postImage"
              multiple
              type="file"
              value={''}
              onChange={handleFileChange}
            />
          </Button>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ backgroundColor: '#3CBA6F' }}>
            Post
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Card>
  );
}

export default ProfileCreatePost;
