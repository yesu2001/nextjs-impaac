import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography, Paper, CardHeader } from '@mui/material';
import CampaignCard from '../../../components/CampaignCard';
import { HomeFeaturedCard } from '../../home';

export default function ProfileCampaigns({ ngoCampaigns }) {
  return (
    <Card>
      <CardHeader title="Campaigns / Programs" />
      <Typography variant="body2" sx={{ ml: 3, mb: 2, color: '#808080' }}>
        Ongoing Projects
      </Typography>
      <Box sx={{ px: 2 }}>
        {ngoCampaigns?.length < 1 && (
          <Typography variant="subtitle2" sx={{ textAlign: 'center', my: 3, color: 'grey' }}>
            No Campaigns
          </Typography>
        )}
        {ngoCampaigns?.length > 1 && <HomeFeaturedCard list={ngoCampaigns} slides={2} sx={{ p: 0 }} />}
        {ngoCampaigns?.length === 1 && ngoCampaigns?.map((item) => <CampaignItem key={item._id} item={item} />)}
      </Box>
    </Card>
  );
}

CampaignItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    person: PropTypes.string,
    target_amount: PropTypes.number,
  }),
};

function CampaignItem({ item }) {
  return (
    <Paper sx={{ mx: 1, borderRadius: 2, my: 2, bgcolor: 'background.neutral' }}>
      <CampaignCard key={item._id} campaign={item} />
    </Paper>
  );
}
