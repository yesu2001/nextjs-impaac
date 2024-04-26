import React from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "@/components/Image";
import congratsPic from "@/assets/congrats.png";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  border: 0,
  borderRadius: 2,
  outline: "none",
  overflow: "hidden",
  boxShadow: 24,
  // width: {
  //   xs: '90%',
  //   sm: '60%',
  //   md: 'auto',
  // },
};

export default function RegisterSuccess({ open, onClose }) {
  const route = useRouter();

  const goToCampaign = () => route.push("/fundraisers/new");
  const goToDashboard = () => onClose();

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Image src={congratsPic} />
        <IconButton
          onClick={onClose}
          sx={{
            background: "rgba(0,0,0,0.6)",
            position: "absolute",
            top: 2,
            right: 2,
          }}
        >
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography sx={{ mb: 2, textAlign: "center" }}>
          You have successfully registered.
        </Typography>
        <Box
          sx={{
            pb: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 0, md: 4 },
          }}
        >
          <Button onClick={goToCampaign}>Create Campaign</Button>
          <Button onClick={goToDashboard}>Explore Dashboard</Button>
        </Box>
      </Box>
    </Modal>
  );
}
