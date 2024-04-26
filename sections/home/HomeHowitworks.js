"use client";
import { Campaign, Diversity1, Savings } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import "./customcss.css";

const Connector = styled("div")(({ theme }) => ({
  minHeight: "30px",
  borderLeft: "2px solid #e8e8e8",
  marginLeft: "1.4rem",
  [theme.breakpoints.up("md")]: {
    minHeight: "50px",
  },
}));

const ColorlibStepIconRoot = styled("div")(() => ({
  zIndex: "999",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  lineHeight: "44px",
  textAlign: "center",
  border: "2px solid #e8e8e8",
  borderRadius: "50%",
  fontSize: "18px",
  backgroundColor: "#fff",
  marginBottom: 0,
  transition: "all .25s cubic-bezier(.645,.045,.355,1)",
}));

function ColorlibStepIcon(props) {
  const { className } = props;

  const icons = {
    1: <Campaign />,
    2: <Diversity1 />,
    3: <Savings />,
  };

  return (
    <ColorlibStepIconRoot className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  { title: "Create Campaign" },
  { title: "Share on social media" },
  { title: "Withdrawal at any point of time" },
];

export default function HomeHowitworks() {
  return (
    <Box
      sx={{
        paddingTop: { md: "100px", xs: "40px" },
        paddingBottom: { md: "100px", xs: "40px" },
        background: "#fafafa",
      }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
      >
        How Impaac Works
      </Typography>
      <Divider
        sx={{
          backgroundColor: "steelblue",
          width: "50px",
          height: "5px",
          margin: "auto",
        }}
      />
      <Typography variant="body1" sx={{ textAlign: "center", m: 2 }}>
        3 Simple Steps for Free and Secure Fundraising
      </Typography>
      <Grid
        container
        sx={{
          pt: { md: 4, xs: 0 },
          flexDirection: { md: "row", xs: "column-reverse" },
        }}
      >
        <Grid item sx={{ width: { md: "40%", xs: "100%" } }}>
          <Stack
            spacing={1}
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Stepper
              sx={{ pt: { md: "2rem", xs: "30px" } }}
              connector={<Connector />}
              orientation="vertical"
            >
              {steps.map((label, index) => (
                <Step key={index} active sx={{ fontSize: "20px" }}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <h2
                      style={{ fontWeight: "600", letterSpacing: "-0.04rem" }}
                    >
                      {label.title}
                    </h2>
                  </StepLabel>
                  <StepContent>{label.description}</StepContent>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{ width: { md: "60%", xs: "100%" }, mt: { xs: "1rem" } }}
        >
          <div className="video-responsive">
            <ReactPlayer
              playing
              muted
              loop
              url="https://www.youtube.com/embed/l9-HvVlPkEc?autoplay=1&mute=1"
              width="100%"
              height="100%"
              className="iframe"
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
