"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  LinearProgress,
} from "@mui/material";
// hooks
import useResponsive from "@/hooks/useResponsive";
// utils
import { fPercent } from "@/utils/formatNumber";
// _mock_
import { _skills } from "@/_mock";
// components
import { MotionViewport, varFade } from "@/components/animate";
import { AboutHori, AboutVer } from "./AboutImages";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={2}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="Happy Girl #impaac"
                      src={AboutVer}
                      height={425}
                      style={{
                        borderRadius: "15px",
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="Save Earth #impaac"
                      src={AboutHori}
                      height={425}
                      style={{
                        borderRadius: "15px",
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                What is Impaac?
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "text.secondary"
                      : "common.white",
                }}
              >
                Impaac Foundation is a non-profit, technology-driven, social
                networking & charity platform which focuses on bridging the gap
                between the people who are looking for help & the people who are
                willing to help. <br />
                We are building a social community that depicts the values of
                social responsibility & help anyone, anywhere, anytime. We
                provide viable solutions to NGOs for different causes to run
                their system smoothly & effectively with non-profit intentions.
              </Typography>
            </m.div>

            <Box sx={{ my: 5 }}>
              {_skills.map((skill) => (
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ fontWeight: "600" }}>
                    {skill.label}
                  </Typography>
                  <Typography>{skill.tagline}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" },
        }}
      />
    </Box>
  );
}
