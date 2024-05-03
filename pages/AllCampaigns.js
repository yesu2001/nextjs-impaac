"use client";
import orderBy from "lodash/orderBy";
import { useEffect, useState } from "react";
// form
import { useForm } from "react-hook-form";
// @mui
import { Container, Stack, styled, Typography } from "@mui/material";
import axios from "@/utils/axios";
import { API } from "@/config";
// hooks
import useSettings from "@/hooks/useSettings";
// components
import { FormProvider } from "@/components/hook-form";
// sections
import {
  CampaignBoxFilterSidebar,
  CampaignBoxList,
  CampaignBoxSearch,
  CampaignBoxSort,
  CampaignBoxTagFiltered,
} from "@/sections/campaign/campaign-box";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function CampaignPage() {
  const { themeStretch } = useSettings();
  const [campaigns, setCampaigns] = useState([]);
  const [category, setCategory] = useState("all");
  const sortBy = null;
  const [openFilter, setOpenFilter] = useState(false);

  const filteredCampaigns = applyFilter(campaigns, sortBy, category);

  const defaultValues = {
    category,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, setValue } = methods;

  const values = watch();

  const isDefault = values.category === "All";

  useEffect(() => {
    if (category !== "All") {
      setValue("category", "All");
    }
    const fetchAllCampaigns = async () => {
      const response = await axios.get(`${API}/api/campaigns`);
      setCampaigns(response.data);
    };
    fetchAllCampaigns();
  }, []);

  useEffect(() => {
    setCategory(values.category);
  }, [values]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    reset();
    setValue("category", "All");
    handleCloseFilter();
  };

  return (
    <RootStyle>
      <Container maxWidth={themeStretch ? false : "lg"} sx={{ mb: 5 }}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          sx={{ my: 3 }}
        >
          <CampaignBoxSearch />

          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <FormProvider methods={methods}>
              <CampaignBoxFilterSidebar
                onResetAll={handleResetFilter}
                isOpen={openFilter}
                onOpen={handleOpenFilter}
                onClose={handleCloseFilter}
              />
            </FormProvider>

            {/* <CampaignBoxSort /> */}
          </Stack>
        </Stack>

        <Stack sx={{ mb: 3 }}>
          {!isDefault && (
            <>
              <Typography variant="body2" gutterBottom>
                <strong>{filteredCampaigns.length}+</strong>
                &nbsp;Campaign found
              </Typography>

              <CampaignBoxTagFiltered
                category={category}
                isShowReset={!isDefault && !openFilter}
                onResetAll={handleResetFilter}
              />
            </>
          )}
        </Stack>

        <CampaignBoxList
          campaigns={filteredCampaigns}
          loading={!campaigns.length && isDefault}
        />
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function applyFilter(campaigns, sortBy, category) {
  // SORT Campaign
  if (sortBy === "featured") {
    campaigns = orderBy(campaigns, ["total_collect_amount"], ["asc"]);
  }
  if (sortBy === "newest") {
    campaigns = orderBy(campaigns, ["createdAt"], ["desc"]);
  }
  // FILTER CAMPAIGNS

  if (category !== "All") {
    const filterCam = campaigns.filter(
      (campaign) => campaign.category === category
    );
    const nonFilterCam = campaigns.filter(
      (campaign) => campaign.category !== category
    );
    campaigns = [];
    campaigns = [...filterCam, ...nonFilterCam];
  }

  const filteredEightCamp = campaigns.slice(0, 8);
  const filteredNonEightCamp = campaigns.slice(8);

  const randomCam = filteredEightCamp
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return [...randomCam, ...filteredNonEightCamp];
}
