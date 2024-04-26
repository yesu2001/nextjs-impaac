import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
// @mui
import {
  Avatar,
  Box,
  IconButton,
  List,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// utils
import { fDate } from "@/utils/formatTime";
// components
import Iconify from "@/components/Iconify";
import MyAvatar from "@/components/MyAvatar";
import { createCommentHelper, deleteCommentHelper } from "@/helper/comment";
import useAuth from "@/hooks/useAuth";
// import { refreshCampaign } from '../../../redux/slices/campaign';
// import { useDispatch } from '../../../redux/store';
import { getRandomSoftColor } from "@/utils/getRandomColor";
import RegisterAndLogin from "@/sections/auth/popupAuth/RegisterAndLogin";

// ----------------------------------------------------------------------

export default function CampaignViewCommentList({ campaign }) {
  const { _id, comments } = campaign;

  // const dispatch = useDispatch();

  const { user, token, isAuthenticated } = useAuth();

  const commentInputRef = useRef(null);

  const [message, setMessage] = useState("");

  const [commentError, setCommentError] = useState("");

  const [openConfirm, setOpenConfirm] = useState(false);

  useEffect(() => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if (message.match(urlRegex)) {
      setCommentError(
        "This message contains a prohibited URL. Please remove it."
      );
    } else {
      setCommentError("");
    }
  }, [message]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!message) {
      return "";
    }

    if (!isAuthenticated) {
      handleOpenConfirm(true);
    } else {
      createCommentHelper(_id, user.id, user.token, {
        comment: message,
      }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setMessage("");
          // dispatch(refreshCampaign());
        }
      });
    }
  };

  const handleChangeMessage = (value) => {
    setMessage(value);
  };

  return (
    <div>
      <Box sx={{ pt: 3, px: 2, pb: 5 }}>
        <Stack direction="row" alignItems="center">
          <MyAvatar
            sx={{ backgroundColor: getRandomSoftColor(), color: "white" }}
          />
          <TextField
            fullWidth
            onKeyUp={handleKeyUp}
            size="small"
            value={message}
            inputRef={commentInputRef}
            error={Boolean(commentError)}
            helperText={commentError}
            placeholder="Write a comment…"
            onChange={(event) => handleChangeMessage(event.target.value)}
            sx={{
              ml: 2,
              mr: 1,
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: (theme) =>
                  `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
          <IconButton
            color="primary"
            disabled={!message || commentError.length > 0}
            onClick={handleSubmit}
          >
            <Iconify icon={"ic:round-send"} width={24} height={24} />
          </IconButton>
        </Stack>

        <List disablePadding>
          {comments?.map((comment) => (
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <CommentItem key={comment?._id} commentItem={comment} />
            </Stack>
          ))}
        </List>
      </Box>
      <RegisterAndLogin open={openConfirm} onClose={handleCloseConfirm} />
    </div>
  );
}

// ----------------------------------------------------------------------

CommentItem.propTypes = {
  commentItem: PropTypes.object,
};

function CommentItem({ commentItem }) {
  // const dispatch = useDispatch();

  const { user, token } = useAuth();

  const { comment, createdAt, avatarUrl } = commentItem;

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    deleteCommentHelper(user.id, user.token, {
      commentId: commentItem._id,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Comment deleted!");
        // dispatch(refreshCampaign());
      }
    });
  };

  return (
    <Paper
      sx={{ display: "flex", gap: 2, p: 1, bgcolor: "background.neutral" }}
    >
      <Avatar
        alt={commentItem?.user?.name}
        sx={{
          flex: "none",
          backgroundColor: getRandomSoftColor(),
          color: "white",
        }}
      >
        {commentItem?.user?.name?.charAt(0).toUpperCase()}
      </Avatar>
      <Box
        sx={{
          flex: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={{ xs: 0, sm: 2, md: 2 }}
          alignItems={{ sm: "center" }}
          sx={{ mb: 0.5 }}
        >
          <Typography variant="subtitle2">
            {commentItem?.user?.name || "Deleted Account"}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            {fDate(createdAt)}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            wordWrap: "break-word",
            wordBreak: "break-all",
          }}
        >
          {comment}
        </Typography>
      </Box>
      {!(commentItem.user == null) && commentItem.user?._id === user?.id && (
        <Iconify
          width={10}
          height={10}
          icon={"eva:trash-2-outline"}
          color="#6c757d"
          onClick={handleDeleteComment}
          sx={{ cursor: "pointer", flex: "none" }}
        />
      )}
    </Paper>
  );
}
