import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
// @mui
import {
  Avatar,
  Divider,
  Box,
  Button,
  Card,
  Grid,
  Link,
  MenuItem,
  Stack,
  Typography,
  Tooltip,
  ListItem,
  Modal,
  IconButton,
  Dialog,
  TextField,
} from "@mui/material";
import { read, utils, writeFileXLSX } from "xlsx";
import { useTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
// components
import ConfirmDialog from "../../../components/ConfirmDialog";
import Image from "next/image";
import { TableMoreMenu } from "../../../components/table";
import useToggle from "../../../hooks/useToggle";
import { getRandomSoftColor } from "../../../utils/getRandomColor";
import { getCampaignListHelper } from "../../../helper/donor";
import defaultImage from "/assets/no_image1 (2).jpg";
// ----------------------------------------------------------------------

CampaignItem.propTypes = {
  row: PropTypes.object,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "70%", md: "400px", lg: "450px", xl: "550px" },
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  pt: 0,
  borderRadius: 2,
  outline: "none",
};

// ----------------------------------------------------------------

export default function CampaignItem({
  row,
  onEditRow,
  onViewRow,
  onDeleteRow,
  handleWithdrawalPage,
}) {
  const theme = useTheme();
  const {
    title,
    gallery,
    imageURL,
    createdAt,
    status,
    total_collect_amount: collectAmount,
    settled_amount,
    target_amount,
  } = row;

  const {
    toggle: openConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();
  const [openMenu, setOpenMenuActions] = useState(null);
  const [openDonors, setOpenDonors] = useState(false);
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    preloadList();
  }, [row]);

  const preloadList = () => {
    getCampaignListHelper(row?.id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDonorList(data);
      }
    });
  };

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const onOpenDonors = () => setOpenDonors(true);
  const handleCloseDonors = () => setOpenDonors(false);

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        m: 2,
        backgroundColor: status === "deleted" ? "#f8f9fa" : "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1,
        }}
      >
        <Box sx={{ flex: 0.25, width: { xs: "100%", sm: 200 }, height: 200 }}>
          <Image
            disabledEffect
            alt={title}
            src={gallery[0]?.preview || defaultImage}
            height={100}
            width={100}
            objectFit="contain"
            objectPosition="center"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "100%",
              mr: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "space-around",
            ml: 2,
          }}
        >
          <Link
            variant="h4"
            underline="none"
            onClick={onViewRow}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="h5"
              sx={{ width: "97%", textTransform: "capitalize" }}
            >
              {title}
            </Typography>
          </Link>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
          >
            <Box
              sx={{ flex: 0.5, display: "flex", alignItems: "center", gap: 2 }}
            >
              <Box
                sx={{
                  flex: 0.5,
                }}
              >
                <Typography sx={{ flex: 0.4, fontSize: 20 }}>
                  {target_amount?.toLocaleString() || 0}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ flex: 0.6, textAlign: "left", color: "gray" }}
                >
                  Target Amount
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 0.5,
                }}
              >
                <Typography sx={{ flex: 0.4, fontSize: 20 }}>
                  {collectAmount?.toLocaleString() || 0}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ flex: 0.6, textAlign: "left", color: "gray" }}
                >
                  Raised Amount
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ flex: 0.5, display: "flex", alignItems: "center", gap: 2 }}
            >
              <Box
                sx={{
                  flex: 0.5,
                }}
              >
                <Typography sx={{ flex: 0.4, fontSize: 20 }}>
                  {settled_amount?.toLocaleString() || 0}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ flex: 0.6, textAlign: "left", color: "gray" }}
                >
                  Withdrawal Amount
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 0.5,
                }}
              >
                <Typography sx={{ flex: 0.4, fontSize: 20 }}>
                  {row?.donors?.length?.toLocaleString() || 0}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ flex: 0.6, textAlign: "left", color: "gray" }}
                >
                  Donors
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction={{ xs: "row", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={onEditRow}
              disabled={status === "deleted"}
            >
              Edit Campaign
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleWithdrawalPage}
              disabled={status === "deleted" || collectAmount < 100}
            >
              Withdraw
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            flex: 0.1,
            position: "absolute",
            top: 4,
            right: 5,
            background: { xs: "#F4F4F4", sm: "transparent" },
            borderRadius: "50%",
            px: 1,
            pt: 0.5,
            cursor: "pointer",
          }}
        >
          <TableMoreMenu
            open={openMenu}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            actions={
              <>
                <MenuItem
                  onClick={() => {
                    onOpenDonors();
                    handleCloseMenu();
                  }}
                >
                  Show Donors
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    onOpenConfirm();
                    handleCloseMenu();
                  }}
                  sx={{ color: "error.main" }}
                >
                  Deactivate
                </MenuItem>
              </>
            }
          />

          <DonorsModal
            open={openDonors}
            onClose={handleCloseDonors}
            donorsCount={row?.donors?.length}
            donorList={donorList}
          />

          <ConfirmDialog
            open={openConfirm}
            onClose={onCloseConfirm}
            title={
              <Typography gutterBottom>
                Are you sure you want to deactivate{" "}
                <strong>{title.substring(0, 20)}</strong>?
              </Typography>
            }
            actions={
              <>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={onCloseConfirm}
                >
                  Cancel
                </Button>
                <Button
                  sx={{
                    backgroundColor: red[400],
                    color: "white",
                    "&:hover": {
                      backgroundColor: red[600],
                    },
                  }}
                  onClick={onDeleteRow}
                >
                  Deactivate
                </Button>
              </>
            }
          />
        </Box>
      </Box>
    </Card>
  );
}

