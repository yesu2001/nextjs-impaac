import { useEffect, useState } from "react";
// @mui
import { Box, Link, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
          pathname={pathname}
        />
      ))}
    </Stack>
  );
}

function MenuDesktopItem({ item, pathname }) {
  const { id, title, path } = item;
  return (
    <LinkStyle
      href={path}
      id={id}
      sx={{
        color: pathname === path ? "primary.main" : "common.black",
      }}
    >
      {title}
    </LinkStyle>
  );
}
