import React from "react";
import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardHeader,
  Stack,
  IconButton,
  Modal,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
// components
import Iconify from "../Iconify";
import { FormProvider, RHFTextField } from "../hook-form";
import useAuth from "../../hooks/useAuth";
import NgoEditPopup from "../../sections/@dashboard/ngo/create/NgoEditModel";
import UserEditModel from "../../sections/@dashboard/user/create/UserEditModel";

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileSocialInfo.propTypes = {
  profile: PropTypes.object,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ProfileSocialInfo({ profile, ngo }) {
  const { user, ngoProfile } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const socialLinks = profile?.social_media || profile?.social_links;
  const isNgo = profile?.user_role?.ngo;

  const SOCIALS = [
    {
      name: "Linkedin",
      icon: <IconStyle icon={"eva:linkedin-fill"} color="#006097" />,
      href: socialLinks?.linkedin,
    },
    {
      name: "Twitter",
      icon: <IconStyle icon={"eva:twitter-fill"} color="#1C9CEA" />,
      href: socialLinks?.twitter,
    },
    {
      name: "Instagram",
      icon: <IconStyle icon={"ant-design:instagram-filled"} color="#D7336D" />,
      href: socialLinks?.instagram,
    },
    {
      name: "Facebook",
      icon: <IconStyle icon={"eva:facebook-fill"} color="#1877F2" />,
      href: socialLinks?.facebook,
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title="Social"
        action={
          <IconButton aria-label="settings" onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        }
      />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOCIALS.map((link) => (
          <Stack key={link.name} direction="row" alignItems="center">
            {link.icon}
            {link.href ? (
              <a
                href={link.href}
                rel="noopener"
                style={{ color: "black", textDecoration: "none" }}
              >
                {link.href}
              </a>
            ) : (
              <Typography variant="caption" sx={{ color: grey[500] }}>
                Click on edit icon to update the link
              </Typography>
            )}
          </Stack>
        ))}
      </Stack>
      {isNgo ? (
        <NgoEditPopup
          open={open}
          handleClose={handleClose}
          ngo={ngo}
          profile={profile}
        >
          <Stack spacing={2} my={2}>
            <RHFTextField name="linkedin" label="Linkedin Link" />
            <RHFTextField name="facebook" label="Facebook Link" />
            <RHFTextField name="instagram" label="Instagram Link" />
            <RHFTextField name="twitter" label="Twitter Link" />
          </Stack>
        </NgoEditPopup>
      ) : (
        <UserEditModel open={open} handleClose={handleClose}>
          <Stack spacing={2} my={2}>
            <RHFTextField name="linkedin" label="Linkedin Link" />
            <RHFTextField name="facebook" label="Facebook Link" />
            <RHFTextField name="instagram" label="Instagram Link" />
            <RHFTextField name="twitter" label="Twitter Link" />
          </Stack>
        </UserEditModel>
      )}
    </Card>
  );
}
