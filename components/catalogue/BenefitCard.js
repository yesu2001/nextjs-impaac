import React from 'react';
import { Grid, Typography,Stack} from '@mui/material';
import Image from '../Image';


function BenefitCard({ title, description ,imageSrc}) {
  return (
    <Grid item xs={12} md={4} sx={{ pl: { sm: 3 }, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-start">
        <div style={{ height: '40px', width: '40px' }}>
          <Image component="img" src={imageSrc} />
        </div>
        <Typography sx={{ fontSize: { md: 22, xs: 20, sm: 28 }, fontWeight: 700 }} color="rgb(57,127,183)">
          {title}
        </Typography>
      </Stack>
      <Stack sx={{ m: { xs:0} }}>
        <Typography sx={{ fontSize: { md: 17, xs: 15, sm: 22 }, width: { sm: '80%', md: '100%' }, pl: 6 }}>
          {description}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default BenefitCard;
