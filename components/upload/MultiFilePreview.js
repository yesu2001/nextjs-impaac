import PropTypes from "prop-types";
import { m, AnimatePresence } from "framer-motion";
// @mui
import {
  List,
  IconButton,
  ListItemText,
  ListItem,
  LinearProgress,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// utils
import { fData } from "@/utils/formatNumber";
import getFileData from "@/utils/getFileData";
//
import Image from "../Image";
import Iconify from "../Iconify";
import { varFade } from "../animate";

// ----------------------------------------------------------------------

MultiFilePreview.propTypes = {
  files: PropTypes.array.isRequired,
  onRemove: PropTypes.func,
  showPreview: PropTypes.bool,
};

export default function MultiFilePreview({
  showPreview = false,
  uploadState,
  files,
  onRemove,
}) {
  const hasFile = files.length > 0;
  return (
    <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
      {uploadState.uploading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 1,
            width: "100%",
          }}
        >
          {/* <Typography variant="subtitle2" sx={{ width: '100%',  mx: 2 }}>
          Uploading File
        </Typography> */}
          <Box sx={{ mt: 1, width: "100%" }}>
            <LinearProgress
              variant="determinate"
              value={uploadState.progress}
            />
          </Box>
        </Box>
      )}
      <AnimatePresence>
        {files.map((file, index) => {
          const { key, name, size, preview, url } = getFileData(file, index);
          if (showPreview) {
            return (
              <ListItem
                key={key}
                component={m.div}
                {...varFade().inRight}
                sx={{
                  p: 0,
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.25,
                  overflow: "hidden",
                  position: "relative",
                  display: "inline-flex",
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Image alt="preview" src={preview || url} ratio="1/1" />

                {onRemove && (
                  <CloseIcon
                    fontSize="small"
                    sx={{
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      color: "white",
                      position: "absolute",
                      top: 2,
                      right: 2,
                      background: "rgba(0,0,0,0.9)",
                      padding: "2px",
                    }}
                    onClick={() => onRemove(file)}
                  />
                )}
              </ListItem>
            );
          }

          return (
            <ListItem
              key={key}
              component={m.div}
              {...varFade().inRight}
              sx={{
                my: 1,
                px: 2,
                py: 0.75,
                borderRadius: 0.75,
                border: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <Iconify
                icon={"eva:file-fill"}
                sx={{ width: 28, height: 28, color: "text.secondary", mr: 2 }}
              />

              <ListItemText
                primary={typeof file === "string" ? file : name}
                secondary={typeof file === "string" ? "" : fData(size || 0)}
                primaryTypographyProps={{ variant: "subtitle2" }}
                secondaryTypographyProps={{ variant: "caption" }}
              />

              {onRemove && (
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => onRemove(file)}
                >
                  <Iconify icon={"eva:close-fill"} />
                </IconButton>
              )}
            </ListItem>
          );
        })}
      </AnimatePresence>
    </List>
  );
}
