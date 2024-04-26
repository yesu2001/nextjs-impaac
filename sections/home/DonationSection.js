import * as React from "react";
import Image from "next/image";
import { Button, Typography, Grid, Box, Divider } from "@mui/material";
import { Donate_Funds, Donate_Picture } from "./FeaturesPic";
import { stats } from "../../_mock/statistics";
import useResponsive from "@/hooks/useResponsive";

export default function DonationSection() {
  const isMobile = useResponsive("down", "sm");
  return (
    <div style={{ paddingTop: "35px", paddingBottom: "40px" }}>
      <Typography variant="h2" component="h4" sx={{ textAlign: "center" }}>
        Elevate Your Giving, Multiply Your Impact!
      </Typography>
      <Divider
        sx={{
          backgroundColor: "steelblue",
          width: "50px",
          height: "5px",
          margin: "auto",
        }}
      />
      <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
        {" "}
        Looking to make a difference and save on taxes? Your solution is here!
        <br /> Choose our IMPAAC platform for seamless, secure, and
        tax-efficient donations <br />
        to 1000+ TRUSTED NGOs across India.
      </Typography>
      <Grid
        container
        sx={{
          py: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={Donate_Picture}
            alt="Donation image"
            height={isMobile ? 195 : 370}
            objectFit="cover"
            style={{ borderRadius: "8px", width: "70%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{ width: { md: "45%", xs: "100%" }, px: 3, pl: 4, pt: 3 }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "#282828",
              fontWeight: "600",
              letterSpacing: "-0.04rem",
              margin: "0px",
            }}
          >
            Why Donate with us?
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "17px", xs: "15px" },
              color: "#555",
              fontWeight: "400",
              letterSpacing: "-0.02rem",
              margin: "8px 0",
            }}
          >
            🌐 Extensive Network of {stats.ngo}+ certified NGOs.
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "17px", xs: "15px" },
              color: "#555",
              fontWeight: "400",
              letterSpacing: "-0.02rem",
              margin: "8px 0",
            }}
          >
            💡 Transparency as it's best to track donation realtime.
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                color: "#282828",
                fontWeight: "600",
                letterSpacing: "-0.04rem",
                marginTop: "20px",
              }}
            >
              Statistics:
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "17px", xs: "15px" },
                color: "#555",
                fontWeight: "400",
                letterSpacing: "-0.02rem",
                margin: "9px 0",
                display: "flex",
              }}
            >
              {" "}
              💰 Total Funds Raised: ₹{stats.raisedFund}+ Million
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "17px", xs: "15px" },
                color: "#555",
                fontWeight: "400",
                letterSpacing: "-0.02rem",
                margin: "9px 0",
                display: "flex",
              }}
            >
              {" "}
              🌍 NGOs Benefited: {stats.ngo}+
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "17px", xs: "15px" },
                color: "#555",
                fontWeight: "400",
                letterSpacing: "-0.02rem",
                margin: "9px 0",
                display: "flex",
              }}
            >
              {" "}
              👫 Lives Touched: Millions of people
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "17px", xs: "15px" },
                color: "#555",
                fontWeight: "400",
                letterSpacing: "-0.02rem",
                margin: "9px 0",
                display: "flex",
              }}
            >
              {" "}
              🏆 Tax Savings: 50% on every donation
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "17px", xs: "15px" },
                color: "#555",
                fontWeight: "400",
                letterSpacing: "-0.02rem",
                margin: "9px 0",
                display: "flex",
              }}
            >
              {" "}
              🌈 Lives and communities need you. Be the difference.
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              {" "}
              <Button
                variant="contained"
                id="b_home_page_donation_section"
                sx={{
                  padding: "10px 20px",
                  marginTop: "12px",
                  fontSize: "15px",
                  borderRadius: 1,
                  textTransform: "capitalize",
                }}
                href="/campaign"
              >
                Donate Now!
              </Button>
            </Box>
            {/* <Typography sx={{ fontSize: '15px', color: 'grey', mt: 2 }}>
              *and Be the Catalyst for Positive Change!
            </Typography> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
