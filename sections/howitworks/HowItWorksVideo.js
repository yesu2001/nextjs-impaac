"use client";
import { Typography, Box, Divider, Grid } from "@mui/material";
import ReactPlayer from "react-player/youtube";

export default function HowItWorksVideo() {
  return (
    <Box
      sx={{
        paddingTop: { md: "100px", xs: "40px" },
        paddingBottom: { md: "100px", xs: "40px" },
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
      >
        Impaac for Real Impact
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
        A Platform for Real & Dynamic Impact
      </Typography>
      <Grid
        container
        sx={{
          pt: { md: 4, xs: 0 },
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Grid
          item
          sx={{ width: { md: "50%", xs: "100%" }, mt: { xs: "1rem" } }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/CHYROU9M5iA?autoplay=1&mute=1&loop=1&list=PLzZFXyRFGFp8QZrjdx9CdvuQthmzIwta5"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="impaac-foundation-how-its-works"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                boxShadow: "0 7px 20px rgb(0 0 0 / 12%)",
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              md: "50%",
              xs: "100%",
              padding: "1rem",
              paddingLeft: { md: "2rem", xs: "0" },
            },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600", mb: "10px" }}>
            So how does Charity Campaigns work On Impaac?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "17px", lineHeight: "28px" }}
          >
            {" "}
            Let us assume an individual, unfortunately, meets with an accident
            on the road. His medical expenses and hospital bills start piling
            up. Now he needs ₹5 Lakh to pay his expensive medical bills.
            Fortunately, his best friend signed up on Impaac platform, completed
            the process of submitting valid documents needed for verification.
            In a few minutes, he created a charity campaign to raise funds for
            his friend’s medical expenses. Now, this campaign can be shared with
            all his near and dear ones through WhatsApp, Instagram, Twitter,
            Facebook and E-mail. In a matter of few minutes, funds start coming
            in to support.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
