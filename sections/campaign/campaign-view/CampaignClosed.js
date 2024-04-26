import React from "react";
import { Box, Typography } from "@mui/material";

export default function CampaignClosed() {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "block",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 999999999999,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: 1,
          overflow: "auto",
          outline: "none",
          p: 3,
          width: { xs: "90%", sm: "350px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "#385F96" }}>
            Campaign Closed
          </Typography>
          <Typography variant="subtitle1" my={1} sx={{ textAlign: "center" }}>
            This fundraiser is not accepting funds anymore!
          </Typography>
          <Typography
            sx={{ fontSize: 15, mt: 1, maxWidth: "390px", textAlign: "center" }}
          >
            Thank you for your constant support , it has helped us meet the
            needs of this fundraiser.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
