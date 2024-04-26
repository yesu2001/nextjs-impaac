import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import LoaderCenterInPage from "../LoaderCenterInPage";
import uuidv4 from "@/utils/uuidv4";
import { UploadIllustration } from "@/assets";
import { UploadImage } from "./UploadOnCloud";
import RejectionFiles from "./RejectionFiles";

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginTop: 3,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
}));

function UploadMultipleFiles({ error = false, accept, maxSize, setValue }) {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    setLoading(true);
    const id = uuidv4();

    const urls = await Promise.all(
      acceptedFiles.map(async (file) => {
        const type = file.type;
        const url = await UploadImage(file, `receipts/${id}`);

        return { type, url };
      })
    );
    setFiles((prevState) => [...prevState, ...urls]);
    setValue((prevState) => [...prevState, ...urls]);
    setLoading(false);
  }, []);

  const handleRemove = (value) => {
    const newFiles = files.filter((item) => item !== value);
    setValue(newFiles);
    setFiles(newFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept,
    minSize: 0,
    maxSize,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {loading && <LoaderCenterInPage />}
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...(isDragReject && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "error.lighter",
            mt: 2,
          }),
          color: error ? "rgba(255,0,0,0.7)" : "",
          borderColor: error ? "#FF7377" : "",
          bgcolor: error ? "rgba(255,0,0,0.1)" : "",
        }}
      >
        <input {...getInputProps()} />
        <UploadIllustration sx={{ width: 80 }} />
        <Typography variant="subtitle1">Upload receipts</Typography>
      </DropZoneStyle>
      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}

      {files?.length > 0 && (
        <Box sx={{ display: "flex", gap: 2 }}>
          {files?.map((file, index) => (
            <div
              key={index}
              style={{
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                width: "60px",
                height: "50px",
                objectFit: "cover",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  right: 2,
                  width: "10px",
                  height: "10px",
                  background: "black",
                  p: 1,
                }}
                onClick={() => handleRemove(file)}
              >
                <CloseIcon
                  fontSize="small"
                  sx={{ color: "white", width: 15 }}
                />
              </IconButton>
              <img
                src={file.url}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt={"Pdf File" || "file"}
              />
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UploadMultipleFiles;
