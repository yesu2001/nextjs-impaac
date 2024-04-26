import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// components
import CampaignCard from '../../components/CampaignCard';
import { SkeletonProductItem } from '../../components/skeleton';

// ----------------------------------------------------------------------

CampaignBoxList.propTypes = {
    campaigns: PropTypes.array.isRequired,
    loading: PropTypes.bool,
};

export default function CampaignBoxList({ campaigns, loading }) {
    return (
        <Box
            sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
            }}
        >
            {(loading ? [...Array(12)] : campaigns).map((campaign, index) =>
                campaign ? <CampaignCard key={campaign._id} campaign={campaign} /> : <SkeletonProductItem key={index} />
            )}
        </Box>
    );
}
