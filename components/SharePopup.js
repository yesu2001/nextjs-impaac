import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";
import { useSnackbar } from "notistack";
import { blue } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";

import { whatsapp, linkedin, instagram, facebook, twitter } from "@/assets";

// ----------------------------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: 400,
    md: 400,
  },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

//   ----------------------------------------------------------------

function SharePopup({ title, open, handleClose, data, isCampaign }) {
  const makeUrl = isCampaign === "true" ? "fundraisers " : "ngo";
  const domain = isCampaign === "true" ? data?.title : data?.ngo_id;
  const quote = isCampaign === "true" ? data?.title : data?.displayN;
  const shareLink = `${process.env.REACT_APP_DOMAIN}/${makeUrl}/${domain}`;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2">Share {title}</Typography>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          my={3}
        >
          <WhatsappShareButton url={shareLink} title={"whatsapp"}>
            <Tooltip title="Share on Whatsapp">
              <img
                src={whatsapp}
                alt="Whatsapp"
                style={{ width: "55px", borderRadius: "50%" }}
              />
            </Tooltip>
          </WhatsappShareButton>
          <FacebookShareButton url={shareLink} quote={quote} className="m-1">
            <Tooltip title="Share on Facebook">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </Tooltip>
          </FacebookShareButton>
          <TwitterShareButton url={shareLink} title={quote} className="m-1">
            <Tooltip title="share on Twitter">
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </Tooltip>
          </TwitterShareButton>
          <InstapaperShareButton url={shareLink} title={quote} className="m-1">
            <Tooltip title="Share on Instagram">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </Tooltip>
          </InstapaperShareButton>
          <LinkedinShareButton url={shareLink} title={quote} className="m-1">
            <Tooltip title="Share on Linkedin">
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </Tooltip>
          </LinkedinShareButton>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            fullWidth
            value={shareLink}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      backgroundColor: blue[600],
                      color: "white",
                      "&:hover": {
                        backgroundColor: blue[300],
                      },
                    }}
                    size="small"
                    edge="end"
                    onClick={() => {
                      navigator.clipboard.writeText(shareLink);
                      enqueueSnackbar("Copied!");
                    }}
                  >
                    Copy link
                  </Button>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { fontSize: 18 } }}
            margin="dense"
            variant="outlined"
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default SharePopup;
