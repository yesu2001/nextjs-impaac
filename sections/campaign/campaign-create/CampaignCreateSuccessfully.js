import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { PixeEvent } from "../../../utils/facebookPixel";
import { GtmEvent } from "../../../utils/googleTagManager";
import CampaignSharePopup from "../campaign-view/CampaignSharePopup";

export default function CampaignCreateSuccessfully({
  campaign,
  confirmDialog,
}) {
  const [open, setOpen] = useState(confirmDialog);

  useEffect(() => {
    PixeEvent("p_campaign_create_successfully", campaign);
    GtmEvent("p_campaign_create_successfully", campaign);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        sx={{ position: "absolute", right: "0", top: "0", padding: "0" }}
      >
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center" sx={{ p: 2 }}>
          <Typography textAlign="center" variant="h4" sx={{ m: 1 }}>
            Congratulations!
          </Typography>
          <Typography sx={{ textAlign: "center", m: 2, width: "80%" }}>
            Your fundraiser is live. Share your fundraiser with friends and
            family on Social Media immediately
          </Typography>
          <CampaignSharePopup campaign={campaign} />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
