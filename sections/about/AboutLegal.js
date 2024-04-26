"use client";
import { m } from "framer-motion";
// @mui
import { Box, Container, Grid, Typography, Link } from "@mui/material";
// components
import { MotionViewport, varFade } from "@/components/animate";
import { legalDoc } from "../../_mock/legalDoc";

// ----------------------------------------------------------------------

export default function AboutLegal() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Grid container justifyContent="flexStart">
          <Grid item xs={12} sm={8} sx={{ mb: 2 }}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3" sx={{ textAlign: "flexStart" }}>
                Legal & Financial Information
              </Typography>
            </m.div>
          </Grid>
          <li>
            Impaac is registered as IMPAAC IDEA FOUNDATION, (Not for Profit
            under Section 8 of the Companies Act 2013)
          </li>
          <li>
            Impaac Idea Foundation is registered u/s
            <Link href={legalDoc._12A} target="_blank" rel="noopener">
              {" "}
              12A{" "}
            </Link>
            of the Income Tax Act, 1961, and with the Director of Income Tax
            (Exemptions) u/s
            <Link href={legalDoc._80G} target="_blank" rel="noopener">
              {" "}
              80G{" "}
            </Link>
            , (Approval no. AAGCI2897EE2021201)
          </li>
          <li>
            <Link href={legalDoc.panCard} target="_blank" rel="noopener">
              Pan Card
            </Link>
          </li>
        </Grid>
      </Box>
      {/* <Grid container justifyContent="center">
                <Grid item xs={12} sm={8}>
                    <m.div variants={varFade().inUp}>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>
                            Our vision offering the best impact to society
                        </Typography>
                    </m.div>
                </Grid>
            </Grid> */}
    </Container>
  );
}
