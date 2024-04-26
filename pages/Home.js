"use client";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { homeStories } from "@/_mock/SuccessStories";
import HomeHero from "@/sections/home/HomeHero";
import HomeStartFundraiser from "@/sections/home/HomeStartFundraiser";
import HomeDonate from "@/sections/home/HomeDonate";
import DonationSection from "@/sections/home/DonationSection";
import HomeHowitworks from "@/sections/home/HomeHowitworks";
import HomeFeatures from "@/sections/home/HomeFeatures";
import HomeStatistics from "@/sections/home/HomeStatistics";
import VolunteerSection from "@/sections/home/VolunteerSection";
import { HomeCallBack } from "@/sections/home";
import HomeSuccessStories from "@/sections/home/HomeSuccessStories";
import HomeFaq from "@/sections/home/HomeFaq";
import HomePartners from "@/sections/home/HomePartners";

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function Home() {
  return (
    <Box>
      <ContentStyle>
        <Container maxWidth={"lg"}>
          <HomeHero sx={{ width: "100%" }} />
        </Container>

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <HomeStartFundraiser />
          </Container>
        </div>

        <Container maxWidth={"lg"}>
          <Typography
            variant="h2"
            sx={{ mt: 4, textAlign: { xs: "center", sm: "left" } }}
          >
            Our Feature Campaigns
          </Typography>
          <Typography
            sx={{
              fontSize: "21px",
              color: "#777",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Trusting the Journey, Celebrating the Success
            <br />
          </Typography>
          {/* <HomefeaturedCard list={filteredHomeCampaigns} /> */}
        </Container>

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <HomeDonate />
          </Container>
        </div>

        <Container maxWidth={"lg"}>
          <DonationSection />
        </Container>

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <HomeHowitworks />
          </Container>
        </div>

        {/* <Container maxWidth={"lg"}>
        <FormProvider methods={methods}>
            <HomeSelectCategory />
          </FormProvider>

        <HomeCampaignList
            campaigns={filteredSixCampaigns}
            loading={!campaigns.length && isDefault}
          />

        <Box sx={{ textAlign: "center", m: 2, mt: 4 }}>
          <Button
              id="homepage_morefundraisers_btn"
              to="/campaign"
              component={RouterLink}
              variant="contained"
              size="large"
              sx={{ fontWeight: "500", fontSize: "16px" }}
            >
              More Fundraisers
            </Button>
        </Box>
      </Container> */}

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <HomeFeatures />
          </Container>
        </div>

        <HomeStatistics />

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <VolunteerSection />
          </Container>
        </div>

        <Container maxWidth={"lg"}>
          <HomeCallBack />
        </Container>

        {/* <div style={{ background: "#fafafa" }}>
        <Container maxWidth={"lg"}>
          // {/* <HomeBlogs title="Latest Blogs" list={campaigns} />
          //   <Box sx={{ textAlign: 'center', m: 1, pb: 4 }}>
          //     <Button
          //       id="b_homepage_moreblogs"
          //       href={BLOG_PATH.root}
          //       target="_default"
          //       variant="contained"
          //       size="large"
          //       sx={{ fontWeight: '500', fontSize: '16px' }}
          //     >
          //       More Blogs
          //     </Button>
          //   </Box> 
        </Container>
      </div> */}

        <div style={{ paddingBottom: "0.3rem" }}>
          <Container maxWidth={"lg"}>
            <HomeSuccessStories stories={homeStories} />
          </Container>
        </div>

        <div style={{ background: "#fafafa" }}>
          <Container maxWidth={"lg"}>
            <HomeFaq />
          </Container>
        </div>

        <Container maxWidth={"lg"}>
          <HomePartners />
        </Container>
        {/* <HomeCallSupport /> */}
      </ContentStyle>
    </Box>
  );
}
