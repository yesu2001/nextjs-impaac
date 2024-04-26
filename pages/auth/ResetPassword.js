"use client";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";
// sections
import { ResetPasswordForm } from "@/sections/auth/reset-password";
import Link from "next/link";
import LogoOnlyLayout from "@/layouts/LogoOnlyLayout";

// ----------------------------------------------------------------------

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

export default function ResetPassword() {
  return (
    <Box>
      <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Forgot your password?
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 5 }}>
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </Typography>

          <ResetPasswordForm />
          <Link href={"/login"}>
            <Button
              fullWidth
              size="large"
              // ={PATH_AUTH.login}
              sx={{ mt: 1 }}
            >
              Back
            </Button>
          </Link>
        </ContentStyle>
      </Container>
    </Box>
  );
}
