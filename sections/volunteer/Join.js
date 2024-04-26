import * as React from "react";
import {
  Stack,
  Grid,
  Card,
  Typography,
  Box,
  Container,
  Fade,
} from "@mui/material";
import { m } from "framer-motion";
import Image from "next/image";
import network from "./catalogue_Pic/6.webp";
import useResponsive from "@/hooks/useResponsive";

export default function Join() {
  const isMobile = useResponsive("down", "sm");
  return (
    <m.div
      initial={{ x: "100%" }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { x: 0 },
      }}
    >
      <Container maxWidth={"lg"}>
        <Fade in timeout={1500}>
          <Box
            py={5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Image src={network} height={isMobile ? 350 : 550} />
              <Box
                sx={{
                  color: "rgb(57,127,183)",
                  width: "100%",
                  textAlign: { xs: "center", sm: "center", md: "center" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: 35, sm: 45, md: 60 } }}
                >
                  Joining our
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ lineHeight: 1, fontSize: { xs: 35, sm: 45, md: 60 } }}
                >
                  volunteer
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: 35, sm: 45, md: 60 } }}
                >
                  programs is simple:
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </m.div>
  );
}
