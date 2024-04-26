"use client";
import { Container } from "@mui/material";
import { HomeFeaturedCard } from "@/sections/home";
// import { useDispatch, useSelector } from "../../redux/store";

export default function Campaigns({ category }) {
  const campaigns = [];
  // const { campaigns, sortBy, filters } = useSelector((state) => state.campaign);
  const filteredHomeCampaigns = applyFilter(campaigns, { category });
  return (
    <Container>
      <HomeFeaturedCard
        title="Featured Campaigns"
        list={filteredHomeCampaigns}
      />
    </Container>
  );
}

function applyFilter(campaigns, filters) {
  // FILTER CAMPAIGNS
  if (filters.category !== "All") {
    const filterCam = campaigns?.filter(
      (campaign) => campaign.category === filters.category
    );
    const nonFilterCam = campaigns?.filter(
      (campaign) => campaign.category !== filters.category
    );

    const filteredEightCamp = filterCam.slice(0, 8);

    const randomCam = filteredEightCamp
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    campaigns = [];
    campaigns = [...randomCam, ...nonFilterCam];
  }

  if (filters.category === "home") {
    const camp = campaigns.filter(
      (campaign) => campaign.displaystatus === "home"
    );
    campaigns = camp;
  }
  const filteredEightCamp = campaigns.slice(0, 8);

  const randomCam = filteredEightCamp
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return randomCam;
}
