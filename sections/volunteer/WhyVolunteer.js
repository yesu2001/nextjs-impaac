import { Typography, Grid, Container, Box, Fade } from "@mui/material";
import { m } from "framer-motion";
import useSettings from "../../hooks/useSettings";
import Image from "next/image";
import whyImage from "./catalogue_Pic/21.webp";
import volunteer from "./catalogue_Pic/volunteer.webp";

export default function WhyVolunteer() {
  const { themeStretch } = useSettings();

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
      <Container maxWidth={themeStretch ? false : "lg"}>
        <Fade in timeout={1500}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              px: { xs: 2, sm: 10 },
              my: 6,
              height: { xs: "50vh", sm: "50vh", md: "70vh" },
              width: "100%",
            }}
          >
            <Image
              src={volunteer}
              alt={volunteer}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <Typography
              variant="h2"
              color={"#397FB7"}
              sx={{
                zIndex: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: { xs: 60, sm: 80 },
                width: { xs: "100%", sm: "70%" },
                textAlign: { xs: "center", sm: "center" },
              }}
            >
              Why Volunteer with Impaac Foundation?
            </Typography>
          </Box>
        </Fade>
      </Container>
    </m.div>
  );
}
