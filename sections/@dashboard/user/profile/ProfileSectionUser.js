import PropTypes from "prop-types";
// @mui
import { Grid, Stack } from "@mui/material";

import {
  ProfileAbout,
  ProfileCampaigns,
  ProfileSocialInfo,
} from "@/components/Profile";
// ----------------------------------------------------------------------

ProfileSectionUser.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileSectionUser({ profile, campaigns }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <ProfileAbout profile={profile} />
          <ProfileSocialInfo profile={profile} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <ProfileCampaigns profile={profile} campaigns={campaigns} />
        </Stack>
      </Grid>
    </Grid>
  );
}
