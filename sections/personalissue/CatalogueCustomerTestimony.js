import React, { useEffect, useState } from 'react';
import { Stack, Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GradeIcon from '@mui/icons-material/Grade';
import Image from '../../components/Image';
import customer from './catalogue_Pic/customer.png';
import Title from '../../components/catalogue/Title';


const IconCard = styled(Card)(() => ({
  width: 290,
  height: 50,
  backgroundColor: 'rgb(57,127,183)',
  borderRadius: 30,
  marginBottom: -28,
  paddingLeft: 30,
  zIndex: 99,
}));

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  marginTop: 10,
  padding: 20,
  backgroundColor: '#4C91B4',
  [theme.breakpoints.up('md')]: {
    width: 470,
    // height: 300,
  },
}));

export default function CatalogueCustomerTestimony() {
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   await fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then((response) => response.json())
  //     .then((result) => setUsers(result));
  // };

  // useEffect(async () => {
  //   getUsers();
  // }, []);

  // console.log(users);

  return (
    <Grid container sx={{py:5,background:'#EDEBEB' }} spacing={3}>
      <Grid item xs={12}  sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
        <Image component="img" src={customer} width="400px" />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
      >
        <Title text='Customer Testimony' sx={{color:'rgb(57,127,183)' ,textAlign:{xs:'center'} ,mb:5}} />

        {/* <Stack sx={{ m: { xs: 2 } }}> */}
          <Stack sx={{ display:'flex',justifyContent:'center',alignItems:'center', position: 'relative' }}>
            <IconCard>
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            </IconCard>
          {/* </Stack> */}
      
          {/* {users?.map((user,index) => (
            <Stack sx={{ m: { xs: 2 } }}>
            <Stack sx={{ pl: { md: 7, xs: 4 }, position: 'relative' }}>
            <IconCard>
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
              <GradeIcon sx={{ color: 'yellow', fontSize: '45px' }} />
            </IconCard>
          </Stack>
            <CustomCard key={index}>
            <Typography variant="h4" color="#ffffff">
              {user?.email}
            </Typography>
            <br />
            <Typography fontSize={20} color="#ffffff">
              {user?.body}
            </Typography>
          </CustomCard>
          </Stack>
))} */}

          <CustomCard>
            <Typography variant="h4" color="#ffffff">
              TeddyYu
            </Typography>
            <br />
            <Typography fontSize={20} color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </Typography>
          </CustomCard>
        </Stack>
      </Grid>
    </Grid>
  );
}
