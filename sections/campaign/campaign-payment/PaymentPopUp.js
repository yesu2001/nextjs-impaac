import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useAuth from "@/hooks/useAuth";
// import { useSelector } from "../../../redux/store";
import PaymentInfo from "./PaymentInfo";
import PaymentLoginBox from "./PaymentLoginBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: 400,
    md: 400,
  },
  // height: {
  //   xs: '100vh',
  //   sm: 'auto',
  //   md: 'auto',
  // },
  bgcolor: "background.paper",
  boxShadow: 16,
  outline: "none",
  border: "none",
  borderRadius: {
    xs: 0,
    sm: 1,
    md: 1,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export default function PaymentPopUp({ open, onClose, campaign }) {
  const { isAuthenticated } = useAuth();
  // const { refresh } = useSelector((state) => state.campaign);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    onClose();
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      transitionDuration={900}
      sx={{
        ".css-1igvg07-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
        },
        ".css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop": {
          background: "rgba(0,0,0,0.8)",
        },
      }}
    >
      <PaymentInfo campaign={campaign} onClose={onClose} />

      {!isAuthenticated && <PaymentLoginBox campaign={campaign} />}
    </Dialog>
  );
}

//   <DialogTitle sx={{ direction: 'rtl', m: 0, p: 0 }}>
//     <IconButton aria-label="close" onClick={onClose}>
//       <CloseIcon />
//     </IconButton>
//   </DialogTitle>

// <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//   <Box sx={style}>
// {/* </Box>
// </Modal> */}
