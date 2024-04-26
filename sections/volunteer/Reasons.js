import { Typography, Container, Box, Grid } from "@mui/material";
import { m, AnimatePresence } from "framer-motion";
import useSettings from "../../hooks/useSettings";
import Image from "next/image";
import pic1 from "./catalogue_Pic/25.webp";
import pic2 from "./catalogue_Pic/26.webp";
import pic3 from "./catalogue_Pic/27.webp";
import useResponsive from "@/hooks/useResponsive";

export default function Reasons() {
  const { themeStretch } = useSettings();
  const isMobile = useResponsive("down", "md");

  function renderColor(item) {
    if (item === "Diverse Causes:") {
      return "#FFA100";
    }
    if (item === "Pan-India Presence:") {
      return "#FF4D69";
    }
    if (item === "Flexible Opportunities:") {
      return "#00C99F";
    }
  }

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      <AnimatePresence>
        <Grid
          container
          sx={{
            position: "relative",
            mt: { xs: 20 },
            height: { sm: "80vh", md: "80vh" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 10, sm: 4 },
          }}
        >
          {data.map((item) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={item.title}
              sx={{
                height: { xs: 250, sm: 300, md: "300px" },
                position: "relative",
                borderRadius: 3,
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: renderColor(item.title),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <m.div
                initial={{ opacity: 0 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                variants={{
                  visible: { opacity: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: -80, sm: -100, md: -150 },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.image}
                      height={isMobile ? 180 : 300}
                      // sx={{ width: { xs: "130px", sm: "130px", md: "200px" } }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ textAlign: { xs: "center", md: "center" } }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: { xs: "15px" }, textAlign: "inherit" }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>
    </Container>
  );
}

const data = [
  {
    image: pic3,
    title: "Diverse Causes:",
    content:
      "Choose from a myriad of sustainable goals, including education, healthcare, environmental sustainability, poverty alleviation, and more.",
  },
  {
    image: pic2,
    title: "Pan-India Presence:",
    content:
      " Our network of NGOs spans across the entire country, allowing volunteers to engage with local communities and make a difference where it's needed most.",
  },
  {
    image: pic1,
    title: "Flexible Opportunities:",
    content:
      "Whether you're an individual or a corporate team, we offer flexible volunteer opportunities tailored to your schedule and preferences.",
  },
];
