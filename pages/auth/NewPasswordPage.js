"use client";
// @mui
import { Container, Stack, styled, Typography } from "@mui/material";
// sections
import Logo from "../../components/Logo";
import { NewPasswordForm } from "../../sections/auth/new-password";

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

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function NewPasswordPage() {
  return (
    <RootStyle>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="h4" gutterBottom>
                Reset Password
              </Typography>
            </Stack>
          </Stack>
          <NewPasswordForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
