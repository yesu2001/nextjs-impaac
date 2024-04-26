import React from "react";
import { useSnackbar } from "notistack";
import Image from "next/image";
// MUI
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { paramCase } from "change-case";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";
import { blue } from "@mui/material/colors";
import { linkedin, whatsapp, instagram, facebook, twitter } from "@/assets";
import { DOMAIN } from "@/config";

const CopyLinkButton = styled(Button)(() => ({
  backgroundColor: blue[600],
  color: "white",
  ":hover": { background: blue[400] },
}));

function CampaignSharePopup({ campaign, sx }) {
  console.log(DOMAIN);
  const makeUrl = campaign.title ? paramCase(campaign?.title) : "";
  const shareLink = `${DOMAIN}/fundraisers/${makeUrl}/${campaign._id}`;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box sx={{ ...sx }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        my={1}
      >
        <WhatsappShareButton url={shareLink} title={campaign.title}>
          <Tooltip title="Share on Whatsapp">
            <Image
              src={whatsapp}
              alt="Whatsapp"
              width={35}
              height={55}
              style={{ width: "55px", borderRadius: "50%" }}
            />
          </Tooltip>
        </WhatsappShareButton>
        <FacebookShareButton
          url={shareLink}
          quote={campaign.title}
          className="m-1"
        >
          <Tooltip title="Share on Facebook">
            <Image
              src={facebook}
              alt="Facebook"
              width={35}
              height={50}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </Tooltip>
        </FacebookShareButton>
        <TwitterShareButton
          url={shareLink}
          title={campaign.title}
          className="m-1"
        >
          <Tooltip title="share on Twitter">
            <Image
              src={twitter}
              alt="Twitter"
              width={35}
              height={50}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </Tooltip>
        </TwitterShareButton>
        <InstapaperShareButton
          url={shareLink}
          title={campaign.title}
          className="m-1"
        >
          <Tooltip title="Share on Instagram">
            <Image
              src={instagram}
              alt="Instagram"
              width={35}
              height={50}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </Tooltip>
        </InstapaperShareButton>
        <LinkedinShareButton
          url={shareLink}
          title={campaign.title}
          className="m-1"
        >
          <Tooltip title="Share on Linkedin">
            <Image
              src={linkedin}
              alt="LinkedIn"
              width={35}
              height={50}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </Tooltip>
        </LinkedinShareButton>
      </Stack>

      <TextField
        fullWidth
        value={shareLink}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CopyLinkButton
                size="small"
                edge="end"
                onClick={() => {
                  navigator.clipboard.writeText(shareLink);
                  enqueueSnackbar("Copied!");
                }}
              >
                Copy link
              </CopyLinkButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ style: { fontSize: 18 } }}
        margin="dense"
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

export default CampaignSharePopup;
