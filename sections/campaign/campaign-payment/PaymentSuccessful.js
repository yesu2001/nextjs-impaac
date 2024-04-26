"use client";
import { useForm } from "react-hook-form";
// import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Link,
  Stack,
  Typography,
  Container,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useEffect, useState } from "react";
// import { useParams } from "";
import celebration from "/assets/celebration.gif";
import Image from "next/image";
import { getDonorHelper } from "@/helper/donor";
// import { PATH_PAGE } from "../../../routes/paths";
import { PixeEvent } from "@/utils/facebookPixel";
import { GtmEvent } from "@/utils/googleTagManager";
import CampaignCard from "../../../components/CampaignCard";
// import { useDispatch, useSelector } from "../../../redux/store";
// import {
//   filterCampaigns,
//   getCampaign,
//   getCampaigns,
// } from "../../../redux/slices/campaign";
import { HomeFeaturedCard } from "../../home";
import { getCampaignHelper } from "../../../helper/campaign";
import { useParams, useRouter } from "next/navigation";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function CampaignPaymentSuccessful() {
  const { id } = useParams();
  const route = useRouter();
  const [donor, setDonor] = useState({});
  const [campaign, setCampaign] = useState({});
  // const dispatch = useDispatch();
  // const { campaigns, sortBy, filters } = useSelector((state) => state.campaign);
  // const filteredHomeCampaigns = applyFilter(campaigns, sortBy, {
  //   category: "home",
  // });

  // const defaultValues = {
  //   category: filters.category,
  // };

  // const methods = useForm({
  //   defaultValues,
  // });

  // const { watch } = methods;

  // const values = watch();

  // const isDefault = values.category === "All";

  // useEffect(() => {
  //   dispatch(getCampaigns());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(filterCampaigns(values));
  // }, [dispatch, values]);

  useEffect(() => {
    preload();
  }, []);

  const preload = () => {
    getDonorHelper(id).then((data) => {
      if (data.err) {
        console.log(data.err);
      }
      setCampaign({ id: data?.campaign?._id, title: data?.campaign?.title });
      console.log(data);
      setDonor(data);
      PixeEvent("p_donation_done", {
        currency: "INR",
        value: data.amount_in_inr,
      });
      GtmEvent("p_donation_done", data);
    });
  };

  return (
    <RootStyle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 400, p: 3 }}>
            <Image src={celebration} height={400} />
          </Box>
          <Box>
            <Typography textAlign="center" variant="h4" sx={{ m: 2 }}>
              Congratulations!
            </Typography>
            <Typography textAlign="center" variant="h6" sx={{ m: 1 }}>
              Thank you for your contribution of {donor.currency_code}{" "}
              {donor.amount}!
            </Typography>

            <Stack alignItems="center" sx={{ m: 2 }}>
              <Typography variant="p">
                Kindly check your email for certificate
              </Typography>
              {donor.currency_code === "INR" && (
                <Link href={`/donation-claim/${id}`}>
                  <Typography>For 80G Claim Click Here</Typography>
                </Link>
              )}
            </Stack>
            <Link
              href={`/fundraisers/${campaign?.title?.split(" ").join("-")}/${
                campaign?.id
              }`}
              sx={{
                cursor: "pointer",
                display: "flex",
                gap: 1,
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Go to campaign <EastIcon sx={{ cursor: "pointer" }} />
            </Link>
          </Box>
        </Card>
        <Stack>
          <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
            Below are similar campaigns to donate
          </Typography>
          <Container maxWidth={"lg"}>
            {/* <HomeFeaturedCard list={filteredHomeCampaigns} /> */}
          </Container>
        </Stack>
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
function applyFilter(campaigns, sortBy, filters) {
  // FILTER CAMPAIGNS
  if (filters.category !== "All") {
    const filterCam = campaigns.filter(
      (campaign) => campaign.category === filters.category
    );
    const nonFilterCam = campaigns.filter(
      (campaign) => campaign.category !== filters.category
    );

    const filteredEightCamp = filterCam.slice(0, 8);

    const randomCam = filteredEightCamp
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    campaigns = [];
    campaigns = [...randomCam, ...nonFilterCam];
  }

  if (filters.category === "home") {
    const camp = campaigns.filter(
      (campaign) => campaign.displaystatus === "home"
    );
    campaigns = camp;
  }
  const filteredEightCamp = campaigns.slice(0, 8);

  const randomCam = filteredEightCamp
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return randomCam;
}
