import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { m } from "framer-motion";
import useSettings from "../../hooks/useSettings";
import Image from "next/image";
import mission from "./catalogue_Pic/24.webp";
import LinkCard from "../../components/catalogue/LinkCard";
import Title from "../../components/catalogue/Title";

export default function Missionn() {
  const { themeStretch } = useSettings();

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Box sx={{ height: { xs: "auto", md: "70vh" } }}>
        <Container maxWidth={themeStretch ? false : "lg"}>
          <Grid
            container
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { md: 22 },
                  width: { sm: "95%", md: "80%" },
                  background: "#397FB7",
                  color: "#FFF",
                  p: 3,
                  borderRadius: 3,
                }}
              >
                At Impaac Foundation, we believe in the power of collective
                action to bring about positive change. Our volunteer programs
                provide individuals and corporates the opportunity to actively
                contribute to various sustainable goals across India. Join us in
                making a meaningful impact on society and the environment.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                alt={mission}
                src={mission}
                height={450}
                sx={{ width: { xs: "70%", sm: "90%" } }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </m.div>
  );
}
