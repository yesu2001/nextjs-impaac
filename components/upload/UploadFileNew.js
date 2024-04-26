import React, { useRef, useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";
// import Iconify from '../Iconify';
import { UploadImage } from "./UploadOnCloud";

export default function UploadFileNew({
  isUploaded,
  setValue,
  name,
  label,
  path,
  width,
  helperText,
  accept,
  disabled,
}) {
  const inputRef = useRef(null);
  const [uploadState, setUploadState] = useState({
    uploading: false,
    uploaded: isUploaded || false,
    progress: undefined,
  });

  const handleInput = () => {
    inputRef.current.click();
  };

  const handleDelete = () => {
    setUploadState({
      ...uploadState,
      uploaded: false,
    });
  };

  const onChange = useCallback(
    async (e) => {
      const file = e.target.files[0];

      if (file) {
        UploadImage(file, path, (progress) => {
          // console.log(`Upload progress: ${progress}%`);
          setUploadState((prevState) => ({
            ...prevState,
            uploading: true,
            progress,
          }));
        })
          .then((downloadURL) => {
            setValue(name, downloadURL);
            setUploadState({
              uploading: false,
              uploaded: true,
              progress: undefined,
            });
            // console.log(name, downloadURL);
            setValue(name, downloadURL);
          })
          .catch((error) => {
            console.error("Upload failed:", error);
          });
      }
    },
    [setValue, name, path]
  );

  const { uploading, uploaded, progress } = uploadState;

  return (
    <Box sx={{ flex: width }}>
      <Box
        sx={{
          cursor: !uploading && !uploaded && "pointer",
          display: "flex",
          borderWidth: "1px",
          borderStyle: uploaded ? "solid" : "dotted",
          borderColor: uploaded ? green[800] : blue[700],
          borderRadius: 1,
          px: 2,
          py: "5px",
        }}
      >
        {!uploading && !uploaded && (
          <Box
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleInput}
          >
            <Iconify icon="eva:file-add-outline" sx={{ color: blue[700] }} />
            <Typography variant="caption" sx={{ color: blue[700], mx: 2 }}>
              {label}
            </Typography>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={onChange}
              name={name}
              accept={accept}
            />
          </Box>
        )}
        {uploading && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 1,
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ width: "100%", color: blue[700], mx: 2 }}
            >
              Uploading File
            </Typography>
            <Box sx={{ mt: 1, width: "100%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </Box>
        )}
        {uploaded && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: green[800],
              width: "100%",
            }}
          >
            <>
              <Iconify icon="eva:checkmark-outline" />
              <Typography variant="caption" sx={{ mx: 2 }}>
                File Already Uploaded
              </Typography>
            </>
            {!disabled && (
              <Iconify
                icon="eva:close-circle-outline"
                sx={{ cursor: "pointer" }}
                onClick={handleDelete}
              />
            )}
          </Box>
        )}
      </Box>
      {helperText && (
        <Typography variant="caption" sx={{ width: "100%", ml: 1 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
}
