import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";
import { TITLE, DESCRIPTION } from "@/_mock/title";
import { SocialLink } from "@/_mock/socialLink";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", description = "", image, meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Impaac Foundation`}</title>
        {meta}

        <meta name="description" content={description} />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Impaac Foundation" />
        <meta property="og:description" content={description} />
        <meta property="og:url" href={window.location.href} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="article:publisher" content={SocialLink.facebookLink} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@impaacidea" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@impaacidea" />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
