"use client";
import { m } from "framer-motion";
import PropTypes from "prop-types";
import Image from "next/image";
// @mui
import { Box, Card, Stack, Typography, Divider } from "@mui/material";
// _mock_
import { _carouselsMembers } from "@/_mock/_teams";
// components
import { varFade } from "@/components/animate";
// import Image from "@/components/Image";
import SocialsButton from "@/components/SocialsButton";
import useResponsive from "@/hooks/useResponsive";

// ----------------------------------------------------------------------

export default function AboutTeam() {
  return (
    <Box
      sx={{
        background: "#fafafa",
        py: { md: 10, xs: 7 },
        textAlign: "center",
        px: 2,
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          component="p"
          variant="overline"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Dream team
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Great team is the key
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: "auto",
            maxWidth: 630,
            color: (theme) =>
              theme.palette.mode === "light"
                ? "text.secondary"
                : "common.white",
            mb: 3,
          }}
        >
          Impaac's young and enthusiastic support team is available 24*7 to
          assist you from anywhere and anytime
        </Typography>
      </m.div>

      <Box sx={{ position: "relative", display: "flex", flexWrap: "wrap" }}>
        {_carouselsMembers.map((member) => (
          <Box
            key={member.id}
            component={m.div}
            variants={varFade().in}
            sx={{ px: 1.5, py: 1.5, width: { md: "25%", xs: "100%" } }}
          >
            <MemberCard member={member} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    intro: PropTypes.string,
    links: PropTypes.string,
  }),
};

function MemberCard({ member }) {
  const isMobile = useResponsive("down", "sm");
  const { name, role, avatar, intro, links } = member;
  return (
    <Card key={name} sx={{ p: 1.6, height: "100%" }}>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
        {role}
      </Typography>
      {/* <Image alt={name} src={avatar} ratio="1/1" sx={{ borderRadius: 1.5 }} /> */}
      <Image
        alt={name}
        src={avatar}
        objectFit="contain"
        height={isMobile ? 300 : 250}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <Box sx={{ py: 1, display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            color: "#282828",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: 0,
            textAlign: "justify",
            textTransform: "capitalize",
          }}
        >
          {intro}
        </Typography>
      </Box>
      {links && (
        <>
          <Divider />
          <Stack
            alignItems="center"
            sx={{ mt: 1.2, borderRadius: "8px", background: "whitesmoke" }}
          >
            <SocialsButton sx={{ color: "action.active" }} links={links} />
          </Stack>
        </>
      )}
    </Card>
  );
}
