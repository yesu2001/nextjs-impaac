import React from "react";
import { Box, Button, Card, Typography, styled } from "@mui/material";
import CampaignCard from "../CampaignCard";
import { SkeletonProductItem } from "../skeleton";
import Iconify from "../Iconify";
import { HomeFeaturedCard } from "@/sections/home";

const CreateCampaigncard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  textAlign: "center",
  cursor: "pointer",
  background: "#385F96",
}));

function ProfileCampaigns({ campaigns }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <CreateCampaigncard variant="outlined">
        <Button
          id="createcampaign_dashboard_btn"
          rel="noopener"
          href={"/fundraisers/new"}
          sx={{ color: "white", width: "100%" }}
        >
          <Iconify icon="eva:plus-circle-fill" sx={{ mr: 1 }} />
          Create Campaign
        </Button>
      </CreateCampaigncard>
      {campaigns.length < 1 && (
        <Typography variant="h6">No Campaigns created!</Typography>
      )}
      {campaigns?.length > 1 && (
        <HomeFeaturedCard list={campaigns} slides={2} sx={{ p: 0 }} />
      )}
      {campaigns?.length === 1 &&
        campaigns?.map((campaign, index) =>
          campaign ? (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ) : (
            <SkeletonProductItem key={index} />
          )
        )}
    </Box>
  );
}

export default ProfileCampaigns;
