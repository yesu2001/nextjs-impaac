"use client";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import SlideFirst from "@/sections/campaign/campaign-create/SlideFirst";
import SlideTwo from "@/sections/campaign/campaign-create/SlideTwo";
import { getCampaignHelper } from "@/helper/campaign";
import useAuth from "@/hooks/useAuth";
import { useParams, usePathname } from "next/navigation";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  background: "#F3F6F9",
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function CampaignEdit() {
  const { user, isAuthenticated } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [campaign, setCampaign] = useState({});
  const pathname = usePathname();
  const isEdit = pathname.includes("edit");
  const { id } = useParams();

  useEffect(() => {
    preload();
  }, [id]);

  // Fetch Campaign
  const preload = () => {
    getCampaignHelper(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Campaign data", data);
        setCampaign((prevState) => ({
          ...prevState,
          campaignId: data?._id,
          beneficiaryName: data?.beneficiary_name,
          title: data?.title,
          description: data?.description,
          targetAmount: data?.target_amount,
          ytlink: data?.ytlink,
          imageURL: data?.imageURL,
          endDate: data?.end_date,
          areaCode: data?.pincode,
          category: data?.category,
          ngoName: data?.ngoName,
          location: data?.location,
          gallery: data?.gallery,
        }));
      }
    });
  };

  return (
    <RootStyle>
      <>
        {activeStep === 0 && campaign && (
          <SlideFirst
            isEdit={isEdit}
            currentCampaign={campaign}
            setCampaign={setCampaign}
            user={user}
            isAuthenticated={isAuthenticated}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 1 && campaign && (
          <SlideTwo
            isEdit={isEdit}
            currentCampaign={campaign}
            setCampaign={setCampaign}
            user={user}
            isAuthenticated={isAuthenticated}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        )}
      </>
    </RootStyle>
  );
}
