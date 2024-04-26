import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../components/card/CustomCard";

function CampaignViewReport() {
  return (
    <CustomCard>
      <Typography>
        If something isn't right, we will work with you to ensure no misuse
        occurs.
      </Typography>
      <Stack direction="row" justifyContent="center">
        <Link href={"/contact"} target="_blank">
          Report this cause
        </Link>
      </Stack>
    </CustomCard>
  );
}

export default CampaignViewReport;
