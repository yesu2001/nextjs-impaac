import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
// components
import { MotionContainer, TextAnimate, varFade } from "./animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme, bg, phoneBg }) => ({
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  height: 480,
  backgroundImage: `url(${bg})`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: 0,
    height: 490,
    backgroundImage: `url(${phoneBg})`,
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "80%",
  float: "right",
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
}));

// ----------------------------------------------------------------------

export default function CausesHero(props) {
  return (
    <RootStyle bg={props.bg} phoneBg={props.phoneBg}>
      <Container
        component={MotionContainer}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: { md: "center", xs: "center" },
          justifyContent: { md: "right", xs: "center" },
        }}
      >
        <ContentStyle>
          <Box
            sx={{
              display: "block",
              color: "#f3f1f1",
              letterSpacing: "-0.09rem",
              background: { xs: "#00000069", md: "#0000" },
              py: 1,
              borderRadius: "9px",
            }}
          >
            {props.heading.split(" ").map((word, index) => (
              <TextAnimate
                text={word}
                key={index}
                sx={{ mr: 1.2, fontSize: { md: "1rem", xs: "2.5rem" } }}
              />
            ))}
          </Box>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: "#f1f1f1",
                fontWeight: "fontWeightMedium",
                mt: 1.4,
                background: "#00000069",
                p: 1,
                width: "80%",
                borderRadius: "9px",
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              {props.para}
            </Typography>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
