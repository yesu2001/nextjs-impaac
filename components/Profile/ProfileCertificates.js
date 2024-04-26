import React, { useState } from "react";
import PropTypes from "prop-types";
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Controller, useForm } from 'react-hook-form';
// import { LoadingButton } from '@mui/lab';
import { Icon } from "@iconify/react";
// import { Worker, Viewer } from '@react-pdf-viewer/core';
import "@react-pdf-viewer/core/lib/styles/index.css";

// @mui
// import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Modal,
  Link,
  Card,
  Typography,
  CardHeader,
  Stack,
  IconButton,
  Box,
  Button,
  Tooltip,
  Checkbox,
  FormControlLabel,
  CardMedia,
  Popover,
  useTheme,
  CardContent,
} from "@mui/material";
// import CancelIcon from '@mui/icons-material/Cancel';
import { grey } from "@mui/material/colors";
// components
// import { FormProvider, RHFCheckbox, RHFTextField } from '../hook-form';
import Iconify from "../Iconify";
// import Image from '../Image';
// import { UploadFile } from '../upload';
// import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

// const IconStyle = styled(Iconify)(({ theme }) => ({
//   width: 20,
//   height: 20,
//   marginTop: 1,
//   flexShrink: 0,
//   marginRight: theme.spacing(2),
// }));

// const CustomBtn = styled('div')(({ theme }) => ({
//   background: 'lightgrey',
//   color: 'black',
//   padding: '10px 10px',
// }));

// ----------------------------------------------------------------------

ProfileCertificate.propTypes = {
  profile: PropTypes.object,
};

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   borderRadius: '10px',
//   border: 'none',
//   outline: 'none',
//   boxShadow: 24,
//   p: 4,
// };

// const Imagestyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   width: {
//     xs: '95%',
//     md: '90%',
//     lg: '80%',
//   },
//   height: '90%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
//   borderRadius: '10px',
//   border: 'none',
//   outline: 'none',
//   boxShadow: 24,
//   p: 1,
// };

export default function ProfileCertificate({ profile, ngo }) {
  // const theme = useTheme();
  // const { ngoProfile } = useAuth();
  const [index, setIndex] = useState(0);
  // const [checked, setChecked] = useState(true);
  const [openImage, setOpenImage] = useState(false);
  // const [fileValue, setFileValue] = useState({});

  // const handleOpenImage = (id) => {
  //   setIndex(id);
  //   setOpenImage(true);
  // };
  // const handleCloseImage = () => setOpenImage(false);

  // const handleChange = (event) => {
  //   setChecked(!checked);
  // };
  const certificatesList = [
    {
      name: "Registration",
      file: profile?.reg_cert?.document,
      isVerified: profile?.reg_cert?.is_verified === "verified",
    },
    {
      name: "Pan Card",
      isVerified: profile?.pan_card?.is_verified === "verified",
      file: profile?.pan_card?.document,
    },
    {
      name: "80G",
      isVerified: profile?.eighty_g?.is_verified === "verified",
      file: profile?.eighty_g?.document,
    },

    {
      name: "12A",
      isVerified: profile?.twelve_a?.is_verified === "verified",
      file: profile?.twelve_a?.document,
    },
    {
      name: "CSR",
      isVerified: profile?.csr?.is_verified === "verified",
      file: profile?.csr?.document,
    },
    {
      name: "FCRA",
      isVerified: profile?.fcra?.is_verified === "verified",
      file: profile?.fcra?.document,
    },
  ];

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFileValue(e.target.name, file);
  //   }
  // };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Certificates"
        action={
          <Tooltip title="You can add your Certificates like 12A, 80G claimed.">
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        }
      />

      {!profile?.reg_cert?.document &&
        !profile?.eighty_g?.document &&
        !profile?.twelve_a?.document &&
        !profile?.fcra?.document && (
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: grey[500] }}>
              Complete your profile to view certificates.
            </Typography>
          </CardContent>
        )}
      <Stack spacing={2} sx={{ p: 3 }}>
        {certificatesList.map((certificate, index) => (
          <div key={certificate.name}>
            {certificate.file && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="text" sx={{ flex: 0.8 }}>
                  {certificate.name} Certificate
                </Typography>
                <Icon
                  icon={
                    certificate?.isVerified ? "eva:checkmark-circle-2-fill" : ""
                  }
                  color="green"
                  width="20"
                  height="20"
                  sx={{ flex: 0.1, mx: 1 }}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <a
                    href={certificate.file}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      flex: 0.1,
                      textDecoration: "none",
                      color: "#14C38E",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </a>
                </Box>
              </Box>
            )}
          </div>
        ))}
      </Stack>
    </Card>
  );
}
