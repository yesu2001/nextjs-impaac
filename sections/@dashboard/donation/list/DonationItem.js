import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {
  Box,
  Button,
  Card,
  Modal,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { getCampaignHelper } from "@/helper/campaign";
import { orgLegalDetails } from "@/_mock/legalDoc";
import Payment80Gform from "@/sections/campaign/campaign-payment/Payment80Gform";
import DonationPDF from "../details/DonationPDF";
import defaultImage from "/assets/no_image1 (2).jpg";

// ----------------------------------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 1,
  boxShadow: 24,
  outline: "none",
  p: 2,
};

const MenuButton = {
  fontSize: 16,
  m: 0,
  p: 0,
  fontWeight: "normal",
  color: "black",
  "&:hover": { background: "transparent" },
};
// -----------------------------------------------------------------------

export default function DonationItem({ donation, user }) {
  const {
    sent,
    name,
    _id,
    donor_id,
    createdAt,
    currency_code: currencyCode,
    amount,
    isAnonymous,
    campaign,
    pancard,
    address,
    email,
    amount_in_inr,
  } = donation;

  const [campaignData, setCampaignData] = useState({});

  useEffect(() => {
    async function fetchCampaign() {
      const data = await getCampaignHelper(campaign?._id);
      setCampaignData(data);
    }

    fetchCampaign();
  }, []);

  const selectedDonation = {
    donor_id,
    name,
    amount,
    _id,
    email,
    createdAt,
    pancard,
    address,
    orgPanCard: orgLegalDetails.panNo,
    orgEightyG: orgLegalDetails.eightyG,
    orgTwelveA: orgLegalDetails.twelveA,
    orgAddress: orgLegalDetails.address,
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const date = new Date(createdAt);
  const donationDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const navigateToCampaign = () => {
    window.location.replace(
      `${window.location.origin}/fundraisers/${donation?.campaign?.title
        .split(" ")
        .join("-")}/${donation?.campaign?._id}`
    );
  };

  const campaignImage = () => {
    const image = campaignData?.gallery?.filter(
      (item) => item.media_type === "image"
    );
    return image;
  };

  const campaignPic = campaignImage();

  return (
    <Card
      sx={{ borderRadius: 1, my: 2, display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ display: "flex", gap: 3, p: 2, px: 4 }}>
        <Image
          alt={"campaign pic"}
          src={campaignPic?.[0]?.preview || defaultImage}
          width={70}
          height={70}
          style={{ borderRadius: "8px", width: 100, height: 100, mr: 1 }}
        />
        <Box sx={{ flex: 1, gap: 2 }}>
          <Typography variant="body2" sx={{ color: "#385F96" }}>
            You have donated &#x20b9; {amount_in_inr}
          </Typography>
          <Typography variant="h6">
            {campaign?.title.substring(0, 50)}
            {campaign?.title.length >= 50 ? "..." : null}
          </Typography>
          <Typography variant="body2" color={"gray"}>
            {campaignData?.user?.name}
          </Typography>
          {campaignData?.category &&
            campaignData?.category !== "nocategory" && (
              <Typography
                variant="caption"
                sx={{
                  py: 0.5,
                  px: 1,
                  borderRadius: 2,
                  backgroundColor: "#e8f4f8",
                  textTransform: "capitalize",
                }}
              >
                {!campaignData?.category ||
                campaignData?.category === "nocategory"
                  ? ""
                  : campaignData?.category}
              </Typography>
            )}
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #D8D8D8",
          pl: 3,
          pr: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 12 }}>{donationDate}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button onClick={navigateToCampaign}>Donate more</Button>
          {currencyCode === "INR" && (
            <IconButton
              aria-label="more"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ display: "flex", alignItems: "center", p: 1 }}
            >
              <MoreVertIcon />
            </IconButton>
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleOpen}>Update Tax Info</MenuItem>
            <MenuItem disabled={!donation?.isTaxExemption}>
              {donation?.isTaxExemption ? (
                <PDFDownloadLink
                  document={<DonationPDF donation={donation} />}
                  fileName="EightyG Invoice.pdf"
                >
                  {({ loading }) =>
                    loading ? (
                      <div>Loading document...</div>
                    ) : (
                      <Button sx={MenuButton}>Download Invoice</Button>
                    )
                  }
                </PDFDownloadLink>
              ) : (
                <Button sx={MenuButton}>Download Invoice</Button>
              )}
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {show && (
        <UpdateInvoice
          open={show}
          handleClose={handleClose}
          donation={selectedDonation}
          user={user}
          row={donation}
        />
      )}
    </Card>
  );
}

function UpdateInvoice({ open, handleClose, row, user, donation }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        ".css-7355d1-MuiBackdrop-root-MuiModal-backdrop": {
          background: "rgba(0,0,0,0.8)",
        },
      }}
    >
      <Payment80Gform
        style={style}
        donor={row}
        donorId={row.donor_id}
        user={user}
        donation={donation}
        handleClose={handleClose}
      />
    </Modal>
  );
}
