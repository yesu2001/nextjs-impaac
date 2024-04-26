"use client";
import { Campaign, Diversity1, Savings } from "@mui/icons-material";
import { Stack, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Connector = styled("div")(({ theme }) => ({
  minWidth: "30px",
  borderLeft: "2px solid #c9c6c6",
  marginLeft: "1.4rem",
  marginRight: "1.4rem",
  [theme.breakpoints.up("md")]: {
    minWidth: "50px",
    borderBottom: "2px solid #c9c6c6",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
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

const steps = [
  { title: "Create Campaign" },
  { title: "Share on social media" },
  { title: "Withdrawal at any point of time" },
];

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

export default function HowItWorksSteps() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        paddingTop: "1.7rem",
        paddingBottom: "2rem",
        marginBottom: "30px",
      }}
    >
      <Stack
        spacing={1}
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <Stepper
          sx={{ py: { md: "2rem", xs: "30px" } }}
          connector={<Connector />}
          orientation={isMobile ? "vertical" : ``}
        >
          {steps.map((label, index) => (
            <Step key={index} active sx={{ fontSize: "20px" }}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <h2 style={{ fontWeight: "600", letterSpacing: "-0.04rem" }}>
                  {label.title}
                </h2>
              </StepLabel>
              <StepContent>{label.description}</StepContent>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </div>
  );
}
