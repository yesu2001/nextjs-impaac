import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
// MUI
import { Modal, Box, IconButton, Stack, Typography, Card, useTheme, styled } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { paramCase } from 'change-case';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  InstapaperShareButton,
} from 'react-share';
import { blue, grey } from '@mui/material/colors';
import CustomCard from '../../../components/card/CustomCard';
import Iconify from '../../../components/Iconify';
import PopUp from '../../../components/PopUp';
import { DOMAIN } from '../../../config';
import copyLinkIcon from '../../../assets/copyLinkIcon.jpg';
import CampaignSharePopup from './CampaignSharePopup';

function CampaignViewSocialShare({ campaign }) {
  const theme = useTheme();
  const makeUrl = campaign.title ? paramCase(campaign?.title) : '';

  return (
    <CustomCard
      id={'campaignview_page_share_campaign_btn'}
      sx={{ boxShadow: 'none', justifyContent: 'center', textAlign: 'center', mt: 0, ml: 0, width: '90%' }}
    >
      {makeUrl && <SocialShare campaign={campaign} />}
    </CustomCard>
  );
}

export default CampaignViewSocialShare;

export const SocialShare = ({ campaign }) => {
  const { enqueueSnackbar } = useSnackbar();
  const makeUrl = campaign.title ? paramCase(campaign?.title) : '';
  const [open, setOpen] = useState(false);
  const shareLink = `${DOMAIN}/fundraisers/${makeUrl}/${campaign._id}`;

  const handleModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Box
        sx={{
          width: '100%',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          border: `3px solid ${grey[700]}`,
          borderRadius: 1,
          px: 1,
        }}
        onClick={handleModal}
      >
        <Iconify icon="eva:share-outline" color={grey[700]} />
        <Typography variant="subtitle2" sx={{ color: grey[700] }}>
          Share this Campaign
        </Typography>
      </Box>
      <PopUp open={open} onClose={handleClose}>
        <CampaignSharePopup campaign={campaign} sx={{ p: 3 }} />
      </PopUp>
    </Stack>
  );
};
