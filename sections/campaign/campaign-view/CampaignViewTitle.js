import { useState } from "react";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { green, indigo } from "@mui/material/colors";
import { paramCase } from "change-case";
import { useRouter } from "next/navigation";

const Heading = styled("h1")(({ theme }) => ({
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  textAlign: "center",
  letterSpacing: "-0.04rem",
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: "1.3em",
  textTransform: "capitalize",
}));

const EditButton = styled(Button)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "15px",
  ml: 2,
  textDecoration: "underline",
}));

function CampaignViewTitle({ campaign, isOwnCampaign }) {
  const route = useRouter();
  const [open, setOpen] = useState(true);
  const { title, _id } = campaign;

  const redirectEditPage = () => {
    route.push(`/fundraisers/${paramCase(title)}/${_id}/edit`);
  };

  return (
    <>
      {isOwnCampaign && open && (
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            p: 1,
            borderRadius: 2,
            background: "rgba(160, 185, 255, 0.2)",
          }}
        >
          <Typography sx={{ alignSelf: "center" }} variant="subtitle2">
            Want to edit your campaign?
            <EditButton onClick={redirectEditPage}>Click Here</EditButton>
          </Typography>
          <CloseIcon
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 10, cursor: "pointer" }}
          />
        </Stack>
      )}
      <Heading>{title}</Heading>
      {campaign?.category && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              px: 2,
              color: indigo[600],
              bgcolor: indigo[50],
              borderRadius: 1,
              textTransform: "capitalize",
            }}
          >
            {campaign?.category === "nocategory"
              ? "others"
              : campaign?.category}
          </Typography>
        </Box>
      )}
      {campaign?.user?.name && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 2,
          }}
        >
          <Typography variant="span" sx={{ pr: 0.5 }}>
            Fundraiser by
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: green[500], fontWeight: "bold" }}
          >
            {campaign?.beneficiary_name}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default CampaignViewTitle;
