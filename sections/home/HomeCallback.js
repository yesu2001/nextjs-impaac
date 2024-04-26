"use client";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import HomeCallBackDialog from "./HomeCallBackDialog";
import { Callback } from "./FeaturesPic";
import useResponsive from "@/hooks/useResponsive";

const Container = styled(Grid)(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

const LeftBox = styled(Grid)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "51%",
  },
}));

const RightBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    width: "49%",
    marginBottom: "0px",
  },
}));

export default function HomeCallBack() {
  const [open, setOpen] = useState(false);
  const isMobile = useResponsive("down", "sm");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        padding: "2rem 0rem",
        maxWidth: "4000px",
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      <Container
        container
        sx={{ flexDirection: { md: "row", xs: "column-reverse" } }}
      >
        <LeftBox item>
          <Typography variant="h2" sx={{ textAlign: "left" }}>
            Empower Change, <br /> Unleash CSR Synergy:{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "grey", mt: 2 }}>
            ✨Connect NGOs and Corporates effortlessly for maximum impact.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>📈</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                82% Increase in Funding
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🌐</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                5Lac+ Lives Impacted
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🌳</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                Clean Horizon: Planted 10K+ trees
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🏭</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                Reduced pollution by 40%.
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>📚</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                Education for All: 15 new schools,
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🧒</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                3K+ empowered children.
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🏥</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                Healthcare Access: New centers
              </h3>
            </ListItem>
            <ListItem>
              <ListItemIcon>🏢</ListItemIcon>
              <h3 sx={{ letterSpacing: "-0.04rem", fontWeight: "600" }}>
                Serving 50,000+ residents.
              </h3>
            </ListItem>
          </List>
          <h2 sx={{ letterSpacing: "-0.04rem", fontWeight: "600", mt: 2 }}>
            Why Choose Impaac?
          </h2>
          <Typography sx={{ marginTop: "10px", fontSize: "16px" }}>
            🤝 Seamless Collaboration | 📊 Transparent Impact Tracking | 🌍
            Global Network
          </Typography>
          <Typography sx={{ marginTop: "30px", fontSize: "16px" }}>
            Connect today for a future of positive change.
          </Typography>
          <Button
            href="/csr"
            variant="contained"
            size="small"
            id="b_home_page_csr_section"
            sx={{
              marginTop: { xs: "26px", md: "33px" },
              fontSize: "16px",
              borderRadius: 7,
              fontWeight: "500",
              width: "160px",
            }}
          >
            Know More!
          </Button>
        </LeftBox>
        <RightBox item>
          <Image
            src={Callback}
            alt="callback Image"
            height={isMobile ? 450 : 770}
            objectFit="cover"
            style={{ borderRadius: "8px", width: "95%" }}
          />
        </RightBox>
      </Container>
      <HomeCallBackDialog open={open} onClose={handleClose} />
    </div>
  );
}
