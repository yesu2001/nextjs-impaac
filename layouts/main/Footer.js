import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Iconify from "@/components/Iconify";
import LogoWhite from "@/components/LogoWhite";
import { GtmEvent } from "@/utils/googleTagManager";
import { SocialLink } from "@/_mock/socialLink";
import { callNumber, whatsAppNumber } from "@/_mock/contactInfo";
import { usePathname } from "next/navigation";

const BoxSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  py: 2,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const NeedHelpSection = styled(Box)(({ theme }) => ({
  position: "fixed",
  alignItems: "center",
  backgroundColor: "#25d366",
  color: "#fff",
  borderRadius: "40px 40px",
  bottom: "2em",
  zIndex: "1",
  // boxShadow: "0 4px 12px 0 rgb(0 0 0 / 15 %)",
  cursor: "pointer",
  display: "flex",
  height: 60,
  width: 60,
  justifyContent: "center",
  right: "1rem",
}));

export default function MainFooter2() {
  const {
    facebookLink,
    instagramLink,
    youtubeLink,
    twitterLink,
    linkedinLink,
    pinterestLink,
  } = SocialLink;
  //   const pathname = usePathname();

  //   const isHome = pathname === "/";

  const handlaEvent = () => {
    GtmEvent(`b_whatsapp_+91${whatsAppNumber}`);
  };
  return (
    <>
      <NeedHelpSection onClick={handlaEvent}>
        <Button
          href={`//api.whatsapp.com/send?phone=91${whatsAppNumber}`}
          target="_default"
        >
          <Iconify
            icon="logos:whatsapp-icon"
            sx={{ width: 30, height: 30, m: 0.5 }}
          />
        </Button>
      </NeedHelpSection>

      <BoxSection>
        <Grid
          container
          sx={{ minHeight: "25vh", py: 5, backgroundColor: "#385f96" }}
        >
          <Grid
            item
            xs={0}
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              pb: 3,
            }}
          >
            <LogoWhite sx={{ width: { xs: 150, md: 200 } }} />
          </Grid>
          <Grid
            item
            xs={100}
            md={6}
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item>
                <Button
                  href="/"
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"/about"}
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  About us
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"/contact"}
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Contact us
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"https://blog.impaac.org"}
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Blog
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"/faqs"}
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  FAQs
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"/terms-conditions"}
                  sx={{
                    color: "white",
                    px: 2,
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Terms
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                background: "#2e4f7e",
                mt: 3,
                p: 2,
                maxWidth: { md: "450px", xs: "90vw" },
                margin: "30px auto",
                my: 2,
                borderRadius: "40px",
              }}
            >
              <Grid item>
                <Button
                  href={facebookLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <FacebookIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={instagramLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <InstagramIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={youtubeLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <YouTubeIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={pinterestLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <PinterestIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={twitterLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <TwitterIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={linkedinLink}
                  sx={{ color: "white" }}
                  target="_blank"
                >
                  <LinkedInIcon sx={{ fontSize: "30px" }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={100}
            md={3}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Grid container display="block">
              <Grid item>
                <Button
                  href={"/how-it-works"}
                  sx={{
                    color: "white",
                    padding: "0",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  startIcon={<MenuBookIcon />}
                >
                  How it Works
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={"/fundraisers/new"}
                  sx={{
                    color: "white",
                    padding: "0",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  startIcon={<HandshakeIcon />}
                >
                  Create a Fundraiser
                </Button>
              </Grid>
            </Grid>
            <Grid container display="block" sx={{ mt: 2 }}>
              <Grid item>
                <Button
                  href={`tel:${callNumber}`}
                  sx={{
                    color: "white",
                    padding: "0",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  startIcon={<CallIcon />}
                >
                  Call Us : {callNumber}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href="mailto:connect@impaac.org"
                  sx={{
                    color: "white",
                    padding: "0",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  startIcon={<MailIcon />}
                >
                  Email :&nbsp;{" "}
                  <span style={{ textTransform: "lowercase" }}>
                    connect@impaac.org
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxSection>
      <Grid
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          background: "#2e4f7e",
          p: 2,
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "white" }}>
          © 2024 Impaac Foundation. All rights reserved &nbsp;|
          <Button
            href={"/privacy-policy"}
            sx={{
              margin: "auto",
              color: "#1BB0CE",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Privacy Policy
          </Button>
        </Typography>
      </Grid>
    </>
  );
}
