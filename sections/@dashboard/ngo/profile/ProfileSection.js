import PropTypes from "prop-types";
// @mui
import { Grid, Stack } from "@mui/material";

import useResponsive from "../../../../hooks/useResponsive";

import {
  ProfileAbout,
  ProfileSocialInfo,
  ProfileCertificates,
  ProfilePosts,
  ProfileCreatePost,
  ProfileCampaigns,
} from "../../../../components/Profile";

// ----------------------------------------------------------------------

ProfileSection.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileSection({ profile, campaigns }) {
  const isMobile = useResponsive("down", "md");

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Stack spacing={3}>
          <ProfileAbout profile={profile} />
          <ProfileCertificates profile={profile} />
          <ProfileSocialInfo profile={profile} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={7}>
        <Stack spacing={3}>
          <ProfileCampaigns campaigns={campaigns} />
        </Stack>
      </Grid>
    </Grid>
  );
}
