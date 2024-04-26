import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import { paramCase } from 'change-case';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../../components/card/CustomCard';
import Image from '../../../components/Image';
import { PATH_DASHBOARD, PATH_PAGE } from '../../../routes/paths';

export default function AppCampaign({ campaign, userData, onViewRow }) {

    const { kyc_status } = userData

    const navigate = useNavigate()

    const { _id, title, total_collect_amount, gallery, imageURL, settled_amount } = campaign

    const handleEditPage = () => {
        navigate(PATH_PAGE.campaignEdit(_id, paramCase(title)))
    }

    const handleWithdrawalPage = () => {
        if (kyc_status !== 'verified') {
            navigate(PATH_DASHBOARD.general.kyc)
        } else {
            navigate(PATH_DASHBOARD.withdrawal.create(_id))
        }
    }

    return (
        <div>
            <CustomCard sx={{ p: 2, mt: 1 }} >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} >
                        <Link noWrap variant="h4" underline='none' onClick={onViewRow} sx={{ cursor: 'pointer' }}>
                            <Typography variant="h5" sx={{ width: "70%" }} noWrap>
                                {title}
                            </Typography>
                        </Link>

                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                            <Stack direction="row" justifyContent="space-around">
                                <Image disabledEffect alt={title} src={gallery[0]?.preview || imageURL} sx={{ borderRadius: 1.5, width: 70, height: 70, mr: 1 }} />
                                <Stack sx={{ mx: 2 }}>
                                    <Typography variant='h6'>
                                        Raised Amount:
                                    </Typography>
                                    <Typography variant='h6'>
                                        Withdrawal Amount:
                                    </Typography>

                                </Stack>
                                <Stack>
                                    <Typography variant='h6'>
                                        {total_collect_amount || 0}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {settled_amount || 0}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={handleEditPage}>
                                Edit Fundraiser
                            </Button>

                            <Button variant="contained" color="primary" onClick={handleWithdrawalPage}>
                                Withdrawal
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CustomCard>
        </div>
    )
}
