import * as React from "react";
import { Container, Stack, Grid, Fade, Typography, Box } from "@mui/material";
import { m } from "framer-motion";
import Image from "next/image";
import trust from "./catalogue_Pic/trust.png";
import LinkCard from "../../components/catalogue/LinkCard";
import Title from "../../components/catalogue/Title";
import pic1 from "./catalogue_Pic/28.webp";
import pic2 from "./catalogue_Pic/29.webp";
import pic3 from "./catalogue_Pic/30.webp";

export default function TrustedNgos() {
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
        <Grid
          container
          spacing={{ xs: 3, sm: 6, md: 3 }}
          sx={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            my: 5,
          }}
        >
          {data.map((item) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={3}
              key={item.title}
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                p: 3,
                my: 3,
                mx: 2,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={item.image} alt="hands image" height={300} />
              </Box>
              <Typography
                variant="h5"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 300, textAlign: "justify" }}
              >
                {item.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </m.div>
  );
}

const data = [
  {
    image: pic1,
    title: "Healthcare Outreach:",
    content:
      "Join medical camps, health awareness programs, and initiatives aimed at improving healthcare access in underserved communities.",
  },
  {
    image: pic2,
    title: "Environmental Sustainability:",
    content:
      "Participate in tree-planting drives, waste management projects, and initiatives to promote a greener, more sustainable environment.",
  },
  {
    image: pic3,
    title: "Education Initiatives:",
    content:
      "Participate in tree-planting drives, waste management projects, and initiatives to promote a greener, more sustainable environment.",
  },
];
