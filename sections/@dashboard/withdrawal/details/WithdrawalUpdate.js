import React from 'react';
import { Box } from '@mui/material';
import { RHFUploadMultiFile } from '../../../../components/hook-form';

export default function WithdrawalUpdate({ setValue, values, handleRemove, handleRemoveAll }) {
  return (
    <Box sx={{ my: 2 }}>
      <RHFUploadMultiFile
        showPreview
        setValue={setValue}
        name="receipts"
        accept="image/*"
        path="receipts"
        maxSize={3145728}
        value={[]}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
        onUpload={() => console.log('ON UPLOAD')}
      />
    </Box>
  );
}
