import { useState } from 'react';
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { IconButton, InputAdornment, Popover, TextField, Typography, useTheme } from '@mui/material';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

// bgcolor: theme.palette.grey[400],

export default function RHFTextField({ name, tip, ...other }) {
  const { control } = useFormContext();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            {tip && (
              <TextField
                {...field}
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...other}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {tip && (
                        <IconButton
                          sx={{ color: '#2E4F7E' }}
                          size="small"
                          edge="end"
                          onClick={(event) => setIsOpen(event.currentTarget)}
                        >
                          <Iconify icon={'humbleicons:bulb'} />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { fontSize: 18 } }}
                margin="dense"
                variant="outlined"
              />
            )}
            {!tip && <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />}
          </>
        )}
      />
      <Popover
        open={Boolean(isOpen)}
        anchorEl={isOpen}
        onClose={() => setIsOpen(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            p: 1,
            maxWidth: 200,
            color: 'white',
            bgcolor: theme.palette.primary.main,
          },
        }}
      >
        <Typography variant="body2" align="left">
          {tip}
        </Typography>
      </Popover>
    </>
  );
}
