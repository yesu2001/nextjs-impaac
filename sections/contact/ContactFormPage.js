"use client";
import { m } from "framer-motion";
// @mui
import { Stack } from "@mui/material";
// components
import { MotionViewport, varFade } from "@/components/animate";
import ContactForm from "@/components/ContactForm";

// ----------------------------------------------------------------------

export default function ContactFormPage() {
  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <ContactForm />
      </m.div>
    </Stack>
  );
}
