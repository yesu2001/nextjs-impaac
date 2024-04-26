"use client";
import React from "react";
import {
  Stack,
  Grid,
  Card,
  Box,
  Typography,
  Container,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Title from "./Title";

const CustomCard = styled(Card)(({ theme }) => ({
  width: "auto",
  height: 50,
  padding: "0 15px",
  backgroundColor: "rgb(57,127,183)",
  borderRadius: 25,
  marginTop: -10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const NgoMember = ({ imgSrc, name, role }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{ width: "200px", borderRadius: "50px" }}>
        <Image src={imgSrc} alt="ngo logo" height={200} />
      </Card>
      <Stack>
        <CustomCard>
          <Tooltip title={name} placement="top">
            <Typography
              sx={{ fontSize: 19, color: "#ffffff", textAlign: "center" }}
            >
              {name}
            </Typography>
          </Tooltip>
        </CustomCard>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, mt: 1, textAlign: "center" }}
        >
          {role}
        </Typography>
      </Stack>
    </Stack>
  </Grid>
);

export default function NgoSection({ ngos }) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            text="Meet Our Top NGOs"
            sx={{ color: "rgb(57,127,183)", mb: 5 }}
          />
          <Typography
            color={"black"}
            sx={{ fontSize: { xs: 19, sm: 25, md: 19 } }}
          >
            At Impaac Foundation, we take pride in our impactful collaborations
            with a select group of NGOs that stand as beacons of positive
            change. These organizations embody our commitment to making a real
            difference in diverse areas, from healthcare and education to
            environmental sustainability and poverty alleviation. Allow us to
            introduce you to our top NGOs, the driving force behind
            transformative initiatives:
          </Typography>
        </Box>

        <Grid
          container
          spacing={1}
          sx={{ my: 4, justifyContent: "center", alignItems: "center" }}
        >
          {ngos.map((member, index) => (
            <NgoMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
