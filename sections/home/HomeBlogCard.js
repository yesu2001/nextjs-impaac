import { Box, Card, Grid, Link, Typography } from '@mui/material';
import Markdown from '../../components/Markdown';

export default function HomeBlogCard({ blog }) {

  return (
    <Link href={blog.link} target="_blank">

      <Card sx={{ position: "relative", borderRadius: "20px", minHeight: 450, color: "#5D5D5D", display: "flex", textAlign: "left", flexDirection: "column", boxShadow: "none" }} href="https://www.impaac.org">
        <Box component='img' src={blog.jetpack_featured_media_url} sx={{ borderRadius: "20px" }} />
        <Box sx={{ background: "white", width: "95%", margin: "auto", padding: "1rem", fontFamily: "Jost", borderRadius: "20px", bottom: 4, right: 0, left: 0, position: "absolute", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <Grid container>
            <Grid item>
              <Typography variant="body2" sx={{ paddingRight: "7px" }}>
                {/* {formatDistanceToNowStrict(new Date(blog.date))} */}
                Fundraisers and Campaigns
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='h6' sx={{ padding: "5px 0", fontSize: "19px", fontWeight: "600", color: "#3d3d3d", letterSpacing: "-0.04rem", textTransform: "uppercase", height: 60, overflow: "hidden" }} gutterBottom>

            <Markdown children={blog?.title.rendered} />

          </Typography>
          <Typography variant="body2" sx={{ height: 94.5, overflow: "hidden" }} gutterBottom>
            <Markdown children={blog?.excerpt.rendered} />
          </Typography>
        </Box>
      </Card>

    </Link>
  )
}

