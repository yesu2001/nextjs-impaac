import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack, TextField, Typography } from '@mui/material';
import MyAvatar from '../MyAvatar';
import Iconify from '../Iconify';
import pic1 from '../../assets/illustration_motivation';

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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
      <CardMedia component="img" height="194" image={pic1} alt="post" sx={{ margin: '0 auto', width: 'fit-content' }} />
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

// <List disablePadding>
//   {comments?.map((comment) => (
//     <Stack spacing={1.5} sx={{ mt: 3 }}>
//       <CommentItem key={comment?._id} commentItem={comment} />
//     </Stack>
//   ))}
// </List>

function NoPost() {
  return (
    <Typography variant="h4" sx={{ textAlign: 'center', color: 'darkgrey' }}>
      No Posts - Create One!
    </Typography>
  );
}
