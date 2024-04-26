import React, { useState, useEffect } from "react";
import { Box, Typography, styled, Dialog, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useAuth from "../../../hooks/useAuth";
import { getUserCampaignMonthlyStatsHelper } from "../../../helper/user";
import { getPercentage } from "../../../utils/getPercentage";
import promo1 from "../../../assets/promo1.webp";
import promo2 from "../../../assets/promo2.webp";
// import claimGiftPic from "../../../assets/claimGift.png";
import Image from "next/image";
// import giftBoxPic from "../../../assets/giftBox.png";
// import giftOpenPic from "../../../assets/giftopen.webp";
// ----------------------------------------------------------------
const ProgressBar = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "30px",
  backgroundColor: "#ddd",
  borderRadius: "15px",
  overflow: "hidden",
}));

const Progress = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "10px",
  height: "100%",
  backgroundColor: "#00B67A",
  borderRadius: "15px",
  transition: "width 3s ease-in",
  color: "white",
}));

// ----------------------------------------------------------------

function CampaignPromotion() {
  const [stats, setStats] = useState();
  const { user } = useAuth();

  const targetAmount = 100000;
  const remainingAmount = targetAmount - (stats?.total_collect_amount || 0);

  const percentage = getPercentage(stats?.total_collect_amount, targetAmount);

  useEffect(() => {
    preload();
  }, []);

  const preload = async () => {
    try {
      const result = await getUserCampaignMonthlyStatsHelper(
        user.id,
        user.token
      );
      setStats(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        background: `linear-gradient(to right, #C22554, #3533CD)`,
        borderRadius: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={stats?.total_total_collect_amount > 20000 ? promo1 : promo2}
          alt="promotion"
          height={100}
          style={{ width: 500 }}
        />
      </Box>
      <Box sx={{ mt: 4, mx: { md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,
            color: "#00B67A",
          }}
        >
          <Typography variant="h4">
            ₹ {stats?.total_collect_amount?.toLocaleString() || 0} Raised
          </Typography>
          <Typography variant="h4">₹ 1,00,000</Typography>
        </Box>
        <div>
          <ProgressBar>
            <Progress sx={{ width: `${percentage || 0}%` }}>
              {percentage || 0}%
            </Progress>
          </ProgressBar>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,
            color: "white",
          }}
        >
          <Typography variant="subtitle2">
            ₹ {remainingAmount.toLocaleString() || targetAmount} Remaining
          </Typography>
          <Typography variant="subtitle2">
            {stats?.total_day_left} Days left
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CampaignPromotion;
