"use client";
import {
  Box,
  Card,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import useResponsive from "@/hooks/useResponsive";
import HomeSearch from "./HomeSearch";
import {
  FILTER_CATEGORY_OPTIONS,
  FILTER_CATEGORY_MOBILE,
} from "@/_mock/campaignCategory";

const CardSection = styled(Card)(({ theme }) => ({
  width: 95,
  height: 110,
  margin: 0,
  color: "#5D5D5D",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  borderRadius: "8px",
  fontSize: "13px",
  [theme.breakpoints.up("md")]: {
    width: 110,
    height: 100,
  },
}));

const CardSelected = styled(Card)(({ theme }) => ({
  width: 90,
  height: 110,
  margin: 0,
  backgroundColor: "#405f8aef",
  color: "#fff",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  boxShadow: "steelblue 0px 1px 6px",
  flexDirection: "column-reverse",
  fontSize: "13px",
  [theme.breakpoints.up("md")]: {
    width: 110,
    height: 100,
  },
}));

export default function HomeSelectCategory() {
  const theme = useTheme();
  const { control } = useFormContext();

  const isDesktop = useResponsive("up", "md");

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          mt: "3rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", letterSpacing: "-0.09rem" }}
        >
          Latest Campaigns
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
          Explore and Donate for Mankind & Humanity
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ width: { md: "51%", xs: "100%" } }}>
            <HomeSearch />
          </Box>
        </Box>
        {isDesktop && (
          <Box
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 2,
              mx: "auto",
            }}
          >
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  sx={{
                    display: "grid",
                    gap: 0,
                    gridTemplateColumns: {
                      xs: "repeat(3, 1fr)",
                      sm: "repeat(5, 1fr)",
                      md: "repeat(5, 2fr)",
                      lg: "repeat(5, 2fr)",
                    },
                  }}
                  {...field}
                >
                  {FILTER_CATEGORY_OPTIONS.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={
                        <Radio
                          key={index}
                          value={item.value}
                          disableRipple
                          color="default"
                          sx={{
                            "&:hover": { bgcolor: "transparent" },
                          }}
                          icon={
                            <CardSection
                              sx={{
                                background: item.bg_color,
                                boxShadow: `${item.boxShadow} 0px 1px 4px`,
                              }}
                            >
                              {item.label}
                              <Box
                                component="img"
                                sx={{
                                  width: "50px",
                                  pb: "8px",
                                  maxHeight: { xs: 233, md: 50 },
                                  maxWidth: { xs: 350, md: 40 },
                                }}
                                alt={item.label}
                                src={item.src}
                              />
                            </CardSection>
                          }
                          checkedIcon={
                            <CardSelected variant="outlined">
                              {item.label}
                              <Box
                                component="img"
                                sx={{
                                  color: "#2065D1",
                                  width: "60px",
                                  pb: "8px",
                                  maxHeight: { xs: 233, md: 50 },
                                  maxWidth: { xs: 350, md: 40 },
                                }}
                                alt={item.label}
                                src={item.src}
                              />
                            </CardSelected>
                          }
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </Box>
        )}
        {!isDesktop && (
          <Box
            container
            sx={{ display: "flex", justifyContent: "center", py: 1, m: 0 }}
          >
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  row
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  {...field}
                >
                  {FILTER_CATEGORY_MOBILE.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      sx={{ marginLeft: "0", marginRight: 0 }}
                      control={
                        <Radio
                          key={index}
                          value={item.value}
                          disableRipple
                          color="default"
                          sx={{
                            "&:hover": { bgcolor: "transparent" },
                          }}
                          icon={
                            <Card
                              sx={{
                                borderRadius: "10px",
                                width: 130,
                                height: 40,
                                direction: "row",
                                textAlign: "center",
                                backgroundColor: "#fff",
                                color: "#5D5D5D",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {item.label}
                            </Card>
                          }
                          checkedIcon={
                            <Card
                              sx={{
                                borderRadius: "10px",
                                width: 130,
                                height: 40,
                                direction: "row",
                                textAlign: "center",
                                backgroundColor: theme.palette.primary.main,
                                color: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {item.label}
                            </Card>
                          }
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </Box>
        )}
      </Box>
    </div>
  );
}
