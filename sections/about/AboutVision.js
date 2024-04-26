"use client";
import Image from "next/image";
// @mui
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
// components
import { Self, Dedication, Focused } from "./AboutImages";

// ----------------------------------------------------------------------

const slides = [
  {
    img: Self,
    heading: "Selfless Purpose",
    para: "Impaac is selflessly working for the welfare of the society and its people with no materialistic intentions. Our primary aim is to help anyone and everyone to whatever extent possible. Impaac focusses to satisfy and empower people in all their needs with unselfish motives.",
  },
  {
    img: Dedication,
    heading: "Dedication and Determination",
    para: "We, with our everlasting determination to serve the society are building a world where no one is at stake due to lack of adequate help and resources. We tend to provide 24*7 assistance to the needy for their growth and welfare by all sorts of technical and ground help.",
  },
  {
    img: Focused,
    heading: "Focussed Areas",
    para: "Impaac focusses on People, Pet and Planet. We aim to see a poverty free world where every living being will have an equal share of basic necessities like education, medical treatment, good food, clean water, fresh air, eco-friendly society and safe world for pet animals.",
  },
];

export default function AboutVision() {
  return (
    <Box sx={{ py: 6, background: "#f2f2f2" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 2, letterSpacing: "-1px" }}
          >
            More Reasons To Love Impaac
          </Typography>
          <Divider
            sx={{
              backgroundColor: "steelblue",
              width: "60px",
              height: "3px",
              margin: "auto",
              mb: 7,
            }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        {slides.map((slide) => (
          <Grid
            item
            sx={{
              width: { md: "25%", xs: "90%" },
              textAlign: "center",
              px: 1.4,
              py: 2,
              background: "#fff",
              m: 1,
            }}
          >
            <Image
              alt={slide.heading}
              src={slide.img}
              objectFit="contain"
              height={170}
              style={{ width: "140px", margin: "auto" }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "35px",
                fontWeight: "bold",
                color: "#113568",
              }}
            >
              {slide.heading}
            </Typography>
            <Typography>{slide.para}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
