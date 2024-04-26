"use client";
import { paramCase } from "change-case";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// @mui
import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

import useSettings from "@/hooks/useSettings";
// components
import Iconify from "@/components/Iconify";
import PopUp from "@/components/PopUp";

// sections
import {
  deleteCampaignHelper,
  getAllProfileCampaigns,
} from "@/helper/campaign";
import useAuth from "@/hooks/useAuth";
import CampaignPromotion from "./campaign/CampaignPromotion";
import CampaignItem from "./campaign/CampaignItem";
import NgoOnboarding from "./ngo/create/NgoOnboarding";
import UserOnboarding from "./user/create/UserOnboarding";
import CircularLoader from "@/components/CircularLoader";

// ----------------------------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  height: "98%",
  p: {
    xs: 2,
    md: 4,
  },
  width: {
    xs: "95%",
    md: "80%",
  },
  overflowY: { xs: "scroll", sm: "scroll", md: "auto" },
};

// ----------------------------------------------------------------
export default function CampaignList() {
  const { themeStretch } = useSettings();
  const { user, userProfile } = useAuth();

  const route = useRouter();

  const [kycStatus, setKycStatus] = useState(userProfile?.kyc_status);

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setShowModal(false);
    setOpenForm(true);
  };

  const handleOk = () => setShowModal(false);

  useEffect(() => {
    setLoading(true);
    preload();
  }, [user]);

  const preload = async () => {
    if (!user.id || !user.token) {
      return;
    }
    const response = await getAllProfileCampaigns(user?.id, user?.token);
    if (response.ok) {
      const data = await response.json();
      if (data) {
        setTableData(data);
        setLoading(false);
      }
    }
  };

  const handleViewRow = (row) => {
    const { _id, title } = row;
    route.push(`/fundraisers/${paramCase(row.title)}/${row._id}`);
  };

  const handleEditRow = (row) => {
    route.push(`/fundraisers/${paramCase(row.title)}/${row._id}/edit`);
  };

  const handleDeleteRow = (id) => {
    deleteCampaignHelper(id, user.id, user.token, {
      status: "deactivated",
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        const deleteRow = tableData.filter((row) => row._id !== id);
        setTableData(deleteRow);
      }
    });
  };

  const handleWithdrawalPage = (id) => {
    if (userProfile?.kyc_status === "verified") {
      // navigate(PATH_DASHBOARD.withdrawal.create(id));
      route.push(`/dashboard/withdrawal/create/${id}`);
    } else {
      setShowModal(true);
    }
  };

  return (
    <Container maxWidth={themeStretch ? false : "lg"}>
      <CampaignPromotion />

      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        my={4}
        mx={2}
      >
        <Typography variant="h3">Campaign List</Typography>
        <Button
          id="createcampaign_mycampaigns_dashboard_btn"
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          href={"/fundraisers/new"}
        >
          New Campaign
        </Button>
      </Stack>
      {loading && <CircularLoader />}
      {tableData?.length < 1 && (
        <Typography variant="h6">No Campaigns</Typography>
      )}
      {tableData?.length > 0 &&
        tableData?.map((row, index) => (
          <CampaignItem
            key={row._id}
            row={row}
            onDeleteRow={() => handleDeleteRow(row._id)}
            onViewRow={() => handleViewRow(row)}
            onEditRow={() => handleEditRow(row)}
            handleWithdrawalPage={() => handleWithdrawalPage(row._id)}
          />
        ))}

      <PopUp open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Typography variant="subtitle2">
            {userProfile?.kyc_status === "pending" &&
              "You cannot withdraw the amount.Your KYC is pending."}
            {userProfile?.kyc_status === "submitted" &&
              "You cannot withdraw the amount.Your KYC is in verification."}
            {userProfile?.kyc_status === "rejected" &&
              "You cannot withdraw the amount.Your KYC is Rejected."}
          </Typography>
          <Button
            variant="contained"
            onClick={
              userProfile?.kyc_status === "submitted"
                ? handleOk
                : handleOpenForm
            }
          >
            {userProfile?.kyc_status === "submitted" ? "Ok" : "Open KYC form"}
          </Button>
        </Box>
      </PopUp>
      <Modal open={openForm} onClose={() => setOpenForm(false)}>
        <Box sx={style}>
          {userProfile?.user_role?.ngo ? (
            <NgoOnboarding handleClose={() => setOpenForm(false)} />
          ) : (
            <UserOnboarding handleClose={() => setOpenForm(false)} />
          )}
        </Box>
      </Modal>
    </Container>
  );
}
