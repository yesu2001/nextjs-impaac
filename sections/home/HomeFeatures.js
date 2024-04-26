import { Divider, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import * as features_img from "./FeaturesPic";
import useResponsive from "@/hooks/useResponsive";

const features = [
  {
    image_source: features_img.Processing,
    feature_text: "No Service Fees",
  },
  {
    image_source: features_img.Coach1,
    feature_text: "Fundraising Coach",
  },
  {
    image_source: features_img.Extend_reach,
    feature_text: "Extend your Reach",
  },
  {
    image_source: features_img.Dashboard1,
    feature_text: "User-Friendly Dashboard",
  },

  {
    image_source: features_img.Campaign_setup,
    feature_text: "Simple campaign setup",
  },
  {
    image_source: features_img.Trustworthy1,
    feature_text: "1000% Trustworthy",
  },
  {
    image_source: features_img.Tax1,
    feature_text: "Tax Benefits",
  },
  {
    image_source: features_img.Payments1,
    feature_text: "All Payments Accepted",
  },
  {
    image_source: features_img.Support1,
    feature_text: "24/7 Support",
  },
  {
    image_source: features_img.NGOs1,
    feature_text: "1000+ NGOs",
  },
];

const FeatureContainer = styled(Grid)(() => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}));

const FeatureCard = styled(Grid)(({ theme }) => ({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  [theme.breakpoints.up("md")]: {
    width: "20%",
    margin: "0 0 40px",
  },
}));

export default function HomeFeatures() {
  const isMobile = useResponsive("down", "sm");
  return (
    <div
      style={{ padding: "2rem 0", background: "#fafafa", marginTop: "3rem" }}
    >
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        India's largest and most trusted giving platform
      </Typography>
      <Divider
        sx={{
          backgroundColor: "steelblue",
          width: "50px",
          height: "5px",
          margin: "auto",
          mb: 4,
        }}
      />
      <FeatureContainer container maxwidth={"lg"}>
        {features.map((feature, index) => (
          <FeatureCard item key={index}>
            <Image
              src={feature.image_source}
              alt={feature.feature_text}
              height={isMobile ? 70 : 100}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography sx={{ textAlign: "center" }}>
              {feature.feature_text}
            </Typography>
          </FeatureCard>
        ))}
      </FeatureContainer>
    </div>
  );
}
