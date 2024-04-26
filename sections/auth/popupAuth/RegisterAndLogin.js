import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { LoginForm } from "../login";
import { RegisterForm } from "../register";

function RegisterAndLogin({ open, onClose }) {
  const { isAuthenticated } = useAuth();

  const [selectedValue, setSelectedValue] = useState("1");

  useEffect(() => {
    if (isAuthenticated) {
      onClose();
    }
  }, [isAuthenticated]);

  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle />
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            flex: 0.1,
            display: "flex",
            justifyContent: "center",
            itemAligment: "center",
            margin: "0 20px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flex: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selectedValue === "1" ? "#385F96" : "#F4F6F8",
              color: selectedValue === "1" ? "white" : "black",
              py: 1,
              cursor: "pointer",
            }}
            onClick={() => setSelectedValue("1")}
          >
            Register
          </Box>
          <Box
            sx={{
              flex: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selectedValue === "2" ? "#385F96" : "#F4F6F8",
              color: selectedValue === "2" ? "white" : "black",
              py: 1,
              cursor: "pointer",
            }}
            onClick={() => setSelectedValue("2")}
          >
            Login
          </Box>
        </Box>
        <Box padding={2} sx={{ flex: 0.9 }}>
          {selectedValue === "1" && <RegisterForm />}
          {selectedValue === "2" && <LoginForm />}
        </Box>
      </Box>
    </Dialog>
  );
}

export default RegisterAndLogin;
