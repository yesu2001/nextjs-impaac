import { Grid, Typography, Container, styled, Box } from '@mui/material';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { stats } from '../../_mock/statistics';

const TitleSection = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: '600',
  margin: '2px 0',
  fontSize: '42px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '35px',
  },
}));

export default function Statistics() {
  return (
    <Container>
      <Box
        sx={{
          background: 'url(https://stringfixer.com/files/199756951.jpg) center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          borderBottom: '1px solid #eaeaea',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            background: 'rgba(0, 0, 0, 0.627)',
            py: 5,
          }}
        >
          <Grid item xs={6} md={3} lg={3} sx={{ p: 3, px: 5, textAlign: 'center', py: 5 }}>
            <MapsHomeWorkIcon sx={{ color: '#fff', fontSize: { md: '50px', xs: '44px' } }} />
            <TitleSection>{stats.ngo}+</TitleSection>
            <Typography sx={{ fontWeight: '600', fontSize: '18px', color: '#fff' }}>NGOs Associated</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ p: 3, px: 5, textAlign: 'center' }}>
            <SentimentSatisfiedAltIcon sx={{ color: '#fff', fontSize: { md: '50px', xs: '44px' } }} />
            <TitleSection>{stats.globalCampaign}+</TitleSection>
            <Typography sx={{ fontWeight: '600', fontSize: '18px', color: '#fff' }}>Global Campaigns</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ p: 3, px: 5, textAlign: 'center' }}>
            <CurrencyRupee sx={{ color: '#fff', fontSize: { md: '50px', xs: '44px' } }} />
            <TitleSection>{stats.raisedFund}M+</TitleSection>
            <Typography sx={{ fontWeight: '600', fontSize: '18px', color: '#fff' }}>Funds Raised</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ p: 3, px: 5, textAlign: 'center' }}>
            <ChatBubbleOutlineIcon sx={{ color: '#fff', fontSize: { md: '50px', xs: '44px' } }} />
            <TitleSection>{stats.donor}K+</TitleSection>
            <Typography sx={{ fontWeight: '600', fontSize: '18px', color: '#fff' }}>Donors</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
