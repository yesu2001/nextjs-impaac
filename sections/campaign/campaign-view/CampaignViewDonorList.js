import React, { useState } from 'react';
import { Avatar, Box, Divider, ListItem, Typography, Modal, Stack } from '@mui/material';

// MUI
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';

// hook
import UsePagination from '../../../hooks/usePagination';
// Component
import CustomCard from '../../../components/card/CustomCard';
import { getRandomSoftColor } from '../../../utils/getRandomColor';
import { smaDonors } from '../../../_mock/smaDonors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: '70%', md: '400px', lg: '450px', xl: '550px' },
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  pt: 0,
  borderRadius: 2,
  outline: 'none',
};

export default function CampaignViewDonorList({ donorList }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const PER_PAGE = 8;
  const _DATA = UsePagination(donorList, PER_PAGE);
  const donorsCount = donorList.length;

  return (
    <CustomCard id="donorList" title={`Donors`} sx={{ mt: 0 }}>
      {_DATA.currentData().map((donor, index) => {
        const { name, isAnonymous, amount, currency_code: currencyCode, amount_in_inr } = donor;
        return (
          <div key={index}>
            <ListItem
              sx={{
                alignItems: 'flex-start',
                flexDirection: { sm: 'row' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: { xs: 2, sm: 0 },
                  textAlign: { sm: 'center' },
                  flexDirection: { sm: 'column' },
                }}
              >
                <Avatar
                  sx={{
                    mr: { xs: 6, sm: 6, md: 3 },
                    mb: { sm: 2 },
                    width: { md: 40 },
                    height: { md: 40 },
                    backgroundColor: getRandomSoftColor(),
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                    textTransform: 'capitalize',
                  }}
                >
                  {isAnonymous ? 'Anonymous'.charAt(0) : name.charAt(0)}
                </Avatar>
              </Box>

              <div>
                <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
                  {isAnonymous ? 'Anonymous' : name}
                </Typography>
                <Typography variant="body2">
                  {'INR '}
                  {donor?.amount_in_inr ? amount_in_inr : amount}
                </Typography>
              </div>
            </ListItem>
            <Divider />
          </div>
        );
      })}

      {donorList.length > 5 && (
        <Typography
          onClick={handleOpen}
          variant="h5"
          component="p"
          sx={{ cursor: 'pointer', padding: '10px 0', textAlign: 'center' }}
        >
          View all Donors
        </Typography>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ margin: 0, padding: 0, my: 2, pl: 2 }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {donorsCount} Donors
            </Typography>
            <CloseIcon
              sx={{ position: 'absolute', top: 10, right: 10, color: grey[700], cursor: 'pointer' }}
              onClick={handleClose}
            />
          </Stack>
          <Box sx={{ height: '70vh', overflowY: 'scroll', pt: 2 }}>
            {donorList.map((donor, index) => {
              const { name, isAnonymous, amount, currency_code: currencyCode, amount_in_inr } = donor;

              return (
                <div key={index}>
                  <ListItem
                    disableGutters
                    sx={{
                      alignItems: 'flex-start',
                      flexDirection: { sm: 'row' },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: { xs: 2, sm: 0 },
                        minWidth: { xs: 30, md: 90 },
                        textAlign: { sm: 'center' },
                        flexDirection: { sm: 'column' },
                      }}
                    >
                      <Avatar
                        // src={avatarUrl}
                        sx={{
                          mr: 2,
                          mb: { sm: 2 },
                          width: { md: 40 },
                          height: { md: 40 },
                          backgroundColor: getRandomSoftColor(),
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 24,
                          textTransform: 'capitalize',
                        }}
                      >
                        {isAnonymous ? 'Anonymous'.charAt(0) : name.charAt(0)}
                      </Avatar>
                    </Box>

                    <div>
                      <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
                        {isAnonymous ? 'Anonymous' : name}
                      </Typography>
                      <Typography variant="body2">
                        {'INR '}
                        {donor?.amount_in_inr ? amount_in_inr : amount}
                      </Typography>
                    </div>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </CustomCard>
  );
}
