import React, { useEffect, useState } from "react";
// @mui
import EditIcon from "@mui/icons-material/Edit";
import { Card, Container, IconButton } from "@mui/material";
// hooks
import useAuth from "@/hooks/useAuth";

// components
// import Image from '../../../components/Image';
// import Page from '../../../components/Page';
import {
  ProfileCampaigns,
  ProfileCover,
  ProfileNgoProgress,
} from "@/components/Profile";
// sections
import { ProfileSection } from "@/sections/@dashboard/ngo/profile";
// helper
import { getAllProfileCampaigns } from "@/helper/campaign";
import NgoImageEditModel from "@/sections/@dashboard/ngo/create/NgoImageEditModel";
import RegisterSuccess from "@/sections/auth/register/RegisterSuccess";
import "../style.css";

export default function NgoProfilePage() {
  const { user, ngoProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [profileCampaigns, setProfileCampaigns] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);

  useEffect(() => {
    console.log("NgoProfilePage", ngoProfile);
    setLoading(true);
    preload();
    checkIsNewUser();
  }, [user]);

  useEffect(() => {
    if (window.screen.width > 500) {
      window.scrollTo(0, 320);
    } else {
      window.scrollTo(0, 200);
    }
  }, []);

  const checkIsNewUser = () => {
    const isUserNew = localStorage.getItem("isNewUser");
    if (isUserNew === "true") {
      setOpenMessage(true);
    } else {
      setOpenMessage(false);
    }
  };

  const preload = async () => {
    const response = await getAllProfileCampaigns(user?.id, user?.token);
    if (response.ok) {
      const data = await response.json();
      if (data) {
        setProfileCampaigns(data);
        setLoading(false);
      }
    }
  };
  return (
    <Container>
      <ProfileNgoProgress profile={ngoProfile} />
      <Card sx={{ mb: 3 }}>
        <Card
          sx={{
            height: { xs: 170, sm: 300, md: 400 },
          }}
        >
          <div className="cover-image">
            <img src={ngoProfile?.cover_image} alt="Cover" />
          </div>
        </Card>
        <IconButton
          onClick={handleOpen}
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "white",
            zIndex: 999,
            position: "absolute",
            top: "15px",
            right: "15px",
            transition: "all 0.5 ease",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          <EditIcon />
        </IconButton>

        <ProfileCover profile={ngoProfile} />
      </Card>
      <ProfileSection profile={ngoProfile} campaigns={profileCampaigns} />

      <RegisterSuccess
        open={openMessage}
        onClose={() => setOpenMessage(false)}
      />
      <NgoImageEditModel
        open={open}
        handleClose={handleClose}
        profile={ngoProfile}
        label={"cover_image"}
      />
    </Container>
  );
}
