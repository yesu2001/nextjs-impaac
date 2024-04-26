"use client";
import { m } from "framer-motion";
import { Typography, Stack } from "@mui/material";
import { MotionViewport, varFade } from "@/components/animate";
import { Email, phoneNumberForCallBack } from "@/_mock/contactInfo";

export default function ContactDetails() {
  return (
    <Stack
      spacing={3}
      component={MotionViewport}
      sx={{
        borderRadius: 1,
        border: "1px solid #16141426",
        p: 3,
        py: { md: 7, xs: 3 },
        height: "inherit",
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="h5" sx={{ letterSpacing: "-0.04rem" }}>
          Mail Us -
        </Typography>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "-0.04rem", fontWeight: "500" }}
        >
          {Email}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h5" sx={{ letterSpacing: "-0.04rem" }}>
          Phone -
        </Typography>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "-0.04rem", fontWeight: "500" }}
        >
          {phoneNumberForCallBack}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h5" sx={{ letterSpacing: "-0.04rem" }}>
          Address
        </Typography>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "-0.04rem", fontWeight: "500" }}
        >
          Impaac Foundation - <br /> Royal enclave, Bengaluru- 560064, India
        </Typography>
      </m.div>
    </Stack>
  );
}
