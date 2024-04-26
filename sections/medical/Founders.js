import React from 'react';
import { Stack, Grid, Card, Box, Typography, Container, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import nevedika from './catalogue_Pic/nivedika.png';
import Namdev from './catalogue_Pic/namdev.png';
import Saday from './catalogue_Pic/saday.png';
import Healthify from './catalogue_Pic/healthify.png';
import pankaj from './catalogue_Pic/pankaj.png';
import Title from '../../components/catalogue/Title';

const CustomCard = styled(Card)(({ theme }) => ({
  width: 200,
  height: 50,
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: 25,
  marginTop: -10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TeamMember = ({ imgSrc, name, role }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: '200px', borderRadius: '50px' }}>
        <Image component="img" src={imgSrc} />
      </Card>
      <Stack>
        <CustomCard>
          <Tooltip title={name} placement="top">
            <Typography sx={{ fontSize: 19, color: '#ffffff' }}>{name.substring(0, 11)}...</Typography>
          </Tooltip>
        </CustomCard>
        <Typography variant="caption" sx={{ fontWeight: 600, mt: 1, textAlign: 'center' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  </Grid>
);

export default function Founders() {
  const teamMembers = [
    { imgSrc: Namdev, name: 'Namdev Foundation', role: 'Awaring Peoples Against Diseases' },
    { imgSrc: Saday, name: 'Saday NGO', role: 'Gives Free Mental Health Therapies' },
    { imgSrc: Healthify, name: 'Healthify Foundation', role: 'Working towards treating poors' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Title text="Meet Our Top NGOs" sx={{ color: 'rgb(57,127,183)', mb: 5 }} />
          <Typography color={'black'} sx={{ fontSize: { xs: 19, sm: 25, md: 19 } }}>
            At Impaac Foundation, we take pride in our impactful collaborations with a select group of NGOs that stand
            as beacons of positive change. These organizations embody our commitment to making a real difference in
            diverse areas, from healthcare and education to environmental sustainability and poverty alleviation. Allow
            us to introduce you to our top NGOs, the driving force behind transformative initiatives:
          </Typography>
        </Box>

        <Grid container spacing={1} sx={{ my: 4, justifyContent: 'center', alignItems: 'center' }}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} imgSrc={member.imgSrc} name={member.name} role={member.role} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
