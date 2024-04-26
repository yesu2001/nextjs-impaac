import { Typography, Container, Box, Fade } from "@mui/material";
import { m } from "framer-motion";
import useSettings from "../../hooks/useSettings";
import Image from "next/image";
import pebblesImage from "./catalogue_Pic/9.webp";
import useResponsive from "@/hooks/useResponsive";

export default function Programs() {
  const { themeStretch } = useSettings();
  const isMobile = useResponsive("down", "sm");

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
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {data.map((item) => (
                <Box key={item.title} sx={{ my: 2, width: "80%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: 20, sm: 30, md: 40 },
                      textAlign: { xs: "center", md: "left" },
                      color: "#397FB7",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: { xs: 15, sm: 18, md: 20 },
                      textAlign: { xs: "center", sm: "left" },
                      color: "#397FB7",
                    }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Image
              src={pebblesImage}
              alt="hands image"
              height={isMobile ? 350 : 550}
            />
          </Box>
        </Fade>
      </Container>
    </m.div>
  );
}

const data = [
  {
    title: "Individual Volunteers:",
    content:
      "Explore our website, choose a cause that resonates with you, and sign up for volunteer opportunities in your preferred location.",
  },
  {
    title: "Corporate Teams:",
    content:
      "Contact us to discuss customized volunteer programs for your team, aligned with your CSR goals and sustainable development priorities.",
  },
  {
    title: "Recognition:",
    content:
      "Volunteers are recognized for their efforts with certificates and tokens of appreciation, acknowledging their commitment to positive change.",
  },
];

//   {/* <Typography variant="h2" color={'#397FB7'}>
//     Why Volunteer with Impaac Foundation?
//   </Typography> */}
