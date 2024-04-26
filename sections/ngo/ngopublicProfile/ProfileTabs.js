import React from 'react';
import { green } from '@mui/material/colors';
import { capitalCase } from 'change-case';
import { Button, Stack, Tab, Tabs, Typography, styled } from '@mui/material';
import SharePopup from '../../../components/SharePopup';

// ----------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  marginTop: 5,
  zIndex: 9,
  bottom: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

const FollowBtn = styled(Button)(({ theme }) => ({
  border: '1px solid lightgrey',
  borderRadius: '5px',
  color: 'grey',
  padding: '3px 7px',
}));

//   ----------------------------------------------------------------

function ProfileTabs({
  myProfile,
  ngoCampaigns,
  PROFILE_TABS,
  currentTab,
  setCurrentTab,
  onChangeTab,
  handleShareModal,
  openSocial,
  handleShareClose,
  handleFollow,
  follow,
}) {
  return (
    <TabsWrapperStyle>
      <Tabs
        allowScrollButtonsMobile
        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={onChangeTab}
      >
        {PROFILE_TABS.map((tab) => (
          <Tab disableRipple key={tab.value} value={tab.value} label={capitalCase(tab.value)} />
        ))}
      </Tabs>
      <Stack direction="row" spacing={2} sx={{ mx: 2, py: { xs: 1 } }} justifyContent="center" alignItems="center">
        {/* <Typography variant="body2" sx={{ textAlign: 'center', color: '#808080' }}>
          {myProfile?.followers?.length || 0} Followers
        </Typography> */}
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#808080' }}>
          {ngoCampaigns?.length} {ngoCampaigns?.length > 1 ? 'Campaigns' : 'Campaign'}
        </Typography>
        <Typography
          variant="body2"
          onClick={handleShareModal}
          sx={{ display: 'flex', alignItems: 'center', color: '#808080', cursor: 'pointer' }}
        >
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/material-outlined/808080/share.png"
            style={{ marginRight: '5px' }}
            alt="share"
          />
          Share
        </Typography>
        {/* {follow ? (
          <FollowBtn onClick={handleFollow}>Follow</FollowBtn>
        ) : (
          <Typography variant="text" onClick={handleFollow} sx={{ color: '#00d200', cursor: 'pointer' }}>
            Followed
          </Typography>
        )} */}
        <SharePopup
          title="Profile"
          open={openSocial}
          handleClose={handleShareClose}
          data={myProfile}
          isCampaign="false"
        />
      </Stack>
    </TabsWrapperStyle>
  );
}

export default ProfileTabs;
