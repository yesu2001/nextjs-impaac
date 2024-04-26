import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
// import Image from '../../components/Image';
import Image from "next/image";
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import useResponsive from "@/hooks/useResponsive";

export default function VolunteerSection() {
  const isMobile = useResponsive("down", "sm");
  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Join Us: Impact Lives, Ignite Change! 🌍
        </Typography>
        <div
          style={{
            height: 5,
            width: 70,
            background: "steelblue",
            margin: "10px 0",
          }}
        />
        <Typography sx={{ color: "gray" }}>
          Be the Change: Connect, Volunteer, Impact.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          mt: 4,
        }}
      >
        <Box sx={{ flex: 0.5 }}>
          <Grid container spacing={1} justifyContent={"center"}>
            <Grid item xs={6} md={5}>
              <Image
                src={pic1}
                alt="pic1"
                height={isMobile ? 150 : 230}
                objectFit="cover"
                style={{ borderRadius: "8px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <Image
                src={pic2}
                alt="pic2"
                height={isMobile ? 150 : 230}
                objectFit="cover"
                style={{ borderRadius: "8px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <Image
                src={pic3}
                alt="pic3"
                height={isMobile ? 150 : 230}
                objectFit="cover"
                style={{ borderRadius: "8px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <Image
                src={pic4}
                alt="pic4"
                height={isMobile ? 150 : 230}
                objectFit="cover"
                style={{ borderRadius: "8px", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flex: 0.5, color: "#6d6d6d" }}>
          <Box
            sx={{ mb: 5, display: "flex", flexDirection: "column", gap: 1.6 }}
          >
            <Typography variant="h4" sx={{ color: "black" }}>
              Diverse Volunteering for Every Passion
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Students: Transform education, shape futures.
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Professionals: Apply expertise, foster change.
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Environmentalists: Nurture the planet, sow sustainability.
            </Typography>

            <Typography variant="h4" sx={{ color: "black" }}>
              Statistics at a Glance:
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              50+ Partner NGOs
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              1000+ Dedicated Volunteers
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              10,000+ Hours of Collective Impact
            </Typography>

            <Typography variant="h4" sx={{ color: "black" }}>
              Effortless Connection, Lasting Impact
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Streamlined Platform: Explore with ease.
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Direct NGO Partnerships: Your time, their cause.
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "steelblue" }}
              />
              Real Change: Tangible results, measurable impact.
            </Typography>
          </Box>

          <Button
            variant="contained"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6XRmKx97uJfV1-iWKgkoZph8nTM02Ahh46VFJE8kQg0IkvQ/viewform"
            target="_blank"
            id="b_homepage_volunteer_section"
          >
            Join With Us!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
