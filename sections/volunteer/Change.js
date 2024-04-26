import * as React from "react";
import {
  Stack,
  Card,
  Typography,
  Box,
  Grid,
  Container,
  Fade,
} from "@mui/material";
import { m } from "framer-motion";
import Image from "next/image";
import donors from "./catalogue_Pic/15.png";
import useResponsive from "@/hooks/useResponsive";

export default function Change() {
  const isMobile = useResponsive("down", "md");
  return (
    <m.div
      initial={{ x: "-100%" }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { x: 0 },
      }}
    >
      <Container maxWidth={"lg"}>
        <Fade in timeout={1500}>
          <Grid
            container
            py={5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={5} md={5}>
              <Image
                src={donors}
                height={isMobile ? 350 : 550}
                sx={{ flex: { xs: 0.5, sm: 0.3, md: 0.4 } }}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <Box
                sx={{
                  width: "100%",
                  flex: { xs: 0.2, sm: 0.7, md: 0.6 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 30, sm: 40, md: 60 },
                      fontWeight: 700,
                      textAlign: "center",
                      color: "rgb(57,127,183)",
                    }}
                  >
                    Explore Our Volunteer Programs
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ textAlign: "center", color: "gray", fontSize: 20 }}
                  >
                    Our volunteer programs cater to a wide range of interests
                    and skills:
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </m.div>
  );
}