const DonorsModal = ({ open, onClose, donorsCount, donorList }) => {
  const [openMessage, setOpenMessage] = useState(false);
  const handleOpenMessage = () => {
    setOpenMessage(true);
  };
  const handleCloseMessage = () => {
    setOpenMessage(false);
  };
  const newList = donorList.map(({ name, amount_in_inr, isAnonymous }) =>
    isAnonymous ? null : { name, amount_in_inr }
  );
  const donorData = newList.filter((donor) => donor !== null);

  const downloadFile = useCallback(() => {
    const ws = utils.json_to_sheet(donorData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "DonorsData.xlsx");
  }, [donorData]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ margin: 0, padding: 0, my: 2, pl: 2 }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {donorsCount} Donors
          </Typography>
          <Box>
            <Tooltip title="Export Donors Info" onClick={downloadFile}>
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Send Thanks to all donors"
              sx={{ mr: 4 }}
              onClick={handleOpenMessage}
            >
              <IconButton>
                <SendIcon />
              </IconButton>
            </Tooltip>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <SendMessageDialog
              open={openMessage}
              onClose={handleCloseMessage}
            />
          </Box>
        </Stack>
        <Box sx={{ height: "70vh", overflowY: "scroll", pt: 2 }}>
          {donorList.map((donor, index) => {
            const {
              name,
              isAnonymous,
              amount,
              currency_code: currencyCode,
              amount_in_inr,
            } = donor;

            return (
              <div key={index}>
                <ListItem
                  disableGutters
                  sx={{
                    alignItems: "flex-start",
                    flexDirection: { sm: "row" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: { xs: 2, sm: 0 },
                      minWidth: { xs: 30, md: 90 },
                      textAlign: { sm: "center" },
                      flexDirection: { sm: "column" },
                    }}
                  >
                    <Avatar
                      // src={avatarUrl}
                      sx={{
                        mr: 2,
                        mb: { sm: 2 },
                        width: { md: 40 },
                        height: { md: 40 },
                        backgroundColor: getRandomSoftColor(),
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 24,
                        textTransform: "capitalize",
                      }}
                    >
                      {isAnonymous ? "Anonymous".charAt(0) : name.charAt(0)}
                    </Avatar>
                  </Box>

                  <div>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      sx={{ textTransform: "capitalize" }}
                    >
                      {isAnonymous ? "Anonymous" : name}
                    </Typography>
                    <Typography variant="body2">
                      {"INR "}
                      {donor?.amount_in_inr ? amount_in_inr : amount}
                    </Typography>
                  </div>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
};

const SendMessageDialog = ({ open, onClose }) => {
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
      <Box
        sx={{
          width: { xs: 300, sm: 450 },
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 3 },
          gap: 2,
        }}
      >
        <CloseIcon
          onClick={onClose}
          sx={{ cursor: "pointer", position: "absolute", top: 5, right: 5 }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Send message to all donors
        </Typography>
        <TextField placeholder="Title" />
        <TextField
          multiline
          rows={5}
          placeholder="Type your mesage to donors"
        />
        <Button
          variant="contained"
          sx={{
            ml: "auto",
            // my: { xs: 1, sm: 3 },
            width: { xs: "40%", sm: "25%" },
            height: 40,
          }}
        >
          Send
        </Button>
      </Box>
    </Dialog>
  );
};
