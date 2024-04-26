import { useEffect, useState } from "react";
// @mui
import { Card, Container, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// hooks
import useAuth from "@/hooks/useAuth";
import useSettings from "@/hooks/useSettings";
import useResponsive from "@/hooks/useResponsive";
// components
import { ProfileCover, ProfileUserProgress } from "@/components/Profile";
// sections
import { ProfileSectionUser } from "@/sections/@dashboard/user/profile";
import UserImageEditModel from "@/sections/@dashboard/user/create/UserImageEditModel";
import { UserDefaultValue } from "@/sections/@dashboard/user/create/UserDefaultValue";
import RegisterSuccess from "@/sections/auth/register/RegisterSuccess";
// helper
import { getAllProfileCampaigns } from "@/helper/campaign";

export default function UserProfile() {
  const { themeStretch } = useSettings();
  const [showProfile, setShowProfile] = useState(true);
  const isMobile = useResponsive("down", "md");
  const [openMessage, setOpenMessage] = useState(false);

  const { user, userProfile } = useAuth();
  const kycVerified = user?.kycStatus === "verified";
  const [profileCampaigns, setProfileCampaigns] = useState([]);

  console.log(user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleHide = () => setShowProfile(false);

  // for analysing the percentage of completion
  const data = UserDefaultValue(userProfile);
  const analysedData = fitleraray();
  const fieldCount = Object.values(analysedData);
  const arr1 = fieldCount?.filter(
    (field) => field !== undefined && field !== ""
  );
  const percent = (arr1?.length / fieldCount?.length) * 100;

  function fitleraray() {
    let newArray;
    if (data?.user_document_name === "pan_card") {
      const asArray = Object.entries(data);
      const filtered = asArray.filter((item) => item);
      const arr1 = filtered?.filter(
        (item) => !item.includes("user_document_back")
      );
      newArray = Object.fromEntries(arr1);
    } else {
      newArray = Object.values(UserDefaultValue(userProfile));
    }
    return newArray;
  }

  useEffect(() => {
    if (window.screen.width > 500) {
      window.scrollTo(0, 320);
    } else {
      window.scrollTo(0, 200);
    }
  }, []);

  useEffect(() => {
    console.log(userProfile);
    preload();
    checkIsNewUser();
  }, [user]);

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
      }
    }
  };
  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      {showProfile && (
        <ProfileUserProgress
          profile={userProfile}
          percent={percent}
          handleHide={handleHide}
        />
      )}
      <Card sx={{ mb: 3 }}>
        <Card
          sx={{
            height: { xs: 180, sm: 300, md: 400 },
          }}
        >
          <div className="cover-image">
            <img
              src={user?.cover_image || userProfile?.cover_image}
              alt="Cover"
            />
          </div>
        </Card>
        <IconButton
          onClick={handleOpen}
          sx={{
            backgroundColor: "black",
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
        <ProfileCover profile={userProfile} />
      </Card>
      <ProfileSectionUser profile={userProfile} campaigns={profileCampaigns} />
      <RegisterSuccess
        open={openMessage}
        onClose={() => setOpenMessage(false)}
      />

      <UserImageEditModel
        open={open}
        handleClose={handleClose}
        profile={userProfile}
        label={"cover_image"}
      />
    </Container>
  );
}
