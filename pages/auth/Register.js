"use client";
// import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Card, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// hooks
import useAuth from "@/hooks/useAuth";
import useResponsive from "@/hooks/useResponsive";
// routes
// import { PATH_AUTH } from "../../routes/paths";
// components
import Image from "@/components/Image";
import Logo from "@/components/Logo";
// import Page from "../../components/Page";
// sections
import { RegisterForm } from "@/sections/auth/register";
// import { seoPageData } from "../../_mock/seoPageData";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();

  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <RootStyle>
      <HeaderStyle>
        <Logo />
        {smUp && (
          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Already have an account? {""}
            <Link variant="subtitle2" href={"/login"}>
              Login
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {mdUp && (
        <SectionStyle>
          <Typography
            variant="h3"
            sx={{
              px: 5,
              mt: 10,
              mb: 5,
              fontWeight: "600",
              lineHeight: "-0.09rem",
            }}
          >
            Manage the campaign more effectively with Impaac
          </Typography>
          <Image
            visibleByDefault
            disabledEffect
            alt="register"
            src="/assets/illustrations/illustration_register.png"
          />
        </SectionStyle>
      )}

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Sign Up
              </Typography>
            </Box>
          </Box>
          <RegisterForm />
          {!smUp && (
            <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                variant="subtitle2"
                href={"/login"}
                // component={RouterLink}
              >
                Login
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
