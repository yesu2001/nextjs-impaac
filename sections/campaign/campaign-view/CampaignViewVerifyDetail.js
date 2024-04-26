import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Place } from "@mui/icons-material";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
// component
import CustomCard from "@/components/card/CustomCard";
import MyAvatar from "@/components/MyAvatar";
import { getRandomSoftColor } from "@/utils/getRandomColor";
import gpsIcon from "@/assets/gps.png";
import { smaOrganizers } from "@/_mock/smaOrganizers";

export default function CampaignViewVerifyDetail({ campaign, isNgo }) {
  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs={12} md={12} lg={12}>
        <CustomCard title="Campaign Details" sx={{ mt: 0 }}>
          <Box
            sx={{
              ml: 1,
              display: "flex",
              pb: 2,
            }}
          >
            <div>
              <Stack sx={{ my: 2 }} spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      mx: 1,
                      backgroundColor: getRandomSoftColor(),
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                    alt={campaign?.beneficiary_name}
                    src="/broken-image.jpg"
                  />
                  <Box>
                    <Typography variant="body1">
                      {campaign?.beneficiary_name}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      mx: 1,
                      backgroundColor: getRandomSoftColor(),
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                    alt={
                      campaign?.display_category === "sma"
                        ? smaOrganizers[campaign?._id]
                        : campaign?.user?.name
                    }
                    src="/broken-image.jpg"
                  />
                  <Box>
                    <Typography>
                      {campaign?.display_category === "sma"
                        ? smaOrganizers[campaign?._id]
                        : campaign?.user?.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 15, color: "#828282" }}
                    >
                      Organizer
                    </Typography>
                  </Box>
                </Box>
                {campaign?.location && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={gpsIcon}
                      alt={"Gps Icon"}
                      sx={{ width: 40, height: 40, mx: 1 }}
                    />
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      {campaign?.display_category === "sma"
                        ? "India"
                        : campaign?.location}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </div>
          </Box>
        </CustomCard>
      </Grid>
      <span id="comments" />
    </Grid>
  );
}
