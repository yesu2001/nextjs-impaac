import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Stack,
  Tooltip,
} from "@mui/material";
// Components
import Markdown from "@/components/Markdown";
import CampaignViewCarousel from "./CampaignViewCarousel";
import CampiagnViewCommentList from "./CampaignViewCommentList";
import CampaignViewDonorList from "./CampaignViewDonorList";
import CampaignViewFaqsList from "./CampaignViewFaqsList";
import CampaignViewPayment from "./CampaignViewPayment";
import CampaignViewReport from "./CampaignViewReport";
import CampaignViewTags from "./CampaignViewTags";
import CampaignViewVerifyDetail from "./CampaignViewVerifyDetail";
import CampaignViewTitle from "./CampaignViewTitle";
import PaymentPopUp from "../campaign-payment/PaymentPopUp";
import useResponsive from "@/hooks/useResponsive";
import CustomCard from "@/components/card/CustomCard";
// import Image from "@/components/Image";
import CampaignClosed from "./CampaignClosed";
import { smaDonors } from "@/_mock/smaDonors";
import { smaComments } from "@/_mock/smaMockComments";
import defaultImage from "/assets/no_image.jpg";

function CampaignViewSection({ campaign, donorList, isOwnCampaign, isNgo }) {
  const descriptionLength = campaign?.description?.length;

  const [showMore, setShowMore] = useState(false);
  const [value, setValue] = useState("1");
  const showoreisTrue = showMore ? "Show less" : "Show more";

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openPopup, setOpenPopup] = useState(campaign?.status === "deleted");

  const isMobile = useResponsive("down", "md");

  const commentList = [];

  const [totalComments, setTotalComments] = useState([]);
  const [totalDonors, setTotalDonors] = useState([]);

  useEffect(() => {
    const mergedComments =
      campaign?.display_category === "sma" && campaign?._id in smaComments
        ? [...campaign?.comments, ...smaComments[campaign?._id]]
        : campaign?.comments;

    const sortByCreatedAt = (commentsArray) => {
      return commentsArray.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    };
    if (mergedComments) {
      const sortedComments = sortByCreatedAt([...mergedComments]);
      setTotalComments(sortedComments);
    }
    setTotalComments(mergedComments);

    const mergedDonors =
      campaign?.display_category === "sma" && campaign._id in smaDonors
        ? [...donorList, ...smaDonors[campaign?._id]]
        : donorList;

    setTotalDonors(mergedDonors);
  }, [campaign, donorList]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <div>
      <Box>
        {(campaign?.status === "deleted" ||
          campaign?.status === "deactivated") && <CampaignClosed />}
        <CampaignViewTitle campaign={campaign} isOwnCampaign={isOwnCampaign} />
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid container justifyContent={"center"} mb={4}>
            <Grid item xs={12} md={6} lg={5}>
              <CampaignViewTags
                campaign={campaign}
                donorList={totalDonors}
                commentList={totalComments}
              />
              {campaign?.gallery?.length < 1 ? (
                <Box sx={{ position: "relative" }}>
                  <Image
                    src={defaultImage}
                    alt={"default no image"}
                    height={500}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              ) : (
                <CampaignViewCarousel campaign={campaign} />
              )}
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
              <CampaignViewPayment
                campaign={campaign}
                isOwnCampaign={isOwnCampaign}
                donorList={totalDonors}
              />
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  m: 2,
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1"> Tax Benefit</Typography>
                <Tooltip title="Donations through Impaac Foundation, registered under section 80G of India's Income Tax Act, 1961 are tax-deductible.">
                  <Button variant="outlined" sx={{ ml: 1 }}>
                    80G
                  </Button>
                </Tooltip>
              </Stack>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                All the donations on this campaign comes under 80G Tax Benefit.
              </Typography>
              {/* <Box sx={{ ml: { xs: 0, md: 2 }, mt: 2 }}>
                <CampaignViewTopDonors />
              </Box> */}
            </Grid>
          </Grid>

          <Card sx={{ mt: 2, mb: 3 }}>
            <Grid container>
              <Grid item xs={12} md={6} lg={7}>
                <CustomCard
                  title={`Description`}
                  customColor="white"
                  sx={{ m: 0 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      height:
                        descriptionLength <= 1200 || showMore
                          ? "100%"
                          : "500px",
                      overflow: "auto",
                    }}
                  >
                    <Markdown children={campaign?.description} />
                  </Box>
                  {/* <Box
                    sx={{
                      mt: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {descriptionLength > 1200 && (
                      <Button
                        variant="text"
                        size="large"
                        onClick={() => setShowMore(!showMore)}
                        sx={{ borderRadius: 1, p: 1, m: 2 }}
                      >
                        {showMore ? 'Show Less' : 'Show More'}
                      </Button>
                    )}
                  </Box> */}
                </CustomCard>
                {!isMobile && (
                  <CustomCard
                    id="comments"
                    title={`Comments`}
                    customColor="white"
                    sx={{ mt: 4, ml: 0 }}
                  >
                    <CampiagnViewCommentList
                      campaign={campaign}
                      commentsList={totalComments}
                    />
                  </CustomCard>
                )}
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <CampaignViewVerifyDetail campaign={campaign} isNgo={isNgo} />
                {totalDonors?.length !== 0 && (
                  <CampaignViewDonorList
                    donorList={totalDonors}
                    campaign={campaign}
                  />
                )}
                {isMobile && (
                  <CustomCard
                    id="comments"
                    title={`Comments`}
                    customColor="white"
                    sx={{ mt: 4, ml: 0 }}
                  >
                    <CampiagnViewCommentList
                      campaign={campaign}
                      commentsList={totalComments}
                    />
                  </CustomCard>
                )}
                <CampaignViewFaqsList />
                <CampaignViewReport />
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
      {/* )} */}
      {isMobile && campaign?.status !== "deleted" && (
        <>
          <Box
            className="donatenow-container"
            sx={{ height: "100px", width: "100%", background: "white" }}
          >
            <Button
              className="donateBtn"
              // sx={{ background: '#D32F2F', py: 2 }}
              disabled={campaign?.status === "deleted"}
              variant="contained"
              size="large"
              onClick={handleOpenConfirm}
            >
              DONATE NOW
            </Button>
          </Box>
          <PaymentPopUp
            open={openConfirm}
            onClose={handleCloseConfirm}
            campaign={campaign}
          />
        </>
      )}
    </div>
  );
}

export default CampaignViewSection;
