import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { stats } from "../../_mock/statistics";

const StatsData = [
  {
    no: `${stats.ngo}+`,
    txt: "NGOs Associated",
    border: "1px solid #d3d3d3",
  },
  {
    no: `${stats.globalCampaign}+`,
    txt: "Global Campaigns",
    border: "1px solid #d3d3d3",
  },
  {
    no: `${stats.raisedFund}M+`,
    txt: "Funds Raised",
    border: "1px solid #d3d3d3",
  },
  {
    no: `${stats.donor}K+`,
    txt: "Donors",
    border: "",
  },
];

export default function AboutStats() {
  return (
    <Box
      sx={{
        background: "#fafafa",
        padding: { md: "30px 100px", xs: "30px" },
        boxSizing: "border-box",
        borderBottom: "1px solid #efefef",
        borderTop: "1px solid #efefef",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mb: 1, letterSpacing: "-1px" }}
      >
        Statistics
      </Typography>
      <Divider
        sx={{
          backgroundColor: "steelblue",
          width: "60px",
          height: "3px",
          margin: "auto",
          mb: 3,
        }}
      />
      <Grid
        container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {StatsData.map((Stat) => (
          <Grid
            item
            sx={{
              textAlign: "center",
              borderRight: { md: Stat.border, xs: "0px solid" },
              pb: { md: 0, xs: 1 },
              width: { xs: "50%", md: "25%" },
            }}
          >
            <Typography
              sx={{
                color: "#2E4F7E",
                fontSize: "25px",
                lineHeight: "36px",
                fontWeight: "600",
              }}
            >
              {Stat.no}
            </Typography>
            <Typography sx={{ fontSIze: "21px" }}>{Stat.txt}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
