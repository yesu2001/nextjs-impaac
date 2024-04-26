import * as React from "react";
import { Container, Box } from "@mui/material";
import { m } from "framer-motion";
import Image from "next/image";
import network from "./catalogue_Pic/6.webp";
import Title from "../../components/catalogue/Title";
import useResponsive from "@/hooks/useResponsive";

export default function CSRCollab() {
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
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Title
              text="Volunteering with Impaac Foundation offers numerous benefits:"
              sx={{
                color: "rgb(57,127,183)",
                width: "100%",
                textAlign: { xs: "center", sm: "center", md: "center" },
              }}
            />
          </Box>
          <Image src={network} height={isMobile ? 350 : 550} />
        </Box>
      </Container>
    </m.div>
  );
}
