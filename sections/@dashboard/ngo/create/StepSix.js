import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import { RHFSelect, RHFTextField, RHFUploadSingleFile2 } from '../../../../components/hook-form';
import useResponsive from '../../../../hooks/useResponsive';
import useAuth from '../../../../hooks/useAuth';

const proofOptions = [
  {
    label: 'Select Document',
    value: 'no_document',
  },
  {
    label: 'Aadhar Card',
    value: 'aadhar_card',
  },
  {
    label: 'Pan Card',
    value: 'pan_card',
  },
  {
    label: 'Passport',
    value: 'passport',
  },
];

function getLabelByValue(value) {
  const option = proofOptions.find((option) => option.value === value);
  return option ? option.label : null;
}

function StepSix({ value, setValue, watch, kycVerified, user }) {
  const { ngoProfile } = useAuth();
  const isMobile = useResponsive('down', 'md');
  const {
    user_document_front,
    user_document_back,
    user_first_name,
    user_last_name,
    user_document_number,
    user_relation,
  } = value();
  const { user_document_name } = watch();
  const isPan = user_document_name === 'pan_card';
  const isUserVerified = user?.user_info?.is_verified ? user?.user_info?.is_verified === 'verified' : false;

  return (
    <Box sx={{ flex: 0.8 }}>
      {!isMobile && (
        <Box>
          <Typography variant="h4">Enter the User KYC Details</Typography>
          <Typography variant="caption">KYC information of the user.</Typography>
        </Box>
      )}
      {isUserVerified && (
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            color: 'green',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <VerifiedIcon color="green" fontSize="small" sx={{ color: 'green' }} />
          This Document is Verifed.
        </Typography>
      )}
      {!isUserVerified && user?.user_info?.message && (
        <Box
          sx={{
            background: red[50],
            display: 'flex',
            py: 1,
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3,
          }}
        >
          <Typography sx={{ fontSize: 12 }}>This document got rejected. Reason - </Typography>
          <Typography sx={{ ml: 1, fontSize: 12, fontWeight: 'bold', color: red[800] }}>
            {user?.user_info?.message}
          </Typography>
        </Box>
      )}
      <Box sx={{ my: 5 }}>
        <Stack direction={isMobile ? 'column' : 'row'} alignItems="center" my={3} spacing={2}>
          <RHFTextField name="user_first_name" label="First Name" disabled={isUserVerified} />
          <RHFTextField name="user_last_name" label="Last Name" disabled={isUserVerified} />
        </Stack>
        <Stack direction={isMobile ? 'column' : 'row'} alignItems="center" my={3} spacing={2}>
          <Typography variant="subtitle2" sx={{ flex: 0.5 }}>
            Authorized User's Identity Proof
          </Typography>
          <RHFSelect
            name="user_document_name"
            label="Document"
            placeholder="Document"
            sx={{ flex: 0.5, mx: 2, bgcolor: '#fff' }}
            disabled={isUserVerified}
          >
            {proofOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RHFSelect>
        </Stack>
        <RHFTextField
          name="user_document_number"
          label={`${getLabelByValue(user_document_name)} ${user_document_name === 'no_document' ? 'Type' : 'Number'}`}
          disabled={isUserVerified}
        />
        <Stack direction={isMobile ? 'column' : 'row'} my={3} spacing={2}>
          <RHFUploadSingleFile2
            accept="image/*, .pdf"
            isUploaded={user_document_front}
            setValue={setValue}
            name={'user_document_front'}
            label={`Click to Upload ${getLabelByValue(user_document_name)} (Front) `}
            width={0.5}
            path={`Ngo/${ngoProfile?._id}/user_document_front`}
            disabled={isUserVerified}
          />
          {!isPan && (
            <RHFUploadSingleFile2
              accept="image/*, .pdf"
              isUploaded={user_document_back}
              setValue={setValue}
              name={'user_document_back'}
              label={`Click to Upload ${getLabelByValue(user_document_name)} (Back) `}
              path={`Ngo/${ngoProfile?._id}/user_document_back`}
              width={0.5}
              disabled={isUserVerified}
            />
          )}
        </Stack>
        <Stack>
          <RHFTextField
            name="user_relation"
            label="Your Relation with the NGO"
            placeholder="Ex: - Founder or volunteer or Member"
            disabled={isUserVerified}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default StepSix;
