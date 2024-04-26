import PropTypes from "prop-types";
import Image from "next/image";
import { useRef, useState } from "react";
// @mui
import {
  Avatar,
  Stack,
  Box,
  Divider,
  ListItem,
  Pagination,
  Typography,
  Modal,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
// utils
import { fShortenNumber } from "@/utils/formatNumber";
// components
import PopUp from "@/components/PopUp";
import { createLikeHelper, deleteLikeHelper } from "@/helper/like";
// import { refreshCampaign } from '../../../redux/slices/campaign';
// import { useDispatch } from '../../../redux/store';
import CampaignSharePopup from "./CampaignSharePopup";
import donateIcon from "@/assets/donateicon.png";
import shareIcon from "@/assets/shareicon.png";
import commentIcon from "@/assets/commenticon.png";
import likeIcon from "@/assets/hearticon.png";
import HeartIcon from "@/assets/heartIcon.gif";
import checkedLikeIcon from "@/assets/checkedlike.png";

// ----------------------------------------------------------------------

CampaignViewTags.propTypes = {
  campaign: PropTypes.object.isRequired,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "300px", lg: "450px", xl: "550px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
};

export default function CampaignViewTags({ campaign, donorList, commentList }) {
  const [open, setOpen] = useState(false);
  const commentInputRef = useRef(null);
  const { _id, likes, comments, favoritePerson, donors } = campaign;

  const handleClickComment = () => {
    commentInputRef.current?.focus();
  };

  const like = JSON.parse(localStorage.getItem("like"))
    ? JSON.parse(localStorage.getItem("like"))
    : [];

  const [hasLiked, setHasLiked] = useState(false);

  let likeSort = !!like.includes(_id);

  const likeFlat = like.flat();
  likeFlat.push(_id);

  const deleteLike = () => {
    const newLike = like.filter((item) => item !== _id);
    localStorage.setItem("like", JSON.stringify(newLike));
  };

  const handleButtonClick = async () => {
    if (!hasLiked && !likeSort) {
      createLikeHelper(_id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("like", JSON.stringify(likeFlat));
          setHasLiked(true);
          // dispatch(refreshCampaign());
        }
      });
    } else {
      deleteLikeHelper(_id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          deleteLike();
          // dispatch(refreshCampaign());
        }
      });
      setHasLiked(false);
      likeSort = false;
    }
  };

  const handleShowShare = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
        ml: 1,
        mr: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* like feature */}
        <FormControlLabel
          control={
            <Checkbox
              value={like}
              checked={likeSort ? true : hasLiked}
              onChange={handleButtonClick}
              icon={
                <Image
                  src={HeartIcon}
                  alt="like"
                  width={30}
                  height={30}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              }
              checkedIcon={
                <Image
                  src={checkedLikeIcon}
                  alt="checkedIcon"
                  width={30}
                  height={30}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              }
            />
          }
          label={fShortenNumber(likes)}
        />
        {/* comment feature */}
        <FormControlLabel
          control={
            <a href="#comments" style={{ color: "#6c757d" }}>
              <Image
                src={commentIcon}
                alt="comment"
                width={30}
                height={30}
                style={{
                  width: "30px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
            </a>
          }
          label={fShortenNumber(commentList?.length)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* donate count */}
        <FormControlLabel
          control={
            <a href="#donorList" style={{ color: "#6c757d", marginRight: 4 }}>
              <Image
                src={donateIcon}
                alt="donateIcon"
                width={30}
                height={30}
                style={{ width: "30px", borderRadius: "50%" }}
              />
            </a>
          }
          label={donorList?.length}
        />

        <Box
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={handleShowShare}
        >
          <FormControlLabel
            control={
              <a style={{ color: "#6c757d" }}>
                <Image
                  src={shareIcon}
                  alt="Share"
                  width={30}
                  height={30}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
              </a>
            }
            label="Share"
          />
        </Box>
      </Box>
      <PopUp open={open} onClose={handleClose}>
        <CampaignSharePopup campaign={campaign} sx={{ p: 3 }} />
      </PopUp>
    </Box>
  );
}
