"use client";
import { useEffect, useState } from "react";
import { paramCase } from "change-case";
import PropTypes from "prop-types";
import Image from "next/image";
// mui
import { Box, Card, Link, Stack, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { fCurrency, fPercent2 } from "@/utils/formatNumber";
import Label from "./Label";
// Router
import { getPercentage } from "@/utils/getPercentage";
import LinearProgressBar from "./LinearProgressBar";
import { smaDonors } from "@/_mock/smaDonors";
import { getYouTubeThumbnail } from "@/utils/youtubethumbnail";
import defaultImage from "@/assets/no_image1 (2).jpg";

CampaignCard.propTypes = {
  campaign: PropTypes.object,
};

export default function CampaignCard({ campaign }) {
  const theme = useTheme();
  const [donorList, setDonorList] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [campaignAmount, setCampaignAmount] = useState(0);

  useEffect(() => {
    // merge supportes count with dummy donor count
    const mergedDonors =
      campaign?.display_category === "sma" && campaign._id in smaDonors
        ? supportersCount + smaDonors[campaign?._id].length
        : campaign?.supportersCount;
    setDonorList(mergedDonors);

    // calculate total Amount
    const smaCampaignAmount =
      campaign?.display_category === "sma"
        ? addTotalAmount()
        : campaign?.total_collect_amount;
    setCampaignAmount(smaCampaignAmount);

    // calculate the percentage
    const campaignPercentage = getPercentage(
      smaCampaignAmount,
      campaign.target_amount
    );
    setPercentage(campaignPercentage);
  }, [campaign]);

  function addTotalAmount() {
    const donorAmount = smaDonors[campaign?._id]?.map(
      (item) => item.amount_in_inr || item.amount
    );
    const totalAmount = donorAmount?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return totalAmount + campaign?.total_collect_amount;
  }

  const {
    title,
    ytlink,
    gallery,
    total_collect_amount: collectAmount,
    target_amount: targetAmount,
    supportersCount,
  } = campaign;

  function getCoverImage() {
    const firstImage = gallery.find((item) => item.media_type === "image");
    if (firstImage) {
      return firstImage.preview;
    }

    const firstVideo = gallery.find((item) => item.media_type === "youtube");
    if (firstVideo) {
      const videoImage = getYouTubeThumbnail(firstVideo.preview);
      return videoImage;
    }

    return null;
  }

  const imageCover = getCoverImage();

  return (
    <Link
      style={{ textDecoration: "none" }}
      href={`/fundraisers/${paramCase(campaign?.title)}/${campaign._id}`}
      color="inherit"
    >
      <Card sx={{ boxShadow: theme.customShadows.z8 }}>
        <Box sx={{ position: "relative", height: { xs: 340, md: 270 } }}>
          <Image alt={title} src={imageCover || defaultImage} fill="true" />
        </Box>
        <Stack
          sx={{
            background: "#fff",
            borderBottom: "1px solid #f3f3f3",
            width: "100%",
            p: "10px 6px",
            display: "flex",
            justifyContent: "space-between",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9,
          }}
          direction="row"
        >
          <Label
            sx={{
              textTransform: "capitalize",
              width: "30%",
              background: "#fff",
              color: "#6ec052",
            }}
          >
            Verified
            <CheckCircleIcon sx={{ fontSize: "16px", marginLeft: "3px" }} />
          </Label>

          <Label
            sx={{
              textTransform: "capitalize",
              width: "40%",
              background: "#fff",
              color: "grey",
            }}
          >
            Tax Benefit
            <AccountBalanceIcon sx={{ fontSize: "16px", marginLeft: "4px" }} />
          </Label>
        </Stack>
        <Stack
          sx={{ height: 55, pl: 1, pr: 1, m: "10px", overflow: "hidden" }}
          flexWrap="wrap"
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="subtitle2">
            {" "}
            {title?.substring(0, 90)}
          </Typography>
        </Stack>

        <Stack sx={{ p: "2px 16px", fontSize: "12px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ height: 28 }}
          >
            {campaign.total_collect_amount > 10000 && (
              <Typography variant="caption">
                ₹{fCurrency(campaignAmount || "0")} Raised
              </Typography>
            )}
            {percentage > 20 ? (
              <Label color="success">{fPercent2(percentage)}</Label>
            ) : (
              ""
            )}
          </Stack>
          <LinearProgressBar value={percentage > 20 ? percentage : 20} />

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ pt: 1, pb: 1 }}
          >
            <Stack>Goal - ₹{fCurrency(targetAmount)}</Stack>
            <Stack justifyContent="flex-end" alignItems="flex-end">
              {donorList} supportes
              {/* {campaign?.display_category === 'sma' ? donorList : supportersCount || 0} Supporters */}
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
}
