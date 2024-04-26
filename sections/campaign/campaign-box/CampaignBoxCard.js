import PropTypes from 'prop-types';
// @mui
import { Box, Card, Stack, Typography } from '@mui/material';

// routes
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Image from '../../../components/Image';
import Label from '../../../components/Label';
import LinearProgressBar from '../../../components/LinearProgressBar';

// ----------------------------------------------------------------------

CampaignBoxCard.propTypes = {
  campaign: PropTypes.object,
};

export default function CampaignBoxCard({ campaign }) {
  const { title, imageURL, total_collect_amount: collectAmount, target_amount: targetAmount, supportersCount } = campaign;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <Label
          variant="filled"
          color='success'
          sx={{
            top: 16,
            left: 3,
            zIndex: 9,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          Tax Benifit
        </Label>
        <Image alt={title} src={imageURL} ratio="1/1" />
      </Box>
      <Stack sx={{ pl: 1, pr: 1 }} direction="row" alignItems="center" spacing={2}>
        <div>
          <Typography variant="subtitle2" >{title}</Typography>
        </div>
      </Stack>

      <Stack sx={{ p: 2 }}>

        <Stack direction="row" justifyContent="space-between" sx={{ pb: 1 }} >
          <Stack>
            ₹{fCurrency(collectAmount)} Raised
          </Stack>
        </Stack>
        <LinearProgressBar value={20} />

        <Stack direction="row" justifyContent="space-between" sx={{ pt: 1 }} >
          <Stack>
            ₹{fCurrency(targetAmount)}
            <Typography variant="subtitle">Goal</Typography>
          </Stack>
          <Stack justifyContent="flex-end" alignItems="flex-end">
            <Typography variant="subtitle1"> {supportersCount}</Typography>
            <Typography variant="subtitle"> Supporters</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
