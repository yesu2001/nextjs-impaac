"use client";
import React, { useEffect, useState, useRef } from "react";
import { Grid, styled, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity1Icon from "@mui/icons-material/Diversity1";
// import { stats } from '../../_mock/statistics';
import volunterIcon from "./FeaturesPic/volunteer-icon.png";
import donorsIcon from "./FeaturesPic/donors-icon.png";
import { getStats } from "../../helper/stats";

const TitleSection = styled("div")(({ theme }) => ({
  color: "#fff",
  fontWeight: "600",
  margin: "2px 0",
  fontSize: "42px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "35px",
  },
}));

// ----------------------------------------------------------------

export default function HomeStatistics() {
  const [stats, setStats] = useState({});
  useEffect(() => {
    getStats().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStats(data.statistics);
      }
    });
  }, []);

  return (
    <div style={{ background: "rgba(0, 0, 0, 0.627)" }}>
      <Container maxWidth={"lg"}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around", py: 5 }}
        >
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ p: 3, px: 5, textAlign: "center" }}
          >
            <MapsHomeWorkIcon
              sx={{ color: "#fff", fontSize: { md: "50px", xs: "44px" } }}
            />
            <TitleSection>
              <CountUpAnimation
                initialValue={0}
                targetValue={stats?.ngo}
                text={"+"}
              />
            </TitleSection>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
            >
              NGOs Associated
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ p: 3, px: 5, textAlign: "center" }}
          >
            <CampaignOutlinedIcon
              sx={{ color: "#fff", fontSize: { md: "50px", xs: "44px" } }}
            />
            <TitleSection>
              <CountUpAnimation
                initialValue={0}
                targetValue={stats?.global_campaign}
                text={"+"}
              />
            </TitleSection>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
            >
              Global Campaigns
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{ p: 3, px: 5, textAlign: "center" }}
          >
            <PaidOutlinedIcon
              sx={{ color: "#fff", fontSize: { md: "50px", xs: "44px" } }}
            />
            <TitleSection>
              <CountUpAnimation
                initialValue={0}
                targetValue={stats?.raised_fund}
                text={"M+"}
              />
            </TitleSection>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
            >
              Funds Raised
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{
              p: 3,
              px: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <VolunteerActivismIcon
              sx={{ color: "#fff", fontSize: { md: "50px", xs: "44px" } }}
            />
            <TitleSection>
              <CountUpAnimation
                initialValue={0}
                targetValue={stats?.donor}
                text={"K+"}
              />
            </TitleSection>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
            >
              Donors
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            lg={2}
            sx={{
              p: 3,
              px: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Diversity1Icon
              sx={{ color: "#fff", fontSize: { md: "50px", xs: "44px" } }}
            />
            <TitleSection>
              <CountUpAnimation
                initialValue={0}
                targetValue={stats?.volunteers}
                text={"K+"}
              />
            </TitleSection>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
            >
              Volunteers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <p>
      {count}
      {text}
    </p>
  );
};
