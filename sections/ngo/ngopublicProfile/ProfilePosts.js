import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  CardMedia,
  IconButton,
  Typography,
  Stack,
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MyAvatar from '../../../components/MyAvatar';
import Iconify from '../../../components/Iconify';

export default function ProfilePosts({ profile }) {
  const [posts, setPosts] = React.useState([1]);
  return (
    <Stack direction="column" spacing={2}>
      {posts.length ? <Post /> : <NoPost />}
    </Stack>
  );
}

function Post() {
  const [message, setMessage] = React.useState('');
  const commentInputRef = React.useRef(null);

  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    // if (!message) {
    //   return '';
    // }
    // if (!isAuthenticated) {
    //   handleOpenConfirm(true);
    // } else {
    //   createCommentHelper(_id, user.id, token, {
    //     comment: message,
    //   }).then((data) => {
    //     if (data.error) {
    //       console.log(data.error);
    //     } else {
    //       setMessage('');
    //       dispatch(refreshCampaign());
    //     }
    //   });
    // }
  };

  const handleChangeMessage = (value) => {
    setMessage(value);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        titleTypographyProps={{
          fontSize: 17,
        }}
        subheaderTypographyProps={{
          fontSize: 13,
        }}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish.
        </Typography>
      </CardContent>
      <CardMedia component="img" height="194" image="../../../../assets/illustration_motivation.js" alt="post image" />
      <CardActions sx={{ px: 2 }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardActions>
        <Stack direction="row" alignItems="center" sx={{ flex: 1, px: 2 }}>
          <MyAvatar />
          <TextField
            fullWidth
            onKeyUp={handleKeyUp}
            size="small"
            value={message}
            inputRef={commentInputRef}
            placeholder="Write a comment…"
            onChange={(event) => handleChangeMessage(event.target.value)}
            sx={{
              ml: 2,
              mr: 1,
              '& fieldset': {
                borderWidth: `1px !important`,
                borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
          <IconButton color="primary" disabled={!message} onClick={handleSubmit}>
            <Iconify icon={'ic:round-send'} width={24} height={24} />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}

function NoPost() {
  return (
    <Typography variant="h4" sx={{ textAlign: 'center', color: 'darkgrey' }}>
      No Posts - Create One!
    </Typography>
  );
}
