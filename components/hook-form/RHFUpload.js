import { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
// type
import { UploadAvatar, UploadMultiFile, UploadSingleFile, UploadSingleFile2 } from '../upload';
import { UploadImage } from '../upload/UploadOnCloud';
import uuidv4 from '../../utils/uuidv4';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadAvatar({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <div>
            <UploadAvatar error={checkError} {...other} file={field.value} />
            {checkError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadSingleFile.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadSingleFile({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <UploadSingleFile
            accept="image/*"
            file={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadSingleFile2.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export function RHFUploadSingleFile2({ name, setValue, disabled, isUploaded, path, placeholder, ...other }) {
  const { control } = useFormContext();

  const inputRef = useRef(null);
  const [uploadState, setUploadState] = useState({
    uploading: false,
    uploaded: isUploaded || false,
    progress: undefined,
  });

  const handleInput = () => {
    inputRef.current.click();
  };

  const handleDelete = () => {
    setUploadState({
      ...uploadState,
      uploaded: false,
    });
  };

  const onChange = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        UploadImage(file, path, (progress) => {
          setUploadState((prevState) => ({
            ...prevState,
            uploading: true,
            progress,
          }));
        })
          .then((downloadURL) => {
            setValue(name, downloadURL);
            setUploadState({
              uploading: false,
              uploaded: true,
              progress: undefined,
            });
            setValue(name, downloadURL);
          })
          .catch((error) => {
            console.error('Upload failed:', error);
          });
      }
    },
    [setValue, name, path]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <UploadSingleFile2
            file={field.value}
            error={checkError}
            placeholder={placeholder}
            onDrop={onChange}
            uploadState={uploadState}
            handleDelete={handleDelete}
            disabled={disabled}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadMultiFile.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadMultiFile({ name, value, setValue, path, ...other }) {
  const { control } = useFormContext();

  const [uploadState, setUploadState] = useState({
    uploading: false,
    uploaded: false,
    progress: undefined,
  });

  const onChange = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];

      const id = uuidv4();

      const urls = await Promise.all(
        acceptedFiles.map(async (file) => {
          const type = file.type;
          const url = await UploadImage(file, `${path}/${id}`, (progress) => {
            setUploadState((prevState) => ({
              ...prevState,
              uploading: true,
              progress,
            }));
          });

          setUploadState({
            uploading: false,
            uploaded: true,
            progress: undefined,
          });
          return { type, url };
        })
      );

      setValue(name, [...value, ...urls]);
    },
    [setValue, name, path]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <UploadMultiFile
            accept="image/*"
            innerRef={ref}
            files={value}
            error={checkError}
            onDrop={onChange}
            uploadState={uploadState}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}
