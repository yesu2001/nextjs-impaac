import {
  Box,
  Button,
  Input,
  Stack,
  styled,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { green } from "@mui/material/colors";
// components

import LinearProgressBar from "@/components/LinearProgressBar";
// import { addAmount, addCurrency } from '../../../redux/slices/donation';
// import { useDispatch, useSelector } from '../../../redux/store';
import { fCurrency } from "@/utils/formatNumber";
import { getPercentage } from "@/utils/getPercentage";
import { currencies } from "@/_mock/currencies";
import PaymentPopUp from "../campaign-payment/PaymentPopUp";
import useResponsive from "@/hooks/useResponsive";
import CampaignViewSocialShare from "./CampaignViewSocialShare";

const DonateText = styled(Typography)(({ theme }) => ({
  ...theme.typography.donateText,
  margin: "5px",
  marginLeft: "0rem",
  letterSpacing: "-0.04rem",
  color: theme.palette.success.main,
  fontSize: "1.5rem",
}));

function CampaignViewPayment({ campaign, donorList }) {
  const [activeAmt, setActiveAmt] = useState(500);
  const [currency, setCurrency] = useState(currencies[0].code);

  const [openConfirm, setOpenConfirm] = useState(false);

  function addTotalAmount() {
    const donorAmount = donorList.map(
      (item) => item.amount_in_inr || item.amount
    );
    const totalAmount = donorAmount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return totalAmount + campaign?.total_collect_amount;
  }

  const overAllAmount = addTotalAmount();

  const smaCampaignAmount =
    campaign?.display_category === "sma"
      ? overAllAmount
      : campaign?.total_collect_amount;

  const percentage = getPercentage(smaCampaignAmount, campaign.target_amount);

  const isMobile = useResponsive("down", "md");

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const changeAmount = (value) => {
    // dispatch(addAmount(value));
    setActiveAmt(value);
  };
  const changeCurrency = (value) => {
    setCurrency(value);
    // dispatch(addCurrency(value));
  };

  return (
    <Box
      sx={{
        mt: { xs: 5, md: 0 },
        pl: { md: "2rem", xs: "0px" },
        pr: { xs: "0px", md: "0" },
      }}
    >
      <Box>
        <Box sx={{ my: { md: 8, sm: 4 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              mb: "5px",
            }}
          >
            <DonateText variant="h2" sx={{ color: green[500] }}>
              ₹
              {fCurrency(
                campaign?.display_category === "sma"
                  ? overAllAmount
                  : campaign?.total_collect_amount || "0"
              )}
            </DonateText>
            <Typography variant="h5" sx={{ color: "#525946" }}>
              Raised of ₹{fCurrency(campaign.target_amount)}
            </Typography>
          </Box>
          <LinearProgressBar value={percentage > 20 ? percentage : 20} />
          <Stack
            direction="row"
            sx={{
              mx: 1,
              my: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2">{percentage}% Funded</Typography>
            <Typography variant="subtitle2">
              {donorList?.length} Donors
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              mt: 5,
            }}
          >
            {!isMobile && (
              <Button
                id="campaignview_page_donatenow_btn"
                variant="contained"
                disabled={campaign?.status === "deleted"}
                size="large"
                onClick={handleOpenConfirm}
                sx={{ width: "90%" }}
              >
                DONATE NOW
              </Button>
            )}
            <CampaignViewSocialShare campaign={campaign} />
          </Stack>
        </Box>
      </Box>
      <PaymentPopUp
        open={openConfirm}
        onClose={handleCloseConfirm}
        campaign={campaign}
      />
    </Box>
  );
}

export default CampaignViewPayment;
