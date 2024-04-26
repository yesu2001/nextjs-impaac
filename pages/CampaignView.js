"use client";
import React, { useEffect, useState } from "react";
// MUI
import { Container, styled, Box } from "@mui/material";
// Sections
import CampaignViewSection from "@/sections/campaign/campaign-view";
// Hooks
import useSettings from "@/hooks/useSettings";
// components
import CampaignCreateSuccessfully from "@/sections/campaign/campaign-create/CampaignCreateSuccessfully";
import useAuth from "@/hooks/useAuth";

// ======================================================

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ======================================================

export default function CampaignView({ campaign, donorList }) {
  const { user } = useAuth();
  const [isOwnCampaign, setIsOwnCampaign] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const { themeStretch } = useSettings();
  // const { state } = useLocation();
  // const location = useLocation();

  // useEffect(() => {
  //   getLongUrlHelper(location.pathname.substring(1)).then((data) => {
  //     if (data?.error) {
  //       console.log(data?.error);
  //       window.location.href = "/404";
  //     }
  //     window.location.href = data?.original_url;
  //   });
  // }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     // dispatch(startLoading());
  //     if (location.pathname.length >= 8) {
  //       preload();
  //       preloadList();
  //     }
  //   }, [isOwnCampaign]);

  // useEffect(() => {
  //   setConfirmDialog(state?.newCampaign);
  // }, [state]);

  useEffect(() => {
    const isCampaignNew = JSON.parse(localStorage.getItem("isCampaignNew"));
    if (isCampaignNew && isCampaignNew?.newCampaign) {
      setConfirmDialog(true);
      localStorage.removeItem("isCampaignNew");
    }
    if (campaign?.user?._id === user?.id && user?.id !== undefined) {
      setIsOwnCampaign(true);
    }
  }, [user?._id, campaign]);

  // Get Campaign Donor List
  //   const preloadList = () => {
  //     getCampaignListHelper(id).then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         setDonorList(data);
  //         // dispatch(stopLoading());
  //         setLoading(false);
  //       }
  //     });
  //   };

  //   // Fetch Campaign
  //   const preload = () => {
  //     getCampaignHelper(id).then(async (data) => {
  //       if (data.error) {
  //         console.log("error message", data.error);
  //       } else {
  //         setCampaign(data);
  //         // dispatch(stopLoading());
  //         setLoading(false);
  //         data?.gallery?.map(
  //           (img, index) => img.media_type === "image" && setImage(img.preview)
  //         );
  //       }
  //     });
  //   };

  const isNgo = user?.userType?.ngo;

  //   const MarkDownDesc = campaign?.description?.replace(/(<([^>]+)>)/gi, "");

  return (
    <Box>
      <RootStyle>
        <Container maxWidth={themeStretch ? false : "lg"}>
          <CampaignViewSection
            campaign={campaign}
            donorList={donorList}
            isOwnCampaign={isOwnCampaign}
            isNgo={isNgo}
          />
        </Container>
        {confirmDialog && (
          <CampaignCreateSuccessfully
            campaign={campaign}
            confirmDialog={confirmDialog}
          />
        )}
      </RootStyle>
    </Box>
  );
}
