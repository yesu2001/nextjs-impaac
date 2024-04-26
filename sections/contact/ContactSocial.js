"use client";
import { Typography, Box, Link } from "@mui/material";
import Iconify from "@/components/Iconify";

export default function ContactSocial() {
  return (
    <div style={{ padding: "2rem 1rem" }}>
      <Typography
        variant="h3"
        sx={{ letterSpacing: "-0.04rem", textAlign: "center" }}
      >
        Get Connected In Social Media
      </Typography>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <Link href="https://www.instagram.com/impaacidea" target="_blank">
          {" "}
          <Iconify
            icon="fa:instagram"
            color="#dd2a7b"
            sx={{ width: 43, height: 43, m: 1 }}
          />{" "}
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCfAtYuP-Zetnipiv4ktv0fg"
          target="_blank"
        >
          {" "}
          <Iconify
            icon="logos:youtube-icon"
            color="#e4405f"
            sx={{ width: 50, height: 50, m: 1 }}
          />{" "}
        </Link>
        <Link
          href="https://www.linkedin.com/company/impaacidea"
          target="_blank"
        >
          {" "}
          <Iconify
            icon="logos:linkedin-icon"
            color="#e4405f"
            sx={{ width: 41, height: 41, m: 1 }}
          />{" "}
        </Link>
        <Link href="hhttps://www.twitter.com/impaacidea" target="_blank">
          {" "}
          <Iconify
            icon="logos:twitter"
            color="#e4405f"
            sx={{ width: 50, height: 50, m: 1 }}
          />{" "}
        </Link>
        <Link href="https://www.facebook.com/impaacidea" target="_blank">
          {" "}
          <Iconify
            icon="logos:facebook"
            sx={{ width: 44, height: 44, m: 1 }}
          />{" "}
        </Link>
      </Box>
    </div>
  );
}
